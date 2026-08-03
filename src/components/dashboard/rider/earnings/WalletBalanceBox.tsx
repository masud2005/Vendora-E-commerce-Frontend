"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface WalletBalanceBoxProps {
  onWithdraw: () => void;
}

export default function WalletBalanceBox({ onWithdraw }: WalletBalanceBoxProps) {
  return (
    <div className="bg-[#0F4C81] border border-[#0C447C] text-white rounded-xl p-5 shadow-3xs space-y-4 text-left">
      <div>
        <span className="text-[9px] text-blue-200 font-black uppercase tracking-wider">Wallet Balance</span>
        <h2 className="text-2xl sm:text-3xl font-black mt-1 leading-none text-white">৳8,350</h2>
        <p className="text-[10px] text-blue-100 font-bold mt-2 leading-relaxed">
          Available for withdrawal after Monday settlement
        </p>
      </div>
      
      <button
        onClick={onWithdraw}
        className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-black py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer select-none"
      >
        <span>Request Withdrawal</span>
        <ArrowUpRight className="size-4" />
      </button>
    </div>
  );
}
