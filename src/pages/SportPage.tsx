import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

const SportPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="sports-hero">
          <div className="container">
            <div className="section-header">
              <h2>{t("sport.title")}</h2>
              <p>{t("sport.subtitle")}</p>
            </div>
            <div className="sports-grid">
              <div className="sport-card">
                <i className="fas fa-basketball-ball"></i>
                <h3>{t("sport.gym")}</h3>
                <p>{t("sport.gymDesc")}</p>
              </div>
              <div className="sport-card">
                <i className="fas fa-futbol"></i>
                <h3>{t("sport.field")}</h3>
                <p>{t("sport.fieldDesc")}</p>
              </div>
              <div className="sport-card">
                <i className="fas fa-dumbbell"></i>
                <h3>{t("sport.fitness")}</h3>
                <p>{t("sport.fitnessDesc")}</p>
              </div>
            </div>

            <div style={{ marginTop: "40px", lineHeight: 1.8, color: "#2E6899", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", maxWidth: "800px", margin: "40px auto 0" }}>
              <h3 style={{ color: "#4B8BBE", marginBottom: "15px" }}><i className="fas fa-trophy"></i> {t("sport.achievementsTitle")}</h3>
              <p>{t("sport.achievements1")}</p>
              <p style={{ marginTop: "10px" }}>{t("sport.achievements2")}</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default SportPage;
