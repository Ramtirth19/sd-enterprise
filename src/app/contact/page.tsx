import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: `Contact ${COMPANY.name}`,
  description: `Contact ${COMPANY.name} for false ceiling, aluminium partition, glass work, fabrication, and interior services. Free consultation and site visits by appointment across Haryana.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact {COMPANY.name}</h1>
          <p className="text-brand-200 max-w-2xl">
            Contact {COMPANY.name} for false ceiling, aluminium partition, glass work, fabrication, and interior services. We provide free consultation and site visits by appointment across Haryana. Call us to discuss your project.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6">Contact Details</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                <span className="font-medium text-slate-800">Company:</span> {COMPANY.name}
              </p>
              <p>
                <span className="font-medium text-slate-800">Phone:</span>{" "}
                <a href={`tel:${COMPANY.phone}`} className="text-brand-800 hover:text-brand-700">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-800">Email:</span>{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-brand-800 hover:text-brand-700">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-800">Office Address:</span> {COMPANY.address}
              </p>
              <p>
                <span className="font-medium text-slate-800">Service Area:</span> {COMPANY.serviceArea} – All Cities
              </p>
              <p>
                <span className="font-medium text-slate-800">Site Visits:</span> {COMPANY.siteVisits}
              </p>
              <p>
                <span className="font-medium text-slate-800">Call Timing:</span> {COMPANY.businessHours}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6">Get Free Quote / Request Site Visit</h2>
            <ContactForm />
            <p className="text-sm text-slate-500 mt-4 text-center">
              Serving Haryana since {COMPANY.established} | 17+ Years Experience | Free Site Visit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
