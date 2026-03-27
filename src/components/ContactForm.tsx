"use client";

import { useState } from "react";
import { COMPANY, SERVICE_FORM_OPTIONS } from "@/lib/constants";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      alert("Contact form is not configured. Please add NEXT_PUBLIC_FORMSPREE_ID to your environment variables. See README for setup instructions.");
      return;
    }
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-medium text-lg">
          Thank you for contacting {COMPANY.name}. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
          City / Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
          placeholder="Your city or location"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
        >
          <option value="">Select a service</option>
          {SERVICE_FORM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">
          Project Details (Optional)
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-brand-600"
          placeholder="Describe your project requirements..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-800 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request Free Quote"}
      </button>
    </form>
  );
}
