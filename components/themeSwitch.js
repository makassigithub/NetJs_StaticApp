import { useState } from "react";
import DarkTheme from "./darkTheme";

function ThemeSwitch() {
  const loadDarkMode = () => {
    if (typeof localStorage === "undefined") {
      return false;
    }

    const mode = localStorage.getItem("darkMode");
    return mode === null ? false : JSON.parse(mode);
  };

  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
