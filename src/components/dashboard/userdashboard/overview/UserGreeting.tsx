"use client";

import { Store } from "lucide-react";

export default function UserGreeting() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          Welcome back, Rahim! 👋
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-1">
          Here's what's happening with your account today.
        </p>
      </div>
      
      {/* Become a Seller button updated to brand-accent-200 */}
      <button className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-bold py-2 px-3 rounded text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:translate-y-px transition-colors duration-200">
        <Store className="size-4" />
        <span>Become a Seller</span>
      </button>
    </div>
  );
}
