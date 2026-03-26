import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const SiteFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          <div className="footer-col">
            <h4><i className="fas fa-school"></i> СУГС „Владо Тасевски"</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> III Македонска бригада бб, 1000 Скопје</li>
              <li><i className="fas fa-phone"></i> <a href="tel:+38922400040">02 2400 040</a></li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:sugs-vladotasevski-skopje@schools.mk">sugs-vladotasevski-skopje@schools.mk</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t("footer.usefulLinks")}</h4>
            <ul>
              <li><a href="https://ednevnik.edu.mk" target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-right"></i> {t("top.eDiary")}</a></li>
              <li><a href="https://massum.org/mk/" target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-right"></i> МАССУМ</a></li>
              <li><Link to="/kontakt"><i className="fas fa-chevron-right"></i> {t("footer.contact")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>{t("footer.copyright")}</p>
          <p style={{ marginTop: '8px', fontSize: '0.75rem', opacity: 0.8 }}>
            {t("footer.madeBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
