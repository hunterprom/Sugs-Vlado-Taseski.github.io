import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TextReveal, LineReveal, ScrollSlideIn, ScrollZoomReveal, ParallaxSection } from "../components/TypographyEffects";
import { useLanguage } from "@/i18n/LanguageContext";
import DepartmentsSection from "../components/DepartmentsSection";
import CinematicHero from "../components/CinematicHero";
import { AudiencePathways, ProgramsShowcase, WhyUsSection, TestimonialsSection, EnrollmentCTA } from "../components/HomeSections";
import { noviniData } from "../data/noviniData";
import "./StaticHomePage.css";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import conferenceRoom from "@/assets/conference-room.jpg";
import fountain from "@/assets/fountain.jpg";
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

        {/* Audience Pathways — LIGHT */}
        <AudiencePathways />

        {/* Scrollytelling Journey — DARK */}
        <section className="scrollytelling-section sec-dark noise-overlay">
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <ScrollZoomReveal>
              <div className="sec-header sec-header-light" style={{ marginBottom: "60px" }}>
                <h2><TextReveal text={t("scroll.journeyTitle")} className="section-title-reveal" /></h2>
                <LineReveal delay={0.2}><p>{t("scroll.journeySubtitle")}</p></LineReveal>
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

        {/* Programs — LIGHT */}
        <ProgramsShowcase />

        {/* Departments (existing tabbed) */}
        <DepartmentsSection />

        {/* Why Us — DARK */}
        <WhyUsSection />

        {/* News — LIGHT */}
        <section className="sec-news">
          <div className="container">
            <div className="sec-header">
              <h2>{t("home.newsTitle")}</h2>
              <p>{t("home.newsSubtitle")}</p>
            </div>
            <div className="news-grid">
              {latestNews.map((item, i) => (
                <ScrollSlideIn key={i} direction={i === 1 ? "right" : "left"}>
                  <Link to={`/novini/${item.slug}`} className="news-card">
                    <i className={item.icon} />
                    <div className="news-card-meta">
                      <span>{t(item.dateKey)}</span>
                    </div>
                    <h3>{t(item.titleKey)}</h3>
                    <p>{t(item.descriptionKey)}</p>
                    <span className="news-read-more">Прочитај повеќе →</span>
                  </Link>
                </ScrollSlideIn>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link to="/novini" className="cin-btn-primary" style={{ display: 'inline-flex' }}>
                <i className="fas fa-newspaper" /> Видете ги сите →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials — DARK */}
        <TestimonialsSection />

        {/* Enrollment CTA */}
        <EnrollmentCTA />
      </main>
      <SiteFooter />
    </>
  );
};

export default StaticHomePage;
