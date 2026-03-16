export const COMPANY = {
  name: "SD Enterprises",
  legalName: "Toonwal and Sons",
  tagline: "Professional Interior Contractors & Ceiling/Aluminium Specialists",
  established: 2008,
  phone: "9417008514",
  email: "shantideep111@gmail.com",
  address: "To be updated later",
  serviceArea: "Haryana",
  siteVisits: "By Appointment Only",
  businessHours: "Monday – Sunday: 9:00 AM – 8:00 PM",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "false-ceiling",
    title: "False Ceiling Contractors",
    shortDesc: "Modern false ceiling solutions for commercial and residential projects",
    icon: "ceiling",
    content: `SD Enterprises specializes in modern false ceiling solutions for commercial and residential projects. Our ceilings improve appearance, hide wiring, and enhance lighting design.`,
    items: [
      {
        name: "Gypsum False Ceiling",
        points: ["Modern design ceiling", "Smooth finish", "Best for homes, offices, showrooms"],
      },
      {
        name: "T-Grid False Ceiling",
        points: ["Best for offices and hospitals", "Easy maintenance", "Professional appearance"],
      },
      {
        name: "Metal False Ceiling",
        points: ["Premium commercial ceiling", "Long-lasting and durable", "Ideal for hospitals and showrooms"],
      },
      {
        name: "POP False Ceiling",
        points: ["Decorative ceiling designs", "Custom patterns available"],
      },
    ],
  },
  {
    slug: "aluminium-partition",
    title: "Aluminium Partition Contractors",
    shortDesc: "Complete aluminium partition and door solutions",
    icon: "partition",
    content: `We provide complete aluminium partition and door solutions for offices, cabins, and commercial spaces.`,
    items: [
      { name: "Aluminium office partitions", points: [] },
      { name: "Aluminium glass partitions", points: [] },
      { name: "Aluminium doors", points: [] },
      { name: "Office cabin partitions", points: [] },
      { name: "Aluminium framework", points: [] },
    ],
    note: "Strong, lightweight, and modern finish guaranteed.",
  },
  {
    slug: "glass-partition",
    title: "Glass Partition & Office Cabins",
    shortDesc: "Modern glass partitions for offices and commercial interiors",
    icon: "glass",
    content: `We install modern glass partitions for offices and commercial interiors.`,
    items: [
      { name: "Toughened glass partitions", points: [] },
      { name: "Office glass cabins", points: [] },
      { name: "Frameless glass partitions", points: [] },
      { name: "Glass doors", points: [] },
    ],
    note: "Perfect for modern office environments.",
  },
  {
    slug: "ms-fabrication",
    title: "MS Fabrication & Framework",
    shortDesc: "Strong and precise MS fabrication for ceiling and partition support",
    icon: "fabrication",
    content: `We provide strong and precise MS fabrication work for ceiling and partition support structures.`,
    items: [
      { name: "Ceiling framework", points: [] },
      { name: "Partition structure", points: [] },
      { name: "Custom metal fabrication", points: [] },
    ],
  },
  {
    slug: "painting-wallpaper",
    title: "Painting & Wallpaper Services",
    shortDesc: "Professional painting and wallpaper installation",
    icon: "painting",
    content: `Professional painting and wallpaper installation for residential and commercial spaces.`,
    items: [
      { name: "Interior painting", points: [] },
      { name: "Office painting", points: [] },
      { name: "Wallpaper installation", points: [] },
      { name: "Surface preparation and finishing", points: [] },
    ],
  },
] as const;

export const SERVICE_FORM_OPTIONS = [
  "Gypsum False Ceiling",
  "T-Grid Ceiling",
  "Metal Ceiling",
  "Aluminium Partition",
  "Glass Partition",
  "Aluminium Doors",
  "Fabrication",
  "Painting",
  "Other",
] as const;

export const GALLERY_CATEGORIES = [
  { id: "gypsum", name: "Gypsum False Ceiling", count: 8 },
  { id: "tgrid", name: "T-Grid Ceiling", count: 6 },
  { id: "metal", name: "Metal Ceiling", count: 5 },
  { id: "aluminium", name: "Aluminium Partition & Doors", count: 8 },
  { id: "glass", name: "Glass Partition", count: 8 },
  { id: "fabrication", name: "MS Fabrication Framework", count: 5 },
  { id: "painting", name: "Painting & Wallpaper", count: 5 },
] as const;
