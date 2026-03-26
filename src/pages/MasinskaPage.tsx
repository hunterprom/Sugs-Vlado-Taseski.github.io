import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import masinskaEnergetski from "@/assets/masinska-energetski.png";
import proizvodnoMasinstvo from "@/assets/proizvodno-masinstvo.png";
import kompjuterskoUpravuvanje from "@/assets/kompjutersko-upravuvanje.png";
import ImageModal from "../components/ImageModal";

const MasinskaPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero masinski-hero">
          <div className="container">
            <div className="struka-header">
              <div className="struka-icon"><i className="fas fa-cogs"></i></div>
              <h1>{t("masinska.title")}</h1>
              <p>{t("masinska.subtitle")}</p>
            </div>
          </div>
        </section>

        <section className="profili-section">
          <div className="container">
            <h2 className="section-title">{t("masinska.profiles")}</h2>
            <div className="profili-grid">
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-fire"></i></div>
                <h3>{t("masinska.energetski")}</h3>
                <ImageModal src={masinskaEnergetski} alt={t("masinska.energetski")} className="profil-card-img" />
                <p>{t("masinska.energetskiDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Термотехника</li>
                  <li><i className="fas fa-check-circle"></i> Енергетска ефикасност</li>
                  <li><i className="fas fa-check-circle"></i> Греење и климатизација</li>
                  <li><i className="fas fa-check-circle"></i> Котловски постројки</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-industry"></i></div>
                <h3>{t("masinska.proizvodno")}</h3>
                <ImageModal src={proizvodnoMasinstvo} alt={t("masinska.proizvodno")} className="profil-card-img" />
                <p>{t("masinska.proizvodnoDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> CNC програмирање</li>
                  <li><i className="fas fa-check-circle"></i> Производни технологии</li>
                  <li><i className="fas fa-check-circle"></i> CAD/CAM системи</li>
                  <li><i className="fas fa-check-circle"></i> Контрола на квалитет</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-temperature-high"></i></div>
                <h3>{t("masinska.instalater")}</h3>
                <p>{t("masinska.instalaterDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> Монтажа на клими</li>
                  <li><i className="fas fa-check-circle"></i> Котловски инсталации</li>
                  <li><i className="fas fa-check-circle"></i> Вентилациони системи</li>
                  <li><i className="fas fa-check-circle"></i> Сервисирање и одржување</li>
                </ul>
              </div>
              <div className="profil-card">
                <div className="profil-icon"><i className="fas fa-desktop"></i></div>
                <h3>{t("masinska.kompjutersko")}</h3>
                <ImageModal src={kompjuterskoUpravuvanje} alt={t("masinska.kompjutersko")} className="profil-card-img" />
                <p>{t("masinska.kompjuterskoDesc")}</p>
                <ul className="profil-opsii">
                  <li><i className="fas fa-check-circle"></i> CNC машини</li>
                  <li><i className="fas fa-check-circle"></i> Автоматизирани системи</li>
                  <li><i className="fas fa-check-circle"></i> Индустриски роботи</li>
                  <li><i className="fas fa-check-circle"></i> Компјутерско управување</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="moznosti-section">
          <div className="container">
            <div className="moznosti-content">
              <h2><i className="fas fa-briefcase"></i> {t("masinska.employment")}</h2>
              <div className="moznosti-grid">
                <div className="moznost-card"><i className="fas fa-industry"></i><h3>Производствени компании</h3><p>Фабрики, CNC центри</p></div>
                <div className="moznost-card"><i className="fas fa-wrench"></i><h3>Сервиси за греење и клими</h3><p>Монтажа и сервисирање</p></div>
                <div className="moznost-card"><i className="fas fa-cog"></i><h3>Автоматизација</h3><p>Индустриска автоматизација</p></div>
                <div className="moznost-card"><i className="fas fa-chart-line"></i><h3>Енергетски компании</h3><p>Енергетика, термоелектрани</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="nastava-section">
          <div className="container">
            <h2 className="section-title">{t("masinska.curriculum")}</h2>
            <div className="nastava-grid">
              <div className="nastava-card">
                <h3><i className="fas fa-book"></i> {t("masinska.theory")}</h3>
                <ul><li>Механика и термика</li><li>Машински елементи</li><li>Технологија на материјали</li><li>Термотехника</li><li>Производни технологии</li><li>CAD дизајн</li></ul>
              </div>
              <div className="nastava-card">
                <h3><i className="fas fa-flask"></i> {t("masinska.practice")}</h3>
                <ul><li>Работа во работилници</li><li>CNC машини</li><li>Практика во компании</li><li>Проектна настава</li><li>3D моделирање</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/" className="back-button"><i className="fas fa-arrow-left"></i> {t("back")}</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default MasinskaPage;
