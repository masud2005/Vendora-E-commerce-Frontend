"use client";

import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { Laptop, Leaf, Watch, Star, SlidersHorizontal, ArrowUpRight, ArrowDownRight } from "lucide-react";

const performanceSellers = [
  {
    name: "TechNova Solutions",
    id: "TN-92341",
    sales: "$842,120",
    growth: "+24.3%",
    isPositive: true,
    score: "4.92",
    status: "ELITE",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-250",
    icon: Laptop,
    bgIcon: "bg-blue-50 text-blue-600"
  },
  {
    name: "GreenLeaf Organic",
    id: "GL-11029",
    sales: "$612,480",
    growth: "+18.7%",
    isPositive: true,
    score: "4.85",
    status: "ELITE",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-250",
    icon: Leaf,
    bgIcon: "bg-emerald-50 text-emerald-600"
  },
  {
    name: "Zenith Horology",
    id: "ZH-55512",
    sales: "$498,380",
    growth: "-4.2%",
    isPositive: false,
    score: "4.71",
    status: "VERIFIED",
    statusStyle: "bg-blue-50 text-[#0F4C81] border-blue-200",
    icon: Watch,
    bgIcon: "bg-teal-50 text-teal-600"
  },
  {
    name: "ElectroMart Global",
    id: "EM-88421",
    sales: "$384,200",
    growth: "+14.5%",
    isPositive: true,
    score: "4.68",
    status: "VERIFIED",
    statusStyle: "bg-blue-50 text-[#0F4C81] border-blue-200",
    icon: Laptop,
    bgIcon: "bg-blue-50 text-blue-600"
  },
  {
    name: "Vintage Craft Co.",
    id: "VC-10029",
    sales: "$295,400",
    growth: "+9.2%",
    isPositive: true,
    score: "4.55",
    status: "VERIFIED",
    statusStyle: "bg-blue-50 text-[#0F4C81] border-blue-200",
    icon: Leaf,
    bgIcon: "bg-amber-50 text-amber-600"
  },
  {
    name: "Aura Home Styles",
    id: "AH-90482",
    sales: "$184,290",
    growth: "-1.8%",
    isPositive: false,
    score: "4.32",
    status: "STANDARD",
    statusStyle: "bg-gray-50 text-gray-600 border-gray-250",
    icon: Laptop,
    bgIcon: "bg-blue-50 text-blue-600"
  },
  {
    name: "Urban Wear Hub",
    id: "UW-11824",
    sales: "$142,500",
    growth: "+31.2%",
    isPositive: true,
    score: "4.89",
    status: "ELITE",
    statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-250",
    icon: Leaf,
    bgIcon: "bg-purple-50 text-purple-600"
  }
];

export default function TopPerformingSellers() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 shadow-3xs text-left select-none space-y-4">
      
      {/* Table Header Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3.5">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
            Top Performing Sellers
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
            Ranked by revenue velocity and fulfillment score.
          </p>
        </div>

        {/* Dropdown Filters */}
        <div className="flex items-center gap-2 text-xs select-none">
          <select 
            onChange={() => toast.success("Filtering performance by category...")}
            className="bg-white border border-gray-200 rounded px-2.5 py-1 text-gray-600 font-semibold focus:outline-none cursor-pointer"
          >
            <option>Filter by Category</option>
            <option>Electronics</option>
            <option>Home Decor</option>
            <option>Fashion</option>
          </select>
          <button 
            onClick={() => toast.success("Opening advanced filter drawer...")}
            className="p-1.5 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded cursor-pointer transition-colors"
            title="Advanced Filters"
          >
            <SlidersHorizontal className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Table wrapper with custom scrollbar */}
      <div className="overflow-x-auto w-full custom-scrollbar pb-1.5">
        <table className="w-full text-xs text-left min-w-[620px]">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-150 bg-gray-50/50">
              <th className="py-2.5 px-3">SELLER IDENTITY</th>
              <th className="py-2.5 px-3">TOTAL SALES</th>
              <th className="py-2.5 px-3">GROWTH</th>
              <th className="py-2.5 px-3">SCORE</th>
              <th className="py-2.5 px-3">STATUS</th>
              <th className="py-2.5 px-3 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
            {performanceSellers.map((row, idx) => {
              const Icon = row.icon;
              return (
                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                  
                  {/* Seller Identity block */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <span className={`p-2 rounded-lg border border-gray-100 shrink-0 ${row.bgIcon}`}>
                        <Icon className="size-4" />
                      </span>
                      <div className="text-left leading-none space-y-1">
                        <h4 className="font-extrabold text-gray-900">{row.name}</h4>
                        <span className="text-[9px] text-gray-400 font-bold block">ID: {row.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Total Sales */}
                  <td className="py-3.5 px-3 whitespace-nowrap font-black text-gray-950">
                    {row.sales}
                  </td>

                  {/* Growth status */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-0.5 text-[10px] font-black ${
                      row.isPositive ? "text-emerald-700" : "text-rose-600"
                    }`}>
                      {row.isPositive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                      <span>{row.growth}</span>
                    </span>
                  </td>

                  {/* Rating Score */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-900 font-black">{row.score}</span>
                    </div>
                  </td>

                  {/* Status Badges */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold border uppercase tracking-wider select-none ${row.statusStyle}`}>
                      {row.status}
                    </span>
                  </td>

                  {/* Action Link to profile detail page */}
                  <td className="py-3.5 px-3 whitespace-nowrap text-right">
                    <Link
                      href={`/admin/sellerMangement/${row.id}`}
                      className="text-xs font-black text-[#0F4C81] hover:underline cursor-pointer transition-colors"
                    >
                      View Details
                    </Link>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
