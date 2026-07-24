"use client";

import { ArrowRight } from "lucide-react";

interface OrderSummaryProps {
  subtotal: number;
  itemCount: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export default function OrderSummary({
  subtotal,
  itemCount,
  discount,
  shipping,
  tax,
  total,
}: OrderSummaryProps) {
  const paymentMethods = ["SSLCOMMERZ", "Stripe"];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-5 pb-1">
        Order Summary
      </h3>

      {/* Pricing Breakdown */}
      <div className="flex flex-col gap-3.5 text-sm">
        <div className="flex justify-between items-center text-gray-600">
          <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between items-center text-gray-600">
            <span>Discount (10% OFF)</span>
            <span className="font-semibold text-brand-teal">
              -${discount.toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center text-gray-600">
          <span>Shipping</span>
          <span className="font-semibold text-gray-900">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-600">
          <span>Estimated Tax</span>
          <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-2" />

        {/* Total */}
        <div className="flex justify-between items-center py-1">
          <span className="text-base font-bold text-gray-900">Total Amount</span>
          <span className="text-xl sm:text-2xl font-black text-brand-primary-600">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Proceed to Checkout Button */}
      <button
        type="button"
        className="w-full bg-brand-amber text-gray-950 hover:bg-brand-accent-400 font-bold py-3.5 px-4 rounded-xl mt-6 flex items-center justify-center gap-2 group transition-all duration-300 shadow-md shadow-brand-accent-100 hover:shadow-lg hover:shadow-brand-accent-200 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
      >
        <span>Proceed to Checkout</span>
        <ArrowRight className="size-4 sm:size-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {/* Security Info */}
      <div className="mt-5 text-center">
        <span className="text-[10px] font-extrabold tracking-wider text-gray-400 uppercase select-none">
          Secure Payment Guaranteed
        </span>

        {/* Payment Badges */}
        <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="px-2.5 py-1 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border border-gray-100 rounded-md select-none"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
