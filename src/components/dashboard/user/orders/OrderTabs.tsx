"use client";

import React from "react";

export type OrderStatusTab = "All Orders" | "Unpaid" | "To Ship" | "To Receive" | "Completed" | "Cancelled";

interface OrderTabsProps {
  activeTab: OrderStatusTab;
  setActiveTab: (tab: OrderStatusTab) => void;
}

export default function OrderTabs({ activeTab, setActiveTab }: OrderTabsProps) {
  const tabs: OrderStatusTab[] = [
    "All Orders",
    "Unpaid",
    "To Ship",
    "To Receive",
    "Completed",
    "Cancelled"
  ];

  return (
    <div className="border-b border-gray-200 mt-2 select-none overflow-x-auto scrollbar-none">
      <nav className="flex space-x-6 sm:space-x-8 min-w-max pb-0.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3.5 text-xs sm:text-sm font-semibold transition-all relative border-b-2 cursor-pointer ${
                isActive
                  ? "border-[#0F4C81] text-[#0F4C81]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
