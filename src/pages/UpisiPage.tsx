import { Link } from "react-router-dom";
import "./StaticHomePage.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";

const UpisiPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" style={{ padding: "40px 0 50px" }}>
          <div className="container">
            <span className="badge"><i className="fas fa-user-graduate"></i> {t("upisi.badge")}</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-dark)", marginTop: "16px", marginBottom: "20px" }}>
              {t("upisi.title")}
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-medium)", maxWidth: "700px" }}>
              {t("upisi.subtitle")}
            </p>
          </div>
        </section>

        <section className="features" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="section-header">
              <h2>{t("upisi.availableDept")}</h2>
              <p>{t("upisi.chooseDept")}</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><i className="fas fa-car"></i></div>
                <h3>{t("upisi.soobrakaj")}</h3>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>{t("soobrakaj.transport")}</li>
                  <li>{t("soobrakaj.zeleznica")}</li>
                  
                </ul>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-bolt"></i></div>
                <h3>{t("upisi.elektro")}</h3>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>{t("elektro.telekom")}</li>
                  <li>{t("elektro.kompjuterska")}</li>
                </ul>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-cogs"></i></div>
                <h3>{t("upisi.masinska")}</h3>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>{t("masinska.energetski")}</li>
                  <li>{t("masinska.proizvodno")}</li>
                  
                  <li>{t("masinska.kompjutersko")}</li>
                </ul>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
              <a href="/docs/интерен-оглас-второ-пријавување.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                <i className="fas fa-file-pdf"></i> {t("upisi.moreInfo")}
              </a>
              <Link to="/poeni-kalkulator" className="btn-secondary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                <i className="fas fa-calculator"></i> {t("upisi.calculator")}
              </Link>
              <Link to="/rezultati" className="btn-secondary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                <i className="fas fa-list-ol"></i> {t("upisi.results")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default UpisiPage;
