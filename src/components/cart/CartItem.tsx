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
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b last:border-b-0 border-gray-100">
      {/* Product Image and Details */}
      <div className="flex items-start gap-4 w-full sm:w-auto">
        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-brand-primary-600 cursor-pointer transition-colors">
            {title}
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            {variant}
          </p>
          <div className="sm:hidden mt-1">
            <span className="text-base font-bold text-brand-primary-600">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Price, Quantity & Actions */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-auto mt-2 sm:mt-0">
        {/* Price (Desktop) */}
        <div className="hidden sm:block">
          <span className="text-lg font-bold text-brand-primary-600">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50 p-1">
            <button
              type="button"
              className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="size-3 sm:size-3.5" />
            </button>
            <span className="w-8 text-center text-xs sm:text-sm font-semibold text-gray-900 select-none">
              {quantity}
            </span>
            <button
              type="button"
              className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="size-3 sm:size-3.5" />
            </button>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors py-1 px-2 rounded-md hover:bg-red-50"
            >
              <Trash2 className="size-3.5" />
              <span className="hidden xs:inline">Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-brand-primary-600 transition-colors py-1 px-2 rounded-md hover:bg-brand-primary-50"
            >
              <Heart className="size-3.5" />
              <span className="hidden xs:inline">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
