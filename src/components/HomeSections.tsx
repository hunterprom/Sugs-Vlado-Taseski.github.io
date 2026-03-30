import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect, useRef, useState } from "react";

/* ── Audience Pathways ── */
export const AudiencePathways = () => {
  const { t } = useLanguage();
  const paths = [
    { icon: "fas fa-user-graduate", title: "Идни ученици", desc: "Програми, уписи, виртуелна тура", color: "#00D4FF", link: "/upisi" },
    { icon: "fas fa-users", title: "Родители", desc: "Е-Дневник, распоред, контакт", color: "#10B981", link: "/kontakt" },
    { icon: "fas fa-book-open", title: "Ученици", desc: "LMS, распоред, матура", color: "#FF7043", link: "/rezultati" },
    { icon: "fas fa-chalkboard-user", title: "Наставници", desc: "Ресурси, календар, проекти", color: "#8B5CF6", link: "/proekti" },
  ];
  return (
    <section className="sec-audience">
      <div className="container">
        <div className="sec-header">
          <span className="sec-eyebrow">Брз пристап</span>
          <h2>Изберете ја вашата улога</h2>
        </div>
        <div className="audience-grid">
          {paths.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.1 }}>
              <Link to={p.link} className="audience-card" style={{ "--ac-color": p.color } as React.CSSProperties}>
                <div className="audience-card-icon"><i className={p.icon} /></div>
                <div><h3>{p.title}</h3><p>{p.desc}</p></div>
                <i className="fas fa-arrow-right audience-arrow" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Programs Showcase ── */
export const ProgramsShowcase = () => {
  const { t } = useLanguage();
  const programs = [
    {
      num: "01", title: "Сообраќајна струка", tagline: "Движењето е иднината",
      gradient: "linear-gradient(135deg, #1E40AF, #3B82F6)",
      chips: ["Транспорт и шпедиција", "Железнички сообраќај"],
      features: [{ icon: "fas fa-truck", label: "Логистика" }, { icon: "fas fa-train", label: "Железнички системи" }, { icon: "fas fa-box", label: "Шпедиција" }, { icon: "fas fa-globe-europe", label: "Erasmus+" }],
      link: "/soobrakajna",
    },
    {
      num: "02", title: "Електротехничка струка", tagline: "Поврзи го светот",
      gradient: "linear-gradient(135deg, #0891B2, #00D4FF)",
      chips: ["Електроника и телекомуникации", "Компјутерска техника и автоматика"],
      features: [{ icon: "fas fa-code", label: "Програмирање" }, { icon: "fas fa-wifi", label: "IoT и телеком" }, { icon: "fas fa-flask", label: "Лаборатории" }, { icon: "fas fa-trophy", label: "Натпревари" }],
      link: "/elektrotehnicka",
    },
    {
      num: "03", title: "Машинска струка", tagline: "Создавај со свои раце",
      gradient: "linear-gradient(135deg, #EA580C, #FF7043)",
      chips: ["Машинско-енергетски", "Производно машинство", "Греење и климатизација"],
      features: [{ icon: "fas fa-industry", label: "CNC производство" }, { icon: "fas fa-bolt", label: "Енергетика" }, { icon: "fas fa-hands-helping", label: "Практика" }, { icon: "fas fa-leaf", label: "Зелена енергија" }],
      link: "/masinska",
    },
  ];

  return (
    <section className="sec-programs">
      <div className="container">
        <div className="sec-header">
          <h2>Одбери ја твојата насока</h2>
          <p>Три технички струки кои отвараат врати кон иднината</p>
        </div>
        <div className="programs-list">
          {programs.map((prog, i) => (
            <motion.div key={i} className={`prog-card ${i % 2 !== 0 ? "prog-card-reverse" : ""}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.15 }}>
              <div className="prog-gradient" style={{ background: prog.gradient }}>
                <span className="prog-num">{prog.num}</span>
                <p className="prog-tagline">{prog.tagline}</p>
              </div>
              <div className="prog-content">
                <h3>{prog.title}</h3>
                <div className="prog-chips">
                  {prog.chips.map((c, ci) => <span key={ci} className="prog-chip">{c}</span>)}
                </div>
                <div className="prog-features">
                  {prog.features.map((f, fi) => (
                    <div key={fi} className="prog-feature"><i className={f.icon} /><span>{f.label}</span></div>
                  ))}
                </div>
                <Link to={prog.link} className="prog-link">Дознај повеќе →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Why Us ── */
export const WhyUsSection = () => {
  const items = [
    { icon: "fas fa-medal", title: "Натпревари", desc: "Медали од европски и државни првенства" },
    { icon: "fas fa-globe-europe", title: "Erasmus+", desc: "12+ проекти, мобилност низ Европа" },
    { icon: "fas fa-futbol", title: "Спортски објекти", desc: "Сала, игралиште, теретана" },
    { icon: "fas fa-handshake", title: "Учење преку работа", desc: "Практика во реални компании" },
    { icon: "fas fa-landmark", title: "65+ години", desc: "Генерации успешни техничари" },
  ];
  return (
    <section className="sec-whyus noise-overlay">
      <div className="cin-blob cin-blob-cyan" style={{ top: '-15%', right: '-10%', position: 'absolute', width: 400, height: 400, borderRadius: '50%', filter: 'blur(120px)', background: 'rgba(0,212,255,0.08)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="sec-header sec-header-light">
          <h2>Зошто Владо Тасевски?</h2>
        </div>
        <div className="whyus-grid">
          <div className="whyus-items">
            {items.map((item, i) => (
              <motion.div key={i} className="whyus-item" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.1 }}>
                <div className="whyus-icon"><i className={item.icon} /></div>
                <div><h4>{item.title}</h4><p>{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
          <motion.div className="whyus-img-placeholder" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="whyus-img-inner">
              <i className="fas fa-image" style={{ fontSize: '3rem', opacity: 0.3 }} />
              <span>[ Слика: Ученици во работилница ]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials ── */
export const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Благодарение на практичната настава, веднаш најдов работа.", name: "Марко", dept: "Електротехничка '22" },
    { quote: "Erasmus+ искуството во Германија ми го промени животот.", name: "Ана", dept: "Сообраќајна '23" },
    { quote: "Спортските објекти ми помогнаа да станам државен шампион.", name: "Ива", dept: "Машинска '24" },
  ];
  return (
    <section className="sec-testimonials noise-overlay">
      <div className="testimonials-quote-bg">"</div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="testimonial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.15 }}>
              <span className="testimonial-mark">"</span>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><i className="fas fa-user" /></div>
                <div><strong>{t.name}</strong><span>{t.dept}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Enrollment CTA ── */
export const EnrollmentCTA = () => (
  <section className="sec-enroll-cta">
    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Твојата иднина е тука. Запиши се!
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
        Уписите за 2026/2027 се отворени. Одбери струка и започни.
      </motion.p>
      <motion.div className="enroll-cta-buttons" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        <Link to="/upisi" className="enroll-cta-primary">Започни со уписот →</Link>
        <Link to="/kontakt" className="enroll-cta-secondary">Контактирај нè</Link>
      </motion.div>
      <p className="enroll-cta-contact">
        <i className="fas fa-phone" /> +389 2 240 00 40 • sugs-vladotasevski-skopje@schools.mk
      </p>
    </div>
  </section>
);
