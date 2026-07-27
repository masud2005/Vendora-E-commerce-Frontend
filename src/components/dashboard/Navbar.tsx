"use client";

import { Bell, Search, Menu, RefreshCw } from "lucide-react";

interface NavbarProps {
  currentRole: "user" | "seller" | "admin" | "rider";
  onRoleChange: (newRole: "user" | "seller" | "admin" | "rider") => void;
  onMobileToggle: () => void;
}

export default function Navbar({ currentRole, onRoleChange, onMobileToggle }: NavbarProps) {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-4 sm:px-6 select-none shrink-0 z-20">
      
      {/* Mobile Sidebar Toggle & Search */}
      <div className="flex items-center gap-3 flex-1 mr-4">
        <button
          onClick={onMobileToggle}
          className="p-1.5 hover:bg-gray-50 rounded text-gray-500 sm:hidden cursor-pointer active:scale-95 transition-transform"
        >
          <Menu className="size-5" />
        </button>

        {/* Mock Search Bar */}
        <div className="relative hidden md:flex items-center w-64">
          <Search className="absolute left-3 size-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-full bg-gray-50/50 border border-gray-200 rounded py-1.5 pl-9 pr-3 text-xs text-gray-800 outline-none focus:border-brand-primary-600 focus:bg-white transition-all"
            disabled
          />
        </div>
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
    </header>
  );
}
