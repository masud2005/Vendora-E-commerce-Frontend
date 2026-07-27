"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "@/components/modules/Dashboard/DashboardSidebar";
import Navbar from "@/components/modules/Dashboard/DashboardNavbar";
import MobileSidebar from "@/components/modules/Dashboard/DashboardMobileSidebar";

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
    if (newRole === "user") {
      router.push("/dashboard/overview");
    } else {
      router.push(`/${newRole}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Desktop/Tablet Sidebar (hidden on mobile, visible from tablet/md screen) */}
        <div className="hidden md:block shrink-0 bg-white border border-gray-200 rounded-lg p-2 shadow-2xs">
          <Sidebar userRole={role} />
        </div>

        {/* Mobile/Tablet Drawer Sidebar */}
        <MobileSidebar
          open={mobileOpen}
          onOpenChange={setMobileOpen}
          userRole={role}
        />

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