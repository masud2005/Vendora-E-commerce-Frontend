"use client";

import React from "react";
import BuyerHeader from "@/components/dashboard/admin/userManagement/BuyerHeader";
import BuyerStats from "@/components/dashboard/admin/userManagement/BuyerStats";
import BuyerTable from "@/components/dashboard/admin/userManagement/BuyerTable";

export default function BuyerManagementPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header with Breadcrumbs, Title, Filter, and Export buttons */}
      <BuyerHeader />

      {/* 2. Stat Cards Row */}
      <BuyerStats />

      {/* 3. Main Buyers Table */}
      <BuyerTable />

    </div>
  );
}
