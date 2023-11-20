import { useContext, useEffect, useState } from "react";
import GlobalThemeContext from "../context/GlobalThemeContext";

export const GlobalThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.toggle(Theme);

    localStorage.setItem("theme", Theme);
    setTheme(Theme);
  }, [Theme]);

  return (
    <GlobalThemeContext.Provider value={[Theme, setTheme]}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

export const useTheme = () => {
  const [Theme, setTheme] = useContext(GlobalThemeContext);

  if (!Theme) console.log("useTheme must be used inside a GlobalThemeProvider");

  return [Theme, setTheme];
};
