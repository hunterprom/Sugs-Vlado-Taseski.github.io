import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import rakovodstvo4 from "@/assets/rakovodstvo-4.png";
import rakovodstvo5 from "@/assets/rakovodstvo-5.png";
import rakovodstvo6 from "@/assets/rakovodstvo-6.png";
import ImageModal from "../components/ImageModal";
import "./StaticHomePage.css";

const StrucnaSluzbaPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon"><i className="fas fa-hands-helping"></i></div>
            <h1>{t("strucna.title")}</h1>
            <p>{t("strucna.subtitle")}</p>
          </div>
        </section>

        <section style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="leadership-grid">
              <div className="leader-card">
                <i className="fas fa-chalkboard-user" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>Марија Петровска</h3>
                <p>{t("strucna.pomosnk")}</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-handshake" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>{t("strucna.pedagog")}</h3>
                <p>{t("strucna.pedagog")}</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-heart" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>{t("strucna.psiholog")}</h3>
                <p>{t("strucna.psiholog")}</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-user-friends" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>{t("strucna.defektolog")}</h3>
                <p>{t("strucna.defektolog")}</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-users" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>{t("strucna.sociolog")}</h3>
                <p>{t("strucna.sociolog")}</p>
              </div>
            </div>

            <div style={{ marginTop: "40px", lineHeight: 1.8, color: "#2E6899", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", maxWidth: "800px", margin: "40px auto 0" }}>
              <p>{t("strucna.desc")}</p>
              <p style={{ marginTop: "15px" }}>{t("strucna.roleTitle")}</p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>{t("strucna.role1")}</li>
                <li>{t("strucna.role2")}</li>
                <li>{t("strucna.role3")}</li>
                <li>{t("strucna.role4")}</li>
                <li>{t("strucna.role5")}</li>
              </ul>
            </div>

            <h3 style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px", color: "#4B8BBE", fontSize: "1.4rem" }}>
              <i className="fas fa-images"></i> {t("strucna.gallery")}
            </h3>
            <div className="leadership-gallery">
              <ImageModal src={rakovodstvo4} alt="1" />
              <ImageModal src={rakovodstvo5} alt="2" />
              <ImageModal src={rakovodstvo6} alt="3" />
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/za-nas" className="back-button">
              <i className="fas fa-arrow-left"></i> {t("strucna.back")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default StrucnaSluzbaPage;
