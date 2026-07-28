"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Mock Chart data for Recharts
const chartData = [
  { name: "May 01", "Gross Sales": 30000, "Platform Fees": 10000 },
  { name: "May 08", "Gross Sales": 48000, "Platform Fees": 15000 },
  { name: "May 15", "Gross Sales": 55000, "Platform Fees": 21000 },
  { name: "May 22", "Gross Sales": 62000, "Platform Fees": 26000 },
  { name: "May 29", "Gross Sales": 82000, "Platform Fees": 32000 },
  { name: "Jun 01", "Gross Sales": 95000, "Platform Fees": 39000 }
];

// Custom responsive tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-md border border-gray-250 shadow-md p-1.5 px-2.5 xl:p-3 xl:px-4 text-[10px] xl:text-xs select-none pointer-events-none text-left">
        <p className="font-bold text-gray-900 mb-1 text-[10px] xl:text-xs">{label}</p>
        <div className="space-y-0.5 xl:space-y-1">
          {payload.map((item: any, idx: number) => (
            <p key={idx} className="flex items-center gap-1.5 font-semibold" style={{ color: item.stroke }}>
              <span className="size-1.5 rounded-full" style={{ backgroundColor: item.stroke }} />
              <span>{item.name}: </span>
              <span className="font-bold text-gray-900">
                ৳{typeof item.value === "number" ? item.value.toLocaleString() : item.value}
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
    <div className="bg-white border border-gray-200 rounded p-6 shadow-3xs lg:col-span-2 flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900">
            Platform Revenue Trends
          </h3>
          <p className="text-xs text-gray-400 font-semibold mt-0.5">
            Daily performance aggregated across all seller tiers
          </p>
        </div>
        {/* Chart Legends */}
        <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#0F4C81]" />
            <span>Gross Sales</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-amber-500" />
            <span>Platform Fees</span>
          </div>
        </div>
      </div>

      {/* Interactive Recharts Line/Area Chart */}
      <div className="h-64 w-full mt-4">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#0F4C81" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 'bold' }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 'bold' }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="Gross Sales" 
                stroke="#0F4C81" 
                strokeWidth={2.5} 
                fillOpacity={1} 
                fill="url(#colorSales)" 
              />
              <Area 
                type="monotone" 
                dataKey="Platform Fees" 
                stroke="#F59E0B" 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorFees)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
            Loading chart...
          </div>
        )}
      </div>
    </div>
  );
}
