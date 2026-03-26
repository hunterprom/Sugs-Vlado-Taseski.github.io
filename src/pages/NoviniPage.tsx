import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "../pages/StaticHomePage.css";
import ucilnicaImg from "@/assets/училница-1.png";
import ucilisteNadvor from "@/assets/училиште-надвор.png";

const novini = [
  {
    title: "Јавен оглас за ученички правобранител",
    date: "10 Декември 2025",
    category: "Новости",
    description: "ОТВОРЕН ПОВИК ЗА ИЗБОР УЧЕНИЧКИ ПРАВОБРАНИТЕЛ СУГС Владо Тасевски - Скопје. Сите заинтересирани ученици можат да се пријават.",
    icon: "fas fa-bullhorn",
    link: "https://sugsvladotasevski.edu.mk/објава/јавен-оглас-за-ученички-правобранител/"
  },
  {
    title: "Повик за интерес за мобилност на ученици за Ерасмус+",
    date: "5 Ноември 2025",
    category: "Новости",
    description: "Соопштение - Повик за интерес за мобилност на ученици за Ерасмус+ проект со можност за практична работа во странство.",
    icon: "fas fa-plane",
    link: "https://sugsvladotasevski.edu.mk/објава/повик-за-интерес-за-мобилност-на-учени/"
  },
  {
    title: "Обука за одржливи еко-практики",
    date: "5 Октомври 2025",
    category: "Настани",
    description: "Наши ученици и наставници учествуваа на обука за одржливи еко-практики, промовирајќи зелена иднина.",
    icon: "fas fa-leaf",
    link: "https://sugsvladotasevski.edu.mk/објава/обука-за-одржливи-еко-практики/"
  },
  {
    title: "Почеток на учебна година 2025/2026 и список на ученици од I година",
    date: "27 Август 2025",
    category: "Новости",
    description: "Почитувани ученици, ве известуваме дека приемот по повод првиот училишен ден ќе се одржи на 2 септември.",
    icon: "fas fa-school",
    link: "https://sugsvladotasevski.edu.mk/објава/почеток-на-учебна-година-2025-2026/"
  },
  {
    title: "Одбележување на успехот на матурантите",
    date: "14 Август 2025",
    category: "Настани",
    description: "Со гордост го одбележуваме успехот на генерацијата матуранти 2024/2025 кои успешно ја завршија својата средношколска кариера.",
    icon: "fas fa-graduation-cap",
    link: "https://sugsvladotasevski.edu.mk/објава/одбележување-на-успехот-на-матуранти/"
  },
  {
    title: "Честитки за Ива Богдановска 🎉",
    date: "6 Август 2025",
    category: "Натпревари",
    description: "Честитки за Ива Богдановска за освоеното трето место на Европското јуниорско првенство во џудо!",
    icon: "fas fa-trophy",
    link: "https://sugsvladotasevski.edu.mk/објава/честитки-за-ива-богдановска/"
  }
];

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
            {novini.map((item, idx) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-card" key={idx} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <i className={item.icon}></i>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                  <span className="badge">{item.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#90CAF9' }}>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            ))}
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
