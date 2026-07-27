"use client";

import Rating from "@/components/ui/rating";
import { ThumbsUp, Filter, ArrowUpDown } from "lucide-react";

export default function ReviewHistory() {
  const reviews = [
    {
      name: "Ergonomic Mesh Office Chair",
      rating: 5,
      date: "Reviewed on Sep 24, 2023",
      text: "Absolutely changed my work-from-home experience. The lumbar support is fantastic and assembly was super easy. Worth every penny!",
      helpful: 24,
      image: "/images/chair.png"
    },
    {
      name: "Pro-Series 8\" Chef's Knife",
      rating: 4,
      date: "Reviewed on Sep 12, 2023",
      text: "Very sharp right out of the box. Great weight and balance. Deducted one star because the handle gets a bit slippery when wet.",
      helpful: 12,
      image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&q=80"
    },
    {
      name: "Pro-Series 8\" Chef's Knife",
      rating: 4,
      date: "Reviewed on Sep 12, 2023",
      text: "Very sharp right out of the box. Great weight and balance. Deducted one star because the handle gets a bit slippery when wet.",
      helpful: 12,
      image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&q=80"
    },
    {
      name: "Pro-Series 8\" Chef's Knife",
      rating: 4,
      date: "Reviewed on Sep 12, 2023",
      text: "Very sharp right out of the box. Great weight and balance. Deducted one star because the handle gets a bit slippery when wet.",
      helpful: 12,
      image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&q=80"
    }
  ];

  return (
    <div className="space-y-4">
      {/* History Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-150 pb-3">
        <h3 className="text-sm font-bold text-gray-900">
          Review History
        </h3>
        
        <div className="flex items-center gap-3">
          <button className="border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold px-3 py-1.5 rounded text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
            <Filter className="size-3.5" />
            <span>Filter</span>
          </button>
          
          <button className="border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold px-3 py-1.5 rounded text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
            <ArrowUpDown className="size-3.5" />
            <span>Sort by Date</span>
          </button>
        </div>
      </div>

      {/* Grid of history cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-2xs flex flex-col justify-between gap-4"
          >
            
            {/* Header info */}
            <div className="flex gap-2">
              {/* Product Thumbnail */}
              <div className="size-14 rounded overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Title, rating and reviewed date */}
              <div className="">
                <h4 className="text-xs md:text-sm font-bold text-gray-900 leading-snug">
                  {review.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] md:text-xs font-medium text-gray-400">
                  <Rating value={review.rating} readonly size={3.5} />
                  <span>· {review.date}</span>
                </div>
              </div>
            </div>

            {/* Review text */}
            <p className="text-xs md:text-sm text-gray-600 font-medium italic leading-relaxed">
              "{review.text}"
            </p>

            {/* Footer interaction buttons */}
            <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-3 text-[11px] md:text-xs font-bold gap-2">
              <button className="text-brand-primary-600 hover:text-brand-primary-800 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left leading-tight max-w-[75%]">
                <ThumbsUp className="size-3 stroke-[2.2] shrink-0" />
                <span>{review.helpful} people found this helpful</span>
              </button>

              <div className="flex items-center gap-3 text-gray-400 font-bold shrink-0">
                <span className="hover:text-gray-700 cursor-pointer">Edit</span>
                <span className="hover:text-brand-semantic-600 cursor-pointer">Delete</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
