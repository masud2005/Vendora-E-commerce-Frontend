"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Electronics", value: 45, color: "#0F4C81" },
  { name: "Home Decor", value: 25, color: "#B8860B" },
  { name: "Fashion & Apparel", value: 30, color: "#059669" }
];

export default function MarketShare() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none">
      
      {/* Header */}
      <div className="text-left border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Market Share by Sector
        </h3>
      </div>

      {/* Donut Chart Container */}
      <div className="relative flex items-center justify-center h-[200px] mt-4">
        {!mounted ? (
          <div className="w-full h-full bg-gray-50 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-semibold">
            Loading market share distribution...
          </div>
        ) : (
          <>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, "Market Share"]}
                  contentStyle={{ fontSize: "11px", fontWeight: "bold", borderRadius: "6px" }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Absolute Centered Donut text */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-gray-900 leading-none">100%</span>
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-1 block">
                Allocated
              </span>
            </div>
          </>
        )}
      </div>

      {/* Bottom Custom Legends Grid */}
      <div className="flex flex-col gap-2.5 text-xs font-bold text-gray-500 mt-5 border-t border-gray-50 pt-4 text-left">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span 
                className="size-2.5 rounded-full shrink-0" 
                style={{ backgroundColor: item.color }} 
              />
              <span className="truncate">{item.name}</span>
            </div>
            <span className="text-gray-900 font-black">{item.value}%</span>
          </div>
        ))}
      </div>

    </div>
  );
}
