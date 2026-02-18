"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhoWeAre() {
  const [years, setYears] = useState(0);
  const [members, setMembers] = useState(0);

  // Animated Counter
  useEffect(() => {
    let y = 0;
    let m = 0;

    const interval = setInterval(() => {
      if (y < 12) y++;
      if (m < 100) m += 5;

      setYears(y);
      setMembers(m);

      if (y >= 12 && m >= 100) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#071428] dark:via-[#0b2540] dark:to-[#071428] overflow-hidden transition-colors duration-300">

      {/* Floating Parallax Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-amber-400 rounded-full top-20 left-20 animate-bounce"></div>
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full top-40 right-20 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-orange-400 rounded-full bottom-32 left-1/3 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient tracking-wide">
            Who We Are
          </h2>

          <div className="mt-5 h-1 w-32 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 rounded-full" />

          <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            More than a batch — we are a bond, a memory, a legacy.
          </p>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-10 md:p-16 border border-gray-200 dark:border-white/10 transition-all duration-300"
        >

          {/* Story */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-8 tracking-wide mb-8">
              Our journey began in 
              <span className="font-semibold text-amber-500"> 2014 </span>
              — with hopeful hearts, fresh uniforms, and dreams bigger than we understood.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-8 tracking-wide">
              By the time we reached the 
              <span className="font-semibold text-amber-500"> 2019 SSC Batch </span>,
              we were no longer just students — we were a family bound by loyalty,
              respect, shared struggles, and unforgettable memories.
            </p>
          </div>

          <div className="h-px bg-gray-200 dark:bg-white/10 my-16"></div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">🎓</span>
              <h3 className="text-4xl font-bold text-amber-500">{years}+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 tracking-wide">
                Years Together
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">👥</span>
              <h3 className="text-4xl font-bold text-amber-500">{members}+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 tracking-wide">
                Batch Members
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">📸</span>
              <h3 className="text-4xl font-bold text-amber-500">Countless</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 tracking-wide">
                Memories
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl mb-3">🤝</span>
              <h3 className="text-4xl font-bold text-amber-500">One</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 tracking-wide">
                Unbreakable Bond
              </p>
            </div>

          </div>

          <div className="h-px bg-gray-200 dark:bg-white/10 my-16"></div>

          {/* Quote */}
          <div className="text-center relative">
            <blockquote className="relative italic text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
              <span className="absolute -left-6 -top-6 text-5xl text-amber-400 opacity-30">“</span>
              সময় বদলেছে, পথ বদলেছে, কিন্তু আমাদের বন্ধুত্বের গল্প
              এখনো একই রকম উজ্জ্বল।
              <span className="absolute -right-6 -bottom-6 text-5xl text-amber-400 opacity-30">”</span>
            </blockquote>
          </div>

          <div className="mt-16 flex justify-center">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 tracking-wide">
              Friendship · Unity · Brotherhood · Legacy
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
