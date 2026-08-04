"use client";

import React from "react";

interface EarningsChartProps {
  hoveredBarIndex: number | null;
  setHoveredBarIndex: (idx: number | null) => void;
}

export default function EarningsChart({
  hoveredBarIndex,
  setHoveredBarIndex
}: EarningsChartProps) {
  const chartDays = [
    { label: "Tue", value: 940 },
    { label: "Wed", value: 1180 },
    { label: "Thu", value: 860 },
    { label: "Fri", value: 1420 },
    { label: "Sat", value: 1610 },
    { label: "Sun", value: 1290 },
    { label: "Mon", value: 1050 }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-6 flex flex-col justify-between h-[360px] text-left">
      <div className="leading-none space-y-1">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Daily Earnings
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
          Fees earned per working day
        </p>
      </div>

      {/* Premium Vector Chart drawing wrapper */}
      <div className="relative flex-1 w-full flex items-end justify-between pt-6 px-2 select-none">
        
        {/* Horizontal Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none text-[8px] text-gray-300 font-bold opacity-75">
          <div className="border-b border-gray-100 w-full pb-0.5 text-right">৳1,500</div>
          <div className="border-b border-gray-100 w-full pb-0.5 text-right">৳1,000</div>
          <div className="border-b border-gray-100 w-full pb-0.5 text-right">৳500</div>
          <div className="border-b border-gray-150 w-full pb-0.5 text-right">0</div>
        </div>

        {/* Daily Bars */}
        {chartDays.map((day, idx) => {
          const maxVal = 1800; // max scale
          const heightPercent = (day.value / maxVal) * 100;
          const isHovered = hoveredBarIndex === idx;

          return (
            <div 
              key={idx} 
              className="flex flex-col items-center gap-2 group flex-1 z-10 cursor-pointer"
              onMouseEnter={() => setHoveredBarIndex(idx)}
              onMouseLeave={() => setHoveredBarIndex(null)}
            >
              {/* Tooltip bar */}
              <div className={`absolute bottom-[240px] bg-gray-900 text-white font-extrabold text-[9px] py-1 px-2 rounded shadow-sm transition-all pointer-events-none ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                ৳{day.value.toLocaleString()}
              </div>

              {/* SVG/CSS Bar */}
              <div className="relative w-7 sm:w-9 bg-slate-50/50 border border-gray-100 rounded-t-md overflow-hidden h-44 flex items-end">
                <div 
                  style={{ height: `${heightPercent}%` }} 
                  className={`w-full transition-all duration-500 rounded-t-sm ${
                    isHovered 
                      ? "bg-gradient-to-t from-[#0C447C] to-[#0F4C81]" 
                      : "bg-gradient-to-t from-[#0F4C81] to-[#3B82F6] opacity-85"
                  }`}
                />
              </div>

              <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                {day.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}
