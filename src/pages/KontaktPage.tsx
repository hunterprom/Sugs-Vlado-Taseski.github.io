import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "./StaticHomePage.css";

const KontaktPage = () => {
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
      setFormMessage({ text: "Ве молиме пополнете ги сите задолжителни полиња.", type: "error" });
      return;
    }
    if (!human) {
      setFormMessage({ text: "Ве молиме потврдете дека сте човек.", type: "error" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormMessage({ text: "Ве молиме внесете валидна е-пошта адреса.", type: "error" });
      return;
    }

    setFormMessage({ text: "Вашата порака е успешно испратена! Ќе ве контактираме наскоро.", type: "success" });
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
              <h2>Контактирајте не</h2>
              <p>Овде можете да не контактирате за било какви прашања</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Локација</h3>
                <p>СУГС „Владо Тасевски" - Скопје<br />III Македонска бригада бб<br />1000 Скопје</p>
              </div>
              <div className="info-card">
                <i className="fas fa-phone-alt"></i>
                <h3>Телефон</h3>
                <p><a href="tel:+38922400040">+389 2 240 00 40</a></p>
              </div>
              <div className="info-card">
                <i className="fas fa-envelope"></i>
                <h3>Е-Пошта</h3>
                <p><a href="mailto:sugs-vladotasevski-skopje@schools.mk">sugs-vladotasevski-skopje@schools.mk</a></p>
              </div>
              <div className="info-card social-info">
                <i className="fas fa-share-alt"></i>
                <h3>Социјални медиуми</h3>
                <div className="social-links">
                  <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a>
                  <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                  <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> YouTube</a>
                </div>
                <p className="team-motto">WE ARE THE TEAM VLADO TASEVSKI!</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Директно испратете ни порака</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="ime">Име *</label>
                    <input type="text" id="ime" name="ime" required />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="prezime">Презиме *</label>
                    <input type="text" id="prezime" name="prezime" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Е-Пошта *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefon">Телефонски број (Не е задолжително)</label>
                  <input type="tel" id="telefon" name="telefon" />
                </div>
                <div className="form-group">
                  <label htmlFor="poraka">Порака *</label>
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
                <button type="submit" className="btn-submit"><i className="fas fa-paper-plane"></i> Испрати порака</button>
              </form>
              {formMessage && (
                <div className={`form-message ${formMessage.type}`}>{formMessage.text}</div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4><i className="fas fa-school"></i> СУГС „Владо Тасевски"</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> III Македонска бригада бб, 1000 Скопје</li>
                <li><i className="fas fa-phone"></i> <a href="tel:+38922400040">02 2400 040</a></li>
                <li><i className="fas fa-envelope"></i> <a href="mailto:sugs-vladotasevski-skopje@schools.mk">sugs-vladotasevski-skopje@schools.mk</a></li>
              </ul>
              <div className="social-icons">
                <a href="https://www.facebook.com/VladoTasevskiPtt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/sugs_vlado_tasevski/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@sugsvladotasevski-skopje" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Корисни линкови</h4>
              <ul>
                <li><a href="https://ednevnik.edu.mk" target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-right"></i> Е-Дневник</a></li>
                <li><a href="https://massum.org/mk/" target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-right"></i> МАССУМ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Работно време</h4>
              <ul>
                <li><i className="fas fa-clock"></i> Пон - Пет: 08:00 - 15:00</li>
                <li><i className="fas fa-clock"></i> Секретаријат: 08:00 - 14:00</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2026 СУГС „Владо Тасевски" - Скопје. Сите права се задржани.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default KontaktPage;