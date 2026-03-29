import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";
import vladoTasevski from "@/assets/vlado-tasevski.png";
import istorija1 from "@/assets/istorija-1.png";
import istorija2 from "@/assets/istorija-2.png";
import istorija3 from "@/assets/istorija-3.png";
import istorija4 from "@/assets/istorija-4.png";
import istorija5 from "@/assets/istorija-5.png";
import istorija6 from "@/assets/istorija-6.png";
import istorija7 from "@/assets/istorija-7.png";
import istorija8 from "@/assets/istorija-8.png";
import istorija9 from "@/assets/istorija-9.png";
import istorija10 from "@/assets/istorija-10.png";
import istorija11 from "@/assets/istorija-11.png";
import istorija12 from "@/assets/istorija-12.png";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import classroom4 from "@/assets/classroom-4.jpg";
import solarPanels from "@/assets/solar-panels.jpg";
import outdoorBench from "@/assets/outdoor-bench.jpg";
import fountain from "@/assets/fountain.jpg";
import lobbyLogo from "@/assets/lobby-logo.jpg";
import schoolExterior from "@/assets/school-exterior.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";
import ImageModal from "../components/ImageModal";

const ZaNasPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="history-section" id="istorija">
          <div className="container">
            <div className="section-header">
              <h2>{t("zanas.title")}</h2>
              <p>{t("zanas.subtitle")}</p>
            </div>
            <div className="history-content">
              <div style={{ float: 'left', marginRight: '20px', marginBottom: '10px', textAlign: 'center' }}>
                <ImageModal src={vladoTasevski} alt="Владо Тасевски" style={{ width: '160px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                <p style={{ fontSize: '0.8rem', color: '#1565C0', fontWeight: 600, marginTop: '6px' }}>Владо Тасевски</p>
              </div>
              <p><strong>{t("zanas.story1")}</strong></p>
              <p>{t("zanas.story2")}</p>
              <p>{t("zanas.story3")}</p>
              <p>{t("zanas.story4")}</p>
              <p className="quote">{t("zanas.quote")}</p>
              <div style={{ clear: 'both' }}></div>

              <h3 style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#1565C0', fontSize: '1.4rem' }}>
                <i className="fas fa-camera-retro"></i> {t("zanas.galleryTitle")}
              </h3>
              <div className="leadership-gallery">
                <ImageModal src={istorija7} alt="Архитектонски план" />
                <ImageModal src={istorija3} alt="Ученици од минатото" />
                <ImageModal src={istorija4} alt="Практична настава" />
                <ImageModal src={istorija8} alt="Наставници" />
                <ImageModal src={istorija5} alt="Телекомуникации" />
                <ImageModal src={istorija6} alt="Лабораторија" />
                <ImageModal src={istorija1} alt="Електроника" />
                <ImageModal src={istorija2} alt="Опрема" />
                <ImageModal src={istorija9} alt="Работилница" />
                <ImageModal src={istorija10} alt="Машинска работилница" />
                <ImageModal src={istorija11} alt="Планирање на училиштето" />
                <ImageModal src={istorija12} alt="Изградба на училиштето" />
                <ImageModal src={classroom1} alt="Училница" />
                <ImageModal src={classroom2} alt="Училница" />
                <ImageModal src={classroom3} alt="Училница" />
                <ImageModal src={classroom4} alt="Училница" />
                <ImageModal src={solarPanels} alt="Соларни панели" />
                <ImageModal src={outdoorBench} alt="Двор" />
                <ImageModal src={fountain} alt="Фонтана" />
                <ImageModal src={lobbyLogo} alt="Лоби" />
                <ImageModal src={schoolExterior} alt="Училиште" />
                <ImageModal src={conferenceRoom} alt="Конференциска сала" />
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
