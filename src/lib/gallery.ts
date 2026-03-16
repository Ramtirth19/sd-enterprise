/**
 * Gallery images configuration for filters to work.
 *
 * HOW TO ADD IMAGES:
 * 1. Create category folders in public/gallery/ matching GALLERY_CATEGORIES ids:
 *    - public/gallery/gypsum/
 *    - public/gallery/tgrid/
 *    - public/gallery/metal/
 *    - public/gallery/aluminium/
 *    - public/gallery/glass/
 *    - public/gallery/fabrication/
 *    - public/gallery/painting/
 *
 * 2. Add your project images to the appropriate folder.
 *
 * 3. Add each image to the GALLERY_IMAGES array below with:
 *    - src: path from public root (e.g. "/gallery/gypsum/project1.jpg")
 *    - category: must match a GALLERY_CATEGORIES id (gypsum, tgrid, metal, aluminium, glass, fabrication, painting)
 *    - alt: optional description for accessibility
 *
 * Example:
 *   { src: "/gallery/gypsum/office-ceiling.jpg", category: "gypsum", alt: "Office gypsum ceiling" },
 */

export const GALLERY_IMAGES: { src: string; category: string; alt?: string }[] = [
  // Add your images here. Example entries (uncomment and update paths when you add real photos):
  // { src: "/gallery/gypsum/project1.jpg", category: "gypsum", alt: "Gypsum false ceiling project" },
  // { src: "/gallery/gypsum/project2.jpg", category: "gypsum", alt: "Gypsum ceiling installation" },
  // { src: "/gallery/tgrid/office1.jpg", category: "tgrid", alt: "T-Grid ceiling in office" },
  // { src: "/gallery/aluminium/partition1.jpg", category: "aluminium", alt: "Aluminium partition" },
];
