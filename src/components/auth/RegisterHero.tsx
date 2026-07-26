"use client";

export default function RegisterHero() {
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-150 bg-white shadow-xs sm:w-72 lg:w-96 sm:h-120 lg:h-150">
      {/* Real Image to prevent background zoom/crop */}
      <img
        src="/images/register-bg.png"
        alt="Verified Shopper"
        className="w-full h-full object-cover block"
      />
      
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Testimonial Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#F3F1EE]/95 backdrop-blur-xs rounded-lg p-4 sm:p-5 shadow-md border border-white/45 z-10">
        <h3 className="text-xs sm:text-sm font-black text-brand-primary-800 tracking-tight">
          Shop Smarter with Vendora
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-700 font-medium italic mt-1 leading-relaxed">
          "Found exactly what I needed in minutes. The verified seller system gives me total peace of mind every time I shop here."
        </p>
        
        {/* Author info */}
        <div className="flex items-center gap-2 mt-3.5">
          <div className="size-6 sm:size-7 rounded-full bg-brand-primary-600 text-white flex items-center justify-center text-[10px] sm:text-xs font-black shadow-xs">
            SM
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500 font-bold">
            Sarah M. &middot; Verified Shopper
          </span>
        </div>
      </div>
    </div>
  );
}
