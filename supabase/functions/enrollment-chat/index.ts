import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Ти си AI агент на СУГС „Владо Тасевски" во Скопје. Специјализиран си за помош при запишување (упис) на ученици.

ИНФОРМАЦИИ ЗА УЧИЛИШТЕТО:
- Полно име: Средно училиште на град Скопје „Владо Тасевски"
- Локација: Скопје, Република Северна Македонија
- Веб-сајт: https://sugsvladotasevski.edu.mk

ДОСТАПНИ СТРУКИ И СМЕРОВИ:

1. СООБРАЌАЈНА СТРУКА:
   - Техничар за транспорт и шпедиција (4 години)
   - Техничар за железнички сообраќај (4 години)
   Предности: Работа во транспортни компании, шпедитерски фирми, железници, логистика.

2. ЕЛЕКТРОТЕХНИЧКА СТРУКА:
   - Електротехничар за електроника и телекомуникации (4 години)
   - Електротехничар за компјутерска техника и автоматика (4 години)
   Предности: ИТ сектор, телекомуникации, програмирање, автоматика, електроника. Голема побарувачка на пазарот на труд.

3. МАШИНСКА СТРУКА:
   - Машинско-енергетски техничар (4 години)
   - Техничар за производно машинство (4 години)
   - Техничар за компјутерско управување (4 години)
   Предности: Енергетика, производство, CNC машини, индустриска автоматизација.

ПРОЦЕС НА УПИС:
- Уписите се вршат преку порталот на Министерството за образование и наука (МОН)
- Потребни документи: Свидетелства од 6-9 одделение, дипломи од натпревари (ако има)
- Бодување: Просек од училиште + резултати од екстерно тестирање
- Максимален број бодови: околу 80-100 (зависи од годината)

ТВОИ ПРАВИЛА:
- Одговарај САМО на македонски јазик
- Биди пријателски, информативен и охрабрувачки
- Ако не знаеш нешто, упати го ученикот на официјалниот сајт или да се јави во училиштето
- Помогни со споредба на струки, објасни предности на секоја
- Давај практични совети за подготовка за упис
- Не измислувај информации - ако не знаеш, кажи
- Никогаш не кажувај дека се викаш Владо или дека си имењак - ти си AI агент на училиштето`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Премногу барања, обидете се повторно подоцна." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Потребно е дополнување на кредити." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Грешка со AI сервисот" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Непозната грешка" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
