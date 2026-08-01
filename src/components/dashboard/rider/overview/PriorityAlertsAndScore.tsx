"use client";

import React from "react";
import { AlertCircle, Landmark, MessageSquareCode, Star } from "lucide-react";
import toast from "react-hot-toast";

export default function PriorityAlertsAndScore() {
  return (
    <div className="flex flex-col gap-4.5 w-full select-none h-full justify-between">
      
      {/* 1. Priority Alerts Card */}
      <div className="bg-white border border-gray-250 rounded-xl p-5 shadow-3xs text-left space-y-3.5">
        <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-50 pb-2">
          Priority Alerts
        </h3>

        <div className="space-y-2.5">
          {/* Alert 1: SLA at risk */}
          <div className="bg-rose-50/60 border border-rose-100 rounded-lg p-3 flex items-center justify-between gap-3 text-left">
            <div className="flex items-start gap-2.5 min-w-0">
              <AlertCircle className="size-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="leading-none space-y-1 truncate">
                <h4 className="text-xs font-extrabold text-rose-950">SLA at risk</h4>
                <span className="text-[10px] text-rose-700/80 font-bold block">#VD-90376 · 45 min remaining</span>
              </div>
            </div>
            <button 

              className="text-[10px] font-black bg-white border border-rose-200 hover:bg-rose-50 text-rose-700 py-1.5 px-3 rounded-md transition-colors cursor-pointer shrink-0"
            >
              Open
            </button>
          </div>

          {/* Alert 2: COD limit approaching */}
          <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-3 flex items-center justify-between gap-3 text-left">
            <div className="flex items-start gap-2.5 min-w-0">
              <Landmark className="size-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="leading-none space-y-1 truncate">
                <h4 className="text-xs font-extrabold text-amber-950">COD limit approaching</h4>
                <span className="text-[10px] text-amber-700/80 font-bold block">0% of daily cash limit used</span>
              </div>
            </div>
            <button 
            
              className="text-[10px] font-black bg-white border border-amber-200 hover:bg-amber-50 text-amber-700 py-1.5 px-3 rounded-md transition-colors cursor-pointer shrink-0"
            >
              Remit
            </button>
          </div>

          {/* Alert 3: Unread messages */}
          <div className="bg-blue-50/40 border border-blue-100 rounded-lg p-3 flex items-center justify-between gap-3 text-left">
            <div className="flex items-start gap-2.5 min-w-0">
              <MessageSquareCode className="size-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="leading-none space-y-1 truncate">
                <h4 className="text-xs font-extrabold text-blue-955">Unread messages</h4>
                <span className="text-[10px] text-blue-700/80 font-bold block">0 new from support & sellers</span>
              </div>
            </div>
            <button 
          
              className="text-[10px] font-black bg-white border border-blue-200 hover:bg-blue-50 text-[#0F4C81] py-1.5 px-3 rounded-md transition-colors cursor-pointer shrink-0"
            >
              Reply
            </button>
          </div>
        </div>
      </div>

      {/* 2. Rider Score Dark Card */}
      <div className="bg-gradient-to-br from-[#0F4C81] to-[#0A3358] text-white rounded-xl p-5 shadow-3xs flex flex-col justify-between min-h-[200px] text-left">
        
        {/* Top Details */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-white/70 font-black tracking-widest uppercase block">
            Rider Score
          </span>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-black leading-none">4.87</h2>
            {/* Stars row */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="size-4.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-[10px] text-white/80 font-bold">
            Top 8% of riders in Dhaka North · Zone 4
          </p>
        </div>

        {/* Bottom Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 mt-4 text-center">
          <div className="leading-none space-y-1">
            <h4 className="text-sm sm:text-base font-black">96%</h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider block">On-time</span>
          </div>
          <div className="leading-none space-y-1 border-x border-white/10">
            <h4 className="text-sm sm:text-base font-black">99%</h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider block">Accepted</span>
          </div>
          <div className="leading-none space-y-1">
            <h4 className="text-sm sm:text-base font-black">2841</h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider block">Lifetime</span>
          </div>
        </div>

      </div>

    </div>
  );
}
