import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";
import soobrakajTransport from "@/assets/soobrakaj-transport.png";
import zeleznicka from "@/assets/zeleznicki-soobrakaj.png";

const SoobrakajnaPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero soobrakaj-hero">
          <div className="container">
            <div className="struka-header">
              <div className="struka-icon"><i className="fas fa-truck"></i></div>
              <h1>Сообраќајна струка</h1>
              <p>Образование за транспорт, логистика, шпедиција и железнички сообраќај</p>
            </div>
          </div>
        </section>

        <section className="profili-section">
          <div className="container">
            <h2 className="section-title">Профили кои ги нудиме</h2>
            <div className="profili-grid">
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-shipping-fast"></i></div>
                <h3>Техничар за транспорт и шпедиција</h3>
                <img src={soobrakajTransport} alt="Техничар за транспорт и шпедиција" className="profil-card-img" />
                <p>Образование за логистика, транспортни системи, шпедиција, царинско работење и организација на транспортот.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Логистика и синџири на снабдување</li>
                  <li><i className="fas fa-check-circle"></i> Шпедиција и царинење</li>
                  <li><i className="fas fa-check-circle"></i> Транспортна документација</li>
                  <li><i className="fas fa-check-circle"></i> Менаџмент во транспортот</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-bus"></i></div>
                <h3>Сообраќаен транспортен техничар</h3>
                <p>Специјализација за патниот сообраќај, организација на јавен превоз, безбедност во сообраќајот и транспортни системи.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Организација на јавен превоз</li>
                  <li><i className="fas fa-check-circle"></i> Безбедност во сообраќајот</li>
                  <li><i className="fas fa-check-circle"></i> Патничка логистика</li>
                  <li><i className="fas fa-check-circle"></i> Сообраќајно планирање</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-subway"></i></div>
                <h3>Техничар за железнички сообраќај</h3>
                <p>Образование за организација на железнички транспорт, управување со возен ред, сигнални системи и безбедност на железница.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Железнички транспорт</li>
                  <li><i className="fas fa-check-circle"></i> Сигнални системи</li>
                  <li><i className="fas fa-check-circle"></i> Управување со возен ред</li>
                  <li><i className="fas fa-check-circle"></i> Безбедност на железница</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-train"></i></div>
                <h3>Машиновозач на дизел и електро влечни средства</h3>
                <p>Специјализација за управување и одржување на локомотиви, дизел мотори и електро-влечни средства за железница.</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Управување со локомотиви</li>
                  <li><i className="fas fa-check-circle"></i> Дизел мотори</li>
                  <li><i className="fas fa-check-circle"></i> Електро-влечни средства</li>
                  <li><i className="fas fa-check-circle"></i> Безбедносни процедури</li>
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
                <div className="moznost-card"><i className="fas fa-ship"></i><h3>Шпедитерски компании</h3><p>Шпедиција, логистика, транспортни компании</p></div>
                <div className="moznost-card"><i className="fas fa-bus"></i><h3>Јавен превоз</h3><p>Градски и меѓуградски превозни компании</p></div>
                <div className="moznost-card"><i className="fas fa-train"></i><h3>Железници</h3><p>Македонски железници, управување со возен парк</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>Логистички центри</h3><p>Складишта, дистрибутивни центри, царинарници</p></div>
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
                <ul><li>Транспортна логистика</li><li>Шпедиција и царинско работење</li><li>Железнички транспорт</li><li>Сообраќајно планирање</li><li>Безбедност во сообраќајот</li><li>Економика на транспортот</li></ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> Практична настава</h3>
                <ul><li>Теренска настава</li><li>Практика во транспортни компании</li><li>Симулации на транспортни процеси</li><li>Работа со софтвер за логистика</li><li>Симулатор за возење воз</li></ul>
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

export default SoobrakajnaPage;