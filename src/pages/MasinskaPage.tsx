import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";
import masinskaStruka from "@/assets/masinska-struka.png";
import masinskaEnergetski from "@/assets/masinska-energetski.png";
import proizvodnoMasinstvo from "@/assets/proizvodno-masinstvo.png";

const MasinskaPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero masinski-hero">
          <div className="container">
            <div className="struka-header">
              <div className="struka-icon"><i className="fas fa-cogs"></i></div>
              <h1>Машинска струка</h1>
              <p>Образование за индустријата на иднината - енергетика, производство и инсталации</p>
            </div>
          </div>
        </section>

        <section className="profili-section">
          <div className="container">
            <h2 className="section-title">Профили кои ги нудиме</h2>
            <div className="profili-grid">
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-fire"></i></div>
                <h3>Машинско-енергетски техничар</h3>
                <p>Специјализација за енергетски системи, термотехника, греење, климатизација и енергетска ефикасност.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Термотехника</li>
                  <li><i className="fas fa-check-circle"></i> Енергетска ефикасност</li>
                  <li><i className="fas fa-check-circle"></i> Греење и климатизација</li>
                  <li><i className="fas fa-check-circle"></i> Котловски постројки</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-industry"></i></div>
                <h3>Техничар за производно машинство</h3>
                <p>Образование за производствени процеси, CNC машини, технологија на обработка и квалитет на производи.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> CNC програмирање</li>
                  <li><i className="fas fa-check-circle"></i> Производни технологии</li>
                  <li><i className="fas fa-check-circle"></i> CAD/CAM системи</li>
                  <li><i className="fas fa-check-circle"></i> Контрола на квалитет</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-temperature-high"></i></div>
                <h3>Инсталатер за греење и климатизација</h3>
                <p>Практично образование за монтажа, одржување и сервисирање на системи за греење, климатизација и вентилација.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Монтажа на клими</li>
                  <li><i className="fas fa-check-circle"></i> Котловски инсталации</li>
                  <li><i className="fas fa-check-circle"></i> Вентилациони системи</li>
                  <li><i className="fas fa-check-circle"></i> Сервисирање и одржување</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-train"></i></div>
                <h3>Машински техничар за шински возила</h3>
                <p>Специјализација за одржување и поправка на железнички возила, дизел мотори и електро-влечни средства.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Дизел мотори</li>
                  <li><i className="fas fa-check-circle"></i> Електро-влечни средства</li>
                  <li><i className="fas fa-check-circle"></i> Одржување на возила</li>
                  <li><i className="fas fa-check-circle"></i> Безбедност во железница</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="moznosti-section">
          <div className="container">
            <div className="moznosti-content">
              <h2><i className="fas fa-briefcase"></i> Можности за вработување</h2>
              <div className="moznosti-grid">
                <div className="moznost-card"><i className="fas fa-industry"></i><h3>Производствени компании</h3><p>Фабрики, производствени погони, CNC центри</p></div>
                <div className="moznost-card"><i className="fas fa-wrench"></i><h3>Сервиси за греење и клими</h3><p>Монтажа и сервисирање на климатизација и греење</p></div>
                <div className="moznost-card"><i className="fas fa-train"></i><h3>Железнички транспорт</h3><p>Македонски железници, одржување на возила</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>Енергетски компании</h3><p>Енергетика, термоелектрани, топлификации</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="nastava-section">
          <div className="container">
            <h2 className="section-title">Наставен план</h2>
            <div className="nastava-grid">
              <div className="nastava-card">
                <h3><i className="fas fa-book"></i> Теоретски предмети</h3>
                <ul><li>Механика и термика</li><li>Машински елементи</li><li>Технологија на материјали</li><li>Термотехника</li><li>Производни технологии</li><li>CAD дизајн</li></ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> Практична настава</h3>
                <ul><li>Работа во работилници</li><li>CNC машини</li><li>Практика во компании</li><li>Проектна настава</li><li>3D моделирање</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/" className="back-button"><i className="fas fa-arrow-left"></i> Назад кон почетна</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default MasinskaPage;