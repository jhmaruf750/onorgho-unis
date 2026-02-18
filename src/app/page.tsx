import Image from 'next/image';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#000' }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/images/school.jpg')" }}
          aria-hidden={true}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/80 transition-opacity duration-300" />

        <div className="relative z-10 max-w-7xl w-full px-6 text-center fade-in">
          <div className="mx-auto mb-6 w-36 h-36 md:w-44 md:h-44">
            <Image
              src="/images/logo.png"
              alt="ONORGHO UNIS logo"
              width={176}
              height={176}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">ONORGHO UNIS</h1>
          <p className="mt-3 text-lg md:text-2xl text-gray-200">Batch of 2019</p>
          <p className="mt-1 text-sm md:text-base text-gray-300">Shibganj Government Model High School</p>
        </div>

        {/* subtle bottom hint */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <div className="h-0.5 w-24 bg-white/20 rounded-full" />
        </div>
      </section>

      {/* Batch Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey Together</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-prose text-base md:text-lg leading-relaxed">
              A short paragraph about shared memories, growth, and the journey we took together through
              school and beyond. This is a placeholder paragraph to be replaced with real content.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-lg shadow-lg zoom-hover">
              <Image
                src="/images/batch.jpg"
                alt="Batch photo"
                width={1200}
                height={800}
                className="w-full h-72 md:h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-300" aria-labelledby="who-we-are">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#071428] dark:to-[#0b2540] shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-white/10 transition-all duration-300">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="who-we-are" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-600 dark:text-amber-400 mb-6">
                Who We Are
              </h2>

              <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                Our story began with the hopeful footsteps of the 2014 admissions — young minds arriving with
                bright eyes and open hearts. Those early days forged friendships that grew into an unshakable
                fellowship, and by the 2019 SSC batch we had become more than classmates: we were a family.
              </p>

              <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Through shared lessons, late-night conversations, and unwavering support, we learned the
                meaning of unity. Each memory stitched us together — small acts of kindness, collective
                triumphs, and the quiet courage to stand by one another.
              </p>

              <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today we look forward with a common vision: to carry our legacy into the future with purpose,
                to uplift the next generation, and to remain bound by a friendship that time cannot dim.
              </p>

              <div className="mt-8">
                <span className="inline-block px-6 py-3 rounded-full bg-amber-500 dark:bg-amber-600 text-gray-900 font-semibold text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105">
                  Friendship · Unity · Vision
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About School */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">About Shibganj Government Model High School</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg max-w-4xl mx-auto" lang="bn">
            শিবগঞ্জ সরকারি মডেল উচ্চ বিদ্যালয় ঐতিহ্য ও মর্যাদার প্রতীক; এখানে শিক্ষা ও চরিত্র গঠনের উপর গভীর
            গুরুত্ব আরোপ করা হয়। বছরের পর বছর ধরে প্রতিষ্ঠানটি শ্রেষ্ঠতাকে অন্বেষণ করে এসেছে এবং শৃঙ্খলা,
            একাগ্রতা ও নৈতিক মূল্যবোধের মাধ্যমে ছাত্রদের সর্বাঙ্গীণ উন্নয়ন নিশ্চিত করে।
          </p>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />
    </div>
  );
}
