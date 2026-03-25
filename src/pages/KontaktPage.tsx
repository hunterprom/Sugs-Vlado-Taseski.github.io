import "./StaticHomePage.css";
import PageHeader from "../components/PageHeader";

const KontaktPage = () => {
  return (
    <>
      <PageHeader />
      <main>
        <section className="hero" style={{ padding: "40px 0 50px" }}>
          <div className="container">
            <span className="badge"><i className="fas fa-envelope"></i> Контакт</span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-dark)", marginTop: "16px", marginBottom: "20px" }}>
              Контактирајте нè
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-medium)", maxWidth: "700px" }}>
              Ние сме тука за да ви помогнеме. Контактирајте нè за повеќе информации.
            </p>
          </div>
        </section>

        <section className="features" style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
              <div className="card">
                <div className="card-icon"><i className="fas fa-map-marker-alt"></i></div>
                <h3>Адреса</h3>
                <p>СУГС „Владо Тасевски" – Скопје<br />III Македонска бригада бб<br />1000 Скопје, Северна Македонија</p>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-phone"></i></div>
                <h3>Телефон</h3>
                <p><a href="tel:+38922400040" style={{ color: "var(--primary-blue)", textDecoration: "none" }}>+389 2 240 00 40</a></p>
              </div>
              <div className="card">
                <div className="card-icon"><i className="fas fa-envelope"></i></div>
                <h3>Е-пошта</h3>
                <p><a href="mailto:sugs-vladotasevski-skopje@schools.mk" style={{ color: "var(--primary-blue)", textDecoration: "none" }}>sugs-vladotasevski-skopje@schools.mk</a></p>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "16px", textAlign: "center" }}>
                Следете нè на социјалните мрежи
              </h2>
              <div className="social-icons" style={{ justifyContent: "center", display: "flex", gap: "20px", marginTop: "20px" }}>
                <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer" className="btn-outline-blue" style={{ padding: "12px 24px" }}>
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer" className="btn-outline-blue" style={{ padding: "12px 24px" }}>
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer" className="btn-outline-blue" style={{ padding: "12px 24px" }}>
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            <p>© Copyright 2026 СУГС „Владо Тасевски" - Скопје</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default KontaktPage;
