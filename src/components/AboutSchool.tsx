"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSchool() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#071428] dark:to-[#0b2540]">

      {/* Soft Glow Background */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-wide">
            About Shibganj Government Model High School
          </h3>

          <div className="mt-5 h-1 w-28 mx-auto bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 rounded-full" />

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A place where knowledge meets character, and discipline shapes destiny.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8" lang="bn">
              শিবগঞ্জ সরকারি মডেল উচ্চ বিদ্যালয় শুধু একটি শিক্ষা প্রতিষ্ঠান নয় — এটি ঐতিহ্য, গৌরব এবং মানবিক মূল্যবোধের এক উজ্জ্বল প্রতীক।
              প্রতিষ্ঠার পর থেকে এই বিদ্যালয় অসংখ্য মেধাবী শিক্ষার্থী তৈরি করেছে যারা আজ দেশের বিভিন্ন গুরুত্বপূর্ণ স্থানে অবদান রাখছে।
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8" lang="bn">
              এখানে শিক্ষা শুধু পাঠ্যবইয়ের মধ্যেই সীমাবদ্ধ নয়; বরং শৃঙ্খলা, সততা, নেতৃত্ব এবং সামাজিক দায়বদ্ধতার চর্চার মাধ্যমে
              একজন শিক্ষার্থীকে পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলা হয়।
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8" lang="bn">
              প্রতিটি শ্রেণিকক্ষ, প্রতিটি প্রাঙ্গণ, প্রতিটি সাংস্কৃতিক অনুষ্ঠান — সবকিছু মিলিয়ে এই বিদ্যালয় গড়ে তুলেছে
              একটি শক্তিশালী ও ঐক্যবদ্ধ সম্প্রদায়, যেখানে বন্ধুত্ব, সহযোগিতা এবং শ্রদ্ধা চিরস্থায়ী বন্ধনে আবদ্ধ।
            </p>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105">
              <Image
                src="/images/school.jpg"
                alt="Shibganj Government Model High School"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {[
            {
              title: "Academic Excellence",
              text: "ধারাবাহিক সাফল্য ও পরীক্ষার ফলাফলে শ্রেষ্ঠত্বের মাধ্যমে বিদ্যালয়টি এক অনন্য মান বজায় রেখেছে।",
              icon: "🎓",
            },
            {
              title: "Discipline & Character",
              text: "নৈতিক মূল্যবোধ ও শৃঙ্খলার মাধ্যমে শিক্ষার্থীদের ব্যক্তিত্ব গঠন নিশ্চিত করা হয়।",
              icon: "⚖️",
            },
            {
              title: "Cultural Activities",
              text: "বিতর্ক, ক্রীড়া ও সাংস্কৃতিক কার্যক্রমের মাধ্যমে বহুমাত্রিক প্রতিভার বিকাশ ঘটে।",
              icon: "🎭",
            },
            {
              title: "Strong Alumni Network",
              text: "প্রাক্তন শিক্ষার্থীদের শক্তিশালী বন্ধন ও সহযোগিতা বিদ্যালয়ের গৌরব বৃদ্ধি করে।",
              icon: "🤝",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white dark:bg-[#0f2a45] rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-white/10"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-amber-500 mb-4">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
