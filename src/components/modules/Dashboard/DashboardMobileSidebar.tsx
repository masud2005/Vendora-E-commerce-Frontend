"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ExternalLink, LogOut } from "lucide-react";
import { roleMenuConfigs } from "@/config/dashboard-menu";

interface DashboardMobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userRole: "user" | "seller" | "admin" | "rider";
}

const roleProfiles: Record<string, { name: string; type: string; bg: string; email: string }> = {
  user: { name: "Rahim Ahmed", type: "Customer Account", bg: "bg-blue-500", email: "rahim@vendora.com" },
  seller: { name: "Fashion Arena Ltd.", type: "Verified Vendor", bg: "bg-amber-500", email: "arena@vendora.com" },
  admin: { name: "Sarah Connor", type: "Super Administrator", bg: "bg-brand-semantic-600", email: "sarah@vendora.com" },
  rider: { name: "Express Courier 04", type: "Active Courier", bg: "bg-teal-500", email: "rider04@vendora.com" }
};

export default function DashboardMobileSidebar({
  open,
  onOpenChange,
  userRole
}: DashboardMobileSidebarProps) {
  const pathname = usePathname();
  const menuItems = roleMenuConfigs[userRole] || [];
  const profile = roleProfiles[userRole] || {
    name: "Guest User",
    type: "Public Account",
    bg: "bg-gray-400",
    email: "guest@vendora.com"
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        showCloseButton={true}
        className="p-0 w-72 bg-white border-r border-gray-200 flex flex-col justify-between"
      >
        <div className="flex-1 flex flex-col pt-6">
          {/* Brand Header */}
          <div className="px-6 pb-5 border-b border-gray-100 flex items-center gap-3.5">
            <div className="h-9 w-9 rounded-xl bg-brand-primary-600 flex items-center justify-center text-white shadow-md shadow-blue-600/10 font-black text-sm">
              V
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900 leading-none">Vendora</h2>
              <span className="text-[10px] text-gray-400 mt-1 block uppercase tracking-wider font-semibold">
                {profile.type}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            {menuItems.map((item, idx) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-xs font-semibold rounded-lg transition-all duration-150 active:scale-98 ${
                    isActive
                      ? "bg-[#A7F3D0] text-[#065F46] shadow-xs"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-[#065F46]" : "text-gray-400"}`} />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Area */}
        <div className="p-4 border-t border-gray-100 flex justify-center">
          <Link
            href="/login"
            onClick={() => {
              onOpenChange(false);
              toast.success("Logged out successfully!");
            }}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4 text-red-500" />
            <span>Logout</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
