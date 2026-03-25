import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";

const StaticHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  const slides = [
    { img: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=600&h=400&fit=crop", caption: "Модерни училници" },
    { img: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?w=600&h=400&fit=crop", caption: "Спорт & рекреација" },
    { img: "https://images.pexels.com/photos/5428835/pexels-photo-5428835.jpeg?w=600&h=400&fit=crop", caption: "Проектни активности" },
    { img: "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?w=600&h=400&fit=crop", caption: "Современа библиотека" },
  ];

  const goToSlide = useCallback((index: number) => setCurrentSlide(index), []);

  const startCarousel = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  }, [slides.length]);

  useEffect(() => {
    startCarousel();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startCarousel]);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsAnimated) setStatsAnimated(true);
    });
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge"><i className="fas fa-star-of-life"></i> ПОДОБРО ОБРАЗОВАНИЕ, ПОДОБРА ИДНИНА!</span>
              <h1>СУГС „Владо Тасевски"<br />Скопје</h1>
              <p>We are the Team VLADO TASEVSKI! Воспитанието и образованието се темелите на една држава. Се гордееме со сите генерации кои минале низ нашите училници.</p>
              <div className="hero-buttons">
                <a href="#" className="btn-primary"><i className="fas fa-arrow-right"></i> Запиши се</a>
                <Link to="/za-nas" className="btn-secondary"><i className="fas fa-info-circle"></i> Нашата историја</Link>
              </div>
            </div>
            <div
              className="hero-stats gallery-carousel"
              onMouseEnter={() => { if (intervalRef.current) clearInterval(intervalRef.current); }}
              onMouseLeave={startCarousel}
            >
              <div className="carousel-container">
                {slides.map((slide, i) => (
                  <div key={i} className={`carousel-slide ${i === currentSlide ? "active" : ""}`}>
                    <img src={slide.img} alt={slide.caption} />
                    <div className="carousel-caption"><h3>{slide.caption}</h3></div>
                  </div>
                ))}
              </div>
              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === currentSlide ? "active-dot" : ""}`}
                    onClick={() => { goToSlide(i); clearInterval(intervalRef.current!); startCarousel(); }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section" ref={statsRef}>
          <div className="container stats-grid">
            <div className="stat-card">
              <i className="fas fa-calendar-alt"></i>
              <h3><AnimatedNumber target={66} animate={statsAnimated} />+</h3>
              <p>Години традиција</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-chalkboard-user"></i>
              <h3><AnimatedNumber target={120} animate={statsAnimated} />+</h3>
              <p>Професори</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-user-graduate"></i>
              <h3><AnimatedNumber target={22000} animate={statsAnimated} />+</h3>
              <p>Дипломирани ученици</p>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Зошто да ја изберете нашата школа?</h2>
              <p>Модерни училници, искусен кадар и иновативни методи на учење</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Дигитална настава</h3>
                <p>Интерактивни табли, е-дневник и online ресурси за секој ученик.</p>
                <Link to="/elektrotehnicka" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-chalkboard-user"></i></div>
                <h3>Квалитетен кадар</h3>
                <p>Искусни професори и менторска поддршка за секој ученик.</p>
                <Link to="/za-nas" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-futbol"></i></div>
                <h3>Спорт &amp; креативност</h3>
                <p>Спортски терени, работилници и натпревари за сестрана иднина.</p>
                <Link to="/sport" className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

const AnimatedNumber = ({ target, animate }: { target: number; animate: boolean }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(current));
    }, 20);
    return () => clearInterval(timer);
  }, [animate, target]);
  return <span>{value}</span>;
};

export default StaticHomePage;