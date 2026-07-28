"use client";

import React from "react";
import CommandHeader from "@/components/dashboard/admin/CommandHeader";
import AdminStats from "@/components/dashboard/admin/AdminStats";
import RevenueTrends from "@/components/dashboard/admin/RevenueTrends";
import SystemAlerts from "@/components/dashboard/admin/SystemAlerts";
import ActiveSessions from "@/components/dashboard/admin/ActiveSessions";
import TopSellers from "@/components/dashboard/admin/TopSellers";
import RecentActivity from "@/components/dashboard/admin/RecentActivity";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Command Center Header Area */}
      <CommandHeader timeRange="Last 30 Days" />

      {/* 2. KPI Stat Cards Row (5 Columns Grid) */}
      <AdminStats />

      {/* 3. Midsection: Interactive Recharts Graph and System Alerts Column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueTrends />
        
        {/* Right Stack: Alerts & Active Sessions */}
        <div className="space-y-6 flex flex-col justify-between">
          <SystemAlerts />
          <ActiveSessions />
        </div>
      </div>

      {/* 4. Bottom Section: Top Sellers list and Recent Platform Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopSellers />
        <RecentActivity />
      </div>

    </div>
  );
}
