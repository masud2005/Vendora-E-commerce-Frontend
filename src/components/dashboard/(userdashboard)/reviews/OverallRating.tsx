"use client";

import Rating from "@/components/ui/rating";
import { Award } from "lucide-react";

export default function OverallRating() {
  const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Overall Rating card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-2xs">
        <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider block">
          Overall Rating
        </span>
        
        <div className="flex items-baseline gap-4 mt-3">
          <span className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-none">
            4.8
          </span>
          <div className="space-y-1.5">
            <Rating value={5} readonly size={4.5} />
            <span className="text-[11px] lg:text-sm font-semibold text-gray-400 block">
              Based on 124 reviews
            </span>
          </div>
        </div>

        {/* Rating Bars list - made thin and highly aligned */}
        <div className="space-y-3 mt-6">
          {ratingBreakdown.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-gray-500">
              <span className="w-2">{item.stars}</span>
              
              {/* Progress bar container (thin h-1.5 wrapper) */}
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  style={{ width: `${item.percentage}%` }}
                  className="h-full bg-brand-primary-600 rounded-full"
                ></div>
              </div>

              <span className="w-8 text-right text-gray-400 font-bold">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Contribution Badge Card with matching gradients */}
      <div className="bg-gradient-to-br from-[#0F4C81] to-[#0A3459] text-white rounded-lg p-5 shadow-2xs relative overflow-hidden group">
        <div className="absolute -right-10 -bottom-10 size-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
        
        <h4 className="text-sm md:text-base font-bold tracking-tight">
          Review Contribution
        </h4>
        <p className="text-xs md:text-sm text-blue-100 font-medium leading-relaxed mt-1.5 max-w-[90%]">
          You are in the top 5% of helpful reviewers this month! Keep it up.
        </p>

        <div className="mt-4 inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold">
          <Award className="size-3.5 text-amber-300" />
          <span>Elite Reviewer Badge</span>
        </div>
      </div>

    </div>
  );
}
