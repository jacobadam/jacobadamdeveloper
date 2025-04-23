import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [mode, setMode] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const themeColor = mode === "dark" ? "#000000" : "#f1f5f9";

    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      if (metaThemeColor) metaThemeColor.content = themeColor;
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      if (metaThemeColor) metaThemeColor.content = themeColor;
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
