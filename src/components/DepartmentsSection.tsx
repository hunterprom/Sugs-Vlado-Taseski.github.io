import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollZoomReveal, TextReveal, LineReveal, ScrollSlideIn } from "./TypographyEffects";

import elektroLab from "@/assets/elektro-lab.jpg";
import elektroSlika from "@/assets/elektro-slika-1.jpg";
import elektroTelekom from "@/assets/elektro-telekom.png";
import masinskaSlika from "@/assets/masinska-slika-1.jpg";
import masinskaStruka from "@/assets/masinska-struka.png";
import masinskaEnerg from "@/assets/masinska-energetski.png";
import proizvodno from "@/assets/proizvodno-masinstvo.png";
import masinskaLab from "@/assets/masinski-lab.jpg";
import soobrakajSlika from "@/assets/soobrakaj-slika-1.jpg";
import soobrakajTransport from "@/assets/soobrakaj-transport.png";
import soobrakajLab from "@/assets/soobrakaj-lab.jpg";
import zeleznicki from "@/assets/zeleznicki-soobrakaj.png";

const departments = [
  {
    key: "elektro",
    icon: "fas fa-microchip",
    titleKey: "elektro.title",
    subtitleKey: "elektro.subtitle",
    link: "/elektrotehnicka",
    color: "#2563eb",
    profiles: [
      { nameKey: "elektro.telekom", descKey: "elektro.telekomDesc", img: elektroTelekom },
    ],
    images: [elektroSlika, elektroLab],
  },
  {
    key: "masinska",
    icon: "fas fa-cogs",
    titleKey: "masinska.title",
    subtitleKey: "masinska.subtitle",
    link: "/masinska",
    color: "#0891b2",
    profiles: [
      { nameKey: "masinska.energetski", descKey: "masinska.energetskiDesc", img: masinskaEnerg },
      { nameKey: "masinska.proizvodno", descKey: "masinska.proizvodnoDesc", img: proizvodno },
      { nameKey: "masinska.kompjutersko", descKey: "masinska.kompjuterskoDesc", img: masinskaStruka },
    ],
    images: [masinskaSlika, masinskaLab],
  },
  {
    key: "soobrakaj",
    icon: "fas fa-truck",
    titleKey: "soobrakaj.title",
    subtitleKey: "soobrakaj.subtitle",
    link: "/soobrakajna",
    color: "#059669",
    profiles: [
      { nameKey: "soobrakaj.transport", descKey: "soobrakaj.transportDesc", img: soobrakajTransport },
      { nameKey: "soobrakaj.zeleznica", descKey: "soobrakaj.zeleznicaDesc", img: zeleznicki },
    ],
    images: [soobrakajSlika, soobrakajLab],
  },
];

const DepartmentsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="departments-home-section">
      <div className="container">
        <ScrollZoomReveal>
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <h2>
              <TextReveal text={t("home.deptTitle")} className="section-title-reveal" />
            </h2>
            <LineReveal delay={0.2}>
              <p>{t("home.deptSubtitle")}</p>
            </LineReveal>
          </div>
        </ScrollZoomReveal>

        <div className="dept-cards-wrapper">
          {departments.map((dept, idx) => (
            <ScrollSlideIn key={dept.key} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="dept-home-card" style={{ "--dept-accent": dept.color } as React.CSSProperties}>
                <div className="dept-home-card-header">
                  <div className="dept-home-icon">
                    <i className={dept.icon}></i>
                  </div>
                  <div>
                    <h3>{t(dept.titleKey)}</h3>
                    <p className="dept-home-subtitle">{t(dept.subtitleKey)}</p>
                  </div>
                </div>

                {/* Image mosaic */}
                <div className="dept-home-images">
                  {dept.images.map((img, i) => (
                    <motion.div
                      key={i}
                      className="dept-home-img-wrap"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img src={img} alt={t(dept.titleKey)} loading="lazy" />
                    </motion.div>
                  ))}
                </div>

                {/* Profiles */}
                <div className="dept-home-profiles">
                  {dept.profiles.map((profile, pi) => (
                    <div key={pi} className="dept-home-profile">
                      <div className="dept-home-profile-img">
                        <img src={profile.img} alt={t(profile.nameKey)} loading="lazy" />
                      </div>
                      <div className="dept-home-profile-info">
                        <h4>{t(profile.nameKey)}</h4>
                        <p>{t(profile.descKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to={dept.link} className="dept-home-link">
                  {t("features.learnMore")} <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </ScrollSlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
