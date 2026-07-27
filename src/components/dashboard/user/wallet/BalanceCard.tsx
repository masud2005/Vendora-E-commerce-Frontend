"use client";

import { CreditCard, ArrowDownCircle, ShieldCheck } from "lucide-react";

export default function BalanceCard() {
  return (
    <div className="bg-gradient-to-br from-[#0F4C81] to-[#0A3459] text-white rounded-lg p-6 shadow-2xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 group">
      
      {/* Decorative background circle */}
      <div className="absolute -right-16 -bottom-16 size-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300 pointer-events-none"></div>

      {/* Balance Details */}
      <div className="space-y-4 md:space-y-6 flex-1">
        <div>
          <span className="text-[10px] md:text-xs font-bold text-blue-200 uppercase tracking-wider block">
            Current Balance
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg sm:text-xl md:text-xl font-black tracking-tight leading-none">
              <span className="font-bengali">৳</span> 24,580.00
            </span>
            <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded text-blue-200">
              <ShieldCheck className="size-3 text-emerald-400" />
              <span>SECURE</span>
            </span>
          </div>
        </div>
 
        {/* Muted rewards list */}
        <div className="flex items-center gap-6 border-t border-white/10 pt-4">
          <div>
            <span className="text-[10px] md:text-xs font-bold text-blue-300/80 uppercase block">
              Reward Points
            </span>
            <span className="text-sm  font-bold mt-0.5 block">
              1,240 Pts
            </span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div>
            <span className="text-[10px] md:text-xs font-bold text-blue-300/80 uppercase block">
              Active Refunds
            </span>
            <span className="text-sm md:text-base font-bold mt-0.5 block">
              <span className="font-bengali">৳</span> 0.00
            </span>
          </div>
        </div>
      </div>

      {/* Right side vertically stacked buttons */}
      <div className="flex flex-col gap-3 w-full md:w-48 shrink-0 relative z-10">
        <button className="bg-[#DDF613] hover:bg-[#cbe00a] text-black font-bold py-2.5 px-4 rounded text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs active:translate-y-px">
          <CreditCard className="size-4" />
          <span>TOP UP WALLET</span>
        </button>

        <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-4 rounded text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 active:translate-y-px">
          <ArrowDownCircle className="size-4" />
          <span>WITHDRAW FUNDS</span>
        </button>
      </div>

    </div>
  );
}
