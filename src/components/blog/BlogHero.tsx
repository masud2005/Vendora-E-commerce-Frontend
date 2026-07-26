"use client";

import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {/* Left Column: Big Featured Article Card */}
      <div className="md:col-span-2 relative overflow-hidden rounded-lg min-h-90 sm:min-h-115 lg:min-h-125 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer shadow-md border border-gray-100">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200')`
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10">
          <span className="inline-block bg-brand-secondary-600 text-white text-[10px] sm:text-xs font-black tracking-widest uppercase px-3 py-1 rounded mb-4">
            EDITOR'S PICK
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-white leading-tight tracking-tight mb-3 group-hover:text-brand-primary-200 transition-colors duration-200">
            Mastering the Art of Sustainable Commerce: A Guide for Modern Sellers
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-medium mb-6 line-clamp-2 max-w-2xl leading-relaxed">
            Explore the strategies behind Vendora's top-performing verified sellers and how they balance profitability with ethical sourcing.
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Sarah Jenkins"
              className="size-10 rounded-full border border-white/20 object-cover"
            />
            <div>
              <p className="text-sm font-bold text-white leading-none">Sarah Jenkins</p>
              <p className="text-xs text-gray-400 font-medium mt-1">Senior Marketplace Analyst &bull; 8 min read</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Two Stacked Cards */}
      <div className="flex flex-col gap-6 justify-between">
        
        {/* Top Right Card: Market Trends */}
        <div className="bg-brand-primary-800 text-white px-6 md:px-4 py-6 md:py-8 rounded-lg flex flex-col justify-between flex-1 min-h-64 relative overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
          {/* Subtle trend line background vector */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-36 h-36">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-2">
              <path d="M 0 80 Q 25 50 50 60 T 100 20" />
            </svg>
          </div>

          <div className="relative z-10">
            <span className="text-xs font-extrabold text-brand-primary-200 tracking-wider uppercase">
              MARKET TRENDS
            </span>
            <h3 className="text-lg md:text-lg lg:text-xl font-bold leading-snug mt-2 group-hover:text-brand-primary-200 transition-colors duration-200">
              The 2024 Tech Boom: Why Home Automation is Leading Sales
            </h3>
          </div>

          <div className="relative z-10 ">
            <span className="inline-flex items-center gap-1 text-sm font-bold text-white group-hover:gap-2 transition-all duration-200 ">
              Read Story <ArrowRight className="size-4 " />
            </span>
          </div>
        </div>

        {/* Bottom Right Card: Seller Success */}
        <div className="bg-brand-primary-50 border border-gray-200/50 px-6 md:px-4 py-6 md:py-8 rounded-lg flex flex-col justify-between flex-1 min-h-55 group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
          <div>
            <span className="text-xs font-extrabold text-brand-secondary-600 tracking-wider uppercase">
              SELLER SUCCESS
            </span>
            <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-gray-900 leading-snug mt-2 group-hover:text-brand-primary-800 transition-colors duration-200">
              From Garage to Global: How One Artisan Scaled to $1M on Vendora
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-2 line-clamp-2 leading-relaxed">
              Authenticity and storytelling are the keys to building a brand in a crowded marketplace.
            </p>
          </div>

          {/* Author Badge */}
          <div className="flex items-center gap-3 mt-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Marcus Thorne"
              className="size-8 rounded-full border border-gray-300 object-cover"
            />
            <div>
              <p className="text-xs sm:text-sm font-bold text-gray-950 leading-none">Marcus Thorne</p>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">Verified Vendor</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
