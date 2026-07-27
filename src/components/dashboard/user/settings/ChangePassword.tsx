"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    toast.success("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-white border border-gray-200 rounded p-6 shadow-2xs">
      {/* Title Header */}
      <div className="pb-5 border-b border-gray-200">
        <h2 className="text-base md:text-lg font-bold text-gray-900 leading-none">
          Change Password
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1.5 font-medium">
          Update your password to keep your account secure.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 mt-6 text-left max-w-2xl">
        
        {/* Current Password */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-medium text-gray-700 block">
            Current Password
          </label>
          <div className="relative rounded border border-gray-300 overflow-hidden focus-within:border-[#0F4C81] transition-all">
            <input
              type={showCurrent ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-3.5 pr-10 py-2 text-xs sm:text-sm text-gray-700 outline-none bg-white"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showCurrent ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-medium text-gray-700 block">
            New Password
          </label>
          <div className="relative rounded border border-gray-300 overflow-hidden focus-within:border-[#0F4C81] transition-all">
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3.5 pr-10 py-2 text-xs sm:text-sm text-gray-700 outline-none bg-white"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showNew ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-medium text-gray-700 block">
            Confirm New Password
          </label>
          <div className="relative rounded border border-gray-300 overflow-hidden focus-within:border-[#0F4C81] transition-all">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3.5 pr-10 py-2 text-xs sm:text-sm text-gray-700 outline-none bg-white"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {/* Password guidelines */}
        <div className="bg-blue-50/50 border border-blue-100 rounded p-4.5 flex gap-3 text-xs text-[#0F4C81] font-semibold leading-relaxed">
          <ShieldCheck className="size-5 shrink-0 text-[#0F4C81] mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold">Password Security Checklist</h4>
            <ul className="list-disc pl-4 space-y-0.5 text-gray-600 font-medium">
              <li>Must be at least 8 characters long.</li>
              <li>Include at least one uppercase letter (A-Z).</li>
              <li>Include at least one number (0-9) and symbol (e.g. @, #, $).</li>
            </ul>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="bg-[#0F4C81] hover:bg-[#0C447C] text-white font-bold py-2.5 px-6 rounded text-xs sm:text-sm flex items-center gap-2 shadow-xs active:translate-y-px transition-all cursor-pointer"
          >
            <Lock className="size-4" />
            <span>Update Password</span>
          </button>
        </div>

      </form>
    </div>
  );
}
