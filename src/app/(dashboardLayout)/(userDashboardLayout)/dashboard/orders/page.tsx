"use client";

export default function OrdersPage() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-2xs">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        My Orders
      </h1>
      <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
        Track your current orders, review purchase history, and manage order invoices.
      </p>
      
      {/* Empty State placeholder */}
      <div className="border border-dashed border-gray-200 rounded-lg py-12 px-4 text-center mt-6">
        <p className="text-sm font-semibold text-gray-400">No active orders found.</p>
      </div>
    </div>
  );
}
