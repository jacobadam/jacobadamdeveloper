import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle.js";
import HamburgerMenu from "./HamburgerMenu.js";

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
      className={`sticky top-0 z-10 py-3 px-4 md:px-0 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-white dark:bg-black shadow-lg"
          : "bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-black dark:bg-black"
      }`}
    >
      <div className="container mx-auto px-1">
        <div className="w-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/j-icon.svg" className="w-9 h-9" alt="J logo" />
            </Link>
          </div>

          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold transition-all duration-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-1 justify-center items-center">
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
              <li>
                <Link
                  to="/"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
                  onClick={() => {
                    scrollToTop();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
