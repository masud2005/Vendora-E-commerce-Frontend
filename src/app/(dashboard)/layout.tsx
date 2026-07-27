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
    <div className="container mx-auto px-4 py-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Desktop Sidebar (hidden on mobile, visible from lg screen) */}
        <div className="hidden lg:block shrink-0 bg-white border border-gray-200 rounded-lg p-2 shadow-2xs">
          <Sidebar userRole={role} />
        </div>

        {/* Mobile/Tablet Drawer Sidebar using shadcn Sheet component */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" showCloseButton={true} className="p-0 w-64 bg-[#F8FAFC] border-r border-gray-200">
            <Sidebar userRole={role} />
          </SheetContent>
        </Sheet>

        {/* Main Content Layout Container */}
        <div className="flex-1 w-full flex flex-col gap-6">
          {/* Dynamic header navbar */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-2xs">
            <Navbar
              currentRole={role}
              onRoleChange={handleRoleChange}
              onMobileToggle={() => setMobileOpen(true)}
            />
          </div>

          {/* Children Page Body */}
          <main className="w-full">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}