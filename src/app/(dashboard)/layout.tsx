"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Deduce the initial role based on the current path name, or default to "user"
  const getRoleFromPath = (): "user" | "seller" | "admin" | "rider" => {
    if (pathname.startsWith("/seller")) return "seller";
    if (pathname.startsWith("/admin")) return "admin";
    if (pathname.startsWith("/rider")) return "rider";
    return "user";
  };

  const [role, setRole] = useState<"user" | "seller" | "admin" | "rider">("user");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync role state when path changes directly
  useEffect(() => {
    setRole(getRoleFromPath());
  }, [pathname]);

  const handleRoleChange = (newRole: "user" | "seller" | "admin" | "rider") => {
    setRole(newRole);
    setMobileOpen(false);
    router.push(`/${newRole}`);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 font-sans">
      
      {/* Desktop Sidebar (hidden on mobile, visible from sm screen) */}
      <div className="hidden sm:block h-full">
        <Sidebar userRole={role} />
      </div>

      {/* Mobile Drawer Sidebar using shadcn Sheet component */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" showCloseButton={true} className="p-0 w-64 bg-[#F8FAFC] border-r border-gray-200">
          <Sidebar userRole={role} />
        </SheetContent>
      </Sheet>

      {/* Main Content Layout Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Dynamic header navbar */}
        <Navbar
          currentRole={role}
          onRoleChange={handleRoleChange}
          onMobileToggle={() => setMobileOpen(true)}
        />

        {/* Scrollable Children Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}