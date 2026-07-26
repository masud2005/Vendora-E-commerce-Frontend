"use client";

export default function AuthHero() {
  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-150 bg-white shadow-xs sm:w-72 lg:w-96 sm:h-120 lg:h-150">
      {/* Real Image to prevent background zoom/crop */}
      <img
        src="/images/login-bg.png"
        alt="Workspace"
        className="w-full h-full object-cover"
      />
      
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 z-10">
        <h2 className="text-xl lg:text-3xl font-black text-white leading-tight tracking-tight mb-2">
          Elevate Your Lifestyle
        </h2>
        <p className="text-[11px] lg:text-sm text-gray-300 font-medium max-w-sm leading-relaxed">
          Discover curated collections from premium sellers worldwide.
        </p>
      </div>
    </div>
  );
}

