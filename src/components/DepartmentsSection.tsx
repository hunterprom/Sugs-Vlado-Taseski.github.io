import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollZoomReveal, TextReveal, LineReveal, ScrollSlideIn } from "./TypographyEffects";
import { useState } from "react";

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

interface Profile {
  nameKey: string;
  descKey: string;
  durationKey: string;
  img: string;
  galleryImgs: string[];
}

interface Department {
  key: string;
  icon: string;
  titleKey: string;
  subtitleKey: string;
  link: string;
  color: string;
  profiles: Profile[];
}

const departments: Department[] = [
  {
    key: "elektro",
    icon: "fas fa-microchip",
    titleKey: "elektro.title",
    subtitleKey: "elektro.subtitle",
    link: "/elektrotehnicka",
    color: "#2563eb",
    profiles: [
      {
        nameKey: "elektro.telekom",
        descKey: "elektro.telekomDesc",
        durationKey: "dept.fourYear",
        img: elektroTelekom,
        galleryImgs: [elektroSlika, elektroLab],
      },
    ],
  },
  {
    key: "masinska",
    icon: "fas fa-cogs",
    titleKey: "masinska.title",
    subtitleKey: "masinska.subtitle",
    link: "/masinska",
    color: "#0891b2",
    profiles: [
      {
        nameKey: "masinska.energetski",
        descKey: "masinska.energetskiDesc",
        durationKey: "dept.fourYear",
        img: masinskaEnerg,
        galleryImgs: [masinskaSlika],
      },
      {
        nameKey: "masinska.proizvodno",
        descKey: "masinska.proizvodnoDesc",
        durationKey: "dept.fourYear",
        img: proizvodno,
        galleryImgs: [masinskaLab],
      },
      {
        nameKey: "masinska.kompjutersko",
        descKey: "masinska.kompjuterskoDesc",
        durationKey: "dept.fourYear",
        img: masinskaStruka,
        galleryImgs: [masinskaLab],
      },
    ],
  },
  {
    key: "soobrakaj",
    icon: "fas fa-truck",
    titleKey: "soobrakaj.title",
    subtitleKey: "soobrakaj.subtitle",
    link: "/soobrakajna",
    color: "#059669",
    profiles: [
      {
        nameKey: "soobrakaj.transport",
        descKey: "soobrakaj.transportDesc",
        durationKey: "dept.fourYear",
        img: soobrakajTransport,
        galleryImgs: [soobrakajSlika],
      },
      {
        nameKey: "soobrakaj.zeleznica",
        descKey: "soobrakaj.zeleznicaDesc",
        durationKey: "dept.fourYear",
        img: zeleznicki,
        galleryImgs: [soobrakajLab],
      },
    ],
  },
];

const ProfileCard = ({ profile, accentColor }: { profile: Profile; accentColor: string }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="dept-profile-card"
      style={{ "--dept-accent": accentColor } as React.CSSProperties}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Main image */}
      <div className="dept-profile-img-main">
        <img src={profile.img} alt={t(profile.nameKey)} loading="lazy" />
        <div className="dept-profile-badge">
          <i className="fas fa-graduation-cap"></i> {t(profile.durationKey)}
        </div>
      </div>

      {/* Content */}
      <div className="dept-profile-content">
        <h4>{t(profile.nameKey)}</h4>
        <p>{t(profile.descKey)}</p>
      </div>

      {/* Gallery thumbnails */}
      {profile.galleryImgs.length > 0 && (
        <div className="dept-profile-gallery">
          {profile.galleryImgs.map((img, i) => (
            <div key={i} className="dept-profile-thumb">
              <img src={img} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const DepartmentsSection = () => {
  const { t } = useLanguage();
  const [activeDept, setActiveDept] = useState(0);

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

        {/* Department tabs */}
        <div className="dept-tabs">
          {departments.map((dept, idx) => (
            <button
              key={dept.key}
              className={`dept-tab ${activeDept === idx ? "active" : ""}`}
              style={{ "--dept-accent": dept.color } as React.CSSProperties}
              onClick={() => setActiveDept(idx)}
            >
              <i className={dept.icon}></i>
              <span>{t(dept.titleKey)}</span>
            </button>
          ))}
        </div>

        {/* Active department content */}
        {departments.map((dept, idx) => (
          activeDept === idx && (
            <motion.div
              key={dept.key}
              className="dept-active-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="dept-active-header">
                <div className="dept-active-icon" style={{ background: dept.color }}>
                  <i className={dept.icon}></i>
                </div>
                <div>
                  <h3>{t(dept.titleKey)}</h3>
                  <p>{t(dept.subtitleKey)}</p>
                </div>
              </div>

              <div className="dept-profiles-grid">
                {dept.profiles.map((profile, pi) => (
                  <ProfileCard key={pi} profile={profile} accentColor={dept.color} />
                ))}
              </div>

              <div className="dept-active-footer">
                <Link to={dept.link} className="dept-explore-btn" style={{ background: dept.color }}>
                  {t("features.learnMore")} <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          )
        ))}
      </div>
    </section>
  );
};

export default DepartmentsSection;
