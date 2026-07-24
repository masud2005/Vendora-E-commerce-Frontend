"use client";

export default function AboutCTA() {
  return (
    <div className="w-full bg-brand-primary-800 rounded-2xl py-12 px-6 sm:py-16 sm:px-10 text-center relative overflow-hidden shadow-md group">
      {/* Decorative vector overlays */}
      <div className="absolute size-64 rounded-full bg-white/5 -top-20 -left-20 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute size-64 rounded-full bg-white/5 -bottom-20 -right-20" />
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
          Ready to join our growing ecosystem?
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-blue-100/90 font-semibold leading-relaxed mt-3.5 mb-8 max-w-lg">
          Whether you're looking to buy quality products or grow your business, Vendora is the place for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg text-sm border border-white/20 transition-all duration-200 cursor-pointer"
          >
            Start Shopping Today
          </button>
          <button
            type="button"
            className="bg-white border border-brand-primary-600 text-brand-primary-600 hover:bg-white/90 font-bold py-3 px-6 rounded-lg text-sm transition-colors cursor-pointer"
          >
            Register as a Seller
          </button>
        </div>
      </div>
    </div>
  );
}
