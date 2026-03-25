import { Link } from "react-router-dom";
import "./StaticHomePage.css";
import PageHeader from "../components/PageHeader";

const ZaNasPage = () => {
  return (
    <>
      <PageHeader />
      <main>
        <section className="hero" style={{ padding: "40px 0 50px" }}>
          <div className="container">
            <span className="badge"><i className="fas fa-info-circle"></i> За нас</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-dark)", marginTop: "16px", marginBottom: "20px" }}>
              За СУГС „Владо Тасевски"
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-medium)", maxWidth: "700px" }}>
              Подобро образование, подобра иднина!
            </p>
          </div>
        </section>

        <section className="features" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="info-flex" style={{ gap: "48px" }}>
              <div className="info-text" style={{ flex: 1 }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "16px" }}>
                  <i className="fas fa-history"></i> Нашата историја
                </h2>
                <p style={{ color: "var(--text-medium)", marginBottom: "16px", lineHeight: 1.7 }}>
                  Нашата приказна започна во далечната 1959 година, кога Работничкиот совет на Железничко-транспортното претпријатие Скопје, во согласност со Уредбата за центрите за стручно образование на работници, објавена во Службен лист на ФНРЈ бр.30, на 29.5.1959 година, ја донесе Одлуката за формирање Центар на железничарите за стручно образование на младинци и возрасни.
                </p>
                <p style={{ color: "var(--text-medium)", marginBottom: "16px", lineHeight: 1.7 }}>
                  Воспитанието и образованието се темелите на една држава и ако тие не се цврсто поставени, тешко на таа куќа наречена општество. Како наставници и воспитувачи се гордееме со низата генерации кои минале низ нашите училници, ходници, двор.
                </p>
                <p style={{ color: "var(--text-medium)", lineHeight: 1.7 }}>
                  Просториите на СУГС „Владо Тасевски" се исполнети со младост, убавина, љубов, смеа, палавост и со помалку или повеќе учење.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <img
                  src="https://sugsvladotasevski.edu.mk/wp-content/uploads/2023/03/300095477_831078098301021_6082735387271669301_n-1300x1300.jpg"
                  alt="СУГС Владо Тасевски"
                  style={{ width: "100%", borderRadius: "24px", boxShadow: "var(--shadow-md)" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <h2>Статистика</h2>
            </div>
            <div className="cards-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ margin: "0 auto 16px" }}><i className="fas fa-calendar-alt"></i></div>
                <h3 style={{ fontSize: "2.5rem", color: "var(--primary-blue)" }}>65+</h3>
                <p>Години со Вас</p>
              </div>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ margin: "0 auto 16px" }}><i className="fas fa-chalkboard-teacher"></i></div>
                <h3 style={{ fontSize: "2.5rem", color: "var(--primary-blue)" }}>80+</h3>
                <p>Професори</p>
              </div>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ margin: "0 auto 16px" }}><i className="fas fa-users"></i></div>
                <h3 style={{ fontSize: "2.5rem", color: "var(--primary-blue)" }}>1000+</h3>
                <p>Ученици</p>
              </div>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ margin: "0 auto 16px" }}><i className="fas fa-door-open"></i></div>
                <h3 style={{ fontSize: "2.5rem", color: "var(--primary-blue)" }}>50+</h3>
                <p>Уредени Училници</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="section-header">
              <h2><i className="fas fa-futbol"></i> Спортски простории</h2>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><i className="fas fa-basketball-ball"></i></div>
                <h3>Сала</h3>
                <p>Имаме голема и уредена сала за било каков спорт</p>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-futbol"></i></div>
                <h3>Игралиште</h3>
                <p>Имаме големо, отворено фудбалско игралиште покриено со вештачка трева</p>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-dumbbell"></i></div>
                <h3>Теретана</h3>
                <p>Имаме теретана со секаква опрема за вежбање</p>
              </div>
            </div>
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

export default ZaNasPage;
