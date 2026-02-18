"use client";

import { useEffect } from "react";

export default function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative max-w-5xl w-full transform transition-all duration-300 animate-modal-scale">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/10">
          <img src={src} alt={alt || "image"} className="w-full h-auto object-contain bg-gray-100 dark:bg-gray-900 max-h-[90vh]" />
        </div>

        <button
          aria-label="Close image"
          className="absolute top-4 right-4 z-60 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
          onClick={onClose}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
