"use client";

import React from "react";

interface EarningsLedgerItem {
  date: string;
  deliveries: number;
  baseFee: number;
  bonus: number;
  tips: number;
  total: number;
}

interface EarningsLedgerTableProps {
  ledgerItems: EarningsLedgerItem[];
}

export default function EarningsLedgerTable({ ledgerItems }: EarningsLedgerTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4 text-left">
      <div className="leading-none space-y-1 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Earnings Ledger
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
          Day-by-day breakdown of your payouts
        </p>
      </div>

      {/* Table data structure */}
      <div className="overflow-x-auto border border-gray-150 rounded-lg">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Deliveries</th>
              <th className="py-3 px-4">Base Fee</th>
              <th className="py-3 px-4">Bonus</th>
              <th className="py-3 px-4">Tips</th>
              <th className="py-3 px-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-750 font-semibold">
            {ledgerItems.map((item) => (
              <tr key={item.date} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-4 font-extrabold text-gray-900">{item.date}</td>
                <td className="py-3 px-4 text-center text-gray-500 font-bold">{item.deliveries}</td>
                <td className="py-3 px-4 text-gray-600">৳{item.baseFee}</td>
                <td className="py-3 px-4 text-emerald-605 font-bold">+ ৳{item.bonus}</td>
                <td className="py-3 px-4 text-amber-705 font-bold">+ ৳{item.tips}</td>
                <td className="py-3 px-4 text-right font-black text-gray-950">৳{item.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
