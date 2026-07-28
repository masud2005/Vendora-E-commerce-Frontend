"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "@/components/modules/Dashboard/DashboardSidebar";
import Navbar from "@/components/modules/Dashboard/DashboardNavbar";

import DashboardMobileSidebar from "@/components/modules/Dashboard/DashboardMobileSidebar";

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
    <div className="flex flex-col h-screen w-full bg-brand-primary-50 font-sans overflow-hidden">
      
      {/* 1. Dynamic header navbar (Top level, spans full width) */}
      <Navbar
        currentRole={role}
        onRoleChange={handleRoleChange}
        onMobileToggle={() => setMobileOpen(true)}
      />

      {/* 2. Split Layout Container below the Navbar */}
      <div className="flex-1 flex flex-row min-w-0 overflow-hidden">
        
        {/* Desktop/Tablet Sidebar (flush with bottom border of navbar, h-fit white background) */}
        <div className="hidden sm:block shrink-0 w-30 lg:w-64 transition-all duration-300 self-start h-fit bg-white border-r border-b border-gray-300">
          <Sidebar userRole={role} />
        </div>

        {/* Mobile/Tablet Drawer Sidebar */}
        <DashboardMobileSidebar
          open={mobileOpen}
          onOpenChange={setMobileOpen}
          userRole={role}
        />

        {/* Children Page Body (Only this area scrolls) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}