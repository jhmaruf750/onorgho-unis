"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";

const galleryImages = [
  // Batch (5)
  { src: "/images/gallery/batch/batch1.jpg", alt: "Batch Group 1", category: "Batch" },
  { src: "/images/gallery/batch/batch2.jpg", alt: "Batch Group 2", category: "Batch" },
  { src: "/images/gallery/batch/batch3.jpg", alt: "Batch Group 3", category: "Batch" },
  { src: "/images/gallery/batch/batch4.jpg", alt: "Batch Group 4", category: "Batch" },
  { src: "/images/gallery/batch/batch5.jpg", alt: "Batch Group 5", category: "Batch" },

  // School (5)
  { src: "/images/gallery/school/school1.jpg", alt: "School Campus 1", category: "School" },
  { src: "/images/gallery/school/school2.jpg", alt: "School Campus 2", category: "School" },
  { src: "/images/gallery/school/school3.jpg", alt: "School Campus 3", category: "School" },
  { src: "/images/gallery/school/school4.jpg", alt: "School Campus 4", category: "School" },
  { src: "/images/gallery/school/school5.jpg", alt: "School Campus 5", category: "School" },

  // Events (3)
  { src: "/images/gallery/events/event1.jpg", alt: "Cultural Event 1", category: "Events" },
  { src: "/images/gallery/events/event2.jpg", alt: "Cultural Event 2", category: "Events" },
  { src: "/images/gallery/events/event3.jpg", alt: "Cultural Event 3", category: "Events" },

  // Memories (6)
  { src: "/images/gallery/memories/memory1.jpg", alt: "Memory 1", category: "Memories" },
  { src: "/images/gallery/memories/memory2.jpg", alt: "Memory 2", category: "Memories" },
  { src: "/images/gallery/memories/memory3.jpg", alt: "Memory 3", category: "Memories" },
  { src: "/images/gallery/memories/memory4.jpg", alt: "Memory 4", category: "Memories" },
  { src: "/images/gallery/memories/memory5.jpg", alt: "Memory 5", category: "Memories" },
  { src: "/images/gallery/memories/memory6.jpg", alt: "Memory 6", category: "Memories" },
];

const categories = ["All", "Batch", "School", "Events", "Memories"];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#071428] dark:to-[#0b2540] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-wide">
            Our Gallery
          </h1>
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A visual archive of our shared journey — classrooms, corridors, competitions and memories that shaped us.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-amber-500 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((img) => (
            <div
              key={img.src}
              onClick={() => setSelected(img.src)}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid"
            >
              <div className="relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                {/* Text */}
                <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{img.alt}</h3>
                  <p className="text-sm text-amber-300">{img.category}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {selected && (
          <ImageModal src={selected} alt={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </main>
  );
}
