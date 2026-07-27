"use client";

import { useState } from "react";
import Rating from "@/components/ui/rating";

export default function PendingFeedback() {
  // Add rating input states to make it fully interactive!
  const [ratings, setRatings] = useState<Record<number, number>>({
    0: 0,
    1: 0
  });

  const pendingItems = [
    {
      name: "Keychron K2 Mechanical Keyboard",
      date: "Purchased on Oct 12, 2023",
      image: "/images/keyboard.png"
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      date: "Purchased on Oct 08, 2023",
      image: "/images/headphones.png"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-5 sm:p-6 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-900">
          Pending Feedback
        </h3>
        <span className="text-xs  font-bold bg-brand-semantic-50 border border-brand-semantic-200 text-brand-semantic-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
          3 Items Waiting
        </span>
      </div>

      <div className="space-y-3">
        {pendingItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-150 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-250 transition-colors shadow-3xs"
          >
            <div className="flex items-center gap-4">
              {/* Product Thumbnail */}
              <div className="size-16 rounded overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Title, Date & Interactive Star Rating Input */}
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900 leading-tight line-clamp-1">
                  {item.name}
                </h4>
                <p className="text-xs font-semibold text-gray-400">
                  {item.date}
                </p>
                <div className="pt-0.5">
                  <Rating
                    value={ratings[idx] || 0}
                    onChange={(val) => setRatings({ ...ratings, [idx]: val })}
                    size={4.5}
                  />
                </div>
              </div>
            </div>

            {/* Neon Volt Yellow/Lime Action Button exactly matching mockup screenshot */}
            <button className="bg-[#DDF613] hover:bg-[#cbe00a] text-black font-bold py-2 px-4 rounded text-xs transition-colors shrink-0 cursor-pointer active:translate-y-px shadow-xs">
              Review Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
