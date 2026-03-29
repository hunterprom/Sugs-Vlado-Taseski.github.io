import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollZoomReveal } from "./TypographyEffects";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div className="container">
        <ScrollZoomReveal>
          <div className="cta-inner">
            <motion.div
              className="cta-badge"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <i className="fas fa-graduation-cap"></i>
            </motion.div>
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.subtitle")}</p>
            <div className="cta-buttons">
              <Link to="/upisi" className="btn-primary cta-btn-main">
                <i className="fas fa-arrow-right"></i> {t("cta.enroll")}
              </Link>
              <Link to="/kontakt" className="btn-secondary cta-btn-contact">
                <i className="fas fa-envelope"></i> {t("cta.contact")}
              </Link>
            </div>
          </div>
        </ScrollZoomReveal>
      </div>
    </section>
  );
};

export default CTASection;
