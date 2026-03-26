import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/i18n/LanguageContext";
import "./StaticHomePage.css";

const KontaktPage = () => {
  const { t } = useLanguage();
  const [formMessage, setFormMessage] = useState<{ text: string; type: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const ime = (form.elements.namedItem("ime") as HTMLInputElement)?.value;
    const prezime = (form.elements.namedItem("prezime") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const poraka = (form.elements.namedItem("poraka") as HTMLTextAreaElement)?.value;
    const human = (form.elements.namedItem("human") as HTMLInputElement)?.checked;

    if (!ime || !prezime || !email || !poraka) {
      setFormMessage({ text: t("kontakt.fillAll"), type: "error" });
      return;
    }
    if (!human) {
      setFormMessage({ text: t("kontakt.confirmHuman"), type: "error" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormMessage({ text: t("kontakt.invalidEmail"), type: "error" });
      return;
    }

    setFormMessage({ text: t("kontakt.success"), type: "success" });
    form.reset();
    setTimeout(() => setFormMessage(null), 5000);
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="contact-hero">
          <div className="container">
            <div className="section-header">
              <h2>{t("kontakt.title")}</h2>
              <p>{t("kontakt.subtitle")}</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>{t("kontakt.location")}</h3>
                <p>СУГС „Владо Тасевски" - Скопје<br />III Македонска бригада бб<br />1000 Скопје</p>
              </div>
              <div className="info-card">
                <i className="fas fa-phone-alt"></i>
                <h3>{t("kontakt.phone")}</h3>
                <p><a href="tel:+38922400040">+389 2 240 00 40</a></p>
              </div>
              <div className="info-card">
                <i className="fas fa-envelope"></i>
                <h3>{t("kontakt.email")}</h3>
                <p><a href="mailto:sugs-vladotasevski-skopje@schools.mk">sugs-vladotasevski-skopje@schools.mk</a></p>
              </div>
              <div className="info-card social-info">
                <i className="fas fa-share-alt"></i>
                <h3>{t("kontakt.social")}</h3>
                <div className="social-links">
                  <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a>
                  <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                  <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> YouTube</a>
                </div>
                <p className="team-motto">WE ARE THE TEAM VLADO TASEVSKI!</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>{t("kontakt.sendMessage")}</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="ime">{t("kontakt.firstName")} *</label>
                    <input type="text" id="ime" name="ime" required />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="prezime">{t("kontakt.lastName")} *</label>
                    <input type="text" id="prezime" name="prezime" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("kontakt.emailLabel")} *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefon">{t("kontakt.phoneLabel")}</label>
                  <input type="tel" id="telefon" name="telefon" />
                </div>
                <div className="form-group">
                  <label htmlFor="poraka">{t("kontakt.message")} *</label>
                  <textarea id="poraka" name="poraka" rows={5} required></textarea>
                </div>
                <div className="form-group captcha-group">
                  <div className="captcha-checkbox">
                    <input type="checkbox" id="human" name="human" required />
                    <label htmlFor="human">I am human</label>
                  </div>
                  <div className="captcha-info">
                    <span>hCaptcha</span>
                    <span>Accessibility - Terms</span>
                  </div>
                </div>
                <button type="submit" className="btn-submit"><i className="fas fa-paper-plane"></i> {t("kontakt.submit")}</button>
              </form>
              {formMessage && (
                <div className={`form-message ${formMessage.type}`}>{formMessage.text}</div>
              )}
            </div>
          </div>
        </section>

        <section style={{ padding: '0 0 40px' }}>
          <div className="container">
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <iframe
                src="https://www.google.com/maps?q=СУГС+Владо+Тасевски+Скопје&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("kontakt.location")}
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default KontaktPage;
