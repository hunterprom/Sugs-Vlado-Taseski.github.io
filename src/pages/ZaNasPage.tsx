import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
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
import ImageModal from "../components/ImageModal";

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
              <div style={{ float: 'left', marginRight: '20px', marginBottom: '10px', textAlign: 'center' }}>
                <ImageModal src={vladoTasevski} alt="Владо Тасевски" style={{ width: '160px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                <p style={{ fontSize: '0.8rem', color: '#1565C0', fontWeight: 600, marginTop: '6px' }}>Владо Тасевски</p>
              </div>
              <p><strong>Нашата приказна започна во далечната 1959 година</strong>, кога Работничкиот совет на Железничко-транспортното претпријатие Скопје, во согласност со Уредбата за центрите за стручно образование на работници, ја донесе Одлуката за формирање Центар на железничарите за стручно образование на младинци и возрасни.</p>
              <p>Од 1961 година почнува со работа Железничкото техничко училиште за сообраќајно-транспортни струки со интернатско сместување. По катастрофалниот земјотрес во 1963 година, училиштето привремено беше преместено во Белград.</p>
              <p>На <strong>15 април 1979 година</strong>, со Одлука на Работничкиот совет, Центарот го добива името на првоборецот-железничар <strong>Владо Тасевски</strong>.</p>
              <p>Учебната 1983/84 година се воведоа нови профили од областа на ПТТ сообраќајот и телекомуникациите, со што училиштето го доби името Училишен центар за железнички и ПТТ сообраќај „Владо Тасевски". Во 2004 година, со процесот на децентрализација, училиштето преминува под ингеренција на Град Скопје и станува СУГС „Владо Тасевски".</p>
              <p className="quote">„Просториите на СУГС „Владо Тасевски" се исполнети со младост, убавина, љубов, смеа, палавост и со помалку или повеќе учење."</p>
              <div style={{ clear: 'both' }}></div>

              <h3 style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#1565C0', fontSize: '1.4rem' }}>
                <i className="fas fa-camera-retro"></i> Од нашата историја
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
