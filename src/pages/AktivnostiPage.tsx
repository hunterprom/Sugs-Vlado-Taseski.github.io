import { Link } from "react-router-dom";
import "./StaticHomePage.css";
import PageHeader from "../components/PageHeader";
import { noviniData } from "../data/noviniData";
import { useLanguage } from "@/i18n/LanguageContext";

const AktivnostiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader />
      <main>
        <section className="hero" style={{ padding: "40px 0 50px" }}>
          <div className="container">
            <span className="badge"><i className="fas fa-calendar-alt"></i> Активности</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-dark)", marginTop: "16px", marginBottom: "20px" }}>
              Новости и активности
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-medium)", maxWidth: "700px" }}>
              Следете ги најновите случувања во нашето училиште
            </p>
          </div>
        </section>

        <section className="news-section" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="news-grid">
              {noviniData.map((item, i) => (
                <div className="news-card" key={item.slug}>
                  <div className="news-content">
                    <span className="news-date"><i className="far fa-calendar-alt"></i> {t(item.dateKey)}</span>
                    <h4>{t(item.titleKey)}</h4>
                    <p>{t(item.descriptionKey)}</p>
                    <Link to={`/novini/${item.slug}`} className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            <p>&copy; Copyright 2026 СУГС &bdquo;Владо Тасевски&ldquo; - Скопје</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AktivnostiPage;
