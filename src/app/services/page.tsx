import { COMPANY, SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services",
  description: `${COMPANY.name} provides complete ceiling, partition, aluminium, glass, and interior finishing services across Haryana.`,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-brand-200 max-w-2xl">
            {COMPANY.name} provides complete ceiling, partition, aluminium, glass, and interior finishing services across Haryana and surrounding regions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Our core services include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
