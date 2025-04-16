import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/webdesign", label: "Web Design" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`sticky top-0 z-10 px-4 md:px-0 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-white dark:bg-black shadow-lg"
          : "bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-black dark:bg-black"
      }`}
    >
      <div className="container mx-auto px-1">
        <div className="w-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                src="/greenhouse-webdesigns-logo.svg"
                className="w-16 h-16"
                alt="J logo"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex items-center space-x-10">
              <li className="flex-grow md:flex-grow-0" />
              {navLinks.map((link, index) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm lg:text-base font-medium hover:text-[#8FBC8F] dark:hover:text-[#8FBC8F] hover:font-bold transition-all duration-500 ${
                        isActive
                          ? "text-[#8FBC8F] dark:text-[#8FBC8F] font-extrabold"
                          : "text-black dark:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row justify-center items-center">
            <DarkModeToggle />
            <div className="lg:hidden">
              <HamburgerMenu
                isMenuOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-left pl-8 space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-black dark:text-white text-sm lg:text-base font-medium hover:text-[#8FBC8F] dark:hover:text-[#8FBC8F] hover:font-bold transition-all duration-500 ${
                        isActive ? "text-[#8FBC8F] dark:text-[#8FBC8F]" : ""
                      }`
                    }
                    onClick={() => {
                      scrollToTop();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
