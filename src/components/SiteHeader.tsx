import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-flex">
          <div className="quick-links">
            <a href="https://ednevnik.edu.mk" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> <span>Е-Дневник</span>
            </a>
            <a href="https://e-uslugi.mon.gov.mk" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-calendar-alt"></i> <span>МОН Е-услуги</span>
            </a>
            <a href="https://massum.org/mk/" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-users"></i> <span>МАССУМ</span>
            </a>
          </div>
          <div className="school-badge">
            <i className="fas fa-graduation-cap"></i>
            <span>Основано 1959 • Член на МАССУМ</span>
          </div>
        </div>
      </div>

      <div className="main-nav" ref={navRef}>
        <div className="container nav-container">
          <Link to="/" className="logo-area">
            <div className="logo-icon">
              <i className="fas fa-train"></i>
            </div>
            <div className="logo-text">
              <h1>СУГС „Владо Тасевски"</h1>
              <span>образование • иновација • традиција</span>
            </div>
          </Link>

          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>ПОЧЕТНА</Link>
              </li>
              <li className={`dropdown ${activeDropdown === "za-nas" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("za-nas", e)}>
                  ЗА НАС <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/za-nas#istorija">Историјат</Link></li>
                  <li><Link to="/za-nas#misija">Мисија &amp; Визија</Link></li>
                  <li><Link to="/za-nas#rukovodstvo">Раководство</Link></li>
                </ul>
              </li>
              <li className={`dropdown ${activeDropdown === "struki" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("struki", e)}>
                  СТРУКИ <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/elektrotehnicka">Електротехничка</Link></li>
                  <li><Link to="/masinska">Машинска</Link></li>
                  <li><Link to="/soobrakajna">Сообраќајна</Link></li>
                </ul>
              </li>
              <li className={`dropdown ${activeDropdown === "proekti" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("proekti", e)}>
                  ПРОЕКТИ <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/proekti#erasmus">Erasmus+</Link></li>
                  <li><Link to="/proekti#eko">Еко-практики</Link></li>
                  <li><Link to="/proekti#socialday">Social Day</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/sport" className={location.pathname === "/sport" ? "active" : ""}>СПОРТ</Link>
              </li>
              <li>
                <Link to="/kontakt" className={location.pathname === "/kontakt" ? "active" : ""}>КОНТАКТ</Link>
              </li>
            </ul>
          </div>

          <a href="#" className="btn-outline-blue"><i className="fas fa-user-graduate"></i> Ученички портал</a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;