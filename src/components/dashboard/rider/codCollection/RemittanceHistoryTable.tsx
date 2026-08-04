"use client";

import React from "react";

interface RemittanceHistoryItem {
  batchId: string;
  date: string;
  orders: number;
  method: string;
  amount: number;
  status: "verified" | "submitted";
}

interface RemittanceHistoryTableProps {
  history: RemittanceHistoryItem[];
}

export default function RemittanceHistoryTable({ history }: RemittanceHistoryTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4 text-left font-sans">
      <div className="leading-none space-y-1 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Remittance History
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
          Previous cash handovers and their verification status
        </p>
      </div>

      {/* Table representation */}
      <div className="overflow-x-auto border border-gray-150 rounded-lg">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-3 px-4">Batch ID</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Orders</th>
              <th className="py-3 px-4">Method</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 font-semibold">
            {history.map((item) => (
              <tr key={item.batchId} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-4 font-black text-[#0F4C81]">{item.batchId}</td>
                <td className="py-3 px-4 text-gray-550 font-semibold">{item.date}</td>
                <td className="py-3 px-4 text-center text-gray-600 font-bold">{item.orders}</td>
                <td className="py-3 px-4 text-gray-800 font-bold">{item.method}</td>
                <td className="py-3 px-4 font-black text-gray-950">৳{item.amount.toLocaleString()}</td>
                <td className="py-3 px-4 text-right">
                  <span className={`px-2.5 py-0.5 rounded text-[9px] font-black tracking-wider uppercase ${
                    item.status === "verified"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : "bg-amber-50 text-amber-805 border border-amber-100"
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
