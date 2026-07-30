"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const chartData = [
  { name: "01 May", Sales: 12000, Orders: 85 },
  { name: "07 May", Sales: 9500, Orders: 68 },
  { name: "14 May", Sales: 18500, Orders: 132 },
  { name: "21 May", Sales: 11200, Orders: 78 },
  { name: "28 May", Sales: 32000, Orders: 224 },
  { name: "Today", Sales: 23800, Orders: 164 }
];

export default function RevenueAnalytics() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"Sales" | "Orders">("Sales");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none">
      
      {/* Header & Toggle Controls */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="text-left">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
            Revenue Analytics
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Daily sales volume trends
          </p>
        </div>

        {/* Toggle Switch (Sales | Orders) */}
        <div className="bg-gray-100/80 border border-gray-150 rounded-lg p-0.5 flex items-center shadow-3xs shrink-0 select-none">
          {(["Sales", "Orders"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md text-[10px] sm:text-xs font-black transition-all cursor-pointer ${
                  isActive 
                    ? "bg-white text-gray-900 shadow-3xs" 
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart Area Container */}
      <div className="w-full h-[250px] sm:h-[300px] mt-6">
        {!mounted ? (
          <div className="w-full h-full bg-gray-50 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-semibold">
            Loading analytics graph...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#0F4C81" stopOpacity={0.01}/>
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
                tickFormatter={(val) => activeTab === "Sales" ? `$${val.toLocaleString()}` : val}
              />
              <Tooltip 
                contentStyle={{ fontSize: "11px", fontWeight: "bold", borderRadius: "6px" }}
                formatter={(value) => activeTab === "Sales" ? [`$${value.toLocaleString()}`, "Sales"] : [value, "Orders"]}
              />
              <Area 
                type="monotone" 
                dataKey={activeTab} 
                stroke="#0F4C81" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#colorSales)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

    </div>
  );
}
