import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";

const SportPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="sports-hero">
          <div className="container">
            <div className="section-header">
              <h2>Спортски простории</h2>
              <p>Услови за врвни спортски активности</p>
            </div>
            <div className="sports-grid">
              <div className="sport-card">
                <i className="fas fa-basketball-ball"></i>
                <h3>Спортска сала</h3>
                <p>Голема и уредена сала за кошарка, одбојка, ракомет и други спортови.</p>
              </div>
              <div className="sport-card">
                <i className="fas fa-futbol"></i>
                <h3>Фудбалско игралиште</h3>
                <p>Отворено игралиште со вештачка трева за фудбал и атлетика.</p>
              </div>
              <div className="sport-card">
                <i className="fas fa-dumbbell"></i>
                <h3>Теретана</h3>
                <p>Модерна опрема за вежбање и физичка подготовка на учениците.</p>
              </div>
            </div>

            <div style={{ marginTop: "40px", lineHeight: 1.8, color: "#2E6899", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", maxWidth: "800px", margin: "40px auto 0" }}>
              <h3 style={{ color: "#4B8BBE", marginBottom: "15px" }}><i className="fas fa-trophy"></i> Спортски достигнувања</h3>
              <p>Нашите ученици редовно учествуваат на општински, регионални и државни натпревари во различни спортови. Училиштето е горди на бројните медали и признанија освоени во кошарка, фудбал, ракомет, одбојка и џудо.</p>
              <p style={{ marginTop: "10px" }}>Спортските активности се реализираат под раководство на искусни професори по физичко образование кои ги мотивираат учениците кон активен и здрав живот.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default SportPage;
