"use client";

import React from "react";

interface ActivityItem {
  id: string;
  loc: string;
  price: string;
  status: "Assigned" | "Picked Up" | "In Transit" | "Delivered";
  statusStyle: string;
}

const activities: ActivityItem[] = [
  {
    id: "#VD-90412",
    loc: "Uttara",
    price: "৳3,240",
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150"
  },
  {
    id: "#VD-90418",
    loc: "Shewrapara",
    price: "৳1,190",
    status: "Assigned",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-150"
  },
  {
    id: "#VD-90399",
    loc: "Gulshan",
    price: "৳2,450",
    status: "Picked Up",
    statusStyle: "bg-amber-50 text-amber-700 border-amber-150"
  },
  {
    id: "#VD-90376",
    loc: "Baridhara",
    price: "৳5,680",
    status: "In Transit",
    statusStyle: "bg-yellow-50 text-yellow-750 border-yellow-250"
  },
  {
    id: "#VD-90355",
    loc: "Pallabi",
    price: "৳890",
    status: "In Transit",
    statusStyle: "bg-yellow-50 text-yellow-750 border-yellow-250"
  },
  {
    id: "#VD-90301",
    loc: "Mohakhali",
    price: "৳1,750",
    status: "Delivered",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-150"
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white border border-gray-250 rounded-xl p-5 sm:p-6 shadow-3xs text-left select-none space-y-4 flex flex-col justify-between h-full min-h-[440px]">
      
      {/* Header Panel */}
      <div className="border-b border-gray-100 pb-3 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Recent Activity
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
          Last status updates
        </p>
      </div>

      {/* Activity Logs List */}
      <div className="divide-y divide-gray-100 flex-1 flex flex-col justify-between gap-3.5 pt-3">
        {activities.map((act, index) => (
          <div key={index} className="flex items-center justify-between pt-3 first:pt-0 gap-3 text-xs font-semibold text-gray-700">
            
            {/* Left Order & Location details */}
            <div className="text-left leading-none space-y-1 truncate pr-2">
              <h4 className="font-extrabold text-[#0F4C81] hover:underline cursor-pointer">
                {act.id}
              </h4>
              <span className="text-[9px] text-gray-400 font-bold block">
                {act.loc} • <span className="text-gray-500">{act.price}</span>
              </span>
            </div>

            {/* Right Status Badge */}
            <div className="shrink-0">
              <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-black border uppercase tracking-wide select-none ${act.statusStyle}`}>
                ● {act.status}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
