import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TextReveal, LineReveal, MarqueeTicker, FadeUpSection, ScrollRevealSection, ScrollSlideIn, ScrollZoomReveal, ParallaxSection } from "../components/TypographyEffects";
import { useLanguage } from "@/i18n/LanguageContext";
import DepartmentsSection from "../components/DepartmentsSection";
import CinematicHero from "../components/CinematicHero";
import { noviniData } from "../data/noviniData";
import "./StaticHomePage.css";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import conferenceRoom from "@/assets/conference-room.png";
import fountain from "@/assets/fountain.png";
import lobbyLogo from "@/assets/lobby-logo.jpg";
import schoolExterior from "@/assets/school-exterior.jpg";

const StaticHomePage = () => {
  const { t } = useLanguage();

  const latestNews = noviniData.slice(0, 3);

  const journeySteps = [
    { icon: "fas fa-school", titleKey: "scroll.step1Title", descKey: "scroll.step1Desc", img: schoolExterior },
    { icon: "fas fa-chalkboard", titleKey: "scroll.step2Title", descKey: "scroll.step2Desc", img: classroom1 },
    { icon: "fas fa-flask", titleKey: "scroll.step3Title", descKey: "scroll.step3Desc", img: conferenceRoom },
    { icon: "fas fa-sun", titleKey: "scroll.step4Title", descKey: "scroll.step4Desc", img: fountain },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <CinematicHero />
        {/* Scrollytelling Journey Section */}
        <section className="scrollytelling-section">
          <div className="container">
            <ScrollZoomReveal>
              <div className="section-header" style={{ marginBottom: "60px" }}>
                <h2>
                  <TextReveal text={t("scroll.journeyTitle")} className="section-title-reveal" />
                </h2>
                <LineReveal delay={0.2}>
                  <p>{t("scroll.journeySubtitle")}</p>
                </LineReveal>
              </div>
            </ScrollZoomReveal>

            <div className="journey-timeline">
              {journeySteps.map((step, i) => (
                <div className="journey-step" key={i}>
                  <ScrollSlideIn direction={i % 2 === 0 ? "left" : "right"}>
                    <div className={`journey-card ${i % 2 !== 0 ? "reverse" : ""}`}>
                      <div className="journey-card-content">
                        <div className="journey-step-number">{String(i + 1).padStart(2, "0")}</div>
                        <div className="journey-icon"><i className={step.icon}></i></div>
                        <h3>{t(step.titleKey)}</h3>
                        <p>{t(step.descKey)}</p>
                      </div>
                      <ParallaxSection speed={0.15}>
                        <div className="journey-card-image">
                          <img src={step.img} alt={t(step.titleKey)} />
                        </div>
                      </ParallaxSection>
                    </div>
                  </ScrollSlideIn>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features with staggered scroll reveal */}
        <section className="features">
          <div className="container">
            <ScrollZoomReveal>
              <div className="section-header">
                <h2>
                  <TextReveal text={t("features.title")} className="section-title-reveal" />
                </h2>
                <LineReveal delay={0.3}>
                  <p>{t("features.subtitle")}</p>
                </LineReveal>
              </div>
            </ScrollZoomReveal>
            <div className="cards-grid">
              {[
                { icon: "fas fa-laptop-code", title: t("features.digital"), desc: t("features.digitalDesc"), link: "/elektrotehnicka" },
                { icon: "fas fa-chalkboard-user", title: t("features.quality"), desc: t("features.qualityDesc"), link: "/nastavnici" },
                { icon: "fas fa-futbol", title: t("features.sport"), desc: t("features.sportDesc"), link: "/sport" },
              ].map((card, i) => (
                <ScrollSlideIn key={i} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="card">
                    <div className="card-icon"><i className={card.icon}></i></div>
                    <h3 className="font-display">{card.title}</h3>
                    <p>{card.desc}</p>
                    <Link to={card.link} className="card-link">{t("features.learnMore")} <i className="fas fa-chevron-right"></i></Link>
                  </div>
                </ScrollSlideIn>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive image band */}
        <section className="immersive-band">
          <ParallaxSection speed={0.4}>
            <div className="immersive-images">
              <img src={lobbyLogo} alt="" className="immersive-img" />
              <img src={classroom3} alt="" className="immersive-img" />
              <img src={schoolExterior} alt="" className="immersive-img" />
            </div>
          </ParallaxSection>
          <div className="immersive-overlay">
            <ScrollZoomReveal>
              <h2>{t("scroll.immersiveTitle")}</h2>
              <p>{t("scroll.immersiveDesc")}</p>
            </ScrollZoomReveal>
          </div>
        </section>

        {/* Departments / Струки */}
        <DepartmentsSection />

        {/* News with scroll reveals */}
        <section className="projects-section">
          <div className="container">
            <ScrollRevealSection>
              <div className="section-header">
                <h2>{t("home.newsTitle")}</h2>
                <p>{t("home.newsSubtitle")}</p>
              </div>
            </ScrollRevealSection>
            <div className="projects-grid">
              {latestNews.map((item, i) => (
                <ScrollSlideIn key={i} direction={i === 1 ? "right" : "left"}>
                  <Link to={`/novini/${item.slug}`} className="project-card" style={{ textDecoration: "none", display: "block" }}>
                    <i className={item.icon}></i>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', color: '#9FBDD6' }}>{t(item.dateKey)}</span>
                    </div>
                    <h3>{t(item.titleKey)}</h3>
                    <p>{t(item.descriptionKey)}</p>
                  </Link>
                </ScrollSlideIn>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <ScrollRevealSection>
                <Link to="/novini" className="btn-primary">
                  <i className="fas fa-newspaper"></i> {t("nav.allNews")}
                </Link>
              </ScrollRevealSection>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default StaticHomePage;
