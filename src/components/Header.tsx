"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold text-stone-800">{COMPANY.name}</span>
            <span className="text-xs text-amber-700 hidden sm:block">{COMPANY.tagline}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-amber-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-600 hover:text-amber-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call: {COMPANY.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
