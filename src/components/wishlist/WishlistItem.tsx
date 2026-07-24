"use client";

import { X, Check, Star } from "lucide-react";

interface WishlistItemProps {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  inStock?: boolean;
}

export default function WishlistItem({
  id,
  title,
  category,
  price,
  originalPrice,
  rating,
  image,
  inStock = true,
}: WishlistItemProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col relative">
      
      {/* Close (X) Button */}
      <button
        type="button"
        className="absolute top-5 right-5 z-20 bg-white rounded-full border border-gray-200/80 shadow p-1.5 hover:bg-gray-50 text-gray-500 hover:text-red-500 transition-all cursor-pointer"
        aria-label="Remove from wishlist"
      >
        <X className="size-3.5 sm:size-4" />
      </button>

      {/* Product Image Container */}
      <div className="aspect-square w-full overflow-hidden bg-gray-50 flex items-center justify-center relative rounded-lg border border-gray-100 mb-3.5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />
      </div>

      {/* Details Area */}
      <div className="flex flex-col flex-1 justify-between gap-1.5">
        <div>
          {/* Stock status badge */}
          {inStock && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-brand-teal uppercase tracking-wide">
              <Check className="size-3.5 stroke-3" />
              <span>In Stock</span>
            </span>
          )}

          {/* Product Title */}
          <h4 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-1 hover:text-brand-primary-600 transition-colors leading-tight cursor-pointer mt-1">
            {title}
          </h4>

          {/* Category */}
          <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
            {category}
          </p>
        </div>

        {/* Bottom Row: Price & Rating */}
        <div className="flex justify-between items-center mt-2.5">
          {/* Price */}
          <div className="flex items-baseline flex-wrap">
            <span className="text-sm sm:text-base font-extrabold text-brand-primary-600">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[10px] sm:text-xs text-gray-400 line-through font-medium ml-1.5">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="bg-amber-50 text-amber-600 border border-amber-100/50 rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-semibold flex items-center gap-0.5 select-none">
            <Star className="size-3 fill-amber-500 text-amber-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
