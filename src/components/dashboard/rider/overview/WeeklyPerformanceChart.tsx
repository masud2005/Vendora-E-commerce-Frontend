"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", earnings: 920, deliveries: 12 },
  { day: "Tue", earnings: 1180, deliveries: 15 },
  { day: "Wed", earnings: 850, deliveries: 10 },
  { day: "Thu", earnings: 1420, deliveries: 18 },
  { day: "Fri", earnings: 1600, deliveries: 22 },
  { day: "Sat", earnings: 1250, deliveries: 14 },
  { day: "Sun", earnings: 1050, deliveries: 11 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-150 rounded-xl p-3 shadow-md text-xs font-bold leading-none space-y-1.5 text-left select-none">
        <p className="text-gray-900 font-extrabold">{label}</p>
        <p className="text-[#0F4C81]">earnings : {payload[0].value}</p>
        <p className="text-[#D97706]">deliveries : {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

export default function WeeklyPerformanceChart() {
  return (
    <div className="bg-white border border-gray-250 rounded-xl p-5 sm:p-6 shadow-3xs flex flex-col justify-between select-none h-full min-h-[380px] text-left">
      
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3.5 select-none">
        <div className="leading-none space-y-1">
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
            Weekly Performance
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Earnings and completed deliveries across the last 7 days
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3.5 text-[10px] font-extrabold text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#0F4C81]" />
            <span>Earnings</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#D97706]" />
            <span>Deliveries</span>
          </div>
        </div>
      </div>

      {/* Recharts chart area */}
      <div className="flex-1 w-full h-64 mt-4 select-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis 
              dataKey="day" 
              stroke="#9CA3AF" 
              fontSize={10} 
              fontWeight={800}
              tickLine={false} 
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={10} 
              fontWeight={800}
              tickLine={false} 
              axisLine={false}
              domain={[0, 1800]}
              ticks={[0, 450, 900, 1350, 1800]}
              dx={-5}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#D1D5DB", strokeWidth: 1 }} />
            
            {/* Line 1: Earnings */}
            <Line 
              type="monotone" 
              dataKey="earnings" 
              stroke="#0F4C81" 
              strokeWidth={2.5} 
              dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
              activeDot={{ r: 6 }} 
            />

            {/* Line 2: Deliveries */}
            <Line 
              type="monotone" 
              dataKey="deliveries" 
              stroke="#D97706" 
              strokeWidth={2} 
              dot={{ r: 3, strokeWidth: 1.5, fill: "#fff" }}
              activeDot={{ r: 5 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
