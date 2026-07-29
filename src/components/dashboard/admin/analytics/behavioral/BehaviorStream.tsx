"use client";

import React from "react";

const streams = [
  {
    title: "Conversion Spike: High volume of checkouts in \"Home Office\" category.",
    time: "Just now",
    meta: "Region: EMEA",
    color: "bg-[#0F4C81]"
  },
  {
    title: "Campaign Trigger: Summer Sale SMS blast engaged 42,000 users.",
    time: "14 mins ago",
    meta: "Global",
    color: "bg-[#B8860B]"
  },
  {
    title: "Cart Abandonment: 12% increase detected in \"Electronics\" segment.",
    time: "1 hour ago",
    meta: "Segment: Mobile Users",
    color: "bg-[#DC2626]"
  },
  {
    title: "Seller Milestone: TechNova reached $5M all-time GMV.",
    time: "3 hours ago",
    meta: "Verified Status",
    color: "bg-[#059669]"
  }
];

export default function BehaviorStream() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col select-none min-h-[340px] text-left">
      
      {/* Title */}
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Real-time Behavior Stream
        </h3>
      </div>

      {/* Vertical Timeline with connecting line */}
      <div className="mt-5 flex-1 relative pl-5 border-l border-gray-150 ml-2 space-y-5.5">
        {streams.map((item, idx) => (
          <div key={idx} className="relative text-left leading-none space-y-1">
            
            {/* Absolute Dot Indicator on the line */}
            <span className={`absolute -left-[25px] top-1 size-2.5 rounded-full border-2 border-white ring-2 ring-white shrink-0 shadow-3xs ${item.color}`} />

            {/* Title & Metadata */}
            <h4 className="text-xs font-bold text-gray-800 leading-snug">
              {item.title}
            </h4>
            <span className="text-[10px] text-gray-400 font-bold block pt-0.5">
              {item.time} • <span className="text-gray-500">{item.meta}</span>
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}
