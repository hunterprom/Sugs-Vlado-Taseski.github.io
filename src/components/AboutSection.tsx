import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 1200, label: "Ученици", suffix: "+" },
  { icon: Users, value: 80, label: "Професори", suffix: "+" },
  { icon: BookOpen, value: 6, label: "Насоки", suffix: "" },
  { icon: Award, value: 65, label: "Години традиција", suffix: "+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted pt-28 md:pt-32" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm mb-4">
            За нас
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Зошто <span className="text-gradient-primary">СУГС Владо Тасевски</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Повеќе од 65 години градиме традиција на квалитетно техничко образование во Скопје.
            Нашите ученици стекнуваат практични вештини за реалниот свет.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary-foreground" size={26} />
              </div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Мисија",
              desc: "Да обезбедиме квалитетно стручно образование кое ги подготвува учениците за успешна кариера и континуиран развој.",
            },
            {
              title: "Визија",
              desc: "Да бидеме водечко техничко училиште во Македонија, препознатливо по иновативност, квалитет и практични резултати.",
            },
            {
              title: "Вредности",
              desc: "Знаење, практика, иновација, тимска работа и одговорност кон заедницата и иднината.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-2 h-10 rounded-full bg-gradient-secondary mb-5" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
