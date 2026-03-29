import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

import gallery1 from "@/assets/училница-1.png";
import gallery2 from "@/assets/училница-2.png";
import gallery3 from "@/assets/училница-3.png";
import gallery4 from "@/assets/училиште-надвор.png";
import gallery5 from "@/assets/училиште-лоби.png";
import gallery6 from "@/assets/училиште-фонтана.png";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import classroom4 from "@/assets/classroom-4.jpg";
import solarPanels from "@/assets/solar-panels.jpg";
import outdoorBench from "@/assets/outdoor-bench.jpg";
import fountain from "@/assets/fountain.jpg";
import lobbyLogo from "@/assets/lobby-logo.jpg";
import schoolExterior from "@/assets/school-exterior.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";

const HomeGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();
  const { t } = useLanguage();

  const images = [
    { src: gallery1, altKey: "gallery.img1", labelKey: "gallery.label1", link: "/za-nas" },
    { src: classroom1, altKey: "gallery.img1", labelKey: "gallery.label1", link: "/za-nas" },
    { src: gallery4, altKey: "gallery.img4", labelKey: "gallery.label4", link: "/za-nas" },
    { src: fountain, altKey: "gallery.img6", labelKey: "gallery.label6", link: "/za-nas" },
    { src: lobbyLogo, altKey: "gallery.img5", labelKey: "gallery.label5", link: "/za-nas" },
    { src: classroom2, altKey: "gallery.img1", labelKey: "gallery.label1", link: "/za-nas" },
    { src: solarPanels, altKey: "gallery.img4", labelKey: "gallery.label4", link: "/za-nas" },
    { src: conferenceRoom, altKey: "gallery.img3", labelKey: "gallery.label3", link: "/za-nas" },
    { src: schoolExterior, altKey: "gallery.img4", labelKey: "gallery.label4", link: "/za-nas" },
    { src: classroom3, altKey: "gallery.img1", labelKey: "gallery.label1", link: "/za-nas" },
    { src: outdoorBench, altKey: "gallery.img4", labelKey: "gallery.label4", link: "/za-nas" },
    { src: classroom4, altKey: "gallery.img1", labelKey: "gallery.label1", link: "/za-nas" },
  ];

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
            📸 {t("gallery.title")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t("gallery.heading")} <span className="text-gradient-primary">{t("gallery.headingHighlight")}</span> {t("gallery.headingEnd")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => navigate(img.link)}
            >
              <img
                src={img.src}
                alt={t(img.altKey)}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-primary-foreground font-heading font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {t(img.labelKey)} →
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-3 md:hidden">
                <span className="text-primary-foreground font-heading font-semibold text-sm">
                  {t(img.labelKey)}
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
