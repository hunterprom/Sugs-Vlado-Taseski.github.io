import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import schoolExterior from "@/assets/school-exterior.jpg";

const stats = [
  { icon: "fas fa-calendar-alt", target: 65, suffix: "+", labelKey: "hero.stat.years" },
  { icon: "fas fa-users", target: 900, suffix: "+", labelKey: "hero.stat.students" },
  { icon: "fas fa-graduation-cap", target: 90, suffix: "+", labelKey: "hero.stat.teachers" },
  { icon: "fas fa-wrench", target: 8, suffix: "", labelKey: "hero.stat.programs" },
];

const AnimatedCounter = ({ target, suffix, animate }: { target: number; suffix: string; animate: boolean }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(current));
    }, 25);
    return () => clearInterval(timer);
  }, [animate, target]);
  return <span className="text-primary-foreground">{value}{suffix}</span>;
};

const CinematicHero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.5 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const stagger = 0.15;

  return (
    <div className="cinematic-fullbleed-wrapper">
      <motion.section className="cinematic-fullbleed-hero" ref={heroRef}>
        {/* Full-bleed background image */}
        <motion.div className="cinematic-fullbleed-bg" style={{ scale: bgScale }}>
          <img src={schoolExterior} alt="СЕТУ Гошо Викентиев" />
        </motion.div>

        {/* Gradient overlay: dark left → lighter right */}
        <div className="cinematic-fullbleed-overlay" />

        {/* Noise texture */}
        <div className="cinematic-hero-noise" />

        {/* Content on the left */}
        <div className="container cinematic-fullbleed-content">
          <motion.div
            className="cinematic-badge"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: stagger }}
          >
            <span className="cinematic-badge-dot" />
            <i className="fas fa-star-of-life" /> {t("hero.foundedBadge")}
          </motion.div>

          <motion.h1
            className="cinematic-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stagger * 2 }}
          >
            {t("hero.headline1")}{" "}
            <span className="cinematic-headline-accent">{t("hero.headlineAccent")}</span>
          </motion.h1>

          <motion.p
            className="cinematic-subtitle text-primary-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: stagger * 3 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="cinematic-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: stagger * 4 }}
          >
            <Link to="/upisi" className="cinematic-btn-primary">
              {t("hero.enroll")} <i className="fas fa-arrow-right" />
            </Link>
            <Link to="/nastava" className="cinematic-btn-secondary">
              <i className="fas fa-compass" /> {t("hero.explorePrograms")}
            </Link>
          </motion.div>

          <motion.div
            className="cinematic-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: stagger * 5 }}
          >
            <span><i className="fas fa-award" /> {t("hero.trustErasmus")}</span>
            <span><i className="fas fa-trophy" /> {t("hero.trustMedals")}</span>
            <span><i className="fas fa-laptop-code" /> {t("hero.trustLabs")}</span>
          </motion.div>
        </div>

        {/* Animated progress bar at bottom */}
        <div className="cinematic-progress-bar">
          <div className="cinematic-progress-track" />
        </div>

        {/* Scroll indicator */}
        <motion.div className="cinematic-scroll-indicator" style={{ opacity: scrollIndicatorOpacity }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className="fas fa-chevron-down" />
          </motion.div>
          <span>{t("hero.scrollMore")}</span>
        </motion.div>
      </motion.section>

      {/* Stats strip — BELOW hero as separate bar */}
      <div className="cinematic-stats-bar" ref={statsRef}>
        <div className="container cinematic-stats-inner">
          {stats.map((s, i) => (
            <div className="cinematic-stat text-primary-foreground" key={i}>
              <i className={s.icon} />
              <strong><AnimatedCounter target={s.target} suffix={s.suffix} animate={statsVisible} /></strong>
              <span className="text-primary-foreground">{t(s.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CinematicHero;
