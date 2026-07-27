"use client";

import { ShoppingBag, Heart, Award, Clock } from "lucide-react";

export default function UserStats() {
  const stats = [
    { title: "TOTAL ORDERS", value: "24", icon: ShoppingBag, color: "text-brand-primary-600", bg: "bg-brand-primary-50" },
    { title: "WISHLIST ITEMS", value: "12", icon: Heart, color: "text-brand-secondary-600", bg: "bg-brand-secondary-50" },
    { title: "REWARD POINTS", value: "1,250", icon: Award, color: "text-brand-accent-600", bg: "bg-brand-accent-50" },
    { title: "PENDING TASKS", value: "3", icon: Clock, color: "text-brand-semantic-600", bg: "bg-brand-semantic-50" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-2xs hover:border-gray-300 transition-colors duration-200">
            <div>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider block">
                {stat.title}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 mt-1.5 block">
                {stat.value}
              </span>
            </div>
            <div className={`p-2 rounded-full ${stat.bg} ${stat.color}`}>
              <Icon className="size-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
