import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";

const MisijaVizijaPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h1>Мисија и Визија</h1>
            <p>Нашите цели и визија за иднината на образованието</p>
          </div>
        </section>

        <section className="mission-section">
          <div className="container">
            <div className="mission-flex">
              <div className="mission-card">
                <i className="fas fa-bullseye"></i>
                <h3>Нашата Мисија</h3>
                <p>Средното училиште на Град Скопје „Владо Тасевски" – Скопје е современа образовна институција која образува кадри за потребите на пазарот на трудот, преку реализирање на современи и флексибилни наставни планови и програми.</p>
              </div>
              <div className="mission-card">
                <i className="fas fa-eye"></i>
                <h3>Нашата Визија</h3>
                <p>Да израснеме во ефикасно, ефективно, модерно и меѓуетничко интегрирано училиште, во кое ученикот и неговите потреби ќе бидат во центарот на вниманието.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "50px 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px", textAlign: "center" }}>
                <i className="fas fa-star"></i> Нашите вредности
              </h2>
              <div className="profili-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-handshake"></i></div>
                  <h3>Соработка</h3>
                  <p>Тимска работа помеѓу ученици, наставници и родители за заедничка цел.</p>
                </div>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-lightbulb"></i></div>
                  <h3>Иновација</h3>
                  <p>Современи методи на учење и технолошки напредок во наставата.</p>
                </div>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-balance-scale"></i></div>
                  <h3>Еднаквост</h3>
                  <p>Еднакви можности за сите ученици без разлика на етничка припадност.</p>
                </div>
                <div className="profil-card" style={{ textAlign: "center" }}>
                  <div className="profil-icon"><i className="fas fa-award"></i></div>
                  <h3>Квалитет</h3>
                  <p>Стремеж кон највисоки стандарди во образованието и воспитувањето.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/" className="back-button">
              <i className="fas fa-arrow-left"></i> Назад кон почетна
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default MisijaVizijaPage;
