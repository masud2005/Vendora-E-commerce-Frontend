"use client";

export default function AboutHeader() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 sm:mb-16">
      {/* Left Column: Tagline, Title, Description, and CTAs */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-primary-600 uppercase mb-2">
          ABOUT OUR MARKETPLACE
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
          Empowering local commerce across the globe.
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-lg mt-4 mb-8">
          Vendora is more than a marketplace; it's a bridge between passionate sellers and discerning buyers, built on trust, transparency, and innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="bg-brand-primary-600 text-white hover:bg-brand-primary-800 font-bold py-3 px-6 rounded-lg text-sm transition-all duration-200 cursor-pointer shadow-sm border border-black/5"
          >
            Start Shopping
          </button>
          <button
            type="button"
            className="bg-transparent border border-brand-primary-600 text-brand-primary-600 hover:bg-brand-primary-50 font-bold py-3 px-6 rounded-lg text-sm transition-colors cursor-pointer"
          >
            Become a Seller
          </button>
        </div>
      </div>

      {/* Right Column: Hero Image with Offset Underlay Decoration */}
      <div className="w-full md:w-[48%] `max-w-125 lg:max-w-none shrink-0 relative mt-6 md:mt-0">
        {/* Soft blue offset decoration background */}
        <div className="absolute inset-0 bg-[#E2F0FD] rounded-2xl translate-x-3.5 translate-y-3.5 -z-10 shadow-xs" />
        
        {/* Image wrapper */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-150 relative bg-white">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e0ee26cf663?auto=format&fit=crop&q=80&w=800"
            alt="Vendora Team Meeting"
            className="w-full h-auto object-cover aspect-4/3 lg:aspect-16/11"
          />
        </div>
      </div>
    </div>
  );
}
