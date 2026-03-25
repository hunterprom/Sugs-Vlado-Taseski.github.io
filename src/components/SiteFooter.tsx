import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
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
            <h4>Корисни линкови</h4>
            <ul>
              <li><a href="https://ednevnik.edu.mk" target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-right"></i> Е-Дневник</a></li>
              <li><a href="https://massum.org/mk/" target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-right"></i> МАССУМ</a></li>
              <li><Link to="/kontakt"><i className="fas fa-chevron-right"></i> Контакт</Link></li>
            </ul>
          </div>
          <div className="footer-col"></div>
        </div>
        <div className="copyright">
          <p>© 2026 СУГС „Владо Тасевски" - Скопје. Сите права се задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;