import { useState, useRef, useEffect } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

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
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleSelect = (path: string) => {
    navigate(path);
    setOpen(false);
    setQuery("");
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
          onClick={() => { setOpen(false); setQuery(""); }}
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
            </div>

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
