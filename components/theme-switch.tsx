"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";
export default function ThemeSwitch() {
  const [theme, setTheme] = React.useState<Theme>("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  return (
    <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
      {theme === "light" ? (
        <BsSun className="text-gray-950 dark:text-white text-2xl" />
      ) : (
        <BsMoon className="text-white dark:text-gray-950 text-2xl" />
      )}
    </button>
  );
}
