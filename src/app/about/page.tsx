import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: `About ${COMPANY.name}`,
  description: `Professional Interior Contractors & Ceiling Specialists since ${COMPANY.established}. Learn about ${COMPANY.name}, our mission, vision, and experience.`,
};

export default function AboutPage() {
  const strengths = [
    "17+ Years Industry Experience",
    "Skilled and Experienced Team",
    "Professional Project Management",
    "Quality Material Usage",
    "On-Time Completion",
    "Commercial and Residential Expertise",
  ];

  const experience = [
    "Office Interior Projects",
    "False Ceiling Installations",
    "Aluminium and Glass Partitions",
    "Commercial Showrooms",
    "Residential Projects",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Professional Interior Contractors & Ceiling Specialists — Since {COMPANY.established}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Main Content */}
        <section className="prose prose-lg max-w-none">
          <p className="text-slate-600 leading-relaxed">
            {COMPANY.name} is a trusted interior contracting company established in {COMPANY.established} under {COMPANY.legalName}, delivering professional false ceiling, aluminium partition, glass, fabrication, and painting services.
          </p>
          <p className="text-slate-600 leading-relaxed">
            With over 17 years of experience, we have successfully completed a wide range of commercial and residential projects. Our company is known for quality workmanship, reliable service, and professional project execution.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We specialize in modern ceiling systems, office partitions, aluminium doors, and glass cabins, providing complete interior solutions tailored to client requirements.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our team of skilled workers ensures every project is completed with proper finishing, strong framework, and attention to detail.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We proudly provide services across {COMPANY.serviceArea} and surrounding regions, serving offices, hospitals, showrooms, commercial buildings, and homes.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our goal is to deliver durable, high-quality interior solutions that enhance the functionality and appearance of every space.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
          <p className="text-slate-600">
            To provide high-quality ceiling and interior services using professional techniques, reliable materials, and skilled workmanship while maintaining customer satisfaction.
          </p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h2>
          <p className="text-slate-600">
            To become a leading and trusted interior contracting company known for quality, reliability, and long-term client relationships.
          </p>
        </section>

        {/* Strengths */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Strengths</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strengths.map((s) => (
              <li key={s} className="flex items-center gap-2 text-slate-600">
                <span className="text-brand-700">•</span> {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Experience</h2>
          <p className="text-slate-600 mb-4">
            Since {COMPANY.established}, {COMPANY.name} has worked on:
          </p>
          <ul className="space-y-2">
            {experience.map((e) => (
              <li key={e} className="flex items-center gap-2 text-slate-600">
                <span className="text-brand-700">•</span> {e}
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="bg-brand-50 rounded-xl p-6 border border-brand-100">
          <p className="text-slate-700 font-medium">
            We are committed to delivering professional interior solutions with quality, safety, and customer satisfaction as our top priorities.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-brand-800 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
