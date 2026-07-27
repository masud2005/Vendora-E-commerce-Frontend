"use client";

import { Heart, ShoppingCart } from "lucide-react";

export default function WishlistSummary() {
  const wishlistProducts = [
    {
      title: "Acoustic Pro Headphones",
      price: "৳ 8,500",
      image: "/images/headphones.png"
    },
    {
      title: "Tactile RGB Mechanical Keyboard",
      price: "৳ 4,200",
      image: "/images/keyboard.png"
    },
    {
      title: "Urban Nomad Laptop Backpack",
      price: "৳ 2,800",
      image: "/images/backpack.png"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
          <Heart className="size-4 text-gray-400 stroke-[2.2]" />
          <span>Wishlist Summary</span>
        </h3>
        <span className="text-xs font-bold text-brand-primary-600 hover:text-brand-primary-800 transition-colors cursor-pointer select-none">
          Manage Wishlist
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProducts.map((product, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-2xs hover:shadow-xs transition-shadow duration-200 flex flex-col justify-between">
            
            {/* Image Container with Floating Heart Badge */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover block"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-50 active:scale-90 transition-transform">
                <Heart className="size-3.5 fill-brand-semantic-600 text-brand-semantic-600" />
              </div>
            </div>

            {/* Product Info & Action button */}
            <div className="p-4 flex flex-col gap-3">
              <div className="min-h-10">
                <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                  {product.title}
                </h4>
                <p className="text-sm font-bold text-gray-900 mt-1">{product.price}</p>
              </div>
              <button className="w-full bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-bold py-2 rounded text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs active:translate-y-px">
                <ShoppingCart className="size-3.5" />
                <span>MOVE TO CART</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
