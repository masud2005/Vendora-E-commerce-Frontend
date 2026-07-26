"use client";

import { useState } from "react";
import { Mail, ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Email or phone number is required to find account.");
      return;
    }

    setLoading(true);

    // Simulate recovery request
    setTimeout(() => {
      setLoading(false);
      toast.success("Recovery code sent successfully!");
      router.push(`/verify?email=${encodeURIComponent(email)}`);
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm sm:w-72 lg:w-96 mx-auto ">
      {/* Card Box container */}
      <div className="bg-white border flex  border-gray-200 rounded shadow-xs sm:w-72 lg:w-96 p-5 sm:p-6 lg:p-8  flex-col gap-4 lg:gap-5">

        {/* Step Progress Indicator */}
        <div className="relative flex items-center justify-between w-full px-2 select-none">
          {/* Background Connector Line */}
          <div className="absolute left-6 right-6 top-2.5 h-0.5 bg-gray-200 z-0"></div>

          {/* Step 1: Identify */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full border-2 border-brand-primary-600 bg-white flex items-center justify-center">
              <div className="size-2 rounded-full bg-brand-primary-600"></div>
            </div>
            <span className="text-[10px] font-bold text-brand-primary-600 mt-1">Identify</span>
          </div>

          {/* Step 2: Verify */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center"></div>
            <span className="text-[10px] font-bold text-gray-400 mt-1">Verify</span>
          </div>

          {/* Step 3: Reset */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center"></div>
            <span className="text-[10px] font-bold text-gray-400 mt-1">Reset</span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl  md:text-2xl font-black text-gray-950 tracking-tight leading-tight">
            Forgot Password?
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1 leading-tight">
            Enter your email or phone number to find your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {/* Email Field */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 select-none">
              Email or Phone Number
            </label>
            <div className={`relative flex items-center border rounded px-3 transition-all  ${emailError
                ? "border-brand-semantic-400 focus-within:border-brand-semantic-400"
                : "border-gray-200 focus-within:border-brand-primary-600 focus-within:bg-white"
              }`}>
              <Mail className="size-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                placeholder="e.g. user@example.com"
                className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-sm text-gray-800 outline-none"
              />
            </div>
            {emailError && (
              <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
                {emailError}
              </p>
            )}
          </div>

          {/* Find Account Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-primary-800 hover:bg-brand-primary-900 text-white font-bold w-full py-2.5 rounded text-sm transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center active:translate-y-px"
          >
            {loading ? "Searching..." : "Find Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="border-b border-gray-150"></div>

        {/* Back to Login Link */}
        <a
          href="/login"
          className="flex items-center justify-center text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-primary-600 transition-colors select-none"
        >
          <ArrowLeft className="size-4 mr-1.5" />
          <span>Back to Login</span>
        </a>

      </div>

      {/* Footer Badges (outside/below the card box) */}
      <div className="flex items-center justify-center gap-6 mt-4 text-[10px] font-bold text-gray-400 tracking-wider uppercase select-none">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-gray-400 stroke-[2.2]" />
          <span>Secure Verification</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock className="size-3.5 text-gray-400 stroke-[2.2]" />
          <span>Data Protected</span>
        </div>
      </div>
    </div>
  );
}
