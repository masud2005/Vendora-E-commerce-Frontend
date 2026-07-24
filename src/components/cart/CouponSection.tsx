"use client";

export default function CouponSection() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-5 mb-5">
      <label
        htmlFor="coupon-code"
        className="block text-sm font-semibold text-gray-900 mb-3"
      >
        Have a Coupon?
      </label>
      <div className="flex gap-2">
        <input
          id="coupon-code"
          type="text"
          placeholder="Enter code"
          className="flex-1 min-w-0 border border-gray-200 rounded-lg px-3.5 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-primary-400 focus:ring-2 focus:ring-brand-primary-50 transition-all"
        />
        <button
          type="button"
          className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-semibold text-sm rounded-lg px-5 py-2 transition-colors shrink-0"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
