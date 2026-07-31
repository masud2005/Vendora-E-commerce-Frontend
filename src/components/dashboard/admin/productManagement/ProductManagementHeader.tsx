"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { Download, Plus, Upload } from "lucide-react";

export default function ProductManagementHeader() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 text-left select-none">
      <div className="space-y-1.5">
        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
          Product Management
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-medium max-w-2xl">
          Review seller products, manage hierarchies, and oversee brand approvals.
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.22em]">
          <Link href="/admin" className="hover:text-gray-600 transition-colors">
            Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-[#0F4C81]">Product Management</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => toast.success("Opening bulk import flow...")}
            className="inline-flex items-center justify-center gap-2 rounded border border-[#0F4C81] bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#0F4C81] shadow-2xs transition-colors hover:bg-blue-50 cursor-pointer"
          >
            <Upload className="size-4" />
            <span>Bulk Import</span>
          </button>
          <button
            type="button"
            onClick={() => toast.success("Preparing product export as CSV...")}
            className="inline-flex items-center justify-center gap-2 rounded border border-[#0F4C81] bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#0F4C81] shadow-2xs transition-colors hover:bg-blue-50 cursor-pointer"
          >
            <Download className="size-4" />
            <span>Export CSV</span>
          </button>
          <Link
            href="/admin/productManagement/create"
            className="inline-flex items-center justify-center gap-2 rounded bg-[#0F4C81] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-2xs transition-colors hover:bg-[#0C447C] cursor-pointer"
          >
            <Plus className="size-4" />
            <span>Create Product</span>
          </Link>
        </div>
      </div>
    </div>
  );
}