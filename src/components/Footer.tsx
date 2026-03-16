import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-1.5 mb-2">
              <Image
                src="/logo.png"
                alt={COMPANY.name}
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-white text-lg font-bold">{COMPANY.name}</h3>
            </Link>
            <p className="text-sm">{COMPANY.tagline}</p>
          </div>
          <div>
            <h4 className="text-amber-400 font-semibold mb-2">Contact</h4>
            <p>
              <a href={`tel:${COMPANY.phone}`} className="hover:text-amber-400 transition-colors">
                Phone: {COMPANY.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-amber-400 transition-colors">
                {COMPANY.email}
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-amber-400 font-semibold mb-2">Service Area</h4>
            <p>Service Area: {COMPANY.serviceArea}</p>
            <p>Site Visits: {COMPANY.siteVisits}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-amber-400 transition-colors text-sm">
              Home
            </Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors text-sm">
              About
            </Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors text-sm">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-amber-400 transition-colors text-sm">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors text-sm">
              Contact
            </Link>
          </div>
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
