"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WishlistHeader() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500">
        <Link href="/" className="hover:text-brand-primary-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3.5 text-gray-400" />
        <span className="text-gray-900 font-semibold">Wishlist</span>
      </nav>

      {/* Hero Banner Card */}
      <div className="relative rounded-xl overflow-hidden h-40 sm:h-52 md:h-64 w-full shadow-md">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600"
          alt="Saved Items Banner"
          className="w-full h-full object-cover"
        />
        {/* Black/Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/45 to-transparent flex flex-col justify-center px-6 sm:px-10 md:px-12">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
              My Saved Items
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-100/90 font-medium mt-1.5 sm:mt-2.5 drop-shadow-sm leading-relaxed max-w-sm sm:max-w-md">
              Review your curated selection of luxury products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
