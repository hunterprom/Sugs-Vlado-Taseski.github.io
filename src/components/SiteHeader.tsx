import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import schoolLogo from "@/assets/school-logo.png";
import SearchBar from "./SearchBar";

const langLabels: Record<Language, string> = { mk: "МК", sq: "SQ", en: "EN" };
const langFlags: Record<Language, string> = { mk: "🇲🇰", sq: "🇦🇱", en: "🇬🇧" };

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setLangOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      setActiveSubmenu(activeSubmenu === name ? null : name);
    }
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="top-bar">
        <div className="container top-flex">
          <div className="quick-links">
            <a href="https://ednevnik.edu.mk" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> <span>{t("top.eDiary")}</span>
            </a>
            <a href="https://e-uslugi.mon.gov.mk" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-calendar-alt"></i> <span>{t("top.monServices")}</span>
            </a>
            <a href="https://lms.schools.mk" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-laptop"></i> <span>{t("top.lms")}</span>
            </a>
            <a href="https://na.org.mk/Home/ErasmusPlus" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe-europe"></i> <span>{t("top.erasmus")}</span>
            </a>
          </div>
          <div className="top-right-area">
            <div className="lang-switcher" style={{ position: "relative" }}>
              <button
                type="button"
                className="lang-btn"
                onClick={() => setLangOpen((prev) => !prev)}
                aria-label="Change language"
                aria-expanded={langOpen}
              >
                <span>{langFlags[language]}</span> {langLabels[language]} <i className="fas fa-chevron-down" style={{ fontSize: "0.6rem", marginLeft: "4px" }}></i>
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {(Object.keys(langLabels) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      className={`lang-option ${lang === language ? "active" : ""}`}
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                    >
                      <span>{langFlags[lang]}</span> {langLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container nav-container">
          <Link to="/" className="logo-area">
            <img src={schoolLogo} alt="СУГС Владо Тасевски лого" className="logo-img" style={{ height: "52px", width: "auto" }} />
            <div className="logo-text">
              <h1 style={{ fontFamily: "inherit", fontStyle: "normal", letterSpacing: "normal", fontWeight: 700 }}>СУГС „Владо Тасевски"</h1>
              <span>{t("logo.subtitle")}</span>
            </div>
          </Link>

          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>{t("nav.home")}</Link>
              </li>

              <li className={`dropdown ${activeDropdown === "za-nas" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("za-nas", e)}>
                  {t("nav.about")} <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/za-nas">{t("nav.history")}</Link></li>
                  <li><Link to="/misija-vizija">{t("nav.mission")}</Link></li>
                  <li><Link to="/nastavnici">{t("nav.staff")}</Link></li>
                  <li className={`dropdown-nested ${activeSubmenu === "rakovodstvo" ? "active" : ""}`}>
                    <a href="#" onClick={(e) => handleSubmenuClick("rakovodstvo", e)}>
                      {t("nav.leadership")} <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-submenu">
                      <li><Link to="/direktor">{t("nav.director")}</Link></li>
                      <li><Link to="/strucna-sluzba">{t("nav.professional")}</Link></li>
                    </ul>
                  </li>
                  <li className={`dropdown-nested ${activeSubmenu === "resursi" ? "active" : ""}`}>
                    <a href="#" onClick={(e) => handleSubmenuClick("resursi", e)}>
                      {t("nav.resources")} <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-submenu">
                      <li><Link to="/sport">{t("nav.sport")}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className={`dropdown ${activeDropdown === "struki" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("struki", e)}>
                  {t("nav.departments")} <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/elektrotehnicka">{t("nav.elektro")}</Link></li>
                  <li><Link to="/masinska">{t("nav.masinska")}</Link></li>
                  <li><Link to="/soobrakajna">{t("nav.soobrakaj")}</Link></li>
                </ul>
              </li>

              <li className={`dropdown ${activeDropdown === "uchenici" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("uchenici", e)}>
                  {t("nav.students")} <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/vonredni">{t("nav.external")}</Link></li>
                  <li><Link to="/rezultati">{t("nav.enrollResults")}</Link></li>
                  <li><Link to="/poeni-kalkulator">{t("nav.calculator")}</Link></li>
                </ul>
              </li>

              <li className={`dropdown ${activeDropdown === "novosti" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("novosti", e)}>
                  {t("nav.news")} <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/novini">{t("nav.allNews")}</Link></li>
                  <li><Link to="/proekti">{t("nav.projects")}</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/kontakt" className={location.pathname === "/kontakt" ? "active" : ""}>{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          <Link to="/upisi" className="btn-outline-blue"><i className="fas fa-user-graduate"></i> {t("nav.enroll")}</Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
