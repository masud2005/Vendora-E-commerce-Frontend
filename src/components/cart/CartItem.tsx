"use client";

import { Trash2, Heart, Plus, Minus } from "lucide-react";

interface CartItemProps {
  image: string;
  title: string;
  variant: string;
  price: number;
  quantity: number;
}

export default function CartItem({
  image,
  title,
  variant,
  price,
  quantity,
}: CartItemProps) {
  return (
    <div className="flex gap-4 py-6 last:border-b-0  border-gray-200 items-start">
      {/* Product Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        
        {/* Top Row: Title/Variant on left, Price on right */}
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-brand-primary-600 cursor-pointer transition-colors">
              {title}
            </h4>
            <p className="text-xs text-gray-500 font-medium mt-1">
              {variant}
            </p>
          </div>
          <span className="text-base sm:text-lg font-bold text-brand-primary-600 shrink-0">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Bottom Row: Quantity selector on left, Actions on right */}
        <div className="flex items-center justify-between gap-4 mt-1 flex-wrap">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50 p-1">
            <button
              type="button"
              className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="size-3 sm:size-3.5" />
            </button>
            <span className="w-8 text-center text-xs sm:text-sm font-semibold text-gray-900 select-none">
              {quantity}
            </span>
            <button
              type="button"
              className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="size-3 sm:size-3.5" />
            </button>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-red-50 cursor-pointer"
            >
              <Trash2 className="size-3.5" />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-primary-600 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-brand-primary-50 cursor-pointer"
            >
              <Heart className="size-3.5" />
              <span>Save</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
