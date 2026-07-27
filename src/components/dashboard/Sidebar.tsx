"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { roleMenuConfigs } from "@/config/dashboard-menu";

interface SidebarProps {
  userRole: "user" | "seller" | "admin" | "rider";
}

const roleProfiles: Record<string, { name: string; type: string; bg: string }> = {
  user: { name: "John Doe", type: "Customer Account", bg: "bg-blue-500" },
  seller: { name: "Fashion Arena Ltd.", type: "Verified Vendor", bg: "bg-amber-500" },
  admin: { name: "Sarah Connor", type: "Super Administrator", bg: "bg-brand-semantic-600" },
  rider: { name: "Express Courier 04", type: "Active Courier", bg: "bg-teal-500" }
};

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const menuItems = roleMenuConfigs[userRole] || [];
  const profile = roleProfiles[userRole] || { name: "Guest User", type: "Public Account", bg: "bg-gray-400" };

  return (
    <aside className="w-64 bg-[#F8FAFC] border-r border-gray-200 flex flex-col h-full select-none shrink-0">
      
      {/* Brand Header matching user's mockup */}
      <div className="pt-8 pb-6 px-6 flex flex-col">
        <span className="text-xl font-bold text-[#0F4C81] tracking-tight leading-none">
          Vendora
        </span>
        <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">
          Management Portal
        </span>
      </div>

      {/* Role Profile Info Card */}
      <div className="px-6 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3 bg-white p-3 rounded border border-gray-100 shadow-2xs">
          <div className={`size-8 rounded-full ${profile.bg} text-white flex items-center justify-center font-black text-xs uppercase`}>
            {profile.name.slice(0, 2)}
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-gray-950 truncate leading-tight">
              {profile.name}
            </h4>
            <p className="text-[9px] text-gray-400 font-semibold truncate mt-0.5 uppercase tracking-wide">
              {profile.type}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links Area */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 scrollbar-none">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded text-xs font-bold transition-all duration-150 ${
                isActive
                  ? "bg-[#A7F3D0] text-[#065F46]"
                  : "text-gray-600 hover:bg-gray-150/40 hover:text-gray-900"
              }`}
            >
              <Icon className={`size-4.5 shrink-0 ${isActive ? "text-[#065F46]" : "text-gray-500"}`} />
              <span className="truncate">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Footer Actions (Logout in Red) */}
      <div className="p-4 border-t border-gray-150/80">
        <Link
          href="/login"
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded text-xs font-bold text-red-600 hover:bg-red-50 transition-all duration-150"
        >
          <LogOut className="size-4.5 text-red-600 stroke-[2.2]" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
