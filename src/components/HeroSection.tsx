import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="СУГС Владо Тасевски – модерно училиште"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-heading font-semibold text-sm mb-6 backdrop-blur-sm border border-secondary/30">
              📚 Упис 2025/2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6"
          >
            Твојата иднина{" "}
            <span className="text-secondary">започнува</span> тука
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-primary-foreground/85 mb-10 max-w-2xl font-light leading-relaxed"
          >
            СУГС „Владо Тасевски" – модерно училиште за електротехника, машинство и сообраќај.
            Стекни знаење, практика и диплома за успешна кариера.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/kontakt"
              className="px-8 py-4 rounded-xl bg-gradient-secondary font-heading font-bold text-secondary-foreground hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
            >
              Запиши се →
            </Link>
            <Link
              to="/nastava"
              className="px-8 py-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-heading font-semibold hover:bg-primary-foreground/20 transition-all active:scale-95"
            >
              Види струки
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
