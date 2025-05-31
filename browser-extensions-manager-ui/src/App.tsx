import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

type ThemeType = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col gap-10 items-center w-[90vw] mb-10 lg:w-[85vw] lg:mt-5 lg:gap-15">
      <Header toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
