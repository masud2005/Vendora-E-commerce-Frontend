"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import DashboardSidebarContent from "./DashboardSidebarContent";

interface DashboardMobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userRole: "user" | "seller" | "admin" | "rider";
}

export default function DashboardMobileSidebar({
  open,
  onOpenChange,
  userRole
}: DashboardMobileSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" showCloseButton={true} className="p-0 w-64 bg-[#F8FAFC] border-r border-gray-200">
        <DashboardSidebarContent userRole={userRole} />
      </SheetContent>
    </Sheet>
  );
}
