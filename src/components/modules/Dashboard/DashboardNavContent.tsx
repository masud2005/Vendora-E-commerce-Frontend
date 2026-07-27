"use client";

import { Bell, Menu, RefreshCw } from "lucide-react";

interface DashboardNavContentProps {
  currentRole: "user" | "seller" | "admin" | "rider";
  onRoleChange: (newRole: "user" | "seller" | "admin" | "rider") => void;
  onMobileToggle: () => void;
}

export default function DashboardNavContent({
  currentRole,
  onRoleChange,
  onMobileToggle
}: DashboardNavContentProps) {
  return (
    <div className="flex items-center justify-between w-full h-full px-4 sm:px-6 select-none">
      {/* Mobile Sidebar Toggle Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileToggle}
          className="p-1.5 hover:bg-gray-50 rounded text-gray-500 sm:hidden cursor-pointer active:scale-95 transition-transform"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Header Actions Area (Role Switcher Simulator) */}
      <div className="flex items-center gap-4">
        {/* Dynamic Dev Role Switcher Panel */}
        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded px-2.5 py-1">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <RefreshCw className="size-3 text-brand-primary-600" />
            Simulate Role:
          </span>
          <select
            value={currentRole}
            onChange={(e) => onRoleChange(e.target.value as any)}
            className="bg-transparent border-none text-xs font-bold text-gray-800 focus:ring-0 outline-none cursor-pointer"
          >
            <option value="user">Customer (User)</option>
            <option value="seller">Seller (Vendor)</option>
            <option value="admin">Admin</option>
            <option value="rider">Rider (Delivery)</option>
          </select>
        </div>

        {/* Notifications Icon Button */}
        <button className="relative p-2 hover:bg-gray-50 rounded text-gray-400 hover:text-gray-600 transition-colors">
          <Bell className="size-4.5 stroke-[2.2]" />
          <span className="absolute top-1.5 right-1.5 size-2 bg-brand-semantic-600 rounded-full ring-2 ring-white"></span>
        </button>
      </div>
    </div>
  );
}
