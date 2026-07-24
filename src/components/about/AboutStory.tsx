"use client";

import { Rocket } from "lucide-react";

export default function AboutStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
      {/* Left Card: Our Story */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4">
          Our Story
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed mb-4">
          Founded in 2018, Vendora began with a simple observation: the digital marketplace was becoming too complex for small-scale artisanal sellers and too impersonal for quality-seeking buyers. We set out to create a platform that prioritizes the human element of trade.
        </p>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
          What started as a small local directory has evolved into a robust multi-vendor ecosystem. Today, we facilitate thousands of transactions daily, ensuring that every product listed meets our rigorous quality standards and every seller is vetted for integrity.
        </p>
      </div>

      {/* Right Card: Our Mission */}
      <div className="bg-brand-primary-800 rounded-2xl p-6 sm:p-8 shadow-md text-white flex flex-col justify-center relative overflow-hidden group">
        {/* Subtle decorative background circles */}
        <div className="absolute size-40 rounded-full bg-white/5 -top-10 -right-10 transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute size-24 rounded-full bg-white/5 -bottom-8 -left-8" />
        
        <div className="relative z-10">
          <div className="size-12 rounded-lg bg-white/10 flex items-center justify-center text-brand-accent-100">
            <Rocket className="size-6 animate-pulse" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4 mt-3.5">
            Our Mission
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/90 font-semibold leading-relaxed">
            To democratize e-commerce by providing professional tools to sellers of all sizes and delivering an unparalleled, trustworthy shopping experience to every consumer, everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
