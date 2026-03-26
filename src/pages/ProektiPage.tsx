import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";
import ucilnica3 from "@/assets/училница-3.png";
import konferenciска from "@/assets/конференциска-сала.png";
import lobi from "@/assets/училиште-лоби.png";

const ProektiPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="projects-section" id="erasmus">
          <div className="container">
            <div className="section-header">
              <h2>Проекти</h2>
              <p>Активни проекти во нашето училиште</p>
            </div>
            <div className="projects-grid">
              <div className="project-card" id="erasmus">
                <i className="fas fa-globe-europe"></i>
                <h3>Erasmus+</h3>
                <p>Меѓународен проект за мобилност на ученици и наставници, размена на искуства и практики со партнерски училишта од Европа.</p>
              </div>
              <div className="project-card" id="eko">
                <i className="fas fa-leaf"></i>
                <h3>Еко-практики</h3>
                <p>Проект за одржливи еко-практики, зелена енергија и еколошка свест кај учениците.</p>
              </div>
              <div className="project-card" id="socialday">
                <i className="fas fa-hands-helping"></i>
                <h3>Social Day</h3>
                <p>Ден на социјална одговорност каде учениците волонтираат и придонесуваат за заедницата.</p>
              </div>
            </div>
            <div className="section-header" style={{ marginTop: '3rem' }}>
              <h2>Нашите простории</h2>
            </div>
            <div className="leadership-gallery">
              <img src={ucilnica3} alt="Училница" style={{ borderRadius: '16px' }} />
              <img src={konferenciска} alt="Конференциска сала" style={{ borderRadius: '16px' }} />
              <img src={lobi} alt="Лоби на училиштето" style={{ borderRadius: '16px' }} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ProektiPage;