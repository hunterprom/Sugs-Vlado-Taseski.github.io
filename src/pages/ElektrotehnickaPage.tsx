import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import elektroSlika1 from "@/assets/elektro-slika-1.jpg";

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

        {/* Media Section */}
        <section className="media-section">
          <div className="container">
            <h2 className="section-title">{t("media.title")}</h2>
            <div className="media-grid">
              <div className="media-item">
                <img src={elektroSlika1} alt={t("elektro.title")} className="media-img" />
              </div>
              <div className="media-item">
                <video controls className="media-video" preload="metadata">
                  <source src="/videos/elektro-video-1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="media-item">
                <video controls className="media-video" preload="metadata">
                  <source src="/videos/elektro-video-2.mp4" type="video/mp4" />
                </video>
              </div>
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
                <p>{t("elektro.telekomDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("elektro.telekomSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("elektro.telekomSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("elektro.telekomSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("elektro.telekomSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/Nastava2023/%d0%9d%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b5%d0%bd-%d0%bf%d0%bb%d0%b0%d0%bd-%d0%95%d0%a2.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("elektro.viewPlan")}
                </a>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-robot"></i></div>
                <h3>{t("elektro.kompjuterska")}</h3>
                <p>{t("elektro.kompjuterskaDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("elektro.kompSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("elektro.kompSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("elektro.kompSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("elektro.kompSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/Nastava2023/%d0%9d%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b5%d0%bd-%d0%bf%d0%bb%d0%b0%d0%bd-%d0%9a%d0%a2%d0%98%d0%90.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("elektro.viewPlan")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="moznosti-section">
          <div className="container">
            <div className="moznosti-content">
              <h2><i className="fas fa-briefcase"></i> {t("elektro.employment")}</h2>
              <div className="moznosti-grid">
                <div className="moznost-card"><i className="fas fa-building"></i><h3>{t("elektro.emp1")}</h3><p>{t("elektro.emp1Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-wifi"></i><h3>{t("elektro.emp2")}</h3><p>{t("elektro.emp2Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-laptop-code"></i><h3>{t("elektro.emp3")}</h3><p>{t("elektro.emp3Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>{t("elektro.emp4")}</h3><p>{t("elektro.emp4Desc")}</p></div>
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
                <ul>
                  <li>{t("elektro.theory1")}</li>
                  <li>{t("elektro.theory2")}</li>
                  <li>{t("elektro.theory3")}</li>
                  <li>{t("elektro.theory4")}</li>
                  <li>{t("elektro.theory5")}</li>
                </ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> {t("elektro.practice")}</h3>
                <ul>
                  <li>{t("elektro.practice1")}</li>
                  <li>{t("elektro.practice2")}</li>
                  <li>{t("elektro.practice3")}</li>
                  <li>{t("elektro.practice4")}</li>
                  <li>{t("elektro.practice5")}</li>
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

export default ElektrotehnickaPage;
