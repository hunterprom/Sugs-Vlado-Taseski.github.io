import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import schoolLogo from "@/assets/school-logo.png";

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
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
            <a href="https://lms.schools.mk" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-laptop"></i> <span>LMS Schools</span>
            </a>
            <a href="https://na.org.mk/Home/ErasmusPlus" className="quick-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe-europe"></i> <span>Erasmus+</span>
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
            <img src={schoolLogo} alt="СУГС Владо Тасевски лого" className="logo-img" style={{ height: '52px', width: 'auto' }} />
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

              {/* ЗА НАС - with sub-dropdown */}
              <li className={`dropdown ${activeDropdown === "za-nas" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("za-nas", e)}>
                  ЗА НАС <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/za-nas">Историјат</Link></li>
                  <li><Link to="/za-nas#misija">Мисија и Визија</Link></li>
                  <li><Link to="/nastavnici">Наставен кадар</Link></li>
                  {/* Sub-dropdown: Раководство */}
                  <li className={`dropdown-nested ${activeSubmenu === "rakovodstvo" ? "active" : ""}`}>
                    <a href="#" onClick={(e) => handleSubmenuClick("rakovodstvo", e)}>
                      Раководство <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-submenu">
                      <li><Link to="/za-nas#direktor">Директор</Link></li>
                      <li><a href="https://sugsvladotasevski.edu.mk/стручна-служба" target="_blank" rel="noopener noreferrer">Стручна служба</a></li>
                      <li><a href="https://sugsvladotasevski.edu.mk/uchenichki-sovet/" target="_blank" rel="noopener noreferrer">Ученички совет</a></li>
                    </ul>
                  </li>
                  <li><a href="https://sugsvladotasevski.edu.mk/кодекс" target="_blank" rel="noopener noreferrer">Кодекс</a></li>
                  <li><a href="https://sugsvladotasevski.edu.mk/ресурси" target="_blank" rel="noopener noreferrer">Ресурси</a></li>
                </ul>
              </li>

              {/* СТРУКИ - with sub-dropdown */}
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

              {/* УЧЕНИЦИ - new dropdown with sub-dropdowns */}
              <li className={`dropdown ${activeDropdown === "uchenici" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("uchenici", e)}>
                  УЧЕНИЦИ <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/upisi">Уписи 2025/2026</Link></li>
                  <li><a href="https://sugsvladotasevski.edu.mk/распоред-на-часови/" target="_blank" rel="noopener noreferrer">Распоред на часови</a></li>
                  <li><a href="https://sugsvladotasevski.edu.mk/матура" target="_blank" rel="noopener noreferrer">Матура</a></li>
                  <li><a href="https://sugsvladotasevski.edu.mk/вонредни-ученици" target="_blank" rel="noopener noreferrer">Вонредни ученици</a></li>
                  {/* Sub-dropdown: Портали */}
                  <li className={`dropdown-nested ${activeSubmenu === "portali" ? "active" : ""}`}>
                    <a href="#" onClick={(e) => handleSubmenuClick("portali", e)}>
                      Портали <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-submenu">
                      <li><a href="https://ednevnik.edu.mk/" target="_blank" rel="noopener noreferrer">Е-Дневник</a></li>
                      <li><a href="https://e-uslugi.mon.gov.mk/" target="_blank" rel="noopener noreferrer">МОН Е-Услуги</a></li>
                      <li><a href="https://lms.schools.mk/" target="_blank" rel="noopener noreferrer">LMS Schools</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* НОВОСТИ */}
              <li className={`dropdown ${activeDropdown === "novosti" ? "active" : ""}`}>
                <a href="#" onClick={(e) => handleDropdownClick("novosti", e)}>
                  НОВОСТИ <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/novini">Сите новости</Link></li>
                  <li><Link to="/proekti">Проекти</Link></li>
                  <li><a href="https://sugsvladotasevski.edu.mk/активности" target="_blank" rel="noopener noreferrer">Активности</a></li>
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

          <Link to="/upisi" className="btn-outline-blue"><i className="fas fa-user-graduate"></i> Уписи</Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
