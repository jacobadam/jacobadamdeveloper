import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/webdesign", label: "Web Design" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`bg-black fixed top-0 z-20 overflow-hidden border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur px-4 transition-all duration-300 w-full md:w-auto ${
          isScrolled
            ? "left-0 right-0"
            : "mx-auto md:left-6 md:right-6 md:top-6 md:rounded-2xl"
        }`}
      >
        <div className="flex items-center justify-between">
          <NavLink to="/" className="w-36 p-2">
            <img src="/greenhouse-logo.png" alt="Greenhouse Web Designs Logo" />
          </NavLink>

          <div className="hidden items-center gap-2 lg:flex opacity-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 opacity-100 hover:text-[#6fa96f] dark:hover:text-indigo-500 ${
                    isActive
                      ? "text-[#6fa96f] dark:text-indigo-500"
                      : "text-white"
                  }`
                }
                onClick={() => {
                  scrollToTop();
                }}
              >
                <span className="text-sm lg:text-base font-normal transition-all duration-500 opacity-100">
                  {link.label}
                </span>
                <span className="absolute inset-0 z-0 opacity-100 transition-opacity group-hover:opacity-100" />
              </NavLink>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center opacity-100">
            <DarkModeToggle />
            <div className="lg:hidden opacity-100">
              <HamburgerMenu
                isMenuOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-transparent backdrop-blur opacity-100">
            <ul className="flex flex-col items-left pl-8 space-y-4 py-4 opacity-100">
              {navLinks.map((link) => (
                <li key={link.to} className="opacity-100">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm lg:text-base font-medium hover:font-bold transition-all duration-500 opacity-100 ${
                        isActive
                          ? "text-[#6fa96f] dark:text-indigo-500"
                          : "text-white"
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
      </nav>
    </>
  );
}
