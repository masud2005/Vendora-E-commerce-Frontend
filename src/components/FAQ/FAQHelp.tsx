"use client";

import { Mail } from "lucide-react";

export default function FAQHelp() {
  return (
    <div className="w-full bg-brand-primary-50/80 py-16 sm:py-20 px-4 ">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Envelope Icon Block */}
        <div className="size-16 rounded-lg bg-[#E2EDF8] flex items-center justify-center text-brand-primary-800 shadow-sm border border-white/40 mb-6">
          <Mail className="size-6 stroke-[1.8]" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Still need help?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium max-w-lg leading-relaxed">
          Our support team is available 24/7 to assist you with any inquiries or issues you might be facing.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto bg-brand-primary-800 text-white hover:bg-brand-primary-900 font-bold py-3.5 px-8  text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg active:translate-y-px rounded"
          >
            Contact Support
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-white border border-gray-200 text-brand-primary-800 hover:bg-brand-primary-50 font-bold py-3.5 px-8 rounded text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:translate-y-px"
          >
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
}
