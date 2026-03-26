import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import gallery1 from "@/assets/училница-1.png";
import gallery2 from "@/assets/училница-2.png";
import gallery3 from "@/assets/училница-3.png";
import gallery4 from "@/assets/училиште-надвор.png";
import gallery5 from "@/assets/училиште-лоби.png";
import gallery6 from "@/assets/училиште-фонтана.png";

const images = [
  { src: gallery1, alt: "Модерна училница", label: "Училници", link: "/za-nas" },
  { src: gallery2, alt: "Училница со опрема", label: "Настава", link: "/za-nas" },
  { src: gallery3, alt: "Светла училница", label: "Простории", link: "/za-nas" },
  { src: gallery4, alt: "Училиште - надворешност", label: "Нашата зграда", link: "/za-nas" },
  { src: gallery5, alt: "Лоби на училиштето", label: "Лоби", link: "/za-nas" },
  { src: gallery6, alt: "Фонтана во дворот", label: "Двор", link: "/za-nas" },
];

const HomeGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm mb-4">
            📸 Галерија
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Погледни го <span className="text-gradient-primary">животот</span> во училиштето
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нашите ученици учат, создаваат и се забавуваат секој ден.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                i === 0 || i === 3 ? "row-span-1 md:row-span-2 md:h-full" : ""
              }`}
              onClick={() => navigate(img.link)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 || i === 3 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-primary-foreground font-heading font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label} →
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-3 md:hidden">
                <span className="text-primary-foreground font-heading font-semibold text-sm">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
