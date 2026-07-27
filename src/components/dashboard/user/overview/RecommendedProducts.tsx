"use client";

import { Sparkles, ShoppingCart } from "lucide-react";

export default function RecommendedProducts() {
  const recommendedProducts = [
    {
      title: "HydraSmart Self-Cleaning Water Bottle",
      price: "৳ 1,200",
      rating: "4.8",
      reviews: "156",
      tag: "TRENDING",
      tagBg: "bg-brand-secondary-600 text-white",
      image: "/images/bottle.png"
    },
    {
      title: "Inksmith Executive Fountain Pen",
      price: "৳ 3,500",
      rating: "4.9",
      reviews: "42",
      tag: null,
      image: "/images/pen.png"
    },
    {
      title: "ErgoComfort Mesh Task Chair",
      price: "৳ 18,700",
      rating: "4.7",
      reviews: "89",
      tag: "-15% OFF",
      tagBg: "bg-brand-semantic-600 text-white",
      image: "/images/chair.png"
    },
    {
      title: "Nova Globe Designer Table Lamp",
      price: "৳ 5,400",
      rating: "4.6",
      reviews: "214",
      tag: null,
      image: "/images/lamp.png"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="size-4 text-gray-400 stroke-[2.2]" />
          <span>Recommended for You</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {recommendedProducts.map((product, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-2xs hover:shadow-xs transition-shadow duration-200 flex flex-col justify-between group">
            
            {/* Image box with badges */}
            <div className="relative aspect-square w-full bg-gray-50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover block"
              />
              
              {/* Floating promo badge */}
              {product.tag && (
                <div className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-xs text-[9px] font-bold tracking-wider uppercase ${product.tagBg}`}>
                  {product.tag}
                </div>
              )}
            </div>

            {/* Product meta & actions */}
            <div className="p-3.5 flex flex-col gap-2.5">
              <div className="min-h-12">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-brand-primary-600 transition-colors">
                  {product.title}
                </h4>
                <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-xs font-semibold text-gray-400">
                  <span className="text-brand-accent-600 font-bold">★ {product.rating}</span>
                  <span>({product.reviews})</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1 border-t border-gray-100">
                <span className="text-sm font-bold text-gray-900">{product.price}</span>
                <button className="rounded-full border border-brand-primary-200 p-1.5 text-brand-primary-600 hover:bg-brand-primary-50 transition-colors cursor-pointer active:scale-90">
                  <ShoppingCart className="size-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
