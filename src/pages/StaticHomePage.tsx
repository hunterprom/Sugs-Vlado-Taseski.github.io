import { useEffect } from "react";
import "./StaticHomePage.css";

const StaticHomePage = () => {
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

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="top-bar">
          <div className="container top-flex">
            <div className="quick-links">
              <a href="#" className="quick-link"><i className="fas fa-envelope"></i> Е-Дневник</a>
              <a href="#" className="quick-link"><i className="fas fa-calendar-alt"></i> МОН Е-услуги</a>
              <a href="#" className="quick-link"><i className="fas fa-book-open"></i> LMS Schools</a>
              <a href="#" className="quick-link"><i className="fas fa-chalkboard-user"></i> Erasmus+</a>
            </div>
            <div className="school-badge">
              <i className="fas fa-graduation-cap"></i>
              <span>Добредојдовте, идни лидери</span>
            </div>
          </div>
        </div>

        <div className="main-nav">
          <div className="container nav-container">
            <div className="logo-area">
              <div className="logo-icon">
                <i className="fas fa-school"></i>
              </div>
              <div className="logo-text">
                <h1>СУГС „Владо Тасевски"</h1>
                <span>електротехника • машинство • сообраќај</span>
              </div>
            </div>
            <div className="nav-links">
              <ul>
                <li><a href="#">ПОЧЕТНА</a></li>
                <li><a href="#">ЗА НАС</a></li>
                <li><a href="#">ПРОГРАМИ</a></li>
                <li><a href="#">НАСТАВА</a></li>
                <li><a href="#">АКТИВНОСТИ</a></li>
                <li><a href="#">КОНТАКТ</a></li>
              </ul>
            </div>
            <a href="#" className="btn-outline-blue"><i className="fas fa-user-graduate"></i> Влез за ученици</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge"><i className="fas fa-star-of-life"></i> Врвно образование</span>
              <h1>Иновативен пристап кон <br /> знаењето</h1>
              <p>Современа школа нуди динамична настава, дигитални ресурси и поддршка за секој ученик. Заедно градиме иднина.</p>
              <div className="hero-buttons">
                <a href="#" className="btn-primary"><i className="fas fa-arrow-right"></i> Запиши се</a>
                <a href="#" className="btn-secondary"><i className="fas fa-info-circle"></i> За нас</a>
              </div>
            </div>
            <div className="hero-stats gallery-carousel">
              <div className="carousel-container">
                <div className="carousel-slide active">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" alt="Ученици во училница" />
                  <div className="carousel-caption">
                    <h3>Модерни училници</h3>
                    <p>Интерактивна настава за сите ученици</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop" alt="Спортски активности" />
                  <div className="carousel-caption">
                    <h3>Спорт и рекреација</h3>
                    <p>Развој на спортските вештини</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop" alt="Ученичка презентација" />
                  <div className="carousel-caption">
                    <h3>Креативни работилници</h3>
                    <p>Развивање на талентите</p>
                  </div>
                </div>
                <div className="carousel-slide">
                  <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop" alt="Библиотека" />
                  <div className="carousel-caption">
                    <h3>Современа библиотека</h3>
                    <p>Дигитални и печатени ресурси</p>
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

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Зошто да ја изберете нашата школа?</h2>
              <p>Модерни училници, искусен кадар и иновативни методи на учење.</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Дигитална настава</h3>
                <p>Интерактивни табли, е-дневник, online ресурси и пристап до Microsoft 365 за секој ученик.</p>
                <a href="#" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></a>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-chalkboard-user"></i></div>
                <h3>Квалитетен кадар</h3>
                <p>Искусни професори, менторска поддршка и индивидуален пристап кон развојот на секое дете.</p>
                <a href="#" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></a>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-futbol"></i></div>
                <h3>Спорт &amp; креативност</h3>
                <p>Спортски терени, ликовни работилници, драмски секции и натпревари за сестрана иднина.</p>
                <a href="#" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container info-flex">
            <div className="info-text">
              <h2><i className="fas fa-graduation-cap"></i> Е-настава и модерни алатки</h2>
              <p>Нашата платформа овозможува интегриран пристап до е-дневник, е-настава, дигитални библиотеки и интерактивни содржини.</p>
              <ul className="info-list">
                <li><i className="fas fa-check-circle"></i> Пристап до материјали 24/7</li>
                <li><i className="fas fa-check-circle"></i> Видео лекции и онлајн тестови</li>
                <li><i className="fas fa-check-circle"></i> Безбедна околина за учење</li>
                <li><i className="fas fa-check-circle"></i> Извештаи за напредок во реално време</li>
              </ul>
            </div>
            <div className="info-image">
              <i className="fas fa-chalkboard"></i>
              <h3 style={{ marginTop: "12px", color: "var(--primary-dark)" }}>Интерактивна училница</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "12px" }}>Паметни табли, дигитални содржини и алатки за соработка.</p>
            </div>
          </div>
        </section>

        <section className="news-section">
          <div className="container">
            <div className="section-header">
              <h2>Актуелности &amp; настани</h2>
              <p>Следете ги најновите случувања во нашето училиште</p>
            </div>
            <div className="news-grid">
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 15 март, 2026</span>
                  <h4>Ден на отворени врати</h4>
                  <p>Запознајте ја нашата школа, разговарајте со наставниците и видете ја инфраструктурата.</p>
                  <a href="#" className="card-link">Прочитај повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 22 март, 2026</span>
                  <h4>Натпревар по роботика</h4>
                  <p>Учениците од средно образование се натпреваруваат во изградба на иновативни роботи.</p>
                  <a href="#" className="card-link">Прочитај повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 5 април, 2026</span>
                  <h4>Уписи за новата учебна година</h4>
                  <p>Почнуваат записите за првачиња и средношколци. Обезбедете го своето место навреме.</p>
                  <a href="#" className="card-link">Прочитај повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
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
                <li><i className="fas fa-phone"></i> <a href="#">+389 2 240 00 40</a></li>
                <li><i className="fas fa-envelope"></i> <a href="#">sugs-vladotasevski-skopje@schools.mk</a></li>
              </ul>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/sugs_vlado_tasevski/?hl=en"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© Copyright © 2026 СУГС „Владо Тасевски" - Скопје</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StaticHomePage;
