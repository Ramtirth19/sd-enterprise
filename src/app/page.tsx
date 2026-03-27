import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  const whyChooseUs = [
    "Established in 2008",
    "17+ Years Experience",
    "Professional Skilled Team",
    "High Quality Materials",
    "On-Time Project Completion",
    "Free Site Visit & Consultation",
    "Commercial & Residential Experts",
  ];

  const coreServices = [
    {
      title: "False Ceiling",
      items: ["Gypsum ceiling", "T-Grid ceiling", "Metal ceiling", "POP ceiling"],
    },
    {
      title: "Aluminium Work",
      items: ["Aluminium partitions", "Aluminium doors", "Office cabins"],
    },
    {
      title: "Glass Work",
      items: ["Glass partitions", "Glass cabins", "Glass doors"],
    },
    {
      title: "Fabrication",
      items: ["MS framework", "Ceiling structure"],
    },
    {
      title: "Painting",
      items: ["Interior painting", "Wallpaper installation"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-200 text-sm font-medium mb-2">Established in {COMPANY.established}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {COMPANY.name}
          </h1>
          <p className="text-xl text-brand-100 mb-2">{COMPANY.tagline}</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            False Ceiling, Glass & Aluminium Partition Experts
          </h2>
          <p className="text-brand-200/90 max-w-2xl mx-auto mb-8">
            We provide professional false ceiling, aluminium partition, glass partition, and interior finishing services for commercial and residential projects across Haryana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-800 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-900 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Welcome to {COMPANY.name}</h2>
          <div className="max-w-3xl mx-auto text-center text-slate-600 space-y-4">
            <p>
              {COMPANY.name} is a trusted interior contracting company established in {COMPANY.established}. We specialize in false ceiling installation, aluminium partitions, glass cabins, fabrication, and painting services.
            </p>
            <p>
              With over 17 years of experience, we have successfully completed numerous commercial and residential projects with high-quality workmanship and professional finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-slate-800 mb-3">{service.title}</h3>
                <ul className="space-y-1 text-sm text-slate-600">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Why Choose {COMPANY.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-4 rounded-lg bg-brand-50 border border-brand-100"
              >
                <span className="text-brand-700 mt-0.5">✓</span>
                <span className="font-medium text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Links to full pages */}
      <section className="py-16 bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Services</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            {COMPANY.name} provides complete ceiling, partition, aluminium, glass, and interior finishing services across Haryana and surrounding regions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-brand-800 font-semibold hover:text-brand-700"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Recent Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Gypsum ceiling", "Glass partitions", "Office cabins", "Aluminium doors"].map((label, i) => (
              <Link
                key={label}
                href="/gallery"
                className="group aspect-[4/3] bg-brand-100 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-200 to-brand-300 flex items-center justify-center">
                  <span className="text-brand-800 text-sm font-medium group-hover:text-brand-950">
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-3 bg-brand-800 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Service Area</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide services across all major cities in Haryana including commercial, residential, and industrial projects. Site visits available by appointment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Free Site Visit and Quote</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Contact {COMPANY.name} today for professional ceiling and interior solutions.
          </p>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-800 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
          >
            Call: {COMPANY.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
