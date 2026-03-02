import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  { label: "Дома", to: "/" },
  { label: "За нас", to: "/za-nas" },
  { label: "Настава", to: "/nastava" },
  { label: "Активности", to: "/aktivnosti" },
  { label: "Контакт", to: "/kontakt" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">ВТ</span>
              </div>
              <span className="font-heading font-bold text-lg">СУГС Владо Тасевски</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">
              Модерно техничко училиште во Скопје – повеќе од 65 години образование за иднината.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Youtube, href: "https://youtube.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Линкови</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold mb-4">Струки</h4>
            <ul className="space-y-2">
              {["Електротехничар", "Машински техничар", "Сообраќајна струка", "Компјутерска техника", "Енергетика"].map((item) => (
                <li key={item}>
                  <Link to="/nastava" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Институции</h4>
            <ul className="space-y-2">
              {[
                { name: "Министерство за образование", href: "https://mon.gov.mk" },
                { name: "Биро за развој", href: "https://bro.gov.mk" },
                { name: "ДИЦ", href: "https://dic.edu.mk" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} СУГС „Владо Тасевски" – Скопје. Сите права задржани.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
