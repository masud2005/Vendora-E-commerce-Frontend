"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-12 md:py-16 bg-[#f4f6f8]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mx-auto text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded flex items-center justify-center mb-6 shadow-sm border border-gray-100">
            <Mail className="w-8 h-8 text-[#0a4d95]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-4">
            Stay Informed, Shop Smarter
          </h2>
          <p className="text-gray-500 mb-10 text-sm md:text-base leading-relaxed">
            Subscribe to our newsletter to receive updates on new arrivals, exclusive discounts, and personalized recommendations.
          </p>

          <form className="w-full md:w-[500px] flex items-center bg-white rounded p-1 sm:p-1.5 shadow-sm border border-gray-200" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-3 sm:px-4 py-2 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0"
              required
            />
            <button
              type="submit"
              className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white px-4 sm:px-8 py-2 sm:py-2.5 rounded text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
