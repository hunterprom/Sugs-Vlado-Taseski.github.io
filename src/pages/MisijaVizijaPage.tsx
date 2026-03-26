import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

const MisijaVizijaPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon"><i className="fas fa-bullseye"></i></div>
            <h1>{t("misija.title")}</h1>
            <p>{t("misija.subtitle")}</p>
          </div>
        </section>

        <section className="mission-section">
          <div className="container">
            <div className="mission-flex">
              <div className="mission-card">
                <i className="fas fa-bullseye"></i>
                <h3>{t("misija.missionTitle")}</h3>
                <p>{t("misija.missionText")}</p>
              </div>
              <div className="mission-card">
                <i className="fas fa-eye"></i>
                <h3>{t("misija.visionTitle")}</h3>
                <p>{t("misija.visionText")}</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "50px 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px", textAlign: "center" }}>
                <i className="fas fa-star"></i> {t("misija.values")}
              </h2>
              <div className="profili-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-handshake"></i></div>
                  <h3>{t("misija.cooperation")}</h3>
                  <p>{t("misija.cooperationDesc")}</p>
                </div>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-lightbulb"></i></div>
                  <h3>{t("misija.innovation")}</h3>
                  <p>{t("misija.innovationDesc")}</p>
                </div>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-balance-scale"></i></div>
                  <h3>{t("misija.equality")}</h3>
                  <p>{t("misija.equalityDesc")}</p>
                </div>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-award"></i></div>
                  <h3>{t("misija.qualityVal")}</h3>
                  <p>{t("misija.qualityDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/" className="back-button">
              <i className="fas fa-arrow-left"></i> {t("back")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default MisijaVizijaPage;
