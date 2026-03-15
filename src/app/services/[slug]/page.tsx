import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, SERVICES } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.content,
  };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div>
      <section className="bg-stone-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{service.title}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-stone-600 text-lg mb-8">{service.content}</p>

        <div className="space-y-8 mb-12">
          {service.items.map((item) => (
            <div key={item.name} className="border-l-4 border-amber-500 pl-6">
              <h3 className="font-semibold text-stone-800 mb-2">{item.name}</h3>
              {item.points.length > 0 && (
                <ul className="space-y-1 text-stone-600">
                  {item.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {(service as { note?: string }).note && (
          <p className="text-stone-600 italic mb-12">{(service as { note?: string }).note}</p>
        )}

        {/* CTA - No WhatsApp per user request */}
        <div className="bg-amber-50 rounded-xl p-8 border border-amber-100 text-center">
          <h3 className="text-xl font-bold text-stone-800 mb-2">Get Free Site Visit and Quote</h3>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Call: {COMPANY.phone}
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="text-amber-700 font-medium hover:text-amber-800">
            ← Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
