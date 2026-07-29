"use client";

import React from "react";
import { CheckCircle2, UserPlus, AlertTriangle, Trophy } from "lucide-react";

const activities = [
  {
    text: "Order #8821 confirmed for $2,499.00",
    time: "2 mins ago",
    scope: "TechNova",
    icon: CheckCircle2,
    style: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    text: "New Seller Aura Studio onboarded",
    time: "15 mins ago",
    scope: "Global",
    icon: UserPlus,
    style: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    text: "Fraud Alert: Unusual volume detected",
    time: "1 hour ago",
    scope: "IP: 182.xx.xx.4",
    icon: AlertTriangle,
    style: "bg-rose-50 text-rose-700 border-rose-200"
  },
  {
    text: "GreenLeaf promoted to Elite Seller",
    time: "3 hours ago",
    scope: "Admin Approval",
    icon: Trophy,
    style: "bg-amber-50 text-amber-700 border-amber-200"
  }
];

export default function LiveActivity() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs flex flex-col select-none min-h-[340px] text-left">
      
      {/* Title */}
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900">
          Recent Live Activity
        </h3>
      </div>

      {/* Timeline Wrapper */}
      <div className="mt-5 flex-1 relative pl-6 border-l border-gray-150 ml-3 space-y-4">
        {activities.map((act, idx) => {
          const Icon = act.icon;
          return (
            <div key={idx} className="relative text-left leading-none space-y-1">
              
              {/* Absolute icon overlay on timeline line */}
              <span className={`absolute -left-[37px] top-0 size-7.5 rounded-full flex items-center justify-center border-3 border-white shrink-0 shadow-3xs ${act.style}`}>
                <Icon className="size-3.5" />
              </span>

              {/* Main Activity details */}
              <h4 className="text-xs font-bold text-gray-800 leading-snug">
                {act.text}
              </h4>
              <span className="text-[10px] text-gray-400 font-bold block">
                {act.time} • <span className="text-gray-500">{act.scope}</span>
              </span>

            </div>
          );
        })}
      </div>

    </div>
  );
}
