"use client";

import React from "react";
import toast from "react-hot-toast";
import { Download } from "lucide-react";

// Mock Payout data matching figma image 3
const payouts = [
  {
    date: "Nov 15, 2023",
    id: "PAY-772189",
    gross: "$45,200.00",
    commission: "-$6,780.00",
    net: "$38,420.00",
    status: "Completed"
  },
  {
    date: "Nov 08, 2023",
    id: "PAY-771982",
    gross: "$38,150.00",
    commission: "-$5,722.50",
    net: "$32,427.50",
    status: "Completed"
  },
  {
    date: "Nov 01, 2023",
    id: "PAY-771884",
    gross: "$52,900.00",
    commission: "-$7,935.00",
    net: "$44,965.00",
    status: "Completed"
  }
];

export default function SalesPerformanceTab() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs text-left select-none space-y-4">
      
      {/* Table Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3.5">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Recent Payout History
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-1">
            Detailed log of platform-to-seller settlements
          </p>
        </div>

        <button
          onClick={() => toast.success("Exporting payout history (CSV)...")}
          className="flex items-center justify-center gap-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-bold py-1.5 px-3 rounded text-xs transition-colors shadow-3xs cursor-pointer shrink-0 self-start sm:self-auto"
        >
          <Download className="size-3.5 text-gray-500" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1">
        <table className="w-full text-xs text-left min-w-[550px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-2.5 px-3">PAYOUT DATE</th>
              <th className="py-2.5 px-3">PAYOUT ID</th>
              <th className="py-2.5 px-3">GROSS AMOUNT</th>
              <th className="py-2.5 px-3">COMMISSION (15%)</th>
              <th className="py-2.5 px-3">NET PAYOUT</th>
              <th className="py-2.5 px-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-600">
            {payouts.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/20 transition-colors">
                <td className="py-3.5 px-3 whitespace-nowrap text-gray-800">{row.date}</td>
                <td className="py-3.5 px-3 whitespace-nowrap text-gray-500">{row.id}</td>
                <td className="py-3.5 px-3 whitespace-nowrap text-gray-855 font-bold">{row.gross}</td>
                <td className="py-3.5 px-3 whitespace-nowrap text-rose-600">{row.commission}</td>
                <td className="py-3.5 px-3 whitespace-nowrap text-emerald-700 font-extrabold">{row.net}</td>
                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold border bg-emerald-50 text-emerald-700 border-emerald-200 uppercase tracking-wider select-none leading-none">
                    {row.status}
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
