import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

const VonredniPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon"><i className="fas fa-user-clock"></i></div>
            <h1>{t("vonredni.title")}</h1>
            <p>{t("vonredni.subtitle")}</p>
          </div>
        </section>

        <section style={{ padding: "50px 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px" }}><i className="fas fa-money-bill-wave"></i> {t("vonredni.pricing")}</h2>
              <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
                <p>За упис на година (трет, четврти и петти степен) вонредно школување – <strong>5 000,00 денари</strong>.</p>
                <h3 style={{ marginTop: "15px", color: "#4B8BBE" }}>За испити:</h3>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Предмет со писмена работа – <strong>900,00 денари</strong></li>
                  <li>Предмет што се полага усно – <strong>800,00 денари</strong></li>
                </ul>
                <h3 style={{ marginTop: "15px", color: "#4B8BBE" }}>За полагање на завршен испит и училишна матура:</h3>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Писмена работа по македонски јазик и литература – <strong>1 500,00 денари</strong></li>
                  <li>Одбрана на проектна задача – <strong>2 000,00 денари</strong></li>
                  <li>Изборен интерен предмет – <strong>1 500,00 денари</strong></li>
                </ul>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px" }}><i className="fas fa-receipt"></i> {t("vonredni.payment")}</h2>
              <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
                <p>Сите уплати се вршат на сметката на училиштето на образец <strong>ПП 50</strong>.</p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  <li>Назив: <strong>СУГС 'Владо Тасевски' – Скопје</strong></li>
                  <li>Трансакциска сметка: <strong>100000000063095</strong></li>
                  <li>Сметка на буџетски корисник: <strong>7850111088 787 10</strong></li>
                </ul>
                <p style={{ marginTop: "10px" }}>Приходна шифра и програма:</p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li><strong>723012 N2</strong> – Уплата за година</li>
                  <li><strong>723013 N2</strong> – Уплата за испит</li>
                </ul>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px" }}><i className="fas fa-file-signature"></i> {t("vonredni.examApp")}</h2>
              <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
                <p>
                  <a href="https://sugsvladotasevski.edu.mk/wp-content/uploads/2023/04/%D0%9F%D0%A0%D0%98%D0%88%D0%90%D0%92%D0%90-%D0%97%D0%90-%D0%9F%D0%9E%D0%9B%D0%90%D0%93%D0%90%D0%8A%D0%95-%D0%9D%D0%90-%D0%92%D0%9E%D0%9D%D0%A0%D0%95%D0%94%D0%95%D0%9D-%D0%98%D0%A1%D0%9F%D0%98%D0%A2.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-block", marginBottom: "15px" }}>
                    <i className="fas fa-download"></i> {t("vonredni.downloadApp")}
                  </a>
                </p>
                <p>Бројот на испитни сесии во една година изнесува <strong>9</strong>.</p>
                <p style={{ marginTop: "10px" }}><strong>ИСПИТИТЕ СЕ ПРИЈАВУВААТ НАЈДОЦНА ДО 10 ДЕН ВО МЕСЕЦОТ КОГА ИМА СЕСИЈА</strong></p>
                <p style={{ marginTop: "10px" }}>Секој вонреден ученик може да полага <strong>најмногу три испити</strong> во една испитна сесија.</p>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px" }}><i className="fas fa-pen-fancy"></i> {t("vonredni.examTaking")}</h2>
              <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
                <p>Датумот на почеток на испитите во една испитна сесија е по правило на крајот на месецот.</p>
                <p style={{ marginTop: "10px" }}>За резултати од испитите учениците можат да се информираат кај претседателите на комисиите.</p>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "30px" }}>
              <h2 style={{ color: "#4B8BBE", marginBottom: "20px" }}><i className="fas fa-graduation-cap"></i> {t("vonredni.graduation")}</h2>
              <div style={{ lineHeight: 1.8, color: "#2E6899" }}>
                <p>По завршување на школувањето, сите документи ученикот ги подигнува од одговорниот наставник.</p>
                <p style={{ marginTop: "10px" }}><strong>Ученик не може да подигне документи додека не ги заврши сите обврски спрема училиштето.</strong></p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://sugsvladotasevski.edu.mk/вонредни-ученици/известувања-за-испитни-сесии" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fas fa-bell"></i> {t("vonredni.notifications")}
              </a>
              <a href="https://sugsvladotasevski.edu.mk/вонредни-ученици/комисии/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="fas fa-users"></i> {t("vonredni.commissions")}
              </a>
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/" className="back-button">
              <i className="fas fa-arrow-left"></i> {t("back")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default VonredniPage;
