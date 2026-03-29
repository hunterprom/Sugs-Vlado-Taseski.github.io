import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TextReveal, LineReveal, MarqueeTicker, FadeUpSection, ScrollRevealSection, ScrollSlideIn, ScrollZoomReveal, ParallaxSection } from "../components/TypographyEffects";
import { useLanguage } from "@/i18n/LanguageContext";
import DepartmentsSection from "../components/DepartmentsSection";
import WhyUsSection from "../components/WhyUsSection";
import TestimonialSection from "../components/TestimonialSection";
import CTASection from "../components/CTASection";
import { noviniData } from "../data/noviniData";
import "./StaticHomePage.css";

import heroImg1 from "@/assets/classroom-main-1.png";
import heroImg2 from "@/assets/classroom-main-2.png";
import heroImg3 from "@/assets/school-outside.png";
import heroImg4 from "@/assets/school-lobby.png";
import heroImg5 from "@/assets/school-fountain.png";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";
import fountain from "@/assets/fountain.jpg";
import lobbyLogo from "@/assets/lobby-logo.jpg";
import schoolExterior from "@/assets/school-exterior.jpg";

const StaticHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const { t } = useLanguage();

  const slideKeys = ["slide.1", "slide.2", "slide.3", "slide.4", "slide.5"];
  const slides = [
    { img: heroImg1, captionKey: slideKeys[0] },
    { img: heroImg2, captionKey: slideKeys[1] },
    { img: heroImg3, captionKey: slideKeys[2] },
    { img: heroImg4, captionKey: slideKeys[3] },
    { img: heroImg5, captionKey: slideKeys[4] },
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

  // Parallax for hero background
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const latestNews = noviniData.slice(0, 3);

  const journeySteps = [
    { icon: "fas fa-school", titleKey: "scroll.step1Title", descKey: "scroll.step1Desc", img: schoolExterior },
    { icon: "fas fa-chalkboard", titleKey: "scroll.step2Title", descKey: "scroll.step2Desc", img: classroom1 },
    { icon: "fas fa-flask", titleKey: "scroll.step3Title", descKey: "scroll.step3Desc", img: conferenceRoom },
    { icon: "fas fa-sun", titleKey: "scroll.step4Title", descKey: "scroll.step4Desc", img: fountain },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero with parallax */}
        <motion.section className="hero-split" ref={heroRef} style={{ y: heroY, opacity: heroOpacity }}>
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

              <h1 className="hero-title-split" style={{ fontFamily: "'Inter', 'Playfair Display', sans-serif" }}>
                <LineReveal delay={0.3}>
                  <span style={{ fontWeight: 700, letterSpacing: "0.01em" }}>
                    {t("hero.school")}
                  </span>{" "}
                  <span style={{ fontWeight: 700, letterSpacing: "0.01em" }}>
                    {t("hero.name")}
                  </span>
                </LineReveal>
                <LineReveal delay={0.5}>
                  <span style={{ fontWeight: 700, fontSize: "0.7em", letterSpacing: "0.15em" }}>
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
                <Link to="/poeni-kalkulator" className="btn-secondary"><i className="fas fa-calculator"></i> {t("hero.calculator")}</Link>
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
                    <img src={slide.img} alt={t(slide.captionKey)} />
                    <div className="gallery-caption"><h3>{t(slide.captionKey)}</h3></div>
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
        </motion.section>

        <div className="marquee-section">
          <MarqueeTicker
            text={t("marquee")}
            className="marquee-text"
            speed={25}
          />
        </div>

        {/* Stats with scroll-driven reveal */}
        <section className="stats-section" ref={statsRef}>
          <div className="container stats-grid">
            {[
              { icon: "fas fa-calendar-alt", target: 66, label: t("stats.years") },
              { icon: "fas fa-chalkboard-user", target: 90, label: t("stats.teachers") },
              { icon: "fas fa-user-graduate", target: 900, label: t("stats.students") },
            ].map((stat, i) => (
              <ScrollRevealSection key={i}>
                <div className="stat-card">
                  <i className={stat.icon}></i>
                  <h3><AnimatedNumber target={stat.target} animate={statsAnimated} />+</h3>
                  <p>{stat.label}</p>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </section>

        {/* Scrollytelling Journey Section */}
        <section className="scrollytelling-section">
          <div className="container">
            <ScrollZoomReveal>
              <div className="section-header" style={{ marginBottom: "60px" }}>
                <h2>
                  <TextReveal text={t("scroll.journeyTitle")} className="section-title-reveal" />
                </h2>
                <LineReveal delay={0.2}>
                  <p>{t("scroll.journeySubtitle")}</p>
                </LineReveal>
              </div>
            </ScrollZoomReveal>

            <div className="journey-timeline">
              {journeySteps.map((step, i) => (
                <div className="journey-step" key={i}>
                  <ScrollSlideIn direction={i % 2 === 0 ? "left" : "right"}>
                    <div className={`journey-card ${i % 2 !== 0 ? "reverse" : ""}`}>
                      <div className="journey-card-content">
                        <div className="journey-step-number">{String(i + 1).padStart(2, "0")}</div>
                        <div className="journey-icon"><i className={step.icon}></i></div>
                        <h3>{t(step.titleKey)}</h3>
                        <p>{t(step.descKey)}</p>
                      </div>
                      <ParallaxSection speed={0.15}>
                        <div className="journey-card-image">
                          <img src={step.img} alt={t(step.titleKey)} />
                        </div>
                      </ParallaxSection>
                    </div>
                  </ScrollSlideIn>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features with staggered scroll reveal */}
        <section className="features">
          <div className="container">
            <ScrollZoomReveal>
              <div className="section-header">
                <h2>
                  <TextReveal text={t("features.title")} className="section-title-reveal" />
                </h2>
                <LineReveal delay={0.3}>
                  <p>{t("features.subtitle")}</p>
                </LineReveal>
              </div>
            </ScrollZoomReveal>
            <div className="cards-grid">
              {[
                { icon: "fas fa-laptop-code", title: t("features.digital"), desc: t("features.digitalDesc"), link: "/elektrotehnicka" },
                { icon: "fas fa-chalkboard-user", title: t("features.quality"), desc: t("features.qualityDesc"), link: "/nastavnici" },
                { icon: "fas fa-futbol", title: t("features.sport"), desc: t("features.sportDesc"), link: "/sport" },
              ].map((card, i) => (
                <ScrollSlideIn key={i} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="card">
                    <div className="card-icon"><i className={card.icon}></i></div>
                    <h3 className="font-display">{card.title}</h3>
                    <p>{card.desc}</p>
                    <Link to={card.link} className="card-link">{t("features.learnMore")} <i className="fas fa-chevron-right"></i></Link>
                  </div>
                </ScrollSlideIn>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive image band */}
        <section className="immersive-band">
          <ParallaxSection speed={0.4}>
            <div className="immersive-images">
              <img src={lobbyLogo} alt="" className="immersive-img" />
              <img src={classroom3} alt="" className="immersive-img" />
              <img src={schoolExterior} alt="" className="immersive-img" />
            </div>
          </ParallaxSection>
          <div className="immersive-overlay">
            <ScrollZoomReveal>
              <h2>{t("scroll.immersiveTitle")}</h2>
              <p>{t("scroll.immersiveDesc")}</p>
            </ScrollZoomReveal>
          </div>
        </section>

        {/* Departments / Струки */}
        <DepartmentsSection />

        {/* Why Us */}
        <WhyUsSection />

        {/* Testimonial */}
        <TestimonialSection />

        {/* News with scroll reveals */}
        <section className="projects-section">
          <div className="container">
            <ScrollRevealSection>
              <div className="section-header">
                <h2>{t("home.newsTitle")}</h2>
                <p>{t("home.newsSubtitle")}</p>
              </div>
            </ScrollRevealSection>
            <div className="projects-grid">
              {latestNews.map((item, i) => (
                <ScrollSlideIn key={i} direction={i === 1 ? "right" : "left"}>
                  <Link to={`/novini/${item.slug}`} className="project-card" style={{ textDecoration: "none", display: "block" }}>
                    <i className={item.icon}></i>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', color: '#9FBDD6' }}>{t(item.dateKey)}</span>
                    </div>
                    <h3>{t(item.titleKey)}</h3>
                    <p>{t(item.descriptionKey)}</p>
                  </Link>
                </ScrollSlideIn>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <ScrollRevealSection>
                <Link to="/novini" className="btn-primary">
                  <i className="fas fa-newspaper"></i> {t("nav.allNews")}
                </Link>
              </ScrollRevealSection>
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
