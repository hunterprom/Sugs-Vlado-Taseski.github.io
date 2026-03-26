import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import elektroTelekom from "@/assets/elektro-telekom.png";
import kompjuterskaAvtomatika from "@/assets/kompjuterska-avtomatika.png";
import ImageModal from "../components/ImageModal";

const ElektrotehnickaPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero elektro-hero">
          <div className="container">
            <div className="struka-header">
              <div className="struka-icon"><i className="fas fa-microchip"></i></div>
              <h1>{t("elektro.title")}</h1>
              <p>{t("elektro.subtitle")}</p>
            </div>
          </div>
        </section>

        <section className="profili-section">
          <div className="container">
            <h2 className="section-title">{t("elektro.profiles")}</h2>
            <div className="profili-grid">
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-mobile-alt"></i></div>
                <h3>{t("elektro.telekom")}</h3>
                <ImageModal src={elektroTelekom} alt={t("elektro.telekom")} className="profil-card-img" />
                <p>{t("elektro.telekomDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Дигитална електроника</li>
                  <li><i className="fas fa-check-circle"></i> Телекомуникациски системи</li>
                  <li><i className="fas fa-check-circle"></i> Мобилни технологии</li>
                  <li><i className="fas fa-check-circle"></i> Сервисирање на електронски уреди</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-robot"></i></div>
                <h3>{t("elektro.kompjuterska")}</h3>
                <ImageModal src={kompjuterskaAvtomatika} alt={t("elektro.kompjuterska")} className="profil-card-img" />
                <p>{t("elektro.kompjuterskaDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> PLC програмирање</li>
                  <li><i className="fas fa-check-circle"></i> Индустриска роботика</li>
                  <li><i className="fas fa-check-circle"></i> Автоматизација на процеси</li>
                  <li><i className="fas fa-check-circle"></i> Микроконтролери</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="moznosti-section">
          <div className="container">
            <div className="moznosti-content">
              <h2><i className="fas fa-briefcase"></i> {t("elektro.employment")}</h2>
              <div className="moznosti-grid">
                <div className="moznost-card"><i className="fas fa-building"></i><h3>Енергетски компании</h3><p>EVN Македонија, МЕПСО</p></div>
                <div className="moznost-card"><i className="fas fa-wifi"></i><h3>Телеком оператори</h3><p>Македонски Телеком, А1, LycaMobile</p></div>
                <div className="moznost-card"><i className="fas fa-laptop-code"></i><h3>ИТ и сервисни центри</h3><p>ИТ компании, сервисни центри</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>Сопствен бизнис</h3><p>Електроника и автоматика</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="nastava-section">
          <div className="container">
            <h2 className="section-title">{t("elektro.curriculum")}</h2>
            <div className="nastava-grid">
              <div className="nastava-card">
                <h3><i className="fas fa-book"></i> {t("elektro.theory")}</h3>
                <ul><li>Електротехника</li><li>Електроника</li><li>Дигитална електроника</li><li>Микропроцесори</li><li>Телекомуникации</li></ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> {t("elektro.practice")}</h3>
                <ul><li>Лабораториски вежби</li><li>Практика во компании</li><li>Проектна настава</li><li>Работа со современа опрема</li><li>Симулации и софтверски алатки</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/" className="back-button"><i className="fas fa-arrow-left"></i> {t("back")}</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ElektrotehnickaPage;
