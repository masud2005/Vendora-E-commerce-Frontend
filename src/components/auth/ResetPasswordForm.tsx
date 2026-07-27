"use client";

import { useState } from "react";
import { Check, RotateCcw, Lock, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "user@example.com";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dynamic Password Validation Checks
  const hasMinLength = password.length >= 8;
  const hasUpperAndNumber = /[A-Z]/.test(password) && /\d/.test(password);

  // Password Strength Calculation
  const getStrength = () => {
    if (!password) return { score: 0, label: "", color: "text-gray-400" };
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { score: 1, label: "Weak", color: "text-brand-semantic-600" };
    if (score <= 4) return { score: 2, label: "Medium", color: "text-brand-accent-200" };
    return { score: 4, label: "Strong", color: "text-teal-600" };
  };

  const strength = getStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setConfirmPasswordError("");

    let hasError = false;

    if (!password) {
      setPasswordError("Password is required.");
      hasError = true;
    } else if (!hasMinLength || !hasUpperAndNumber) {
      setPasswordError("Password must meet the security requirements.");
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    // Simulate reset request
    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset successfully! Please sign in.");
      router.push("/login");
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm sm:h-120 lg:h-150 mx-auto flex flex-col justify-center px-4 sm:px-0">
        
        {/* Step Progress Indicator */}
        <div className="relative flex items-center justify-between w-full  select-none">
          {/* Background Connector Lines (All Completed Blue) */}
          <div className="absolute left-6 right-6 top-2.5 h-0.5 bg-brand-primary-600 z-0"></div>

          {/* Step 1: Identify (Completed) */}
          <div className="flex flex-col items-center relative ">
            <div className="size-5 rounded-full bg-brand-primary-600 border border-brand-primary-600 flex items-center justify-center">
              <Check className="size-3 text-white stroke-[3.5]" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-1">Identify</span>
          </div>

          {/* Step 2: Verify (Completed) */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full bg-brand-primary-600 border border-brand-primary-600 flex items-center justify-center">
              <Check className="size-3 text-white stroke-[3.5]" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-1">Verify</span>
          </div>

          {/* Step 3: Reset (Active) */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full bg-brand-primary-600 border border-brand-primary-600 flex items-center justify-center">
              <RotateCcw className="size-2.5 text-white stroke-[3]" />
            </div>
            <span className="text-[10px] font-bold text-brand-primary-600 mt-1">Reset</span>
          </div>
        </div>

        {/* Title */}
        <div className="">
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-tight pt-5">
            Create New Password
          </h2>
          <p className="text-sm text-gray-500 font-medium mt-1 mb-2 ">
            Choose a strong password that you haven't used before.
          </p>
        </div>

        {/* Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* New Password */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 my-2 select-none">
              New Password
            </label>
            <div className={`relative flex items-center border rounded px-3 transition-all ${passwordError
                ? "border-brand-semantic-400 focus-within:border-brand-semantic-400"
                : "border-gray-200 focus-within:border-brand-primary-600 focus-within:bg-white"
              }`}>
              <Lock className="size-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
                placeholder="••••••••"
                className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-sm text-gray-800 outline-none"
              />
            </div>
            {passwordError && (
              <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
                {passwordError}
              </p>
            )}

            {/* Password Strength indicator bars */}
            {password && (
              <div className="flex items-center gap-2 mt-2 select-none">
                <div className="flex-1 flex gap-1">
                  <div className={`h-1 flex-1 rounded-sm ${strength.score >= 1 ? (strength.label === "Weak" ? "bg-brand-semantic-600" : strength.label === "Medium" ? "bg-brand-accent-200" : "bg-teal-600") : "bg-gray-200"}`}></div>
                  <div className={`h-1 flex-1 rounded-sm ${strength.score >= 2 ? (strength.label === "Medium" ? "bg-brand-accent-200" : "bg-teal-600") : "bg-gray-200"}`}></div>
                  <div className={`h-1 flex-1 rounded-sm ${strength.score >= 3 ? "bg-teal-600" : "bg-gray-200"}`}></div>
                  <div className={`h-1 flex-1 rounded-sm ${strength.score >= 4 ? "bg-teal-600" : "bg-gray-200"}`}></div>
                </div>
                <span className={`text-[10px] font-bold ${strength.color}`}>{strength.label}</span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 select-none">
              Confirm New Password
            </label>
            <div className={`relative flex items-center border rounded px-3 transition-all ${confirmPasswordError
                ? "border-brand-semantic-400 focus-within:border-brand-semantic-400"
                : "border-gray-200 focus-within:border-brand-primary-600 focus-within:bg-white"
              }`}>
              <ShieldCheck className="size-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (confirmPasswordError) setConfirmPasswordError("");
                }}
                placeholder="••••••••"
                className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-sm text-gray-800 outline-none"
              />
            </div>
            {confirmPasswordError && (
              <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
                {confirmPasswordError}
              </p>
            )}
          </div>

          {/* Requirements Checklist */}
          <div className="flex flex-col gap-1.5 mt-1 select-none">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold">
              <div className={`size-3.5 rounded-full flex items-center justify-center ${hasMinLength ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400"}`}>
                <Check className="size-2.5 stroke-[3]" />
              </div>
              <span className={hasMinLength ? "text-teal-700" : "text-gray-400"}>At least 8 characters long</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold">
              <div className={`size-3.5 rounded-full flex items-center justify-center ${hasUpperAndNumber ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-400"}`}>
                <Check className="size-2.5 stroke-[3]" />
              </div>
              <span className={hasUpperAndNumber ? "text-teal-700" : "text-gray-400"}>Includes 1 uppercase & 1 number</span>
            </div>
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-primary-800 hover:bg-brand-primary-900 text-white font-bold w-full py-2.5 rounded text-sm transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-px mt-2"
          >
            {loading ? "Resetting..." : "Reset Password"}
            <ArrowRight className="size-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="border-b border-gray-150"></div>

        {/* Back to Sign In Link */}
        <a
          href="/login"
          className="flex items-center justify-center text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-primary-600 transition-colors select-none mt-2"
        >
          <ArrowLeft className="size-4 mr-1.5" />
          <span>Back to Sign In</span>
        </a>

    </div>
  );
}
