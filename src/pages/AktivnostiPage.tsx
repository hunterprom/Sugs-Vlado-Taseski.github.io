import { Link } from "react-router-dom";
import "./StaticHomePage.css";
import PageHeader from "../components/PageHeader";

const AktivnostiPage = () => {
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
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 10 декември, 2025</span>
                  <h4>Јавен оглас за ученички правобранител</h4>
                  <p>ОТВОРЕН ПОВИК ЗА ИЗБОР УЧЕНИЧКИ ПРАВОБРАНИТЕЛ СУГС „Владо Тасевски" - Скопје</p>
                  <a href="https://sugsvladotasevski.edu.mk" target="_blank" rel="noopener noreferrer" className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 5 ноември, 2025</span>
                  <h4>Повик за мобилност на ученици за Ерасмус+</h4>
                  <p>Повик за интерес за мобилност на ученици за Ерасмус+ проект.</p>
                  <a href="https://sugsvladotasevski.edu.mk" target="_blank" rel="noopener noreferrer" className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 5 октомври, 2025</span>
                  <h4>Обука за одржливи еко-практики</h4>
                  <p>Учениците учествуваа на обука за одржливи еко-практики во рамки на проектните активности.</p>
                  <a href="https://sugsvladotasevski.edu.mk" target="_blank" rel="noopener noreferrer" className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 27 август, 2025</span>
                  <h4>Почеток на учебна година 2025/2026</h4>
                  <p>Приемот по повод првиот училишен ден и список на ученици од I година.</p>
                  <a href="https://sugsvladotasevski.edu.mk" target="_blank" rel="noopener noreferrer" className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 14 август, 2025</span>
                  <h4>Одбележување на успехот на матурантите</h4>
                  <p>Свечено одбележување на успехот на матурантите од генерацијата.</p>
                  <a href="https://sugsvladotasevski.edu.mk" target="_blank" rel="noopener noreferrer" className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-content">
                  <span className="news-date"><i className="far fa-calendar-alt"></i> 6 август, 2025</span>
                  <h4>Честитки за Ива Богдановска 🎉</h4>
                  <p>Честитки за освоеното трето место на Европското јуниорско првенство во џудо!</p>
                  <a href="https://sugsvladotasevski.edu.mk" target="_blank" rel="noopener noreferrer" className="card-link">Дознајте повеќе <i className="fas fa-arrow-right"></i></a>
                </div>
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

export default AktivnostiPage;
