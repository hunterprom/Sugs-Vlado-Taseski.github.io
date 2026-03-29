import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import soobrakajSlika1 from "@/assets/soobrakaj-slika-1.jpg";

const SoobrakajnaPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero soobrakaj-hero">
          <div className="container">
            <div className="struka-header">
              <div className="struka-icon"><i className="fas fa-truck"></i></div>
              <h1>{t("soobrakaj.title")}</h1>
              <p>{t("soobrakaj.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="media-section">
          <div className="container">
            <h2 className="section-title">{t("media.title")}</h2>
            <div className="media-grid">
              <div className="media-item">
                <img src={soobrakajSlika1} alt={t("soobrakaj.title")} className="media-img" />
              </div>
              <div className="media-item">
                <video controls className="media-video" preload="metadata">
                  <source src="/videos/soobrakaj-video-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="profili-section">
          <div className="container">
            <h2 className="section-title">{t("soobrakaj.profiles")}</h2>
            <div className="profili-grid">
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-shipping-fast"></i></div>
                <h3>{t("soobrakaj.transport")}</h3>
                <p>{t("soobrakaj.transportDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.transportSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.transportSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.transportSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.transportSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/Nastava2023/%d0%9d%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b5%d0%bd-%d0%bf%d0%bb%d0%b0%d0%bd-%d0%a2%d0%a8.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("soobrakaj.viewPlan")}
                </a>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-subway"></i></div>
                <h3>{t("soobrakaj.zeleznica")}</h3>
                <p>{t("soobrakaj.zeleznicaDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.zelezSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.zelezSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.zelezSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("soobrakaj.zelezSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/Nastava2023/%d0%9d%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b5%d0%bd-%d0%bf%d0%bb%d0%b0%d0%bd-%d0%96%d0%a1.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("soobrakaj.viewPlan")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="moznosti-section">
          <div className="container">
            <div className="moznosti-content">
              <h2><i className="fas fa-briefcase"></i> {t("soobrakaj.employment")}</h2>
              <div className="moznosti-grid">
                <div className="moznost-card"><i className="fas fa-ship"></i><h3>{t("soobrakaj.emp1")}</h3><p>{t("soobrakaj.emp1Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-bus"></i><h3>{t("soobrakaj.emp2")}</h3><p>{t("soobrakaj.emp2Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-train"></i><h3>{t("soobrakaj.emp3")}</h3><p>{t("soobrakaj.emp3Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>{t("soobrakaj.emp4")}</h3><p>{t("soobrakaj.emp4Desc")}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="nastava-section">
          <div className="container">
            <h2 className="section-title">{t("soobrakaj.curriculum")}</h2>
            <div className="nastava-grid">
              <div className="nastava-card">
                <h3><i className="fas fa-book"></i> {t("soobrakaj.theory")}</h3>
                <ul>
                  <li>{t("soobrakaj.theory1")}</li>
                  <li>{t("soobrakaj.theory2")}</li>
                  <li>{t("soobrakaj.theory3")}</li>
                  <li>{t("soobrakaj.theory4")}</li>
                  <li>{t("soobrakaj.theory5")}</li>
                  <li>{t("soobrakaj.theory6")}</li>
                </ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> {t("soobrakaj.practice")}</h3>
                <ul>
                  <li>{t("soobrakaj.practice1")}</li>
                  <li>{t("soobrakaj.practice2")}</li>
                  <li>{t("soobrakaj.practice3")}</li>
                  <li>{t("soobrakaj.practice4")}</li>
                  <li>{t("soobrakaj.practice5")}</li>
                </ul>
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

export default SoobrakajnaPage;
