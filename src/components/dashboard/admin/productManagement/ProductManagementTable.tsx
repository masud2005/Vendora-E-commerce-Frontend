"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import toast from "react-hot-toast";
import { ChevronDown, Eye, PencilLine, CircleCheckBig, XCircle } from "lucide-react";
import { ADMIN_PRODUCTS } from "@/constants/adminProducts";

const sellerOptions = ["All", "TechTrend Solutions", "AudioPhile Global", "SmartHome Direct"];
const statusOptions = ["All", "PENDING", "APPROVED"];

export default function ProductManagementTable() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [sellerFilter, setSellerFilter] = useState("All");
  const [selectedIds, setSelectedIds] = useState<number[]>(ADMIN_PRODUCTS.map((product) => product.id));
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = ADMIN_PRODUCTS.filter((product) => {
    const matchesStatus = statusFilter === "All" || product.status === statusFilter;
    const matchesSeller = sellerFilter === "All" || product.seller === sellerFilter;
    return matchesStatus && matchesSeller;
  });

  const visibleSelectedCount = filteredProducts.filter((product) => selectedIds.includes(product.id)).length;
  const allVisibleSelected = filteredProducts.length > 0 && filteredProducts.every((product) => selectedIds.includes(product.id));
  const someVisibleSelected = visibleSelectedCount > 0 && !allVisibleSelected;

  const toggleProduct = (productId: number) => {
    setSelectedIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const toggleAllVisible = () => {
    setSelectedIds((current) => {
      if (allVisibleSelected) {
        return current.filter((id) => !filteredProducts.some((product) => product.id === id));
      }

      const nextIds = new Set(current);
      filteredProducts.forEach((product) => nextIds.add(product.id));
      return Array.from(nextIds);
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    toast(`Navigating to page ${page}`);
  };

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-3xs select-none text-left">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-45">
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="w-full appearance-none rounded border border-gray-300 bg-white px-3 py-2 pr-9 text-sm font-medium text-gray-700 shadow-2xs outline-none transition-colors focus:border-[#0F4C81]"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  Status: {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="relative min-w-45">
            <select
              value={sellerFilter}
              onChange={(event) => setSellerFilter(event.target.value)}
              className="w-full appearance-none rounded border border-gray-300 bg-white px-3 py-2 pr-9 text-sm font-medium text-gray-700 shadow-2xs outline-none transition-colors focus:border-[#0F4C81]"
            >
              {sellerOptions.map((option) => (
                <option key={option} value={option}>
                  Seller: {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="text-xs sm:text-sm font-medium text-gray-500">
          Showing 1-10 of 124 results
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 custom-scrollbar">
        <table className="min-w-245 w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-[#DDE5F7] text-[11px] font-bold uppercase tracking-wider text-gray-700">
              <th className="w-12 px-4 py-3">
                <label className="inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={allVisibleSelected}
                    ref={(input) => {
                      if (input) {
                        input.indeterminate = someVisibleSelected;
                      }
                    }}
                    onChange={toggleAllVisible}
                    className="size-4 rounded border-gray-300 text-[#0F4C81] focus:ring-[#0F4C81]"
                    aria-label="Select all visible products"
                  />
                </label>
              </th>
              <th className="px-4 py-3">Product Details</th>
              <th className="px-4 py-3">Seller</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Moderation &amp; Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredProducts.map((product) => {
              const isSelected = selectedIds.includes(product.id);

              return (
                <tr key={product.id} className={`transition-colors ${isSelected ? "bg-blue-50/35" : "hover:bg-gray-50/50"}`}>
                  <td className="px-4 py-4 align-middle">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleProduct(product.id)}
                      className="size-4 rounded border-gray-300 text-[#0F4C81] focus:ring-[#0F4C81]"
                      aria-label={`Select ${product.title}`}
                    />
                  </td>
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
                    <button type="button" onClick={() => toast.success(`Opening seller profile for ${product.seller}`)} className="text-left hover:underline">
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
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between pt-2">
        <Pagination currentPage={currentPage} totalPages={13} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}