import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./StaticHomePage.css";

const StaticHomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carousel logic
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    let current = 0;
    let interval: ReturnType<typeof setInterval>;

    function showSlide(index: number) {
      slides.forEach((s) => s.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active-dot"));
      slides[index]?.classList.add("active");
      dots[index]?.classList.add("active-dot");
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        showSlide(i);
        clearInterval(interval);
        interval = setInterval(nextSlide, 4000);
      });
    });

    interval = setInterval(nextSlide, 4000);

    // Close menu on outside click
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
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

            {/* Dropdown Navigation */}
            <div className="nav-dropdown-wrapper" ref={menuRef}>
              <button
                className="nav-dropdown-trigger"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fas fa-bars"></i> Мени <i className={`fas fa-chevron-down dropdown-arrow ${menuOpen ? "open" : ""}`}></i>
              </button>
              {menuOpen && (
                <div className="nav-dropdown-menu">
                  <Link to="/" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-home"></i> Почетна
                  </Link>
                  <Link to="/za-nas" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-info-circle"></i> За нас
                  </Link>
                  <Link to="/struki" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-graduation-cap"></i> Струки
                  </Link>
                  <Link to="/aktivnosti" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-calendar-alt"></i> Активности
                  </Link>
                  <Link to="/kontakt" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-envelope"></i> Контакт
                  </Link>
                  <Link to="/upisi" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                    <i className="fas fa-user-graduate"></i> Уписи
                  </Link>
                </div>
              )}
            </div>

            <Link to="/upisi" className="btn-outline-blue"><i className="fas fa-user-graduate"></i> Запиши се</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge"><i className="fas fa-star-of-life"></i> 📚 Упис 2025/2026</span>
              <h1>Твојата иднина <br /> започнува тука</h1>
              <p>СУГС „Владо Тасевски" – модерно училиште за сообраќај, електротехника и машинство. We are the Team VLADO TASEVSKI!</p>
              <div className="hero-buttons">
                <Link to="/upisi" className="btn-primary"><i className="fas fa-arrow-right"></i> Запиши се →</Link>
                <Link to="/struki" className="btn-secondary"><i className="fas fa-info-circle"></i> Види струки</Link>
              </div>
            </div>
            <div className="hero-stats gallery-carousel">
              <div className="carousel-container">
                <div className="carousel-slide active">
                  <img src="https://sugsvladotasevski.edu.mk/wp-content/uploads/2024/05/1715793766438-3845e3b9-aad8-4d84-8d15-8794200e27fe_2.jpg" alt="Сообраќајна струка" />
                  <div className="carousel-caption">
                    <h3>Сообраќајна струка</h3>
                    <p>Техничар за транспорт и шпедиција</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src="https://sugsvladotasevski.edu.mk/wp-content/uploads/2024/05/1715793809000-28dbcb43-c17c-4272-84f0-fd307b21a646_1.jpg" alt="Електротехничка струка" />
                  <div className="carousel-caption">
                    <h3>Електротехничка струка</h3>
                    <p>Електротехничар за компјутерска техника</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src="https://sugsvladotasevski.edu.mk/wp-content/uploads/2024/05/1715793694983-58a9c90e-5235-4bbc-9cef-670567a7ce63_1.jpg" alt="Машинска струка" />
                  <div className="carousel-caption">
                    <h3>Машинска струка</h3>
                    <p>Машинско-енергетски техничар</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src="https://sugsvladotasevski.edu.mk/wp-content/uploads/2024/05/1715793766438-3845e3b9-aad8-4d84-8d15-8794200e27fe_4.jpg" alt="Практична настава" />
                  <div className="carousel-caption">
                    <h3>Практична настава</h3>
                    <p>Современи лаборатории и опрема</p>
                  </div>
                </div>
              </div>
              <div className="carousel-dots">
                <span className="dot active-dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </section>

        {/* За нас секција */}
        <section className="info-section">
          <div className="container info-flex">
            <div className="info-text">
              <h2><i className="fas fa-school"></i> За нас</h2>
              <p>Нашата приказна започна во далечната 1959 година, кога Работничкиот совет на Железничко-транспортното претпријатие Скопје ја донесе Одлуката за формирање Центар на железничарите за стручно образование на младинци и возрасни.</p>
              <p>Воспитанието и образованието се темелите на една држава. Како наставници и воспитувачи се гордееме со низата генерации кои минале низ нашите училници, ходници, двор.</p>
              <Link to="/za-nas" className="card-link" style={{ marginTop: "16px", display: "inline-flex" }}>Дознајте повеќе <i className="fas fa-chevron-right"></i></Link>
            </div>
            <div className="info-image">
              <img
                src="https://sugsvladotasevski.edu.mk/wp-content/uploads/2023/03/300095477_831078098301021_6082735387271669301_n-1300x1300.jpg"
                alt="СУГС Владо Тасевски"
                style={{ width: "100%", borderRadius: "16px", maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Струки секција */}
        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Струки</h2>
              <p>Нашето училиште нуди голем избор на струки, и тие се следните:</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><i className="fas fa-car"></i></div>
                <h3>Сообраќајна струка</h3>
                <p>Техничар за транспорт и шпедиција и Техничар за железнички сообраќај</p>
                <Link to="/struki" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-bolt"></i></div>
                <h3>Електротехничка струка</h3>
                <p>Електротехничар за електроника и телекомуникации, Електротехничар за компјутерска техника и автоматика</p>
                <Link to="/struki" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-cogs"></i></div>
                <h3>Машинска струка</h3>
                <p>Машинско-енергетски техничар, Техничар за производно машинство, Инсталатер за греење и климатизација</p>
                <Link to="/struki" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Новости секција */}
        <section className="news-section">
          <div className="container">
            <div className="section-header">
              <h2>Новости &amp; настани</h2>
              <p>Следете ги најновите случувања во нашето училиште</p>
            </div>
            <div className="news-grid">
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 10 декември, 2025</span>
                  <h4>Јавен оглас за ученички правобранител</h4>
                  <p>ОТВОРЕН ПОВИК ЗА ИЗБОР УЧЕНИЧКИ ПРАВОБРАНИТЕЛ СУГС „Владо Тасевски" - Скопје</p>
                  <Link to="/aktivnosti" className="card-link">Прочитај повеќе <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 5 ноември, 2025</span>
                  <h4>Повик за мобилност на ученици за Ерасмус+</h4>
                  <p>Повик за интерес за мобилност на ученици за Ерасмус+ проект.</p>
                  <Link to="/aktivnosti" className="card-link">Прочитај повеќе <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 5 октомври, 2025</span>
                  <h4>Обука за одржливи еко-практики</h4>
                  <p>Учениците учествуваа на обука за одржливи еко-практики во рамки на проектните активности.</p>
                  <Link to="/aktivnosti" className="card-link">Прочитај повеќе <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Спортски простории */}
        <section className="info-section">
          <div className="container info-flex">
            <div className="info-text">
              <h2><i className="fas fa-futbol"></i> Спортски простории</h2>
              <ul className="info-list">
                <li><i className="fas fa-check-circle"></i> <strong>Сала</strong> – Имаме голема и уредена сала за било каков спорт</li>
                <li><i className="fas fa-check-circle"></i> <strong>Игралиште</strong> – Имаме големо, отворено фудбалско игралиште покриено со вештачка трева</li>
                <li><i className="fas fa-check-circle"></i> <strong>Теретана</strong> – Имаме теретана со секаква опрема за вежбање</li>
              </ul>
            </div>
            <div className="info-image">
              <i className="fas fa-volleyball-ball"></i>
              <h3 style={{ marginTop: "12px", color: "var(--primary-dark)" }}>Спорт и рекреација</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "12px" }}>Просториите на СУГС „Владо Тасевски" се исполнети со младост, убавина, љубов, смеа и палавост.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container" style={{ textAlign: "center", padding: "60px 32px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "16px" }}>
              Изберете ја вашата иднина! Ние сме тука за да ви помогнеме.
            </h2>
            <Link to="/upisi" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
              <i className="fas fa-user-graduate"></i> Уписи
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Контакт</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> <a href="#">СУГС „Владо Тасевски" – Скопје, III Македонска бригада бб, 1000 Скопје</a></li>
                <li><i className="fas fa-phone"></i> <a href="tel:+38922400040">+389 2 240 00 40</a></li>
                <li><i className="fas fa-envelope"></i> <a href="mailto:sugs-vladotasevski-skopje@schools.mk">sugs-vladotasevski-skopje@schools.mk</a></li>
              </ul>
              <div className="social-icons">
                <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Брзи линкови</h4>
              <ul>
                <li><Link to="/za-nas">За нас</Link></li>
                <li><Link to="/struki">Струки</Link></li>
                <li><Link to="/aktivnosti">Активности</Link></li>
                <li><Link to="/kontakt">Контакт</Link></li>
                <li><Link to="/upisi">Уписи</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Корисни линкови</h4>
              <ul>
                <li><a href="https://ednevnik.edu.mk/" target="_blank" rel="noopener noreferrer">Е-Дневник</a></li>
                <li><a href="https://e-uslugi.mon.gov.mk/" target="_blank" rel="noopener noreferrer">МОН Е-Услуги</a></li>
                <li><a href="https://lms.schools.mk/" target="_blank" rel="noopener noreferrer">LMS Schools</a></li>
                <li><a href="https://na.org.mk/Home/ErasmusPlus" target="_blank" rel="noopener noreferrer">Erasmus+</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© Copyright 2026 СУГС „Владо Тасевски" - Скопје</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StaticHomePage;
