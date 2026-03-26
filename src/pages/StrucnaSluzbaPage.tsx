import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import rakovodstvo4 from "@/assets/rakovodstvo-4.png";
import rakovodstvo5 from "@/assets/rakovodstvo-5.png";
import rakovodstvo6 from "@/assets/rakovodstvo-6.png";
import ImageModal from "../components/ImageModal";
import "./StaticHomePage.css";

const StrucnaSluzbaPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h1>Стручна служба</h1>
            <p>Педагошко-психолошка служба на училиштето</p>
          </div>
        </section>

        <section style={{ padding: "50px 0" }}>
          <div className="container">
            <div className="leadership-grid">
              <div className="leader-card">
                <i className="fas fa-chalkboard-user" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>Марија Петровска</h3>
                <p>Помошник директор</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-handshake" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>Ана Стојановска</h3>
                <p>Педагог</p>
              </div>
              <div className="leader-card">
                <i className="fas fa-heart" style={{ fontSize: "3rem", color: "#4B8BBE", marginBottom: "15px" }}></i>
                <h3>Елена Димитрова</h3>
                <p>Психолог</p>
              </div>
            </div>

            <div style={{ marginTop: "40px", lineHeight: 1.8, color: "#2E6899", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", maxWidth: "800px", margin: "40px auto 0" }}>
              <p>Стручната служба на СУГС „Владо Тасевски" е составена од педагог и психолог кои се достапни за сите ученици, родители и наставници.</p>
              <p style={{ marginTop: "15px" }}>Нивната улога вклучува:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>Советување на ученици за образовни и лични прашања</li>
                <li>Поддршка при професионална ориентација</li>
                <li>Работа со родители и семејства</li>
                <li>Превенција од насилство и дискриминација</li>
                <li>Поддршка на ученици со посебни образовни потреби</li>
              </ul>
            </div>

            <h3 style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px", color: "#4B8BBE", fontSize: "1.4rem" }}>
              <i className="fas fa-images"></i> Галерија
            </h3>
            <div className="leadership-gallery">
              <ImageModal src={rakovodstvo4} alt="Стручна служба 1" />
              <ImageModal src={rakovodstvo5} alt="Стручна служба 2" />
              <ImageModal src={rakovodstvo6} alt="Стручна служба 3" />
            </div>
          </div>
        </section>

        <section className="back-section">
          <div className="container">
            <Link to="/za-nas" className="back-button">
              <i className="fas fa-arrow-left"></i> Назад кон За нас
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default StrucnaSluzbaPage;
