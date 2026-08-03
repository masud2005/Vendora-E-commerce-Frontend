"use client";


import { AssignedOrderDetails } from "./types";

interface ParcelContentsTableProps {
  order: AssignedOrderDetails;
}

export default function ParcelContentsTable({ order }: ParcelContentsTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4 text-left">
      <div className="leading-none space-y-1 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Parcel Contents
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
          {order.itemsCount}
        </p>
      </div>

      {/* Table layout */}
      <div className="border border-gray-150 rounded-lg overflow-hidden">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase">
              <th className="py-2.5 px-4">Item</th>
              <th className="py-2.5 px-4 text-center">Qty</th>
              <th className="py-2.5 px-4 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 font-semibold">
            {order.items.map((item, idx) => (
              <tr key={idx}>
                <td className="py-3 px-4 font-extrabold text-gray-900">{item.name}</td>
                <td className="py-3 px-4 text-center text-gray-400">{item.qty}</td>
                <td className="py-3 px-4 text-right font-black text-gray-955">৳{item.price.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-blue-50/40 font-extrabold text-gray-900 border-t border-gray-150 text-[11px] sm:text-xs">
              <td className="py-3.5 px-4 text-[#0F4C81] font-black">Collect from customer</td>
              <td className="py-3.5 px-4 text-center"></td>
              <td className="py-3.5 px-4 text-right text-[#0F4C81] font-black">
                ৳{order.price.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
