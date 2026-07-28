"use client";

import React from "react";
import SellerHeader from "@/components/dashboard/admin/sellers/SellerHeader";
import ApprovalQueue from "@/components/dashboard/admin/sellers/ApprovalQueue";
import SellerDirectory from "@/components/dashboard/admin/sellers/SellerDirectory";
import CommissionStructure from "@/components/dashboard/admin/sellers/CommissionStructure";

export default function SellerManagementPage() {
  return (
    <div className="space-y-6 w-full pb-12 font-sans select-none text-left">
      
      {/* 1. Header with Title, description, export buttons */}
      <SellerHeader />

      {/* 2. Midsection Layout: 2 Columns (Approval Queue left, Store Directory right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column (Approval Queue - 1/3 width) */}
        <div className="lg:col-span-1">
          <ApprovalQueue />
        </div>

        {/* Right Column (Seller Directory - 2/3 width) */}
        <div className="lg:col-span-2">
          <SellerDirectory />
        </div>
      </div>

      {/* 3. Bottom Panel: Global Commission & Fee Structure (Full width) */}
      <CommissionStructure />

    </div>
  );
}
