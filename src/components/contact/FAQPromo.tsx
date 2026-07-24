"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQPromo() {
  return (
    <div className="w-full bg-[#EBF2F7]/70 border border-gray-200/80 rounded-lg py-6 sm:py-8 px-4 sm:px-6 text-center shadow-xs mt-10">
      <h3 className="text-base sm:text-lg font-extrabold `text-brand-primary-800 tracking-tight">
        Looking for immediate answers?
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 leading-relaxed font-medium">
        Check out our frequently asked questions to find quick solutions for shipping, returns, and seller guidelines.
      </p>
      
      <Link
        href="/faq"
        className="inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold text-brand-primary-600 hover:text-brand-primary-800 transition-colors mt-4 group cursor-pointer"
      >
        <span>Browse FAQ</span>
        <ArrowRight className="size-3.5 sm:size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
