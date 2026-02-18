"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BatchJourney() {
  const [text, setText] = useState("");
  const fullText = "২০১৪ থেকে ২০১৯ — পাঁচ বছরের এক অমলিন অধ্যায়";

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f3f4f6] dark:from-[#071428] dark:to-[#0b2540]">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Parallax Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/batch.jpg"
              alt="Batch Photo"
              width={1200}
              height={800}
              className="w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Timeline Line */}
          <div className="absolute -right-10 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-transparent hidden lg:block"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* Small Elegant Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            আমাদের পথচলা
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>

          {/* Typing Line */}
          <p className="text-amber-600 font-medium text-lg min-h-[30px]">
            {text}
          </p>

          {/* Story Short + Deep */}
          <p className="text-gray-700 dark:text-gray-300 leading-8 text-base md:text-lg">
            সেই প্রথম দিনের অচেনা মুখগুলো আজ স্মৃতির সবচেয়ে আপন অংশ। 
            একসাথে ক্লাস করা, মাঠে দৌড়ানো, পরীক্ষার আগে দুশ্চিন্তা—
            এই ছোট ছোট মুহূর্তগুলোই আমাদের বন্ধনকে গড়ে তুলেছে।
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-8 text-base md:text-lg">
            সময়ের সাথে পথ আলাদা হয়েছে,
            কিন্তু শিকড়টা রয়ে গেছে একই—
            “অনর্ঘ্য উনিশ” নামের এক অবিচ্ছেদ্য পরিচয়।
          </p>

          {/* New Quote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-800 dark:text-gray-200">
            “কিছু সম্পর্কের কোনো শেষ নেই, শুধু সময়ের সাথে তাদের গভীরতা বাড়ে।”
          </blockquote>

        </motion.div>

      </div>

      {/* Slow Fade Bottom Story */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mt-32 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          এই গল্প এখানেই শেষ নয়
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-8 text-base md:text-lg">
          আমরা হয়তো আজ বিভিন্ন শহরে, বিভিন্ন পেশায় ব্যস্ত।
          তবুও আমাদের গল্পটা একই সুতোয় গাঁথা—
          যেখানে বন্ধুত্ব, সম্মান এবং স্মৃতির আলো আজও জ্বলছে।
        </p>
      </motion.div>

    </section>
  );
}
