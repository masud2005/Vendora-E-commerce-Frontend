"use client";

import { useState, useRef, useEffect } from "react";
import { Check, Info, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";

export default function ForgotPasswordVerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "johndoe@example.com";

  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60); // 1 minutes 
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Count down timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const maskEmail = (emailStr: string) => {
    const [localPart, domain] = emailStr.split("@");
    if (!localPart || !domain) return emailStr;
    if (localPart.length <= 2) {
      return `${localPart[0]}***@${domain}`;
    }
    const firstChars = localPart.slice(0, 2);
    const lastChars = localPart.slice(-2);
    return `${firstChars}***${lastChars}@${domain}`;
  };

  const handleChange = (value: string, index: number) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Auto-advance focus to the next field
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Move focus back to the previous input field
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(60);
    toast.success("New verification code sent!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = code.join("");

    if (otpString.length < 6) {
      toast.error("Please enter the complete 6-digit code.");
      return;
    }

    setLoading(true);

    // Simulate OTP verification request
    setTimeout(() => {
      setLoading(false);
      toast.success("Code verified successfully!");
      // Redirect to the Reset Password step
      router.push(`/forgot-password/reset?email=${encodeURIComponent(email)}`);
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm sm:w-72 lg:w-96 mx-auto">
      {/* Card Box container */}
      <div className="bg-white border border-gray-200 rounded shadow-xs sm:w-72 lg:w-96 p-5 sm:p-6 lg:p-8 flex flex-col gap-4 lg:gap-5">
        
        {/* Step Progress Indicator */}
        <div className="relative flex items-center justify-between w-full px-2 select-none">
          {/* Background Connector Lines */}
          <div className="absolute left-6 right-6 top-2.5 h-0.5 bg-gray-200 z-0">
            {/* Active Blue Line for step 1-2 */}
            <div className="w-1/2 h-full bg-brand-primary-600"></div>
          </div>

          {/* Step 1: Identify (Completed) */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full bg-brand-primary-600 border border-brand-primary-600 flex items-center justify-center">
              <Check className="size-3 text-white stroke-[3.5]" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-1">Identify</span>
          </div>

          {/* Step 2: Verify (Active) */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full border-2 border-brand-primary-600 bg-white flex items-center justify-center">
              <span className="text-[10px] font-bold text-brand-primary-600">2</span>
            </div>
            <span className="text-[10px] font-bold text-brand-primary-600 mt-1">Verify</span>
          </div>

          {/* Step 3: Reset */}
          <div className="flex flex-col items-center relative z-10">
            <div className="size-5 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
              <span className="text-[10px] font-bold text-gray-400">3</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 mt-1">Reset</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-tight">
            Enter Verification Code
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1 leading-normal">
            We've sent a 6-digit code to <span className="font-bold text-gray-800">{maskEmail(email)}</span>. It will expire in <span className="font-bold text-gray-800">{formatTimer(timer)}</span>.
          </p>
        </div>

        {/* 6 Digit Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
            {code.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="size-9 sm:size-10 text-center text-base sm:text-lg font-bold border border-gray-200 rounded focus:outline-hidden bg-gray-50  transition-all"
              />
            ))}
          </div>

          {/* Lime/Neon Verify Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-primary-600 hover:bg-brand-primary-800 text-white font-black w-full py-2.5 rounded text-sm transition-colors duration-200 shadow-sm flex items-center justify-center gap-1 cursor-pointer active:translate-y-px mt-2 disabled:opacity-50"
          >
            <span>Verify</span>
            <ArrowRight className="size-4" />
          </button>
        </form>

        {/* Resend Link Section */}
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 font-medium">Didn't receive the code?</span>
          <button
            type="button"
            onClick={handleResend}
            disabled={timer > 0}
            className="font-bold text-brand-primary-600 hover:text-brand-primary-800 transition-colors cursor-pointer  disabled:pointer-events-none"
          >
            Resend Code
          </button>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-150"></div>

        {/* Help Center link */}
        <a
          href="/support"
          className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-brand-primary-600 transition-colors font-medium select-none"
        >
          <Info className="size-3.5 text-gray-400" />
          <span>Need help? Contact our support team.</span>
        </a>

      </div>
    </div>
  );
}
