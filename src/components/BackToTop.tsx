"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 360);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    try {
      const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (prefersReduced) window.scrollTo(0, 0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }

  return (
    <button
      aria-label="Back to top"
      onClick={scrollTop}
      className={`fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="sr-only">Back to top</span>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M8 14l4-4 4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
}
