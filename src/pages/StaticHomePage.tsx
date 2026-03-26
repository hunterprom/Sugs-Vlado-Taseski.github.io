import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TextReveal, LineReveal, MarqueeTicker, FadeUpSection } from "../components/TypographyEffects";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

import heroImg1 from "@/assets/училница-1.png";
import heroImg2 from "@/assets/училница-2.png";
import heroImg3 from "@/assets/училиште-надвор.png";
import heroImg4 from "@/assets/училиште-лоби.png";
import heroImg5 from "@/assets/училиште-фонтана.png";

const StaticHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const { t } = useLanguage();

  const slides = [
    { img: heroImg1, caption: "Модерни училници" },
    { img: heroImg2, caption: "Спорт & рекреација" },
    { img: heroImg3, caption: "Нашето училиште" },
    { img: heroImg4, caption: "Лоби" },
    { img: heroImg5, caption: "Дворот на училиштето" },
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
        <section className="hero-split">
          <div className="container hero-grid">
            <div className="hero-content">
              <motion.span
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <i className="fas fa-star-of-life text-3xl"></i> {t("hero.badge")}
              </motion.span>

              <h1 className="hero-title-split">
                <LineReveal delay={0.3}>
                  <span className="font-display" style={{ fontStyle: "italic", letterSpacing: "-0.02em" }}>
                    {t("hero.school")}
                  </span>{" "}
                  <span style={{ letterSpacing: "0.08em", fontWeight: 800 }}>
                    {t("hero.name")}
                  </span>
                </LineReveal>
                <LineReveal delay={0.5}>
                  <span className="font-display" style={{ fontWeight: 400, fontStyle: "italic", fontSize: "0.7em", letterSpacing: "0.15em" }}>
                    {t("hero.city")}
                  </span>
                </LineReveal>
              </h1>

              <motion.p
                className="hero-subtitle-split"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t("hero.subtitle")}
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Link to="/upisi" className="btn-primary"><i className="fas fa-arrow-right"></i> {t("hero.enroll")}</Link>
                <Link to="/za-nas" className="btn-secondary"><i className="fas fa-info-circle"></i> {t("hero.history")}</Link>
              </motion.div>
            </div>

            <motion.div
              className="hero-gallery"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              onMouseEnter={() => { if (intervalRef.current) clearInterval(intervalRef.current); }}
              onMouseLeave={startCarousel}
            >
              <div className="gallery-carousel-container">
                {slides.map((slide, i) => (
                  <div key={i} className={`gallery-slide ${i === currentSlide ? "active" : ""}`}>
                    <img src={slide.img} alt={slide.caption} />
                    <div className="gallery-caption"><h3>{slide.caption}</h3></div>
                  </div>
                ))}
              </div>
              <div className="gallery-dots">
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

        <div className="marquee-section">
          <MarqueeTicker
            text={t("marquee")}
            className="marquee-text"
            speed={25}
          />
        </div>

        <section className="stats-section" ref={statsRef}>
          <div className="container stats-grid">
            <FadeUpSection delay={0}>
              <div className="stat-card">
                <i className="fas fa-calendar-alt"></i>
                <h3><AnimatedNumber target={66} animate={statsAnimated} />+</h3>
                <p>{t("stats.years")}</p>
              </div>
            </FadeUpSection>
            <FadeUpSection delay={0.15}>
              <div className="stat-card">
                <i className="fas fa-chalkboard-user"></i>
                <h3><AnimatedNumber target={90} animate={statsAnimated} />+</h3>
                <p>{t("stats.teachers")}</p>
              </div>
            </FadeUpSection>
            <FadeUpSection delay={0.3}>
              <div className="stat-card">
                <i className="fas fa-user-graduate"></i>
                <h3><AnimatedNumber target={900} animate={statsAnimated} />+</h3>
                <p>{t("stats.students")}</p>
              </div>
            </FadeUpSection>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>
                <TextReveal text={t("features.title")} className="section-title-reveal" />
              </h2>
              <LineReveal delay={0.3}>
                <p>{t("features.subtitle")}</p>
              </LineReveal>
            </div>
            <div className="cards-grid">
              {[
                { icon: "fas fa-laptop-code", title: t("features.digital"), desc: t("features.digitalDesc"), link: "/elektrotehnicka" },
                { icon: "fas fa-chalkboard-user", title: t("features.quality"), desc: t("features.qualityDesc"), link: "/za-nas" },
                { icon: "fas fa-futbol", title: t("features.sport"), desc: t("features.sportDesc"), link: "/sport" },
              ].map((card, i) => (
                <FadeUpSection key={i} delay={i * 0.15}>
                  <div className="card">
                    <div className="card-icon"><i className={card.icon}></i></div>
                    <h3 className="font-display">{card.title}</h3>
                    <p>{card.desc}</p>
                    <Link to={card.link} className="card-link">{t("features.learnMore")} <i className="fas fa-chevron-right"></i></Link>
                  </div>
                </FadeUpSection>
              ))}
            </div>
          </div>
        </section>

        {/* News preview section on homepage */}
        <section className="projects-section">
          <div className="container">
            <div className="section-header">
              <h2>{t("nav.news")}</h2>
              <p>Најновите случувања во нашето училиште</p>
            </div>
            <div className="projects-grid">
              {[
                {
                  icon: "fas fa-bullhorn",
                  title: "Јавен оглас за ученички правобранител",
                  desc: "ОТВОРЕН ПОВИК ЗА ИЗБОР УЧЕНИЧКИ ПРАВОБРАНИТЕЛ СУГС Владо Тасевски - Скопје.",
                  date: "10 Дек 2025",
                },
                {
                  icon: "fas fa-plane",
                  title: "Повик за Ерасмус+ мобилност",
                  desc: "Повик за интерес за мобилност на ученици за Ерасмус+ проект со можност за практична работа.",
                  date: "5 Ное 2025",
                },
                {
                  icon: "fas fa-trophy",
                  title: "Честитки за Ива Богдановска 🎉",
                  desc: "Честитки за Ива Богдановска за освоеното трето место на Европското јуниорско првенство во џудо!",
                  date: "6 Авг 2025",
                },
              ].map((item, i) => (
                <FadeUpSection key={i} delay={i * 0.1}>
                  <div className="project-card">
                    <i className={item.icon}></i>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', color: '#9FBDD6' }}>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </FadeUpSection>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link to="/novini" className="btn-primary">
                <i className="fas fa-newspaper"></i> {t("nav.allNews")}
              </Link>
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
