"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const EVENTS = [
  { year: "2014", title: "Admission", desc: "A new chapter began with our admission." },
  { year: "2019", title: "SSC Batch", desc: "we completed our SSC together." },
  { year: "2026", title: "Reunion", desc: "We reunited to celebrate enduring friendships." },
];

export default function Timeline() {
  const root = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#071428] dark:to-[#0b2540]">

      {/* Soft Glow */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-400/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-pink-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-20 gradient-text"
        >
          Timeline
        </motion.h3>

        {/* Timeline Container */}
        <div className="relative">

          {/* Animated Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-6 top-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden md:block"
          />

          <div className="space-y-16">

            {EVENTS.map((e, idx) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:pl-16"
              >

                {/* Year Circle */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-xl animate-pulse">
                    {e.year}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="glass lift rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-500">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {e.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 text-base leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
