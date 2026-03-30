import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const SiteFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="new-footer">
      <div className="container">
        <div className="footer-4col">
          {/* Brand */}
          <div className="footer-col">
            <div className="footer-brand">
              <i className="fas fa-school" style={{ fontSize: '1.4rem', color: '#00D4FF' }} />
              <div>
                <h4>СУГС „Владо Тасевски"</h4>
                <span>Скопје</span>
              </div>
            </div>
            <p className="footer-desc">Модерно техничко училиште со 65+ години традиција. Електротехника, машинство и сообраќај.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h5>Навигација</h5>
            <ul>
              <li><Link to="/">Дома</Link></li>
              <li><Link to="/za-nas">За нас</Link></li>
              <li><Link to="/nastava">Програми</Link></li>
              <li><Link to="/upisi">Упис</Link></li>
              <li><Link to="/novini">Новости</Link></li>
              <li><Link to="/kontakt">Контакт</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h5>Ресурси</h5>
            <ul>
              <li><a href="https://ednevnik.edu.mk" target="_blank" rel="noopener noreferrer">Е-Дневник ↗</a></li>
              <li><a href="https://lms.schools.mk" target="_blank" rel="noopener noreferrer">LMS Schools ↗</a></li>
              <li><a href="https://e-uslugi.mon.gov.mk" target="_blank" rel="noopener noreferrer">МОН ↗</a></li>
              <li><a href="https://na.org.mk/Home/ErasmusPlus" target="_blank" rel="noopener noreferrer">Erasmus+ ↗</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Контакт</h5>
            <ul className="footer-contact-list">
              <li><i className="fas fa-map-marker-alt" /> III Македонска бригада бб, 1000 Скопје</li>
              <li><i className="fas fa-phone" /> <a href="tel:+38922400040">+389 2 240 00 40</a></li>
              <li><i className="fas fa-envelope" /> <a href="mailto:sugs-vladotasevski-skopje@schools.mk">sugs-vladotasevski-skopje@schools.mk</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 СУГС „Владо Тасевски" — Скопје. Сите права задржани.</p>
          <button className="footer-back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <i className="fas fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
