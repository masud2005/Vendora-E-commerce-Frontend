"use client";

import Link from "next/link";
import { ChevronRight, MessageSquare, FileText } from "lucide-react";

export default function ContactHeader() {
  return (
    <div className="flex flex-col gap-6 mb-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500">
        <Link href="/" className="hover:text-brand-primary-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3.5 text-gray-400" />
        <span className="text-gray-900 font-semibold">Help & Contact</span>
      </nav>

      {/* Main Header Fold */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-8 lg:gap-12">
        {/* Left: Text & CTA Buttons */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight">
            We're here to help.
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-lg mt-4 mb-8">
            Whether you have questions about our marketplace, need help with an order, or want to explore selling opportunities, our team is ready to support you.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button
              type="button"
              className="bg-brand-primary-600  text-white hover:bg-brand-primary-800 font-bold px-2 py-2 lg:py-3 lg:px-5 rounded flex items-center gap-2 group transition-all text-xs sm:text-sm cursor-pointer shadow-sm border border-black/5"
            >
              <MessageSquare className="size-4 text-white" />
              <span>Start Live Chat</span>
            </button>
            <button
              type="button"
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900 font-bold px-2 py-2 lg:py-3 lg:px-5 rounded flex items-center gap-2 transition-all text-xs sm:text-sm cursor-pointer shadow-xs"
            >
              <FileText className="size-4 text-gray-500" />
              <span>Help Documentation</span>
            </button>
          </div>
        </div>

        {/* Right: Support Hero Image */}
        <div className="w-full md:w-[48%] max-w-125 md:max-w-none shrink-0 relative rounded-2xl overflow-hidden shadow-lg border border-gray-150">
          <img
            src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800"
            alt="Customer Success Support"
            className="w-full h-auto object-cover aspect-4/3 md:aspect-16/11"
          />
        </div>
      </div>
    </div>
  );
}
