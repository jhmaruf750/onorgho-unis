"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gray-100 dark:bg-white/6" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/6 hover:bg-white/10 dark:bg-white/6 dark:hover:bg-white/10 transition-all duration-300"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-amber-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.4" />
        </svg>
      )}
    </button>
  );
}
