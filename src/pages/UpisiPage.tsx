import { Link } from "react-router-dom";
import "./StaticHomePage.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const UpisiPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" style={{ padding: "40px 0 50px" }}>
          <div className="container">
            <span className="badge"><i className="fas fa-user-graduate"></i> Уписи 2025/2026</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-dark)", marginTop: "16px", marginBottom: "20px" }}>
              Запишете се во СУГС „Владо Тасевски"
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-medium)", maxWidth: "700px" }}>
              Изберете ја вашата иднина! Ние сме тука за да ви помогнеме.
            </p>
          </div>
        </section>

        <section className="features" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="section-header">
              <h2>Достапни струки за упис</h2>
              <p>Одберете ја струката што најмногу ви одговара</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><i className="fas fa-car"></i></div>
                <h3>Сообраќајна струка</h3>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>Техничар за транспорт и шпедиција</li>
                  <li>Техничар за железнички сообраќај</li>
                </ul>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-bolt"></i></div>
                <h3>Електротехничка струка</h3>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>Електротехничар за електроника и телекомуникации</li>
                  <li>Електротехничар за компјутерска техника и автоматика</li>
                </ul>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-cogs"></i></div>
                <h3>Машинска струка</h3>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>Машинско-енергетски техничар</li>
                  <li>Техничар за производно машинство</li>
                  <li>Инсталатер за греење и климатизација</li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <a href="https://sugsvladotasevski.edu.mk/upisi/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
                <i className="fas fa-external-link-alt"></i> Повеќе информации за уписи
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default UpisiPage;
