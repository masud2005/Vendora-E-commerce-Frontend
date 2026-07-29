"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Delivered", value: 65, color: "#0F4C81" },
  { name: "Shipping", value: 20, color: "#059669" },
  { name: "Processing", value: 10, color: "#F59E0B" },
  { name: "Cancelled", value: 5, color: "#DC2626" }
];

export default function OrderStatus() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none">
      
      {/* Header */}
      <div className="text-left border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Order Status
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
          Distribution across lifecycle.
        </p>
      </div>

      {/* Donut Chart Container */}
      <div className="relative flex items-center justify-center h-[200px] mt-4">
        {!mounted ? (
          <div className="w-full h-full bg-gray-50 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-semibold">
            Loading order distribution...
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
                  formatter={(value) => [`${value}%`, "Share"]}
                  contentStyle={{ fontSize: "11px", fontWeight: "bold", borderRadius: "6px" }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Absolute Centered Donut text */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-gray-900 leading-none">84.2K</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1 block">
                Total
              </span>
            </div>
          </>
        )}
      </div>

      {/* Bottom Custom Legends Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[10px] sm:text-xs font-bold text-gray-500 mt-5 border-t border-gray-50 pt-4 text-left">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span 
              className="size-2.5 rounded-full shrink-0" 
              style={{ backgroundColor: item.color }} 
            />
            <span className="truncate">{item.name} ({item.value}%)</span>
          </div>
        ))}
      </div>

    </div>
  );
}
