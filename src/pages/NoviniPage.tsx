import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { noviniData } from "../data/noviniData";
import "../pages/StaticHomePage.css";
import ucilnicaImg from "@/assets/училница-1.png";
import ucilisteNadvor from "@/assets/училиште-надвор.png";

const NoviniPage = () => {
  return (
    <>
      <SiteHeader />
      <section className="struka-hero">
        <div className="container struka-header">
          <div className="struka-icon">
            <i className="fas fa-newspaper"></i>
          </div>
          <h1>Новости и настани</h1>
          <p>Бидете во тек со најновите случувања, огласи и достигнувања на СУГС „Владо Тасевски".</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {noviniData.map((item, idx) => (
              <Link to={`/novini/${item.slug}`} className="project-card" key={idx} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <i className={item.icon}></i>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                  <span className="badge">{item.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#90CAF9' }}>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Нашето училиште</h2>
          </div>
          <div className="leadership-gallery" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <img src={ucilnicaImg} alt="Училница" style={{ borderRadius: '16px' }} />
            <img src={ucilisteNadvor} alt="Училиште - надворешност" style={{ borderRadius: '16px' }} />
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

      <SiteFooter />
    </>
  );
};

export default NoviniPage;
