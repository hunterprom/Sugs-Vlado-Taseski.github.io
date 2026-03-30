import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

import classroom1 from "@/assets/classroom-1.jpg";
import elektroLab from "@/assets/elektro-lab.jpg";
import studentsActivities from "@/assets/students-activities.jpg";
import schoolExterior from "@/assets/school-exterior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const floatingCards = [
  { img: classroom1, label: "Ученици во електро-лабораторија", w: 320, h: 420, rot: 2, delay: 0.6, accentPos: "left", accentColor: "#00D4FF" },
  { img: elektroLab, label: "CNC работилница", w: 260, h: 190, rot: -2, delay: 0.75 },
  { img: studentsActivities, label: "Спортска сала", w: 180, h: 180, rot: 0, delay: 0.9 },
  { img: schoolExterior, label: "Erasmus+ Германија", w: 240, h: 170, rot: -1, delay: 1.05, accentPos: "bottom", accentColor: "#FF7043" },
  { img: gallery1, label: "🏅", w: 130, h: 130, rot: 0, delay: 1.2, circle: true },
];

const stats = [
  { icon: "fas fa-clock", target: 65, suffix: "+", labelKey: "hero.stat.years" },
  { icon: "fas fa-users", target: 500, suffix: "+", labelKey: "hero.stat.students" },
  { icon: "fas fa-graduation-cap", target: 90, suffix: "+", labelKey: "hero.stat.teachers" },
  { icon: "fas fa-wrench", target: 3, suffix: "", labelKey: "hero.stat.programs" },
];

const AnimatedCounter = ({ target, suffix, animate }: { target: number; suffix: string; animate: boolean }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(current));
    }, 33);
    return () => clearInterval(timer);
  }, [animate, target]);
  return <span>{value}{suffix}</span>;
};

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 7 + 8,
  delay: Math.random() * 5,
  color: i % 2 === 0 ? "rgba(0,212,255,0.15)" : "rgba(255,112,67,0.12)",
  shape: i % 3 === 0 ? "cross" : "circle",
}));

const BentoCard = ({ card, index, springX, springY }: { card: typeof floatingCards[0]; index: number; springX: any; springY: any }) => {
  const cardX = useTransform(springX, (v: number) => v * (0.3 + index * 0.12));
  const cardY = useTransform(springY, (v: number) => v * (0.3 + index * 0.12));

  return (
    <motion.div
      className={`cin-bento-card ${card.circle ? "cin-bento-circle" : ""}`}
      data-index={index}
      style={{ x: cardX, y: cardY }}
      initial={{ opacity: 0, scale: 0.8, rotate: card.rot * 2 }}
      animate={{ opacity: 1, scale: 1, rotate: card.rot }}
      transition={{ duration: 0.6, delay: card.delay, type: "spring", stiffness: 80 }}
    >
      <motion.div
        className="cin-bento-inner"
        animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
        transition={{ duration: 3.5 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      >
        {card.accentPos === "left" && <div className="cin-accent-bar cin-accent-left" style={{ background: card.accentColor }} />}
        {card.accentPos === "bottom" && <div className="cin-accent-bar cin-accent-bottom" style={{ background: card.accentColor }} />}
        <img src={card.img} alt={card.label} />
        <div className="cin-bento-label">{card.label}</div>
      </motion.div>
    </motion.div>
  );
};

const CinematicHero = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.5 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const s = 0.15;

  return (
    <motion.section className="cin-hero noise-overlay" ref={heroRef} onMouseMove={handleMouseMove}>
      <motion.div className="cin-hero-bg" style={{ y: bgY }}>
        <div className="cin-hero-gradient" />
        <div className="cin-hero-grid" />
        <div className="cin-blob cin-blob-cyan" />
        <div className="cin-blob cin-blob-orange" />
      </motion.div>

      <div className="cin-particles">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`cin-particle cin-particle-${p.shape}`}
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: p.shape === "circle" ? p.color : "transparent" }}
            animate={{ y: [0, -30, 0, 20, 0], x: [0, 15, -10, 5, 0], opacity: [0.3, 0.7, 0.4, 0.6, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="container cin-hero-inner">
        <div className="cin-hero-content">
          <motion.div className="cin-badge" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: s }}>
            <span className="cin-badge-dot" />
            <i className="fas fa-star-of-life" /> Основано 1959 • Скопје, Северна Македонија
          </motion.div>

          <motion.h1 className="cin-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: s * 2 }}>
            Твојата техничка иднина<br />започнува <span className="cin-accent-text">тука.</span>
          </motion.h1>

          <motion.p className="cin-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: s * 3 }}>
            Три технички струки. 500+ ученици. 65 години традиција. Модерни лаборатории и Erasmus+ можности.
          </motion.p>

          <motion.div className="cin-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: s * 4 }}>
            <Link to="/upisi" className="cin-btn-primary">
              Запиши се за 2026/27 <i className="fas fa-arrow-right" />
            </Link>
            <Link to="/nastava" className="cin-btn-secondary">
              Истражи ги програмите
            </Link>
          </motion.div>

          <motion.div className="cin-trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: s * 5 }}>
            <span>✓ Erasmus+ партнер</span>
            <span>✓ МОН акредитирано</span>
            <span>✓ 65+ години</span>
          </motion.div>
        </div>

        <div className="cin-bento">
          {floatingCards.map((card, i) => (
            <BentoCard key={i} card={card} index={i} springX={springX} springY={springY} />
          ))}
          <svg className="cin-bento-lines" viewBox="0 0 500 500" fill="none">
            <motion.path d="M150 200 Q 250 150, 350 250" stroke="rgba(0,212,255,0.12)" strokeWidth="1.5" strokeDasharray="8 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }} />
          </svg>
        </div>
      </div>

      <motion.div className="cin-stats" ref={statsRef} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: s * 7 }}>
        <div className="container cin-stats-inner">
          {stats.map((st, i) => (
            <div className="cin-stat" key={i}>
              <i className={st.icon} />
              <strong><AnimatedCounter target={st.target} suffix={st.suffix} animate={statsVisible} /></strong>
              <span>{t(st.labelKey)}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="cin-scroll-ind" style={{ opacity: scrollIndicatorOpacity }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <i className="fas fa-chevron-down" />
        </motion.div>
        <span>Скролај</span>
      </motion.div>
    </motion.section>
  );
};

export default CinematicHero;
