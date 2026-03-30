import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import classroom1 from "@/assets/classroom-1.jpg";
import elektroLab from "@/assets/elektro-lab.png";
import studentsActivities from "@/assets/students-activities.png";
import schoolExterior from "@/assets/school-exterior.jpg";
import gallery1 from "@/assets/gallery-1.png";

const floatingCards = [
  { img: classroom1, label: "Ученици во работилница", w: 300, h: 400, x: 0, y: 0, rot: 2, delay: 0.6 },
  { img: elektroLab, label: "Лабораторија за електротехника", w: 250, h: 200, x: 30, y: -20, rot: -3, delay: 0.75 },
  { img: studentsActivities, label: "Ученици", w: 200, h: 150, x: 60, y: 10, rot: 1.5, delay: 0.9, embedUrl: "https://www.instagram.com/reel/C6_aMVQtpEI/embed/" },
  { img: schoolExterior, label: "Erasmus+ патување", w: 220, h: 180, x: 10, y: 50, rot: -1, delay: 1.05 },
  { img: gallery1, label: "Медал", w: 150, h: 150, x: 55, y: 35, rot: 0, delay: 1.2, circle: true },
];

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

// Floating particles
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 7 + 8,
  delay: Math.random() * 5,
  shape: i % 3 === 0 ? "cross" : "circle",
}));

// Individual card component to avoid hooks-in-loop
const BentoCard = ({ card, index, springX, springY }: { card: typeof floatingCards[0]; index: number; springX: any; springY: any }) => {
  const cardX = useTransform(springX, (v: number) => v * (0.3 + index * 0.12));
  const cardY = useTransform(springY, (v: number) => v * (0.3 + index * 0.12));

  return (
    <motion.div
      className={`cinematic-bento-card ${card.circle ? "cinematic-bento-circle" : ""}`}
      data-index={index}
      style={{ x: cardX, y: cardY }}
      initial={{ opacity: 0, scale: 0.8, rotate: card.rot * 2 }}
      animate={{ opacity: 1, scale: 1, rotate: card.rot }}
      transition={{ duration: 0.5, delay: card.delay, type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="cinematic-bento-card-inner"
        animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      >
        <img src={card.img} alt={card.label} />
        <div className="cinematic-bento-label">{card.label}</div>
      </motion.div>
    </motion.div>
  );
};

const CinematicHero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Stats intersection
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.5 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const stagger = 0.15;

  return (
    <motion.section
      className="cinematic-hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background layers */}
      <motion.div className="cinematic-hero-bg" style={{ y: bgY }}>
        <div className="cinematic-hero-gradient" />
        <div className="cinematic-hero-noise" />
        <div className="cinematic-hero-grid-pattern bg-primary text-secondary-foreground" />
        <div className="cinematic-hero-blob cinematic-blob-cyan" />
        <div className="cinematic-hero-blob cinematic-blob-orange" />
      </motion.div>

      {/* Floating particles */}
      <div className="cinematic-particles">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`cinematic-particle cinematic-particle-${p.shape}`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -10, 5, 0],
              opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container cinematic-hero-inner">
        {/* LEFT — Content */}
        <div className="cinematic-hero-content">
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

        {/* RIGHT — Bento Cards */}
        <div className="cinematic-bento">
          {floatingCards.map((card, i) => (
            <BentoCard key={i} card={card} index={i} springX={springX} springY={springY} />
          ))}

          {/* SVG connection lines */}
          <svg className="cinematic-bento-lines" viewBox="0 0 500 500" fill="none">
            <motion.path
              d="M150 200 Q 250 150, 350 250"
              stroke="rgba(0,212,255,0.15)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.path
              d="M100 350 Q 200 300, 300 400"
              stroke="rgba(255,165,0,0.1)"
              strokeWidth="1"
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
            />
          </svg>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="cinematic-stats-strip text-primary-foreground bg-foreground/70 backdrop-blur-md"
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: stagger * 7 }}
      >
        <div className="container cinematic-stats-inner">
          {stats.map((s, i) => (
            <div className="cinematic-stat text-primary-foreground" key={i}>
              <i className={s.icon} />
              <strong><AnimatedCounter target={s.target} suffix={s.suffix} animate={statsVisible} /></strong>
              <span className="text-primary-foreground">{t(s.labelKey)}</span>
            </div>
          ))}
        </div>
      </motion.div>

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
  );
};

export default CinematicHero;
