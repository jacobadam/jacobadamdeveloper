import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import darkModeToggle from "./assets/dark-mode-lottie.json";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const lottieRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const themeColor = isDarkMode ? "#000000" : "#f1f5f9";

    if (isDarkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      metaThemeColor.content = themeColor;
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      metaThemeColor.content = themeColor;
    }
  }, [isDarkMode]);

  const handleClick = () => {
    if (lottieRef.current) {
      if (isDarkMode) {
        lottieRef.current?.playSegments([120, 150], true);
        setIsDarkMode((prev) => !prev);
      } else {
        lottieRef.current?.playSegments([30, 50], true);
        setIsDarkMode((prev) => !prev);
      }
    }
  };

  useEffect(() => {
    lottieRef.current?.goToAndStop(
      localStorage.getItem("theme") === "dark" ? 0 : 177,
      true
    );
  }, []);

  return (
    <button
      onClick={handleClick}
      className="w-24 h-24 p-1 rounded focus:outline-none"
      aria-label="Toggle dark mode"
    >
      <Lottie
        lottieRef={lottieRef}
        loop={false}
        autoplay={false}
        animationData={darkModeToggle}
      />
    </button>
  );
};

export default DarkModeToggle;
