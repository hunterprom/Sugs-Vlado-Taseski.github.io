import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "../pages/StaticHomePage.css";
import nastavniciGroup from "@/assets/nastavnici-group.png";

const aktivi = [
  { name: "Актив на македонски јазик и литература", icon: "fas fa-book", members: ["Билјана Ристова", "Наташа Петреска", "Гордана Илиева", "Силвана Новеска", "Сања Николовска", "Николина Тодоровска Томовска", "Стевана Илиевска"] },
  { name: "Актив на англиски јазик", icon: "fas fa-globe", members: ["Маргарита Алчевска", "Искра Новковска", "Лидија Димеска", "Соња Павлова", "Рената Трајановска", "Назиме Ајредини", "Арбен Мемети"] },
  { name: "Актив на математика и информатика", icon: "fas fa-calculator", members: ["Гордана Тодоровска", "Павлина Пауновска", "Елизабета Марковска Ставревска", "Анита Каланоска Јордановска", "Лилјана Соломановска", "Сениха Мандал", "Добре Михајлов", "Арбен Идризи", "Буњамин Алими", "Исмаил Амети"] },
  { name: "Актив на спорт и спортски активности", icon: "fas fa-futbol", members: ["Томислав Христов", "Александар Сибиновски", "Иван Никчевиќ", "Златко Марин", "Бојан Маџовски", "Радмила Тодоровска", "Меритон Бериша", "Висар Зука"] },
  { name: "Актив на општествени и природни науки", icon: "fas fa-atom", members: ["Марјан Трајковски", "Силвана Ѓоргов", "Анета Михајловска", "Весна Димовска", "Лидија Пшенко", "Љубиша Камењаров", "Елена Каровска-Бубало", "Рабије Зенуни", "Мухсин Сали", "Рејхане Барди", "Сејхан Емини", "Ардиана Исени", "Мухамед Зенуни", "Ардиан Пајазити", "Сенад Сулејмани"] },
  { name: "Актив на стручни предмети од машинска струка", icon: "fas fa-cogs", members: ["Елена Лентиќ", "Рајна Каевска", "Силвија Мироновска", "Јован Милошевски", "Целе Пејоски", "Симона Богоевска", "Снежана Јаневска", "Бобан Алексовски", "Жељко Ѓаконовиќ"] },
  { name: "Актив на стручни предмети од електротехничка струка", icon: "fas fa-bolt", members: ["Елисавета Ангеловска", "Ана Петровска – Ристовска", "Јасна Домазетовска", "Дејан Крстевски", "Светлана Николовска", "Љубица Маркудова", "Дејан Антоновски", "Катерина Малова – Младеновска", "Валентина Тренчевска", "Марија Стамболиева", "Ана Николовска", "Елена Костовска Аврамовска", "Кристина Башоска", "Ана Петрова", "Кристина Илијоска", "Теута Синани Мурати", "Уран Туда", "Мехмет Кајони", "Ардиана Исени", "Мухамед Зенуни", "Ардиан Пајазити", "Сенад Сулејмани", "Арбен Ганиу", "Сеад Смајли"] },
  { name: "Актив на стручни предмети од сообраќајна струка", icon: "fas fa-road", members: ["Мартин Павлов", "Александар Каракачанов", "Трајче Шопов", "Цветанка Ристиќ", "Анѓела Јошеска", "Јасмина Илиоска", "Зоран Ѓорѓиевски", "Катерина Стојческа", "Дејан Стојчески", "Џихане Аљидеми", "Весна Живаљевиќ", "Драгиша Секуловски", "Зулфије Јашари", "Газменд Красничи", "Музафер Алими"] }
];

const NastavniciPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <section className="struka-hero">
        <div className="container struka-header">
          <div className="struka-icon"><i className="fas fa-chalkboard-teacher"></i></div>
          <h1>{t("nastavnici.title")}</h1>
          <p>{t("nastavnici.subtitle")}</p>
        </div>
      </section>

      <section className="profili-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={nastavniciGroup} alt={t("nastavnici.title")} style={{ width: '100%', maxWidth: '900px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      <section className="profili-section">
        <div className="container">
          <h2 className="section-title"><i className="fas fa-users"></i> {t("nastavnici.aktivi")}</h2>
          <div className="profili-grid">
            {aktivi.map((aktiv, idx) => (
              <div className="profil-card" key={idx}>
                <div className="profil-icon"><i className={aktiv.icon}></i></div>
                <h3>{aktiv.name}</h3>
                <ul className="profil-opsii">
                  {aktiv.members.map((member, i) => (
                    <li key={i}><i className="fas fa-user"></i> {member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default NastavniciPage;

