"use client";

import { RotateCcw, Eye } from "lucide-react";

export default function RecentOrdersTable() {
  const recentOrders = [
    { id: "#VEN-902341", date: "Oct 12, 2023", amount: "৳ 2,450", status: "Delivered", statusColor: "bg-brand-secondary-50 text-brand-secondary-600 border-brand-secondary-200" },
    { id: "#VEN-882109", date: "Oct 05, 2023", amount: "৳ 12,999", status: "In Transit", statusColor: "bg-brand-primary-50 text-brand-primary-600 border-brand-primary-200" },
    { id: "#VEN-870012", date: "Sept 28, 2023", amount: "৳ 450", status: "Cancelled", statusColor: "bg-brand-semantic-50 text-brand-semantic-600 border-brand-semantic-200" }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-2xs overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
          <RotateCcw className="size-4 text-gray-400 stroke-[2.2]" />
          <span>Recent Orders</span>
        </h3>
        <span className="text-xs font-bold text-brand-primary-600 hover:text-brand-primary-800 transition-colors cursor-pointer select-none">
          View All Orders
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-3.5 px-5">Order ID</th>
              <th className="py-3.5 px-5">Placed On</th>
              <th className="py-3.5 px-5">Total Amount</th>
              <th className="py-3.5 px-5">Status</th>
              <th className="py-3.5 px-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
            {recentOrders.map((order, idx) => (
              <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-3.5 px-5 font-bold text-brand-primary-600">{order.id}</td>
                <td className="py-3.5 px-5 text-gray-500">{order.date}</td>
                <td className="py-3.5 px-5 text-gray-900 font-bold">{order.amount}</td>
                <td className="py-3.5 px-5">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] border font-bold ${order.statusColor}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3.5 px-5 text-right">
                  <button className="text-gray-500 hover:text-brand-primary-600 transition-colors inline-flex items-center gap-1 cursor-pointer">
                    <Eye className="size-3.5 text-gray-400 stroke-[2.2]" />
                    <span>Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
