"use client";

import React from "react";
import { Gift } from "lucide-react";

export default function ActiveIncentivesList() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4 text-left">
      <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-2">
        Active Incentives
      </h3>

      <div className="space-y-4">
        {/* Incentive 1 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-black text-gray-900 leading-none">Weekend Streak</h4>
              <span className="text-[9px] text-gray-400 font-semibold block mt-1">Complete 20 deliveries Sat–Sun</span>
            </div>
            <span className="bg-amber-50 border border-amber-100 text-amber-805 px-2 py-0.5 rounded text-[9px] font-black tracking-wide inline-flex items-center gap-0.5">
              <Gift className="size-3 text-amber-700" />
              ৳500
            </span>
          </div>
          <div className="w-full bg-slate-50 border border-gray-100 rounded-full h-2 relative overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: "80%" }} />
          </div>
          <span className="text-[9px] text-gray-400 font-bold block">16 of 20 completed</span>
        </div>

        {/* Incentive 2 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-black text-gray-900 leading-none">Express Champion</h4>
              <span className="text-[9px] text-gray-400 font-semibold block mt-1">10 express orders delivered on time</span>
            </div>
            <span className="bg-amber-50 border border-amber-100 text-amber-850 px-2 py-0.5 rounded text-[9px] font-black tracking-wide inline-flex items-center gap-0.5">
              <Gift className="size-3 text-amber-700" />
              ৳350
            </span>
          </div>
          <div className="w-full bg-slate-50 border border-gray-100 rounded-full h-2 relative overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: "70%" }} />
          </div>
          <span className="text-[9px] text-gray-400 font-bold block">7 of 10 completed</span>
        </div>

        {/* Incentive 3 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-black text-gray-900 leading-none">Perfect Rating</h4>
              <span className="text-[9px] text-gray-400 font-semibold block mt-1">Maintain 4.8+ for 7 days</span>
            </div>
            <span className="bg-amber-50 border border-amber-100 text-amber-850 px-2 py-0.5 rounded text-[9px] font-black tracking-wide inline-flex items-center gap-0.5">
              <Gift className="size-3 text-amber-700" />
              ৳250
            </span>
          </div>
          <div className="w-full bg-slate-50 border border-gray-100 rounded-full h-2 relative overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: "85.7%" }} />
          </div>
          <span className="text-[9px] text-gray-400 font-bold block">6 of 7 completed</span>
        </div>

      </div>
    </div>
  );
}
