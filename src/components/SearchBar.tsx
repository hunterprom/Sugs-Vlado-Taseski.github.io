import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchResult {
  title: string;
  path: string;
  icon: string;
}

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const allPages: SearchResult[] = [
    { title: t("nav.home"), path: "/", icon: "fas fa-home" },
    { title: t("nav.history"), path: "/za-nas", icon: "fas fa-landmark" },
    { title: t("nav.mission"), path: "/misija-vizija", icon: "fas fa-bullseye" },
    { title: t("nav.staff"), path: "/nastavnici", icon: "fas fa-chalkboard-user" },
    { title: t("nav.director"), path: "/direktor", icon: "fas fa-user-tie" },
    { title: t("nav.professional"), path: "/strucna-sluzba", icon: "fas fa-hands-helping" },
    { title: t("nav.sport"), path: "/sport", icon: "fas fa-futbol" },
    { title: t("nav.elektro"), path: "/elektrotehnicka", icon: "fas fa-bolt" },
    { title: t("nav.masinska"), path: "/masinska", icon: "fas fa-cogs" },
    { title: t("nav.soobrakaj"), path: "/soobrakajna", icon: "fas fa-car" },
    { title: t("nav.external"), path: "/vonredni", icon: "fas fa-user-clock" },
    { title: t("nav.enrollResults"), path: "/rezultati", icon: "fas fa-list-ol" },
    { title: t("nav.calculator"), path: "/poeni-kalkulator", icon: "fas fa-calculator" },
    { title: t("nav.allNews"), path: "/novini", icon: "fas fa-newspaper" },
    { title: t("nav.projects"), path: "/proekti", icon: "fas fa-project-diagram" },
    { title: t("nav.contact"), path: "/kontakt", icon: "fas fa-envelope" },
    { title: t("nav.enroll"), path: "/upisi", icon: "fas fa-user-graduate" },
  ];

  // Check for Web Speech API support
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setVoiceSupported(!!SpeechRecognition);
  }, []);

  const filtered = query.trim()
    ? allPages.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
        stopListening();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
        stopListening();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    if (isListening) {
      stopListening();
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    const langMap: Record<string, string> = { mk: "mk-MK", sq: "sq-AL", en: "en-US" };
    recognition.lang = langMap[language] || "mk-MK";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let navigated = false;
    let restartTimeout: ReturnType<typeof setTimeout> | null = null;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event: any) => {
      // Get the latest result
      const lastResult = event.results[event.results.length - 1];
      const transcript = lastResult[0].transcript.trim();
      setQuery(transcript);

      if (lastResult.isFinal && !navigated) {
        const match = allPages.find((p) =>
          p.title.toLowerCase().includes(transcript.toLowerCase()) ||
          transcript.toLowerCase().includes(p.title.toLowerCase())
        );
        if (match) {
          navigated = true;
          recognition.stop();
          setTimeout(() => {
            navigate(match.path);
            setOpen(false);
            setQuery("");
            setIsListening(false);
          }, 600);
        }
      }
    };

    recognition.onerror = (event: any) => {
      // "no-speech" is not a real error, just means silence — allow restart
      if (event.error === "no-speech") return;
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognition.onend = () => {
      // If we haven't navigated and user didn't manually stop, restart
      if (!navigated && recognitionRef.current === recognition) {
        restartTimeout = setTimeout(() => {
          try {
            recognition.start();
          } catch {
            setIsListening(false);
            recognitionRef.current = null;
          }
        }, 300);
      } else {
        setIsListening(false);
        recognitionRef.current = null;
      }
    };

    recognition.start();
    if (!open) setOpen(true);
  }, [isListening, language, open, navigate, allPages, stopListening]);

  const handleSelect = (path: string) => {
    navigate(path);
    setOpen(false);
    setQuery("");
    stopListening();
  };

  return (
    <div ref={containerRef} style={{ position: "relative", display: "flex", alignItems: "center", gap: "4px" }}>
      <button
        type="button"
        className="search-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label="Search"
        style={{
          background: "none",
          border: "1px solid rgba(75, 139, 190, 0.3)",
          borderRadius: "8px",
          padding: "6px 12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#4B8BBE",
          fontSize: "0.85rem",
          transition: "all 0.2s",
        }}
      >
        <i className="fas fa-search"></i>
        <span style={{ opacity: 0.7 }}>Ctrl+K</span>
      </button>

      {voiceSupported && (
        <button
          type="button"
          onClick={startListening}
          aria-label={t("voice.label")}
          className={`voice-nav-btn ${isListening ? "voice-active" : ""}`}
          style={{
            background: isListening ? "#4B8BBE" : "none",
            border: `1px solid ${isListening ? "#4B8BBE" : "rgba(75, 139, 190, 0.3)"}`,
            borderRadius: "8px",
            padding: "6px 10px",
            cursor: "pointer",
            color: isListening ? "white" : "#4B8BBE",
            fontSize: "0.9rem",
            transition: "all 0.3s",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <i className={`fas ${isListening ? "fa-stop" : "fa-microphone"}`}></i>
          {isListening && (
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "8px",
                border: "2px solid #4B8BBE",
                animation: "voice-pulse 1.5s infinite",
                pointerEvents: "none",
              }}
            />
          )}
        </button>
      )}

      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            paddingTop: "120px",
          }}
          onClick={() => { setOpen(false); setQuery(""); stopListening(); }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              width: "90%",
              maxWidth: "500px",
              maxHeight: "450px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "16px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-search" style={{ color: "#4B8BBE" }}></i>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("search.placeholder")}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  width: "100%",
                  color: "#2E6899",
                }}
              />
              {voiceSupported && (
                <button
                  type="button"
                  onClick={startListening}
                  style={{
                    background: isListening ? "#4B8BBE" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: isListening ? "white" : "#4B8BBE",
                    fontSize: "1.1rem",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    flexShrink: 0,
                  }}
                  aria-label={t("voice.label")}
                >
                  <i className={`fas ${isListening ? "fa-stop" : "fa-microphone"}`}></i>
                </button>
              )}
            </div>

            {isListening && (
              <div style={{
                padding: "12px 16px",
                background: "linear-gradient(135deg, #E3F2FD, #f0f7ff)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderBottom: "1px solid #eee",
              }}>
                <div className="voice-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <span style={{ color: "#4B8BBE", fontSize: "0.85rem", fontWeight: 500 }}>
                  {t("voice.listening")}
                </span>
              </div>
            )}

            <div style={{ maxHeight: "320px", overflowY: "auto" }}>
              {filtered.length > 0 ? (
                filtered.map((result) => (
                  <button
                    key={result.path}
                    onClick={() => handleSelect(result.path)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      width: "100%",
                      padding: "12px 16px",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "#2E6899",
                      fontSize: "0.95rem",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f7ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                  >
                    <i className={result.icon} style={{ width: "20px", color: "#4B8BBE" }}></i>
                    {result.title}
                  </button>
                ))
              ) : query.trim() ? (
                <p style={{ padding: "20px", textAlign: "center", color: "#9FBDD6" }}>
                  {t("search.noResults")}
                </p>
              ) : (
                <div style={{ padding: "20px", textAlign: "center", color: "#9FBDD6" }}>
                  <p>{t("search.hint")}</p>
                  {voiceSupported && (
                    <p style={{ marginTop: "8px", fontSize: "0.8rem" }}>
                      <i className="fas fa-microphone" style={{ marginRight: "6px" }}></i>
                      {t("voice.hint")}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
