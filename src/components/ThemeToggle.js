"use client";
import React, { useEffect, useState } from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark")
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme): dark").matches) {
        setTheme("dark")
    }
  }, []);
  return (
    <>
      <button
        className="fixed w-10 h-10 border border-zinc-800 rounded-md shadow-2xl flex items-center justify-center bg-gray-300 dark:bg-zinc-800/30 dark:border-gray-300"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoonStarsFill />}
      </button>
    </>
  );
};

export default ThemeToggle;
