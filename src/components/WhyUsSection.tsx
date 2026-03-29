import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollSlideIn, ScrollZoomReveal, TextReveal, LineReveal } from "./TypographyEffects";

const WhyUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: "fas fa-trophy", titleKey: "whyus.competitions", descKey: "whyus.competitionsDesc" },
    { icon: "fas fa-globe-europe", titleKey: "whyus.erasmus", descKey: "whyus.erasmusDesc" },
    { icon: "fas fa-dumbbell", titleKey: "whyus.sports", descKey: "whyus.sportsDesc" },
    { icon: "fas fa-tools", titleKey: "whyus.practical", descKey: "whyus.practicalDesc" },
    { icon: "fas fa-landmark", titleKey: "whyus.tradition", descKey: "whyus.traditionDesc" },
    { icon: "fas fa-users", titleKey: "whyus.community", descKey: "whyus.communityDesc" },
  ];

  return (
    <section className="whyus-section">
      <div className="container">
        <ScrollZoomReveal>
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <h2>
              <TextReveal text={t("whyus.title")} className="section-title-reveal" />
            </h2>
            <LineReveal delay={0.2}>
              <p>{t("whyus.subtitle")}</p>
            </LineReveal>
          </div>
        </ScrollZoomReveal>

        <div className="whyus-grid">
          {reasons.map((reason, i) => (
            <ScrollSlideIn key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="whyus-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="whyus-icon-wrap">
                  <i className={reason.icon}></i>
                </div>
                <h3>{t(reason.titleKey)}</h3>
                <p>{t(reason.descKey)}</p>
              </motion.div>
            </ScrollSlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
