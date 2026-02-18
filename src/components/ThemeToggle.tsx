"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    setMounted(true);
  }, []);

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative w-10 h-10 flex items-center justify-center rounded-xl
                 bg-white/70 dark:bg-white/10
                 backdrop-blur-md
                 border border-gray-300/40 dark:border-white/10
                 shadow-md
                 hover:shadow-lg
                 transition-all duration-500
                 hover:scale-105 active:scale-95"
    >
      <div
        className={`transition-transform duration-700 ${
          dark ? "rotate-0 scale-100" : "rotate-180 scale-90"
        }`}
      >
        {dark ? (
          // 🌙 Premium Moon Icon
          <svg
            className="w-5 h-5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"
            />
          </svg>
        ) : (
          // ☀️ Premium Sun Icon
          <svg
            className="w-5 h-5 text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
