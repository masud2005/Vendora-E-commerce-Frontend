"use client";



interface CashHeldItem {
  id: string;
  customerName: string;
  collectedTime: string;
  amount: number;
}

interface CashHeldTableProps {
  cashHeldList: CashHeldItem[];
  cashInHand: number;
}

export default function CashHeldTable({ cashHeldList, cashInHand }: CashHeldTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4 text-left h-full flex flex-col ">
      <div className="leading-none space-y-1 text-left mb-8">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
          Cash Held Against Orders
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-400 font-semibold">
          Collected COD payments not yet handed over
        </p>
      </div>

      <div className="border border-gray-150 rounded-lg overflow-hidden">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-150 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="py-2.5 px-4">Order</th>
              <th className="py-2.5 px-4">Customer</th>
              <th className="py-2.5 px-4">Collected</th>
              <th className="py-2.5 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-750 font-semibold">
            {cashHeldList.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-400 font-bold text-sm">
                  No cash currently held in hand.
                </td>
              </tr>
            ) : (
              cashHeldList.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-4 font-black text-[#0F4C81]">{item.id}</td>
                  <td className="py-3 px-4 text-gray-900 font-extrabold">{item.customerName}</td>
                  <td className="py-3 px-4 text-gray-550">{item.collectedTime}</td>
                  <td className="py-3 px-4 text-right font-black text-gray-950">৳{item.amount.toLocaleString()}</td>
                </tr>
              ))
            )}
            <tr className="bg-blue-50/30 border-t border-gray-150 text-[11px] sm:text-xs font-black text-gray-900">
              <td className="py-3.5 px-4 text-left">Total to remit</td>
              <td></td>
              <td></td>
              <td className="py-3.5 px-4 text-right text-[#0F4C81] font-black">৳{cashInHand.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
