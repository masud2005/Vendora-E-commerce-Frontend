"use client";

import React, { useState } from "react";
import { Ticket, Calendar, Tag, ShieldAlert, BadgePercent, ArrowLeft, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function CreateCouponPage() {
  const router = useRouter();

  // Form State
  const [couponCode, setCouponCode] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  
  const [discountType, setDiscountType] = useState("Percentage");
  const [discountValue, setDiscountValue] = useState("");
  
  const [minOrderValue, setMinOrderValue] = useState("");
  const [maxDiscountValue, setMaxDiscountValue] = useState("");
  const [totalUsageLimit, setTotalUsageLimit] = useState("");
  const [userUsageLimit, setUserUsageLimit] = useState("1");
  
  const [isActive, setIsActive] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [noExpiry, setNoExpiry] = useState(false);

  const [scope, setScope] = useState<"platform" | "sellers" | "categories">("platform");

  // Generate random coupon code helper
  const handleGenerateCode = () => {
    const prefixes = ["FALL", "DEAL", "MEGA", "SAVE", "WELCOME", "PROMO", "FESTIVE"];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNum = Math.floor(10 + Math.random() * 90); // 2 digit number
    const generated = `${randomPrefix}${randomNum}`;
    setCouponCode(generated);
    toast.success(`Generated Code: ${generated}`);
  };

  // Publish handle
  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) {
      toast.error("Coupon Code is required");
      return;
    }
    toast.success(`Coupon ${couponCode} published successfully across Vendora!`);
    router.push("/admin/marketing");
  };

  return (
    <div className="space-y-6 w-full pb-16 font-sans select-none text-left">
      
      {/* 1. Top Header Actions Bar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 pb-4 border-b border-gray-150">
        
        {/* Title and Breadcrumbs */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold mb-1.5">
            <Link href="/admin/marketing" className="hover:text-gray-600 transition-colors">MARKETING</Link>
            <span>&gt;</span>
            <span className="text-[#0F4C81] font-bold">Create New Coupon</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
            Configuration Terminal
          </h1>
          <p className="text-xs text-gray-400 font-semibold mt-1">
            Initialize a new promotional instrument across the Vendora ecosystem.
          </p>
        </div>

        {/* Buttons Group */}
        <div className="flex items-center gap-3 shrink-0 self-start xl:self-auto text-xs font-semibold select-none">
          <Link
            href="/admin/marketing"
            className="flex items-center justify-center border border-gray-250 bg-white hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-4.5 rounded-lg transition-colors cursor-pointer"
          >
            Discard
          </Link>
          
          <button
            onClick={() => {
              toast.success("Coupon saved as draft");
              router.push("/admin/marketing");
            }}
            className="flex items-center justify-center border border-blue-200 text-[#0F4C81] hover:bg-blue-50 bg-white font-bold py-2.5 px-4.5 rounded-lg transition-colors cursor-pointer"
          >
            Save as Draft
          </button>

          <button
            onClick={handlePublish}
            className="flex items-center justify-center bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-5 rounded-lg transition-colors cursor-pointer shadow-3xs"
          >
            Publish Coupon
          </button>
        </div>

      </div>

      {/* 2. Grid Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Left Form columns (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card A: Coupon Basics */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 text-[#0F4C81] border-b border-gray-50 pb-3">
              <Ticket className="size-4.5" />
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                Coupon Basics
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Coupon Code Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Coupon Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="e.g., SUMMER50"
                    className="w-full pl-3 pr-24 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900 uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleGenerateCode}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-2.5 py-1.5 rounded text-[10px] transition-colors cursor-pointer border border-gray-200"
                  >
                    <RefreshCw className="size-3 text-gray-500" />
                    <span>Generate</span>
                  </button>
                </div>
                <span className="text-[9px] text-gray-400 font-bold block pt-0.5">
                  Must be unique and between 5-12 alphanumeric characters.
                </span>
              </div>

              {/* Display Description */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Display Description
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description for customers"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900"
                />
              </div>
            </div>

            {/* Internal Notes */}
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                Internal Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Context for other administrators (not visible to users)..."
                className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900 h-20 resize-none"
              />
            </div>
          </div>

          {/* Card B: Discount Configuration */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 text-[#0F4C81] border-b border-gray-50 pb-3">
              <BadgePercent className="size-4.5" />
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                Discount Configuration
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Discount Type */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Discount Type
                </label>
                <select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-bold text-gray-900 cursor-pointer"
                >
                  <option>Percentage</option>
                  <option>Fixed Amount</option>
                </select>
              </div>

              {/* Discount Value */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Discount Value
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={discountValue}
                    onChange={(e) => setDiscountValue(e.target.value)}
                    placeholder="0"
                    className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                    {discountType === "Percentage" ? "%" : "$"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card C: Conditions & Limits */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 text-[#0F4C81] border-b border-gray-50 pb-3">
              <ShieldAlert className="size-4.5" />
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                Conditions & Limits
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Min Order Value */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Minimum Order Value
                </label>
                <input
                  type="text"
                  value={minOrderValue}
                  onChange={(e) => setMinOrderValue(e.target.value)}
                  placeholder="$0.00"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900"
                />
              </div>

              {/* Max Discount Value */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Maximum Discount Value
                </label>
                <input
                  type="text"
                  value={maxDiscountValue}
                  onChange={(e) => setMaxDiscountValue(e.target.value)}
                  placeholder="No limit"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900"
                />
              </div>

              {/* Total Usage Limit */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Total Usage Limit (System-wide)
                </label>
                <input
                  type="text"
                  value={totalUsageLimit}
                  onChange={(e) => setTotalUsageLimit(e.target.value)}
                  placeholder="e.g., 500"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900"
                />
              </div>

              {/* Usage Limit per user */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] text-gray-500 font-black uppercase tracking-wide">
                  Usage Limit per User
                </label>
                <input
                  type="text"
                  value={userUsageLimit}
                  onChange={(e) => setUserUsageLimit(e.target.value)}
                  placeholder="1"
                  className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-900"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Panel Config blocks (1/3 width) */}
        <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
          
          {/* Card D: Validity Period */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <div className="flex items-center gap-2 text-[#0F4C81]">
                <Calendar className="size-4.5" />
                <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider">
                  Validity Period
                </h3>
              </div>

              {/* Active Toggle Switch */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsActive(!isActive)}
                  className={`relative inline-flex h-4.5 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isActive ? "bg-[#0F4C81]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block size-3.5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      isActive ? "translate-x-3.5" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-[9px] font-black text-gray-500 uppercase">Active</span>
              </div>
            </div>

            {/* Start Date */}
            <div className="space-y-1.5 text-left">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-wide">
                Start Date & Time
              </label>
              <input
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-800 cursor-pointer"
              />
            </div>

            {/* Expiry Date */}
            <div className="space-y-1.5 text-left">
              <div className="flex items-center justify-between">
                <label className="text-[9px] text-gray-500 font-black uppercase tracking-wide">
                  Expiry Date & Time
                </label>
                <label className="flex items-center gap-1 text-[9px] text-gray-500 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={noExpiry}
                    onChange={(e) => setNoExpiry(e.target.checked)}
                    className="rounded text-[#0F4C81]"
                  />
                  <span>No Expiry</span>
                </label>
              </div>
              <input
                type="datetime-local"
                value={endDate}
                disabled={noExpiry}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded text-xs bg-white focus:outline-none focus:border-[#0F4C81] font-semibold text-gray-800 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Card E: Targeting Scope */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 text-[#0F4C81] border-b border-gray-50 pb-3">
              <Tag className="size-4.5" />
              <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider">
                Targeting Scope
              </h3>
            </div>

            <div className="space-y-2.5">
              {/* Option 1: Platform-wide */}
              <div
                onClick={() => setScope("platform")}
                className={`p-3 rounded border cursor-pointer transition-all flex items-start gap-2.5 text-left select-none ${
                  scope === "platform"
                    ? "border-[#0F4C81] bg-blue-50/30"
                    : "border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                <input
                  type="radio"
                  name="scope_target"
                  checked={scope === "platform"}
                  onChange={() => setScope("platform")}
                  className="mt-0.5 text-[#0F4C81]"
                />
                <div className="leading-none space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900">Platform-wide</h4>
                  <p className="text-[9px] text-gray-400 font-semibold">Valid for all sellers and categories.</p>
                </div>
              </div>

              {/* Option 2: Specific Sellers */}
              <div
                onClick={() => setScope("sellers")}
                className={`p-3 rounded border cursor-pointer transition-all flex items-start gap-2.5 text-left select-none ${
                  scope === "sellers"
                    ? "border-[#0F4C81] bg-blue-50/30"
                    : "border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                <input
                  type="radio"
                  name="scope_target"
                  checked={scope === "sellers"}
                  onChange={() => setScope("sellers")}
                  className="mt-0.5 text-[#0F4C81]"
                />
                <div className="leading-none space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900">Specific Sellers</h4>
                  <p className="text-[9px] text-gray-400 font-semibold">Whitelisting selected merchant accounts.</p>
                </div>
              </div>

              {/* Option 3: Specific Categories */}
              <div
                onClick={() => setScope("categories")}
                className={`p-3 rounded border cursor-pointer transition-all flex items-start gap-2.5 text-left select-none ${
                  scope === "categories"
                    ? "border-[#0F4C81] bg-blue-50/30"
                    : "border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                <input
                  type="radio"
                  name="scope_target"
                  checked={scope === "categories"}
                  onChange={() => setScope("categories")}
                  className="mt-0.5 text-[#0F4C81]"
                />
                <div className="leading-none space-y-1">
                  <h4 className="text-xs font-extrabold text-gray-900">Specific Categories</h4>
                  <p className="text-[9px] text-gray-400 font-semibold">Restrict to Fashion, Electronics, etc.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card F: Live Preview Ticket Card */}
          <div className="bg-[#0B3A60] rounded-xl p-5 shadow-3xs flex flex-col justify-between select-none">
            <h4 className="text-[10px] text-white/70 font-black tracking-widest uppercase text-left mb-3">
              Live Preview
            </h4>

            {/* Ticket Card Shape container */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-4 sm:p-5 text-white shadow-md flex items-center justify-between min-h-[130px] overflow-hidden select-none">
              
              {/* Cut-out circular dots matching the dark parent bg */}
              <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 size-5 rounded-full bg-[#0B3A60] z-20" />
              <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 size-5 rounded-full bg-[#0B3A60] z-20" />
              
              {/* Left Column (Details) */}
              <div className="flex-1 pr-3 text-left space-y-1.5 min-w-0">
                <h4 className="text-base sm:text-lg font-black tracking-wider truncate">
                  {couponCode || "WELCOME20"}
                </h4>
                <p className="text-[9px] sm:text-[10px] opacity-90 font-medium leading-tight line-clamp-2">
                  {description || "Get 20% off your first order on Vendora. Max discount $50."}
                </p>
                <div className="text-[8px] opacity-75 font-bold pt-1 uppercase">
                  Expires: {noExpiry ? "Never" : (endDate ? new Date(endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Dec 31, 2024")}
                </div>
              </div>

              {/* Dashed line */}
              <div className="h-16 border-l border-dashed border-white/30 shrink-0 mx-2" />

              {/* Right Column (Value badge) */}
              <div className="flex flex-col items-center justify-center shrink-0 pl-1 select-none">
                <span className="px-2 py-0.5 bg-white text-blue-700 text-[9px] sm:text-[10px] font-black rounded-full shadow-3xs uppercase tracking-wider text-center">
                  {discountType === "Percentage" ? `${discountValue || 20}% OFF` : `$${discountValue || 50} FLAT`}
                </span>
                <span className="text-[7px] sm:text-[8px] opacity-75 font-bold mt-1.5 tracking-wider uppercase truncate max-w-[70px]">
                  {couponCode || "WELCOME20"}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
