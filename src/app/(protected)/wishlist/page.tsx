"use client";

import WishlistHeader from "@/components/wishlist/WishlistHeader";
import WishlistItem from "@/components/wishlist/WishlistItem";
import { Share2, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: "wish-1",
      title: "Premium Performance Headphones",
      category: "Electronics & Audio",
      price: 199.0,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400",
      inStock: true,
    },
    {
      id: "wish-2",
      title: "Modern Minimalist Timepiece",
      category: "Accessories",
      price: 85.0,
      originalPrice: 120.0,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
      inStock: true,
    },
    {
      id: "wish-3",
      title: "ErgoPro Executive Desk Chair",
      category: "Furniture",
      price: 349.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=400",
      inStock: true,
    },
    {
      id: "wish-4",
      title: "Nomad Rugged Travel Backpack",
      category: "Travel Gear",
      price: 120.0,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400",
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-primary-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Wishlist Header & Hero Banner */}
        <WishlistHeader />

        {/* Section Heading Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-6 border-b border-gray-200 pb-3.5">
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
            Personal Collection
          </h3>
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            You have <span className="font-bold text-gray-800">{wishlistItems.length} items</span> in your wishlist
          </span>
        </div>

        {/* Responsive Grid list of saved items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              originalPrice={item.originalPrice}
              rating={item.rating}
              image={item.image}
              inStock={item.inStock}
            />
          ))}
        </div>

        {/* Bottom Actions Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 mt-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Clear & Share Actions */}
          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start w-full sm:w-auto">
            <button
              type="button"
              className="border border-brand-primary-600 text-brand-primary-600 hover:bg-brand-primary-50 font-bold py-2.5 px-5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Clear Wishlist
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-brand-primary-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <Share2 className="size-4" />
              <span>Share My List</span>
            </button>
          </div>

          {/* Right: Move All to Cart */}
          <button
            type="button"
            className="w-full sm:w-auto bg-brand-amber text-gray-950 hover:bg-brand-accent-400 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-md shadow-brand-accent-100 hover:shadow-lg hover:shadow-brand-accent-200 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
          >
            <ShoppingCart className="size-4 sm:size-5" />
            <span>Move All to Cart</span>
          </button>
        </div>

      </div>
    </div>
  );
}
