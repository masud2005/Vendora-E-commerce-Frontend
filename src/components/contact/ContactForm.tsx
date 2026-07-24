"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 sm:p-6 md:p-8 flex flex-col gap-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
          Send us a Message
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
          Use the form below to reach out. We typically respond within 24 business hours.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        {/* Name and Email inputs (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-xs sm:text-sm font-bold text-gray-900 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="border focus:border-brand-primary-400 rounded-lg px-3.5 py-2 text-sm text-gray-800  focus:outline-none focus:ring-2 focus:ring-brand-primary-50 transition-all"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xs sm:text-sm font-bold text-gray-900 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="border focus:border-brand-primary-400 rounded-lg px-3.5 py-2 text-sm  placeholder-gray-400 focus:outline-none  focus:ring-2 focus:ring-brand-primary-50 transition-all"
            />
          </div>
        </div>

        {/* Subject Dropdown */}
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-xs sm:text-sm font-bold text-gray-900 mb-2"
          >
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              defaultValue="order"
              className="appearance-none w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary-50 transition-all pr-10 cursor-pointer"
            >
              <option value="order">Order Support</option>
              <option value="seller">Seller Opportunities</option>
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnerships</option>
            </select>
            <ChevronDown className="size-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-xs sm:text-sm font-bold text-gray-900 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us how we can help you..."
            className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none  focus:ring-2 focus:ring-brand-primary-50 transition-all resize-none min-h-30"
          />
        </div>

        {/* Submit Section */}
        <div className="flex flex-col gap-3 mt-1.5">
          <button
            type="submit"
            className="w-full sm:w-auto bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-bold py-3 px-6 rounded-md text-sm transition-all duration-200 self-start shadow-xs hover:shadow-md cursor-pointer"
          >
            Send Message
          </button>
          
          <p className="text-[11px] sm:text-xs text-gray-400 font-medium leading-relaxed">
            By submitting this form, you agree to our{" "}
            <Link
              href="/privacy-policy"
              className="text-brand-primary-600 hover:underline font-semibold"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
