import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import ucilnica3 from "@/assets/classroom-main-3.png";
import konferenciска from "@/assets/conference-hall.png";
import lobi from "@/assets/school-lobby.png";

const ProektiPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="projects-section" id="erasmus">
          <div className="container">
            <div className="section-header">
              <h2>{t("proekti.title")}</h2>
              <p>{t("proekti.subtitle")}</p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <i className="fas fa-globe-europe"></i>
                <h3>Erasmus+</h3>
                <p>Меѓународен проект за мобилност на ученици и наставници.</p>
              </div>
              <div className="project-card">
                <i className="fas fa-leaf"></i>
                <h3>Еко-практики</h3>
                <p>Проект за одржливи еко-практики и еколошка свест.</p>
              </div>
              <div className="project-card">
                <i className="fas fa-hands-helping"></i>
                <h3>Social Day</h3>
                <p>Ден на социјална одговорност и волонтирање.</p>
              </div>
            </div>
            <div className="section-header" style={{ marginTop: '3rem' }}>
              <h2>{t("proekti.premises")}</h2>
            </div>
            <div className="leadership-gallery">
              <img src={ucilnica3} alt="Училница" style={{ borderRadius: '16px' }} />
              <img src={konferenciска} alt="Конференциска сала" style={{ borderRadius: '16px' }} />
              <img src={lobi} alt="Лоби" style={{ borderRadius: '16px' }} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ProektiPage;
