import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";

const ZaNasPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="history-section" id="istorija">
          <div className="container">
            <div className="section-header">
              <h2>Нашата историја</h2>
              <p>66 години традиција и квалитетно образование</p>
            </div>
            <div className="history-content">
              <p><strong>Нашата приказна започна во далечната 1959 година</strong>, кога Работничкиот совет на Железничко-транспортното претпријатие Скопје, во согласност со Уредбата за центрите за стручно образование на работници, ја донесе Одлуката за формирање Центар на железничарите за стручно образование на младинци и возрасни.</p>
              <p>Од 1961 година почнува со работа Железничкото техничко училиште за сообраќајно-транспортни струки со интернатско сместување. По катастрофалниот земјотрес во 1963 година, училиштето привремено беше преместено во Белград.</p>
              <p>На <strong>15 април 1979 година</strong>, со Одлука на Работничкиот совет, Центарот го добива името на првоборецот-железничар <strong>Владо Тасевски</strong>.</p>
              <p>Учебната 1983/84 година се воведоа нови профили од областа на ПТТ сообраќајот и телекомуникациите, со што училиштето го доби името Училишен центар за железнички и ПТТ сообраќај „Владо Тасевски". Во 2004 година, со процесот на децентрализација, училиштето преминува под ингеренција на Град Скопје и станува СУГС „Владо Тасевски".</p>
              <p className="quote">„Просториите на СУГС „Владо Тасевски" се исполнети со младост, убавина, љубов, смеа, палавост и со помалку или повеќе учење."</p>
            </div>
          </div>
        </section>

        <section className="mission-section" id="misija">
          <div className="container">
            <div className="section-header">
              <h2>Мисија &amp; Визија</h2>
            </div>
            <div className="mission-flex">
              <div className="mission-card">
                <i className="fas fa-bullseye"></i>
                <h3>Нашата Мисија</h3>
                <p>Средното училиште на Град Скопје „Владо Тасевски" – Скопје е современа образовна институција која образува кадри за потребите на пазарот на трудот, преку реализирање на современи и флексибилни наставни планови и програми.</p>
              </div>
              <div className="mission-card">
                <i className="fas fa-eye"></i>
                <h3>Нашата Визија</h3>
                <p>Да израснеме во ефикасно, ефективно, модерно и меѓуетничко интегрирано училиште, во кое ученикот и неговите потреби ќе бидат во центарот на вниманието.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="leadership-section" id="rukovodstvo">
          <div className="container">
            <div className="section-header">
              <h2>Раководство</h2>
              <p>Тимот кој ја води нашата школа</p>
            </div>
            <div className="leadership-grid">
              <div className="leader-card">
                <i className="fas fa-user-tie"></i>
                <h3>Добре Михајлов</h3>
                <p>Директор</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-chalkboard-user"></i>
                <h3>Марија Петровска</h3>
                <p>Помошник директор</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-handshake"></i>
                <h3>Ана Стојановска</h3>
                <p>Педагог</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-heart"></i>
                <h3>Елена Димитрова</h3>
                <p>Психолог</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ZaNasPage;