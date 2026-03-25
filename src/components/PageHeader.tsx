import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-flex">
          <div className="quick-links">
            <a href="https://ednevnik.edu.mk/" target="_blank" rel="noopener noreferrer" className="quick-link"><i className="fas fa-envelope"></i> Е-Дневник</a>
            <a href="https://e-uslugi.mon.gov.mk/" target="_blank" rel="noopener noreferrer" className="quick-link"><i className="fas fa-calendar-alt"></i> МОН Е-Услуги</a>
            <a href="https://lms.schools.mk/" target="_blank" rel="noopener noreferrer" className="quick-link"><i className="fas fa-book-open"></i> LMS Schools</a>
            <a href="https://na.org.mk/Home/ErasmusPlus" target="_blank" rel="noopener noreferrer" className="quick-link"><i className="fas fa-chalkboard-user"></i> Erasmus+</a>
          </div>
          <div className="school-badge">
            <i className="fas fa-graduation-cap"></i>
            <span>Подобро образование, подобра иднина!</span>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container nav-container">
          <Link to="/" className="logo-area">
            <div className="logo-icon">
              <i className="fas fa-school"></i>
            </div>
            <div className="logo-text">
              <h1>СУГС „Владо Тасевски"</h1>
              <span>сообраќај • електротехника • машинство</span>
            </div>
          </Link>

          <div className="nav-dropdown-wrapper" ref={menuRef}>
            <button
              className="nav-dropdown-trigger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fas fa-bars"></i> Мени <i className={`fas fa-chevron-down dropdown-arrow ${menuOpen ? "open" : ""}`}></i>
            </button>
            {menuOpen && (
              <div className="nav-dropdown-menu">
                <Link to="/" className={`nav-dropdown-item ${isActive("/") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-home"></i> Почетна
                </Link>
                <Link to="/za-nas" className={`nav-dropdown-item ${isActive("/za-nas") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-info-circle"></i> За нас
                </Link>
                <Link to="/struki" className={`nav-dropdown-item ${isActive("/struki") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-graduation-cap"></i> Струки
                </Link>
                <Link to="/aktivnosti" className={`nav-dropdown-item ${isActive("/aktivnosti") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-calendar-alt"></i> Активности
                </Link>
                <Link to="/kontakt" className={`nav-dropdown-item ${isActive("/kontakt") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-envelope"></i> Контакт
                </Link>
                <Link to="/upisi" className={`nav-dropdown-item ${isActive("/upisi") ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-user-graduate"></i> Уписи
                </Link>
              </div>
            )}
          </div>

          <Link to="/upisi" className="btn-outline-blue"><i className="fas fa-user-graduate"></i> Запиши се</Link>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
