"use client";

import { useState } from "react";
import Image from "next/image";
import { COMPANY, GALLERY_CATEGORIES } from "@/lib/constants";
import { GALLERY_IMAGES } from "@/lib/gallery";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string | null>(null);

  // Use real images from GALLERY_IMAGES when available, otherwise placeholders
  const hasRealImages = GALLERY_IMAGES.length > 0;
  const placeholderCount = 45;
  const placeholders = Array.from({ length: placeholderCount }, (_, i) => ({
    id: i + 1,
    category: GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length].id,
    label: GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length].name,
  }));

  const items = hasRealImages
    ? GALLERY_IMAGES.map((img, i) => ({
        id: i + 1,
        src: img.src,
        category: img.category,
        label: img.alt ?? GALLERY_CATEGORIES.find((c) => c.id === img.category)?.name ?? "Project",
      }))
    : placeholders;

  const filtered = filter ? items.filter((p) => p.category === filter) : items;

  return (
    <div>
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Gallery & Our Projects</h1>
          <p className="text-brand-200 max-w-2xl">
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
              !filter ? "bg-brand-800 text-white" : "bg-brand-100 text-brand-900 hover:bg-brand-200"
            }`}
          >
            All
          </button>
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === cat.id ? "bg-brand-800 text-white" : "bg-brand-100 text-brand-900 hover:bg-brand-200"
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
              className="aspect-square rounded-lg overflow-hidden bg-brand-100 group cursor-pointer"
            >
              {"src" in item ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-200 to-brand-300 flex items-center justify-center p-4 text-center group-hover:from-brand-300 group-hover:to-brand-500 transition-colors">
                  <span className="text-brand-900 text-sm font-medium group-hover:text-white">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <p className="text-center text-slate-600 mt-12 font-medium">
          For similar work, contact {COMPANY.name} at{" "}
          <a href={`tel:${COMPANY.phone}`} className="text-brand-800 hover:text-brand-700 font-semibold">
            {COMPANY.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
