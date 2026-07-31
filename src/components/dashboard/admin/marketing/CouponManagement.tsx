"use client";

import React, { useState } from "react";
import { Globe, Store, Pencil, Trash2, Plus } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

interface Coupon {
  code: string;
  codeBg: string;
  type: string;
  typeSub: string;
  scope: string;
  scopeSub: string;
  scopeType: "global" | "vendor";
  used: number;
  total: number;
  expiry: string;
  status: "Active" | "Scheduled";
}

const initialCoupons: Coupon[] = [
  {
    code: "SUMMER24",
    codeBg: "bg-blue-50 text-blue-700 border border-blue-150",
    type: "25% OFF",
    typeSub: "Percentage",
    scope: "Platform-wide",
    scopeSub: "All Categories",
    scopeType: "global",
    used: 650,
    total: 1000,
    expiry: "Aug 30, 2024",
    status: "Active"
  },
  {
    code: "VENDOR50",
    codeBg: "bg-amber-50 text-amber-700 border border-amber-150",
    type: "$50.00 FLAT",
    typeSub: "Fixed Amount",
    scope: "ModernHome Inc.",
    scopeSub: "Home & Decor",
    scopeType: "vendor",
    used: 12,
    total: 100,
    expiry: "Sep 15, 2024",
    status: "Scheduled"
  }
];

export default function CouponManagement() {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [scopeFilter, setScopeFilter] = useState<"all" | "global" | "vendor">("all");

  // Toggle status
  const handleToggleStatus = (code: string) => {
    setCoupons((prev) =>
      prev.map((c) => {
        if (c.code === code) {
          const nextStatus = c.status === "Active" ? "Scheduled" : "Active";
          toast.success(`Coupon ${code} status changed to ${nextStatus}`);
          return { ...c, status: nextStatus };
        }
        return c;
      })
    );
  };

  // Delete coupon
  const handleDeleteCoupon = (code: string) => {
    setCoupons((prev) => prev.filter((c) => c.code !== code));
    toast.success(`Coupon ${code} deleted successfully`);
  };

  // Filter logic
  const filteredCoupons = coupons.filter((c) => {
    if (scopeFilter === "global") return c.scopeType === "global";
    if (scopeFilter === "vendor") return c.scopeType === "vendor";
    return true;
  });

  return (
    <div className="bg-white border border-gray-255 rounded-xl p-5 sm:p-6 shadow-3xs text-left select-none space-y-5">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Coupon Management
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Manage global platform-wide and seller-specific promotional codes
          </p>
        </div>

        {/* Filters Select */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto select-none">
          <select
            value={scopeFilter}
            onChange={(e) => setScopeFilter(e.target.value as any)}
            className="bg-white border border-gray-200 hover:border-gray-300 text-gray-655 text-xs font-bold py-1.5 px-3 rounded-lg focus:outline-none cursor-pointer transition-colors"
          >
            <option value="all">All Scopes</option>
            <option value="global">Platform-wide</option>
            <option value="vendor">Seller-specific</option>
          </select>

          <Link
            href="/admin/marketing/create"
            className="flex items-center justify-center gap-1.5 bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-1.5 px-3.5 rounded-lg text-xs transition-colors shadow-3xs cursor-pointer h-[32px]"
          >
            <Plus className="size-3.5" />
            <span>Create Coupon</span>
          </Link>
        </div>
      </div>

      {/* Table grid layout wrapper */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1">
        <table className="w-full text-xs text-left min-w-[850px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-450 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-3 px-3">Coupon Code</th>
              <th className="py-3 px-3">Type & Value</th>
              <th className="py-3 px-3">Scope</th>
              <th className="py-3 px-3">Usage Limit</th>
              <th className="py-3 px-3">Expiry</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
            {filteredCoupons.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-400 font-bold text-xs">
                  No coupons found matching selection criteria.
                </td>
              </tr>
            ) : (
              filteredCoupons.map((row, idx) => {
                const usagePercent = Math.min((row.used / row.total) * 100, 100);
                const isGlobal = row.scopeType === "global";
                
                return (
                  <tr key={idx} className="hover:bg-gray-50/20 transition-colors">
                    
                    {/* Code Badge */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded text-xs font-black tracking-wider ${row.codeBg}`}>
                        {row.code}
                      </span>
                    </td>

                    {/* Value details */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="text-left leading-none space-y-1">
                        <h4 className="font-extrabold text-gray-900">{row.type}</h4>
                        <span className="text-[9px] text-gray-400 font-bold block">{row.typeSub}</span>
                      </div>
                    </td>

                    {/* Scope details */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-left">
                        <span className={`p-1.5 rounded shrink-0 ${isGlobal ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"}`}>
                          {isGlobal ? <Globe className="size-4" /> : <Store className="size-4" />}
                        </span>
                        <div className="leading-none space-y-1">
                          <h4 className="font-extrabold text-gray-900 truncate max-w-[150px]">{row.scope}</h4>
                          <span className="text-[9px] text-gray-400 font-bold block">{row.scopeSub}</span>
                        </div>
                      </div>
                    </td>

                    {/* Usage progress bar */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="w-36 space-y-1.5">
                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isGlobal ? "bg-blue-600" : "bg-amber-600"}`} 
                            style={{ width: `${usagePercent}%` }}
                          />
                        </div>
                        <span className="text-[9px] text-gray-400 font-bold block">
                          {row.used} / {row.total} used
                        </span>
                      </div>
                    </td>

                    {/* Expiry Date */}
                    <td className="py-3.5 px-3 whitespace-nowrap text-gray-600 font-bold">
                      {row.expiry}
                    </td>

                    {/* Toggle Status switch */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleStatus(row.code)}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            row.status === "Active" ? "bg-emerald-500" : "bg-gray-250"
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                              row.status === "Active" ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className={`text-[10px] font-black ${row.status === "Active" ? "text-emerald-600" : "text-gray-450"}`}>
                          {row.status}
                        </span>
                      </div>
                    </td>

                    {/* Action buttons */}
                    <td className="py-3.5 px-3 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button 
                          onClick={() => toast.success(`Opening edit modal for ${row.code}`)}
                          className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors cursor-pointer"
                        >
                          <Pencil className="size-3.5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteCoupon(row.code)}
                          className="p-1.5 text-gray-405 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-semibold text-gray-400 pt-2 select-none border-t border-gray-50">
        <span>Showing {filteredCoupons.length} of 48 active coupons</span>

        <div className="flex items-center gap-1.5">
          <button className="h-7 px-2 rounded border border-gray-200 bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-40 cursor-pointer text-xs" disabled>
            Previous
          </button>
          <span className="h-7 w-7 flex items-center justify-center bg-[#0F4C81] text-white font-bold rounded text-xs">
            1
          </span>
          <button className="h-7 w-7 flex items-center justify-center border border-gray-250 bg-white hover:bg-gray-50 text-gray-650 rounded text-xs cursor-pointer">
            2
          </button>
          <button className="h-7 px-2 rounded border border-gray-200 bg-white text-gray-650 hover:bg-gray-50 cursor-pointer text-xs">
            Next
          </button>
        </div>
      </div>

    </div>
  );
}
