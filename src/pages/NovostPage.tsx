import { useParams, Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import { noviniData } from "../data/noviniData";
import "./StaticHomePage.css";

const NovostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const novost = noviniData.find((n) => n.slug === slug);

  if (!novost) {
    return (
      <>
        <SiteHeader />
        <section className="struka-hero">
          <div className="container struka-header">
            <h1>{t("novost.notFound")}</h1>
            <p>{t("novost.notFoundDesc")}</p>
          </div>
        </section>
        <section className="back-section">
          <div className="container">
            <Link to="/novini" className="back-button">
              <i className="fas fa-arrow-left"></i> {t("novost.backToNews")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <section className="struka-hero">
        <div className="container struka-header">
          <div className="struka-icon">
            <i className={novost.icon}></i>
          </div>
          <h1>{t(novost.titleKey)}</h1>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
            <span className="badge">{t(novost.categoryKey)}</span>
            <span style={{ fontSize: "0.85rem", color: "#90CAF9" }}>{t(novost.dateKey)}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            lineHeight: 1.8,
            color: "#2E6899",
            fontSize: "1rem",
          }}>
            {t(novost.contentKey).split("\n").map((line, i) => {
              if (!line.trim()) return <br key={i} />;
              if (line.startsWith("•")) return <p key={i} style={{ paddingLeft: "20px" }}>{line}</p>;
              if (line === line.toUpperCase() && line.length > 5) return <h3 key={i} style={{ color: "#4B8BBE", marginTop: "20px", marginBottom: "10px" }}>{line}</h3>;
              return <p key={i} style={{ marginBottom: "8px" }}>{line}</p>;
            })}
          </div>
        </div>
      </section>

      <section className="back-section">
        <div className="container">
          <Link to="/novini" className="back-button">
            <i className="fas fa-arrow-left"></i> {t("novost.backToNews")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default NovostPage;
