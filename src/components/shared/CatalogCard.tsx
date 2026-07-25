"use client";

import Link from "next/link";
import { Heart, Star, ShoppingCart } from "lucide-react";

export interface CatalogCardProps {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand: string;
  rating: number;
  reviews: string | number;
  badge?: {
    text: string;
    type: "discount" | "new" | "custom";
  };
}

export default function CatalogCard({ product }: { product: CatalogCardProps }) {
  return (
    <div className="group bg-white rounded border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative">
      
      {/* Image Section */}
      <Link href={`/product/${product.id}`} className="relative bg-gray-100 aspect-square block overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
        />
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`px-2 py-1 text-[10px] font-bold text-white uppercase rounded-sm shadow-sm
              ${product.badge.type === 'discount' ? 'bg-brand-semantic-400' : ''}
              ${product.badge.type === 'new' ? 'bg-brand-secondary-600' : ''}
              ${product.badge.type === 'custom' ? 'bg-gray-800' : ''}
            `}>
              {product.badge.text}
            </span>
          </div>
        )}
      </Link>
      
      {/* Favorite Button (Absolute over image) */}
      <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-brand-semantic-400 transition-colors border border-gray-100">
        <Heart className="w-4 h-4" />
      </button>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <Star className="w-3.5 h-3.5 fill-brand-accent-200 text-brand-accent-200" />
          <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        {/* Title */}
        <Link href={`/product/${product.id}`} className="flex-grow">
          <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug line-clamp-2 mb-1 group-hover:text-brand-primary-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        {/* Brand */}
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-4">
          {product.brand}
        </p>
        
        {/* Bottom Row: Price & Cart */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-brand-primary-600 text-base md:text-lg">
                ${Number(product.price).toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-xs md:text-sm text-gray-400 line-through font-medium">
                  ${Number(product.oldPrice).toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          <button className="w-9 h-9 bg-brand-accent-200 hover:bg-brand-accent-400 text-white rounded flex items-center justify-center shadow-sm transition-colors shrink-0">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
