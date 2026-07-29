"use client";

import DashboardNavContent from "./DashboardNavContent";

interface DashboardNavbarProps {
  currentRole: "user" | "seller" | "admin" | "rider";
  onRoleChange: (newRole: "user" | "seller" | "admin" | "rider") => void;
  onMobileToggle: () => void;
}

export default function DashboardNavbar({
  currentRole,
  onRoleChange,
  onMobileToggle
}: DashboardNavbarProps) {
  return (
    <header className="h-16 border-b border-gray-300 bg-white flex items-center justify-between w-full shrink-0 z-20">
      <DashboardNavContent
        currentRole={currentRole}
        onRoleChange={onRoleChange}
        onMobileToggle={onMobileToggle}
      />
    </header>
  );
}
