import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TextReveal, LineReveal, MarqueeTicker, FadeUpSection } from "../components/TypographyEffects";
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
        {/* Hero with typography animations */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <motion.span
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <i className="fas fa-star-of-life"></i> ПОДОБРО ОБРАЗОВАНИЕ, ПОДОБРА ИДНИНА!
              </motion.span>

              <h1 className="hero-title-animated">
                <LineReveal delay={0.3}>
                  <span className="font-display" style={{ fontStyle: "italic", letterSpacing: "-0.02em" }}>
                    СУГС
                  </span>{" "}
                  <span style={{ letterSpacing: "0.08em", fontWeight: 800 }}>
                    „Владо Тасевски"
                  </span>
                </LineReveal>
                <LineReveal delay={0.5}>
                  <span className="font-display" style={{ fontWeight: 400, fontStyle: "italic", fontSize: "0.7em", letterSpacing: "0.15em" }}>
                    Скопје
                  </span>
                </LineReveal>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We are the Team VLADO TASEVSKI! Воспитанието и образованието се темелите на една држава. Се гордееме со сите генерации кои минале низ нашите училници.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <a href="#" className="btn-primary"><i className="fas fa-arrow-right"></i> Запиши се</a>
                <Link to="/za-nas" className="btn-secondary"><i className="fas fa-info-circle"></i> Нашата историја</Link>
              </motion.div>
            </div>
            <motion.div
              className="hero-stats gallery-carousel"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
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
            </motion.div>
          </div>
        </section>

        {/* Marquee ticker */}
        <div className="marquee-section">
          <MarqueeTicker
            text="ЕЛЕКТРОТЕХНИКА ✦ МАШИНСТВО ✦ СООБРАЌАЈ ✦ ИДНИНАТА Е ТУКА"
            className="marquee-text"
            speed={25}
          />
        </div>

        {/* Stats with reveal */}
        <section className="stats-section" ref={statsRef}>
          <div className="container stats-grid">
            <FadeUpSection delay={0}>
              <div className="stat-card">
                <i className="fas fa-calendar-alt"></i>
                <h3><AnimatedNumber target={66} animate={statsAnimated} />+</h3>
                <p>Години традиција</p>
              </div>
            </FadeUpSection>
            <FadeUpSection delay={0.15}>
              <div className="stat-card">
                <i className="fas fa-chalkboard-user"></i>
                <h3><AnimatedNumber target={120} animate={statsAnimated} />+</h3>
                <p>Професори</p>
              </div>
            </FadeUpSection>
            <FadeUpSection delay={0.3}>
              <div className="stat-card">
                <i className="fas fa-user-graduate"></i>
                <h3><AnimatedNumber target={22000} animate={statsAnimated} />+</h3>
                <p>Дипломирани ученици</p>
              </div>
            </FadeUpSection>
          </div>
        </section>

        {/* Features with typography */}
        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>
                <TextReveal text="Зошто да ја изберете нашата школа?" className="section-title-reveal" />
              </h2>
              <LineReveal delay={0.3}>
                <p>Модерни училници, искусен кадар и иновативни методи на учење</p>
              </LineReveal>
            </div>
            <div className="cards-grid">
              {[
                { icon: "fas fa-laptop-code", title: "Дигитална настава", desc: "Интерактивни табли, е-дневник и online ресурси за секој ученик.", link: "/elektrotehnicka" },
                { icon: "fas fa-chalkboard-user", title: "Квалитетен кадар", desc: "Искусни професори и менторска поддршка за секој ученик.", link: "/za-nas" },
                { icon: "fas fa-futbol", title: "Спорт & креативност", desc: "Спортски терени, работилници и натпревари за сестрана иднина.", link: "/sport" },
              ].map((card, i) => (
                <FadeUpSection key={i} delay={i * 0.15}>
                  <div className="card">
                    <div className="card-icon"><i className={card.icon}></i></div>
                    <h3 className="font-display">{card.title}</h3>
                    <p>{card.desc}</p>
                    <Link to={card.link} className="card-link">Дознај повеќе <i className="fas fa-chevron-right"></i></Link>
                  </div>
                </FadeUpSection>
              ))}
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
