import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`sticky top-0 z-10 py-3 w-full transition-colors duration-300 ${
        isScrolled
          ? "bg-white dark:bg-black shadow-lg"
          : "bg-gradient-to-b from-white dark:from-current to-[#e2e8f0] dark:to-[black]"
      }`}
    >
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="flex-shrink-0 dark:invert">
            <Link to="/">
              <img src="/j-icon.svg" width={60} height={25} alt="J logo" />
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

          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-black dark:text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <DarkModeToggle />
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-left pl-8 space-y-4 py-4">
              <li>
                <Link
                  to="/"
                  className="text-black dark:text-white text-sm lg:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-600 hover:font-bold duration-500"
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
        )}
      </div>
    </nav>
  );
}
