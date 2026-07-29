"use client";

import DashboardSidebarContent from "./DashboardSidebarContent";

interface DashboardSidebarProps {
  userRole: "user" | "seller" | "admin" | "rider";
}

export default function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  return (
    <aside className="w-full bg-white flex flex-col select-none shrink-0 h-full transition-all duration-300 mx-auto">
      <DashboardSidebarContent userRole={userRole} />
    </aside>
  );
}
