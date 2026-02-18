"use client";

import { useEffect, useRef } from "react";

const EVENTS = [
  { year: "2014", title: "Admission", desc: "A new chapter began with our admission." },
  { year: "2019", title: "SSC Batch", desc: "Graduated together as the Batch of 2019." },
  { year: "2026", title: "Reunion", desc: "We reunited to celebrate enduring friendships." },
];

export default function Timeline() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = root.current?.querySelectorAll('.timeline-item');
    if (!items) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.15 });

    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Timeline</h3>

        <div ref={root} className="relative">
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30 rounded" />

          <div className="space-y-8">
            {EVENTS.map((e, idx) => (
              <div key={e.year} className="timeline-item flex items-start gap-4 md:pl-12">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center text-white font-bold text-sm md:text-base transform transition-all duration-400 scale-95 opacity-80 shadow-lg">
                    {e.year}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="rounded-lg p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm transform transition-all duration-500 translate-y-6 opacity-0 shadow-md dark:shadow-lg">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{e.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">{e.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
