"use client";

import { Sparkles, Coins } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#1D4ED8] text-white rounded-lg p-5 shadow-2xs relative overflow-hidden group select-none">
      
      {/* Decorative overlapping background elements */}
      <div className="absolute -right-6 -bottom-6 size-24 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300 pointer-events-none"></div>
      
      {/* Dynamic coins visual graphic representation using CSS coins */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
        <Coins className="size-16 text-yellow-300 animate-pulse" />
      </div>

      <div className="space-y-2 relative z-10">
        <div className="inline-flex items-center gap-1 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">
          <Sparkles className="size-3" />
          <span>Limited Offer</span>
        </div>
        
        <h4 className="text-sm md:text-base font-extrabold tracking-tight leading-snug">
          Double Points Weekend!
        </h4>
        
        <p className="text-[11px] md:text-xs text-blue-100 font-semibold leading-relaxed max-w-[70%]">
          Earn 2x points on all tech purchases this weekend.
        </p>
      </div>

    </div>
  );
}
