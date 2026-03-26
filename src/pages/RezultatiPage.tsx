import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

const rezultati = [
  { title: "Резултати од прв уписен рок – второ пријавување за учебна 2025/26 година", date: "02.07.2025", description: "🎉 ЗАВРШЕНО ВТОРОТО ПРИЈАВУВАЊЕ! 📚 Уште 14 нови ученици ни се приклучија во второто пријавување.", link: "https://sugsvladotasevski.edu.mk/објава/резултати-1-ур-2-пријавување-25-26/" },
  { title: "Резултати од прв уписен рок – прво пријавување за учебна 2025/26 година", date: "20.06.2025", description: "Електротехничар за компјутерска техника и автоматика, Електротехничар за електроника и телекомуникации, Техничар за транспорт и шпедиција.", link: "https://sugsvladotasevski.edu.mk/објава/резултати-од-прв-уписен-рок-прво-прија/" },
  { title: "Конечни резултати од упис во средно 2024/25 – втор циклус", date: "03.07.2024", description: "Сообраќајна струка: Техничар за транспорт и шпедиција. Машинска струка: Машинско-енергетски техничар.", link: "https://sugsvladotasevski.edu.mk/објава/конечни-резултати-од-упис-во-средно-2024-25-2/" },
  { title: "Конечни резултати од упис во средно 2024/25 – прв циклус", date: "26.06.2024", description: "Сообраќајна, Електротехничка и Машинска струка - конечни резултати.", link: "https://sugsvladotasevski.edu.mk/објава/конечни-резултати-од-упис-во-средно-2024-25/" },
  { title: "Конечни резултати од упис во средно 2023/24 – втор циклус", date: "30.06.2023", description: "Ранг листата за сите струки.", link: "https://sugsvladotasevski.edu.mk/објава/конечни-резултати-за-прв-упис-2023-24-второ-п/" },
  { title: "Конечни резултати од упис во средно 2023/24 – прв циклус", date: "23.06.2023", description: "Сообраќајна, Електротехничка и Машинска струка.", link: "https://sugsvladotasevski.edu.mk/објава/конечни-резултати-од-упис-во-средно-2023-24/" }
];

const RezultatiPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon"><i className="fas fa-list-ol"></i></div>
            <h1>{t("rezultati.title")}</h1>
            <p>{t("rezultati.subtitle")}</p>
          </div>
        </section>

        <section className="projects-section">
          <div className="container">
            <div className="projects-grid">
              {rezultati.map((r, idx) => (
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="project-card" key={idx} style={{ textDecoration: "none", cursor: "pointer" }}>
                  <i className="fas fa-file-alt"></i>
                  <span style={{ fontSize: "0.75rem", color: "#90CAF9", marginBottom: "8px", display: "block" }}>{r.date}</span>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/upisi" className="back-button">
              <i className="fas fa-arrow-left"></i> {t("rezultati.back")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default RezultatiPage;
