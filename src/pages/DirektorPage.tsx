import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import rakovodstvo7 from "@/assets/rakovodstvo-7.png";
import rakovodstvo1 from "@/assets/rakovodstvo-1.png";
import rakovodstvo2 from "@/assets/rakovodstvo-2.png";
import rakovodstvo3 from "@/assets/rakovodstvo-3.png";
import ImageModal from "../components/ImageModal";
import "./StaticHomePage.css";

const DirektorPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="struka-hero">
          <div className="container struka-header">
            <div className="struka-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h1>Директор</h1>
            <p>Раководство на СУГС „Владо Тасевски"</p>
          </div>
        </section>

        <section style={{ padding: "50px 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <ImageModal
                src={rakovodstvo7}
                alt="Добре Михајлов - Директор"
                style={{ width: "200px", borderRadius: "50%", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
              />
              <h2 style={{ color: "#4B8BBE", marginTop: "20px", fontSize: "1.8rem" }}>Добре Михајлов</h2>
              <p style={{ color: "#9FBDD6", fontSize: "1.1rem" }}>Директор на СУГС „Владо Тасевски"</p>
            </div>

            <div style={{ lineHeight: 1.8, color: "#2E6899", background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <p>Добре Михајлов е директор на СУГС „Владо Тасевски" – Скопје. Под неговото раководство, училиштето продолжува да се развива како модерна образовна институција која образува кадри за потребите на пазарот на трудот.</p>
              <p style={{ marginTop: "15px" }}>Директорот активно работи на подобрување на условите за настава, воведување на нови технологии и модернизација на образовниот процес.</p>
            </div>

            <h3 style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px", color: "#4B8BBE", fontSize: "1.4rem" }}>
              <i className="fas fa-images"></i> Галерија
            </h3>
            <div className="leadership-gallery">
              <ImageModal src={rakovodstvo1} alt="Директор - галерија 1" />
              <ImageModal src={rakovodstvo2} alt="Директор - галерија 2" />
              <ImageModal src={rakovodstvo3} alt="Директор - галерија 3" />
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

export default DirektorPage;
