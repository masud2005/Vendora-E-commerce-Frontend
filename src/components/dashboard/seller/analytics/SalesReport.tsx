"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const chartData = [
  { name: "Mon", Revenue: 14000, Projected: 16000 },
  { name: "Tue", Revenue: 22000, Projected: 19000 },
  { name: "Wed", Revenue: 18000, Projected: 21000 },
  { name: "Thu", Revenue: 26000, Projected: 24000 },
  { name: "Fri", Revenue: 23000, Projected: 26000 },
  { name: "Sat", Revenue: 38000, Projected: 33000 },
  { name: "Sun", Revenue: 29000, Projected: 31000 }
];

export default function SalesReport() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none">
      
      {/* Title and Legends Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div className="text-left">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
            Sales Report
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Daily revenue distribution
          </p>
        </div>

        {/* Legends */}
        <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded bg-[#0F4C81]" />
            <span>Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded bg-[#059669]" />
            <span>Projected</span>
          </div>
        </div>
      </div>

      {/* Recharts Double Area Chart Container */}
      <div className="w-full h-[250px] sm:h-[300px] mt-6">
        {!mounted ? (
          <div className="w-full h-full bg-gray-50 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-semibold">
            Loading sales report graph...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#0F4C81" stopOpacity={0.01}/>
                </linearGradient>
                <linearGradient id="projectedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.12}/>
                  <stop offset="95%" stopColor="#059669" stopOpacity={0.01}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: "bold" }} 
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: "#9CA3AF", fontSize: 10, fontWeight: "bold" }}
                tickFormatter={(val) => `$${(val/1000)}k`}
              />
              <Tooltip 
                contentStyle={{ fontSize: "11px", fontWeight: "bold", borderRadius: "6px" }}
                formatter={(value) => [`$${value.toLocaleString()}`]}
              />
              <Area 
                type="monotone" 
                dataKey="Revenue" 
                stroke="#0F4C81" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#revenueGrad)" 
              />
              <Area 
                type="monotone" 
                dataKey="Projected" 
                stroke="#059669" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#projectedGrad)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

    </div>
  );
}
