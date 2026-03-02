import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Wrench, Car, Cpu, ArrowRight } from "lucide-react";
import elektroImg from "@/assets/elektro-lab.jpg";
import masinskiImg from "@/assets/masinski-lab.jpg";
import soobrakajImg from "@/assets/soobrakaj-lab.jpg";

const programs = [
  {
    icon: Zap,
    title: "Електротехничар",
    image: elektroImg,
    desc: "Научи електроника, автоматика и програмирање. Работи со модерна опрема и стекни вештини барани на пазарот.",
    skills: ["Електроника", "Програмирање", "Автоматика", "Мрежи"],
    career: "Електроинженер, ИТ техничар, Телеком специјалист",
  },
  {
    icon: Wrench,
    title: "Машински техничар",
    image: masinskiImg,
    desc: "Проектирај, конструирај и произведувај со CNC машини. Практична настава во модерни работилници.",
    skills: ["CAD/CAM", "CNC машини", "Конструкции", "Термотехника"],
    career: "Машински инженер, CNC оператор, Проектант",
  },
  {
    icon: Car,
    title: "Сообраќајна струка",
    image: soobrakajImg,
    desc: "Планирај и управувај сообраќајни системи. Логистика, безбедност и модерен транспорт.",
    skills: ["Логистика", "Безбедност", "Планирање", "Транспорт"],
    career: "Сообраќаен инженер, Логистичар, Планер",
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background pt-28 md:pt-32" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm mb-4">
            📚 Настава
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Наши <span className="text-gradient-primary">струки</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Избери ја насоката која најдобро ти одговара и стекни знаење за иднината.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                    <prog.icon className="text-primary-foreground" size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{prog.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{prog.desc}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {prog.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Career */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Кариера:</span> {prog.career}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional programs hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground">
            И уште повеќе насоки – <span className="font-semibold text-foreground">Компјутерска техника</span>,{" "}
            <span className="font-semibold text-foreground">Енергетика</span> и други.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
