import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Дома", href: "/" },
  { label: "За нас", href: "/za-nas" },
  { label: "Настава", href: "/nastava" },
  { label: "Активности", href: "/aktivnosti" },
  { label: "Контакт", href: "/kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = scrolled || !isHome;
  const currentPage = navItems.find((item) => item.href === location.pathname);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">ВТ</span>
            </div>
            <span className={`font-heading font-bold text-lg hidden sm:block transition-colors ${
              showSolid ? "text-foreground" : "text-primary-foreground"
            }`}>
              СУГС Владо Тасевски
            </span>
          </Link>

          {/* Desktop dropdown */}
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                    showSolid
                      ? "text-foreground hover:bg-accent"
                      : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                  }`}
                >
                  <Menu size={18} />
                  {currentPage?.label || "Мени"}
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        to={item.href}
                        className={`w-full cursor-pointer ${
                          isActive ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/kontakt"
              className="ml-1 px-5 py-2.5 rounded-lg bg-gradient-secondary font-heading font-semibold text-sm text-secondary-foreground hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              Запиши се
            </Link>
          </div>

          {/* Mobile dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    showSolid ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  <Menu size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        to={item.href}
                        className={`w-full cursor-pointer ${
                          isActive ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuItem asChild>
                  <Link
                    to="/kontakt"
                    className="w-full cursor-pointer font-semibold text-primary"
                  >
                    Запиши се
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
