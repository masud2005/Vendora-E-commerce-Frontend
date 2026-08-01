"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { roleMenuConfigs } from "@/config/dashboard-menu";

interface DashboardSidebarContentProps {
  userRole: "user" | "seller" | "admin" | "rider";
}

const roleProfiles: Record<string, { name: string; type: string; bg: string }> = {
  user: { name: "John Doe", type: "Customer Account", bg: "bg-blue-500" },
  seller: { name: "Fashion Arena Ltd.", type: "Verified Vendor", bg: "bg-amber-500" },
  admin: { name: "Sarah Connor", type: "Super Administrator", bg: "bg-brand-semantic-600" },
  rider: { name: "Express Courier 04", type: "Active Courier", bg: "bg-teal-500" }
};

export default function DashboardSidebarContent({ userRole }: DashboardSidebarContentProps) {
  const pathname = usePathname();
  const menuItems = roleMenuConfigs[userRole] || [];

  return (
    <div className="flex flex-col h-full w-full select-none justify-between">
      
      {/* Top Section: Logo & Menu links */}
      <div className="flex flex-col w-full">
        
        {/* Brand Header */}
        <div className="pt-8 pb-6 px-4 lg:px-6 flex flex-col items-center lg:items-start">
          {/* Tablet Mini Logo */}
          <div className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg bg-brand-primary-600 text-white shrink-0 shadow-sm shadow-blue-600/20 font-black text-sm">
            V
          </div>
          {/* Desktop Full Logo */}
          <span className="hidden lg:inline text-xl font-bold text-[#0F4C81] tracking-tight leading-none">
            Vendora
          </span>
          <span className="hidden lg:inline text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">
            Management Portal
          </span>
        </div>

        {/* Navigation Links Area */}
        <nav className="px-2.5 lg:px-4 py-4 space-y-1.5 scrollbar-none flex flex-col items-center lg:items-stretch w-full">
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex flex-col lg:flex-row items-center gap-1 lg:gap-3 p-2 lg:px-4 lg:py-2.5 rounded text-center lg:text-left transition-all duration-150 w-full justify-center lg:justify-start ${
                  isActive
                    ? "bg-[#A7F3D0] text-[#065F46]"
                    : "text-gray-600 hover:bg-gray-150/40 hover:text-gray-900"
                }`}
                title={item.title}
              >
                <Icon className={`size-5 lg:size-4.5 shrink-0 ${isActive ? "text-[#065F46]" : "text-gray-500"}`} />
                <span className="hidden lg:inline text-xs font-bold truncate flex-1">{item.title}</span>
                {/* Tablet tiny text label under the icon */}
                <span className="inline lg:hidden text-[9px] font-bold truncate tracking-tighter leading-none mt-0.5">
                  {item.title}
                </span>

                {/* Optional Badge element sitting at the right side */}
                {item.badge !== undefined && (
                  <span className={`hidden lg:inline-flex items-center justify-center text-[9px] font-black leading-none px-1.5 py-0.5 rounded-full shrink-0 select-none ${
                    item.badgeType === "danger"
                      ? "bg-red-500 text-white"
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

      </div>

      {/* Bottom Footer Actions (Logout) sitting at the absolute bottom */}
      <div className="p-4 border-t border-gray-200 flex justify-center">
        {/* Desktop Full Button */}
        <Link
          href="/login"
          className="hidden lg:flex items-center gap-3 w-full px-4 py-2.5 rounded text-xs font-bold text-red-600 hover:bg-red-50 transition-all duration-150"
        >
          <LogOut className="size-4.5 text-red-600 stroke-[2.2]" />
          <span>Logout</span>
        </Link>

        {/* Tablet Icon-only Button */}
        <Link
          href="/login"
          className="flex lg:hidden items-center justify-center p-2 rounded-full text-red-600 hover:bg-red-50 transition-all duration-150"
          title="Logout"
        >
          <LogOut className="size-5 text-red-600 stroke-[2.2]" />
        </Link>
      </div>

    </div>
  );
}
