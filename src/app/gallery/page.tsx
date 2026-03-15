"use client";

import { useState } from "react";
import { COMPANY, GALLERY_CATEGORIES } from "@/lib/constants";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string | null>(null);

  // Placeholder images - replace with real project photos in /public/gallery/
  const placeholderCount = 45;
  const placeholders = Array.from({ length: placeholderCount }, (_, i) => ({
    id: i + 1,
    category: GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length].id,
    label: GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length].name,
  }));

  const filtered = filter
    ? placeholders.filter((p) => p.category === filter)
    : placeholders;

  return (
    <div>
      <section className="bg-stone-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Gallery & Our Projects</h1>
          <p className="text-stone-300 max-w-2xl">
            {COMPANY.name} has successfully completed numerous false ceiling, aluminium partition, glass, and interior projects since {COMPANY.established}. Here are some of our recent project works completed across Haryana.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !filter ? "bg-amber-600 text-white" : "bg-stone-200 text-stone-700 hover:bg-stone-300"
            }`}
          >
            All
          </button>
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === cat.id ? "bg-amber-600 text-white" : "bg-stone-200 text-stone-700 hover:bg-stone-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-lg overflow-hidden bg-stone-200 group cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center p-4 text-center group-hover:from-stone-400 group-hover:to-stone-500 transition-colors">
                <span className="text-stone-600 text-sm font-medium group-hover:text-white">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <p className="text-center text-stone-600 mt-12 font-medium">
          For similar work, contact {COMPANY.name} at{" "}
          <a href={`tel:${COMPANY.phone}`} className="text-amber-600 hover:text-amber-700 font-semibold">
            {COMPANY.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
