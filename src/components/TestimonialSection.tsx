import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollZoomReveal } from "./TypographyEffects";

const TestimonialSection = () => {
  const { t } = useLanguage();

  return (
    <section className="testimonial-section">
      <div className="container">
        <ScrollZoomReveal>
          <div className="testimonial-inner">
            <div className="testimonial-quote-mark">"</div>
            <blockquote className="testimonial-text">
              {t("testimonial.quote")}
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-line"></div>
              <p>{t("testimonial.author")}</p>
            </div>
          </div>
        </ScrollZoomReveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
