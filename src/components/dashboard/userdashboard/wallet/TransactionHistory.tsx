"use client";

import { ShoppingBag, ArrowUpRight, ArrowDownLeft, ShieldCheck, History } from "lucide-react";

export default function TransactionHistory() {
  const transactions = [
    {
      id: "#VEN-29384",
      date: "Oct 24, 2024",
      type: "Order Purchase",
      typeIcon: ShoppingBag,
      typeColor: "bg-blue-50 text-blue-600",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amount: "- ৳ 1,250.00",
      isDebit: true
    },
    {
      id: "#VEN-29312",
      date: "Oct 21, 2024",
      type: "Wallet Top-up",
      typeIcon: ArrowDownLeft,
      typeColor: "bg-emerald-50 text-emerald-600",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amount: "+ ৳ 5,000.00",
      isDebit: false
    },
    {
      id: "#VEN-28954",
      date: "Oct 15, 2024",
      type: "Order Refund",
      typeIcon: ArrowUpRight,
      typeColor: "bg-amber-50 text-amber-600",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amount: "+ ৳ 450.00",
      isDebit: false
    },
    {
      id: "#VEN-28410",
      date: "Oct 12, 2024",
      type: "Order Purchase",
      typeIcon: ShoppingBag,
      typeColor: "bg-blue-50 text-blue-600",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amount: "- ৳ 2,100.00",
      isDebit: true
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-2xs overflow-hidden">
      
      {/* Table Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
          <History className="size-4 text-gray-400 stroke-[2.2]" />
          <span>Transaction History</span>
        </h3>
        <span className="text-xs font-bold text-brand-primary-600 hover:text-brand-primary-800 transition-colors cursor-pointer select-none">
          View All →
        </span>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-3.5 px-5">Transaction ID</th>
              <th className="py-3.5 px-5">Date</th>
              <th className="py-3.5 px-5">Type</th>
              <th className="py-3.5 px-5">Status</th>
              <th className="py-3.5 px-5 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
            {transactions.map((tx, idx) => {
              const TypeIcon = tx.typeIcon;
              return (
                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                  
                  {/* Transaction ID */}
                  <td className="py-3.5 px-5 font-bold text-[#0F4C81]">
                    {tx.id}
                  </td>
                  
                  {/* Placed Date */}
                  <td className="py-3.5 px-5 text-gray-500 font-medium">
                    {tx.date}
                  </td>

                  {/* Transaction Type Label */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <div className={`p-1 rounded-sm ${tx.typeColor}`}>
                        <TypeIcon className="size-3.5" />
                      </div>
                      <span className="font-semibold text-gray-800">{tx.type}</span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-5">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] md:text-xs border font-bold ${tx.statusColor}`}>
                      {tx.status}
                    </span>
                  </td>

                  {/* Transaction Amount */}
                  <td className={`py-3.5 px-5 text-right font-extrabold ${tx.isDebit ? "text-brand-semantic-600" : "text-brand-secondary-600"}`}>
                    {tx.amount}
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
