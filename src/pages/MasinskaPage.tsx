import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import masinskaSlika1 from "@/assets/masinska-slika-1.jpg";

const MasinskaPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero masinski-hero">
          <div className="container">
            <div className="struka-header">
              <div className="struka-icon"><i className="fas fa-cogs"></i></div>
              <h1>{t("masinska.title")}</h1>
              <p>{t("masinska.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="media-section">
          <div className="container">
            <h2 className="section-title">{t("media.title")}</h2>
            <div className="media-grid">
              <div className="media-item">
                <img src={masinskaSlika1} alt={t("masinska.title")} className="media-img" />
              </div>
              <div className="media-item">
                <video controls className="media-video" preload="metadata">
                  <source src="/videos/masinska-video-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="profili-section">
          <div className="container">
            <h2 className="section-title">{t("masinska.profiles")}</h2>
            <div className="profili-grid">
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-fire"></i></div>
                <h3>{t("masinska.energetski")}</h3>
                <p>{t("masinska.energetskiDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("masinska.energSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.energSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.energSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.energSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/Nastava2023/%d0%bd%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b5%d0%bd-%d0%9f%d0%bb%d0%b0%d0%bd-%d0%9c%d0%95%d0%a2.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("masinska.viewPlan")}
                </a>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-industry"></i></div>
                <h3>{t("masinska.proizvodno")}</h3>
                <p>{t("masinska.proizvodnoDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("masinska.proizSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.proizSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.proizSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.proizSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/Nastava2023/%d0%9d%d0%b0%d1%81%d1%82%d0%b0%d0%b2%d0%b5%d0%bd-%d0%bf%d0%bb%d0%b0%d0%bd-%d0%a2%d0%9f%d0%9c.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("masinska.viewPlan")}
                </a>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-desktop"></i></div>
                <h3>{t("masinska.kompjutersko")}</h3>
                <p>{t("masinska.kompjuterskoDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> {t("masinska.kompSubj1")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.kompSubj2")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.kompSubj3")}</li>
                  <li><i className="fas fa-check-circle"></i> {t("masinska.kompSubj4")}</li>
                </ul>
                <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/2024/05/Nastaven-plan-TKU.pdf" target="_blank" rel="noopener noreferrer" className="profil-plan-link">
                  <i className="fas fa-file-pdf"></i> {t("masinska.viewPlan")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="moznosti-section">
          <div className="container">
            <div className="moznosti-content">
              <h2><i className="fas fa-briefcase"></i> {t("masinska.employment")}</h2>
              <div className="moznosti-grid">
                <div className="moznost-card"><i className="fas fa-industry"></i><h3>{t("masinska.emp1")}</h3><p>{t("masinska.emp1Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-wrench"></i><h3>{t("masinska.emp2")}</h3><p>{t("masinska.emp2Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-cog"></i><h3>{t("masinska.emp3")}</h3><p>{t("masinska.emp3Desc")}</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>{t("masinska.emp4")}</h3><p>{t("masinska.emp4Desc")}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="nastava-section">
          <div className="container">
            <h2 className="section-title">{t("masinska.curriculum")}</h2>
            <div className="nastava-grid">
              <div className="nastava-card">
                <h3><i className="fas fa-book"></i> {t("masinska.theory")}</h3>
                <ul>
                  <li>{t("masinska.theory1")}</li>
                  <li>{t("masinska.theory2")}</li>
                  <li>{t("masinska.theory3")}</li>
                  <li>{t("masinska.theory4")}</li>
                  <li>{t("masinska.theory5")}</li>
                  <li>{t("masinska.theory6")}</li>
                </ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> {t("masinska.practice")}</h3>
                <ul>
                  <li>{t("masinska.practice1")}</li>
                  <li>{t("masinska.practice2")}</li>
                  <li>{t("masinska.practice3")}</li>
                  <li>{t("masinska.practice4")}</li>
                  <li>{t("masinska.practice5")}</li>
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

export default MasinskaPage;
