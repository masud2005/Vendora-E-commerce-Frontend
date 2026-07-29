"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Mock Chart data for Recharts matching image screenshot
const chartData = [
  { name: "01 Oct", Revenue: 3200, Profit: 1500 },
  { name: "08 Oct", Revenue: 4500, Profit: 2100 },
  { name: "15 Oct", Revenue: 8200, Profit: 3800 },
  { name: "22 Oct", Revenue: 5100, Profit: 2400 },
  { name: "Today", Revenue: 9500, Profit: 4500 }
];

// Custom responsive tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-md border border-gray-250 shadow-md p-1.5 px-2.5 xl:p-3 xl:px-4 text-[10px] xl:text-xs select-none pointer-events-none text-left font-sans">
        <p className="font-bold text-gray-900 mb-1 text-[10px] xl:text-xs">{label}</p>
        <div className="space-y-0.5 xl:space-y-1">
          {payload.map((item: any, idx: number) => (
            <p key={idx} className="flex items-center gap-1.5 font-semibold text-[10px] xl:text-xs" style={{ color: item.stroke }}>
              <span className="size-1.5 rounded-full" style={{ backgroundColor: item.stroke }} />
              <span>{item.name}: </span>
              <span className="font-bold text-gray-900">
                ${typeof item.value === "number" ? item.value.toLocaleString() : item.value}
              </span>
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function RevenueTrends() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none">
      
      {/* Title & Legends Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div className="text-left">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
            Sales & Revenue Trend
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Daily comparison between gross revenue and net profit.
          </p>
        </div>
        
        {/* Chart Legends */}
        <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#0F4C81]" />
            <span>Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#059669]" />
            <span>Profit</span>
          </div>
        </div>
      </div>

      {/* Recharts Wrapper */}
      <div className="w-full h-[250px] sm:h-[300px] mt-6">
        {!mounted ? (
          <div className="w-full h-full bg-gray-50 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-semibold">
            Loading trend metrics...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              {/* Gradients */}
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#0F4C81" stopOpacity={0.01}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.15}/>
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
                tickFormatter={(val) => `$${val}`}
              />
              
              <Tooltip content={<CustomTooltip />} />
              
              {/* Revenue Area (smooth line curve: monotone) */}
              <Area 
                type="monotone" 
                dataKey="Revenue" 
                stroke="#0F4C81" 
                strokeWidth={2.5} 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
              
              {/* Profit Area */}
              <Area 
                type="monotone" 
                dataKey="Profit" 
                stroke="#059669" 
                strokeWidth={2.5} 
                fillOpacity={1} 
                fill="url(#colorProfit)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

    </div>
  );
}
