import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";
import ucilnica2 from "@/assets/училница-2.png";
import fontana from "@/assets/училиште-фонтана.png";

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
                <p>Голема и уредена сала за кошарка, одбојка, ракомет</p>
              </div>
              <div className="sport-card">
                <i className="fas fa-futbol"></i>
                <h3>Фудбалско игралиште</h3>
                <p>Отворено игралиште со вештачка трева</p>
              </div>
              <div className="sport-card">
                <i className="fas fa-dumbbell"></i>
                <h3>Теретана</h3>
                <p>Модерна опрема за вежбање</p>
              </div>
            </div>
            <div className="section-header" style={{ marginTop: '3rem' }}>
              <h2>Нашите простории</h2>
            </div>
            <div className="leadership-gallery" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <img src={ucilnica2} alt="Училница" style={{ borderRadius: '16px' }} />
              <img src={fontana} alt="Дворот на училиштето" style={{ borderRadius: '16px' }} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default SportPage;