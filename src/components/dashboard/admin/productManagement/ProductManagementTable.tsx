"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Pagination from "@/components/shared/Pagination";
import toast from "react-hot-toast";
import { ChevronDown, Eye, PencilLine, CircleCheckBig, XCircle, Search, Check } from "lucide-react";
import { ADMIN_PRODUCTS } from "@/constants/adminProducts";

const sellerOptions = ["All", "TechTrend Solutions", "AudioPhile Global", "SmartHome Direct"];
const statusOptions = ["All", "PENDING", "APPROVED"];

/* ── Reusable custom dropdown ── */
interface DropdownFilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function DropdownFilter({ label, value, options, onChange }: DropdownFilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const displayValue = value === "All" ? label : value;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium shadow-2xs transition-all duration-200 outline-none min-w-36
          ${open || value !== "All"
            ? "border-[#0F4C81] bg-[#0F4C81]/5 text-[#0F4C81]"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
          }`}
      >
        <span className="flex-1 text-left truncate">{displayValue}</span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Popup */}
      <div
        className={`absolute right-0 top-full z-50 mt-2 min-w-44 origin-top-right rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-200
          ${open ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"}`}
        style={{ transformOrigin: "top right" }}
      >
        <div className="p-1.5">
          {options.map((option) => {
            const isActive = value === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => { onChange(option); setOpen(false); }}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150
                  ${isActive
                    ? "bg-[#0F4C81]/8 text-[#0F4C81]"
                    : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <span>{option === "All" ? `All ${label}s` : option}</span>
                {isActive && <Check className="size-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Main Table ── */
export default function ProductManagementTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sellerFilter, setSellerFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = ADMIN_PRODUCTS.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.seller.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All" || product.status === statusFilter;
    const matchesSeller = sellerFilter === "All" || product.seller === sellerFilter;
    return matchesSearch && matchesStatus && matchesSeller;
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    toast(`Navigating to page ${page}`);
  };

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-3xs select-none text-left">

      {/* ── Toolbar ── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        {/* Left — Search */}
        <div className="relative w-full sm:max-w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search product or seller…"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm font-medium text-gray-700 placeholder:text-gray-400 shadow-2xs outline-none transition-all duration-200 focus:border-[#0F4C81] focus:bg-white focus:ring-2 focus:ring-[#0F4C81]/10"
          />
        </div>

        {/* Right — Filters */}
        <div className="flex items-center gap-2">
          <DropdownFilter
            label="Status"
            value={statusFilter}
            options={statusOptions}
            onChange={setStatusFilter}
          />
          <DropdownFilter
            label="Seller"
            value={sellerFilter}
            options={sellerOptions}
            onChange={setSellerFilter}
          />
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 custom-scrollbar">
        <table className="min-w-245 w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-[#DDE5F7] text-[11px] font-bold uppercase tracking-wider text-gray-700">
              <th className="px-4 py-3">Product Details</th>
              <th className="px-4 py-3">Seller</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Moderation &amp; Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-gray-400 font-medium">
                  No products match your search or filters.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className={`transition-colors duration-150 hover:bg-blue-50/40 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <td className="px-4 py-4 align-middle">
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={48}
                        height={48}
                        unoptimized
                        className="size-12 rounded border border-gray-200 object-cover shadow-3xs"
                      />
                      <div className="space-y-1">
                        <h3 className="max-w-55 truncate text-sm font-bold text-gray-900">
                          {product.title}
                        </h3>
                        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                          SKU: {product.sku}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 align-middle text-sm font-medium text-[#0F4C81]">
                    <button
                      type="button"
                      onClick={() => toast.success(`Opening seller profile for ${product.seller}`)}
                      className="text-left hover:underline"
                    >
                      {product.seller}
                    </button>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <div className="space-y-1 text-sm font-medium text-gray-700">
                      <span className="block">{product.category} &gt;</span>
                      <span className="block text-gray-500">{product.subcategory}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 align-middle text-sm font-bold text-gray-900">
                    {product.price}
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        product.status === "APPROVED"
                          ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border border-amber-200 bg-amber-50 text-amber-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        href={`/admin/productManagement/${product.id}`}
                        className="rounded p-1.5 text-[#0F4C81] transition-colors hover:bg-blue-50 cursor-pointer"
                        aria-label={`View ${product.title}`}
                      >
                        <Eye className="size-5" />
                      </Link>
                      <Link
                        href={`/admin/productManagement/${product.id}?mode=edit`}
                        className="rounded p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                        aria-label={`Edit ${product.title}`}
                      >
                        <PencilLine className="size-5" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => toast.success(`${product.title} approved`)}
                        className="rounded p-1.5 text-emerald-700 transition-colors hover:bg-emerald-50 cursor-pointer"
                        aria-label={`Approve ${product.title}`}
                      >
                        <CircleCheckBig className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toast.error(`${product.title} rejected`)}
                        className="rounded p-1.5 text-rose-600 transition-colors hover:bg-rose-50 cursor-pointer"
                        aria-label={`Reject ${product.title}`}
                      >
                        <XCircle className="size-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      <div className="flex items-center justify-between pt-2">
        <Pagination currentPage={currentPage} totalPages={13} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}