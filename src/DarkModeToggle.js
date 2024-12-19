import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-1 rounded focus:outline-none"
      aria-label="Toggle dark mode"
    >
      <img
        src="/dark-mode-toggle.svg"
        alt="Dark mode toggle"
        className="w-8 h-8 lg:w-9 lg:h-9 invert-0 dark:invert"
      />
    </button>
  );
};

export default DarkModeToggle;
