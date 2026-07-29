"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Mock weekly sales velocity data
const chartData = [
  { name: "Mon", Actual: 1500, Target: 1800 },
  { name: "Tue", Actual: 2200, Target: 2000 },
  { name: "Wed", Actual: 3500, Target: 2500 },
  { name: "Thu", Actual: 1800, Target: 2100 },
  { name: "Fri", Actual: 2400, Target: 2300 },
  { name: "Sat", Actual: 3900, Target: 3200 },
  { name: "Sun", Actual: 3200, Target: 3400 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-md border border-gray-250 shadow-md p-1.5 px-2.5 xl:p-3 xl:px-4 text-[10px] xl:text-xs select-none pointer-events-none text-left font-sans">
        <p className="font-bold text-gray-900 mb-1 text-[10px] xl:text-xs">{label}</p>
        <div className="space-y-0.5 xl:space-y-1">
          {payload.map((item: any, idx: number) => (
            <p key={idx} className="flex items-center gap-1.5 font-semibold text-[10px] xl:text-xs" style={{ color: item.fill }}>
              <span className="size-1.5 rounded-full" style={{ backgroundColor: item.fill }} />
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

export default function SalesVelocity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none">
      
      {/* Header & Legends Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div className="text-left">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
            Sales Velocity vs Forecast
          </h3>
        </div>
        
        {/* Legends */}
        <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded bg-[#0F4C81]" />
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded bg-[#E6DFD3]" />
            <span>Target</span>
          </div>
        </div>
      </div>

      {/* Bar Chart Container */}
      <div className="w-full h-[250px] sm:h-[300px] mt-6">
        {!mounted ? (
          <div className="w-full h-full bg-gray-50 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-semibold">
            Loading sales velocity metrics...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              barGap={4}
            >
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
              <Bar dataKey="Actual" fill="#0F4C81" radius={[3, 3, 0, 0]} barSize={14} />
              <Bar dataKey="Target" fill="#E6DFD3" radius={[3, 3, 0, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

    </div>
  );
}
