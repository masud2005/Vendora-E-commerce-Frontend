"use client";

import React from "react";
import toast from "react-hot-toast";
import { Star, MessageSquare, CornerDownRight } from "lucide-react";

// Mock Reviews list matching figma image 5
const reviews = [
  {
    author: "Sarah Jenkins",
    initials: "SJ",
    bgInitials: "bg-blue-100 text-blue-700",
    rating: 5,
    date: "2 days ago",
    text: "Outstanding quality! The armchair is extremely comfortable and fits perfectly in my minimalist living room. Delivery was also ahead of schedule.",
    product: "Nordic Comfort Armchair"
  },
  {
    author: "Marcus Thorne",
    initials: "MT",
    bgInitials: "bg-purple-100 text-purple-700",
    rating: 4,
    date: "1 week ago",
    text: "Great product, very modern. The pendant light gives a warm aura to the dining table. The instructions could be slightly clearer, but overall very happy.",
    product: "Aura Geometric Pendant"
  },
  {
    author: "Elena Rodriguez",
    initials: "ER",
    bgInitials: "bg-rose-100 text-rose-700",
    rating: 2,
    date: "2 weeks ago",
    text: "The delivery took much longer than expected. Product quality is acceptable but platform experience was frustrating.",
    product: "Nordic Comfort Armchair",
    alert: "Low Rating Alert"
  }
];

const ratingStats = [
  { stars: 5, percent: "88%" },
  { stars: 4, percent: "8%" },
  { stars: 3, percent: "3%" },
  { stars: 2, percent: "1%" },
  { stars: 1, percent: "0%" }
];

export default function ReviewsTab() {
  return (
    <div className="space-y-6 text-left select-none">
      
      {/* 1. Rating Summary Stats Panel */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left Side: Score card */}
        <div className="text-center md:border-r border-gray-100 md:pr-6 space-y-1.5">
          <h2 className="text-5xl font-black text-gray-900 leading-none">4.8</h2>
          
          {/* Star row */}
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="size-4.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <span className="text-[10px] sm:text-xs text-gray-400 font-bold block">
            Based on 2,450 ratings
          </span>
        </div>

        {/* Right Side: Progress bars */}
        <div className="col-span-1 md:col-span-2 space-y-2">
          {ratingStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-500">
              <span className="w-12 text-right text-[10px] uppercase font-black tracking-wide">
                {stat.stars} Star
              </span>
              
              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: stat.percent }}
                />
              </div>

              <span className="w-8 text-left text-[10px] text-gray-400 font-extrabold">
                {stat.percent}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* 2. Customer Reviews feed list */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs space-y-4">
        
        {/* Feed Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
              Customer Reviews
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
              Feedback left by recent buyers
            </p>
          </div>
          
          <select 
            onChange={() => toast.success("Sorting reviews...")}
            className="bg-white border border-gray-200 rounded px-2.5 py-1 text-xs text-gray-600 font-semibold focus:outline-none cursor-pointer self-start sm:self-auto"
          >
            <option>Sort by: Most Recent</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
          </select>
        </div>

        {/* Reviews Feed loop */}
        <div className="divide-y divide-gray-100 space-y-5">
          {reviews.map((rev, idx) => {
            return (
              <div key={idx} className="pt-5 first:pt-0 space-y-2.5">
                
                {/* Review Header card */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5">
                    <span className={`size-8 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${rev.bgInitials}`}>
                      {rev.initials}
                    </span>
                    <div className="text-left leading-none space-y-1">
                      <h4 className="text-xs font-bold text-gray-905">{rev.author}</h4>
                      
                      {/* Rating Stars row */}
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => {
                          const isFilled = s <= rev.rating;
                          return (
                            <Star 
                              key={s} 
                              className={`size-3.5 ${
                                isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                              }`} 
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {rev.alert && (
                      <span className="bg-rose-50 text-rose-700 text-[8px] font-black border border-rose-100 px-2 py-0.5 rounded uppercase tracking-wider">
                        {rev.alert}
                      </span>
                    )}
                    <span className="text-[9px] text-gray-400 font-bold block">{rev.date}</span>
                  </div>
                </div>

                {/* Review Message Text */}
                <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                  "{rev.text}"
                </p>

                {/* Purchased info & response block */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <span className="inline-block bg-blue-50/50 text-[#0F4C81] text-[9px] font-bold px-2 py-0.5 rounded">
                    Purchased: {rev.product}
                  </span>

                  <button
                    onClick={() => toast.success(`Responding to review from ${rev.author}...`)}
                    className="flex items-center gap-1 text-[10px] font-black text-[#0F4C81] hover:underline cursor-pointer"
                  >
                    <CornerDownRight className="size-3.5" />
                    <span>Respond</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
