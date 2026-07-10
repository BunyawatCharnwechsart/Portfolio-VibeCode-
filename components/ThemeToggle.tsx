"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/10 cursor-pointer transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white dark:bg-black shadow-sm dark:shadow-none transition-all duration-300 flex items-center justify-center ${
          dark ? "left-0.5" : "left-[calc(100%-1.625rem)]"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            dark ? "bg-neon shadow-[0_0_6px_#1EF4A8]" : "bg-gray-400"
          }`}
        />
      </span>
    </button>
  );
}
