import { Link } from "react-router-dom";
import "./StaticHomePage.css";
import PageHeader from "../components/PageHeader";

const StrukiPage = () => {
  return (
    <>
      <PageHeader />
      <main>
        <section className="hero" style={{ padding: "40px 0 50px" }}>
          <div className="container">
            <span className="badge"><i className="fas fa-graduation-cap"></i> Струки</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-dark)", marginTop: "16px", marginBottom: "20px" }}>
              Нашите струки
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-medium)", maxWidth: "700px" }}>
              Нашето училиште нуди голем избор на струки, и тие се следните:
            </p>
          </div>
        </section>

        <section className="features" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="cards-grid">
              <div className="card" id="soobrakjajna-struka">
                <div className="card-icon"><i className="fas fa-car"></i></div>
                <h3>Сообраќајна струка</h3>
                <p>Можете да одберете од:</p>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>Техничар за транспорт и шпедиција</li>
                  <li>Техничар за железнички сообраќај</li>
                </ul>
              </div>
              <div className="card" id="elektrotehnichka-struka">
                <div className="card-icon"><i className="fas fa-bolt"></i></div>
                <h3>Електротехничка струка</h3>
                <p>Може да одберете од:</p>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>Електротехничар за електроника и телекомуникации</li>
                  <li>Електротехничар за компјутерска техника и автоматика</li>
                </ul>
              </div>
              <div className="card" id="mashinska-struka">
                <div className="card-icon"><i className="fas fa-cogs"></i></div>
                <h3>Машинска струка</h3>
                <p>Можете да одберете од:</p>
                <ul style={{ paddingLeft: "20px", color: "var(--text-medium)", lineHeight: 2 }}>
                  <li>Машинско-енергетски техничар</li>
                  <li>Техничар за производно машинство</li>
                  <li>Инсталатер за греење и климатизација</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container" style={{ textAlign: "center", padding: "60px 32px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "16px" }}>
              Изберете ја вашата иднина! Ние сме тука за да ви помогнеме.
            </h2>
            <Link to="/upisi" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
              <i className="fas fa-user-graduate"></i> Уписи
            </Link>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            <p>© Copyright 2026 СУГС „Владо Тасевски" - Скопје</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StrukiPage;
