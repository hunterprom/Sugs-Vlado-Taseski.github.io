import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Trophy, Globe, Plane, Camera, Calendar } from "lucide-react";
import activitiesImg from "@/assets/students-activities.png";

const activities = [
  { icon: Trophy, title: "Натпревари", id: "natprevari", desc: "Учество на национални и меѓународни натпревари по техника, роботика и иновации." },
  { icon: Globe, title: "Еразмус+", id: "erazmus", desc: "Меѓународни проекти и размена на ученици со европски училишта." },
  { icon: Plane, title: "Екскурзии", id: "ekskurzii", desc: "Едукативни патувања низ Македонија и Европа за практично учење." },
  { icon: Camera, title: "Проекти", id: "proekti", desc: "Ученички проекти, работилници и хакатони за развој на креативноста." },
  { icon: Calendar, title: "Настани", id: "nastani", desc: "Училишни приредби, денови на отворени врати и кариерни саеми." },
];

const ActivitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-2", "ring-primary", "ring-offset-2");
          setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2000);
        }
      }, 400);
    }
  }, [location.hash]);

  return (
    <section className="section-padding bg-muted pt-28 md:pt-32" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm mb-4">
            🎯 Активности
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Повеќе од <span className="text-gradient-primary">настава</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нашите ученици учествуваат во бројни активности кои ги подготвуваат за реалниот свет.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-hero)" }}
          >
            <img
              src={activitiesImg}
              alt="Ученици во активности"
              className="w-full h-80 lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </motion.div>

          <div className="space-y-5">
            {activities.map((act, i) => (
              <motion.div
                key={act.title}
                id={act.id}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all scroll-mt-32"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <act.icon className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{act.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{act.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
