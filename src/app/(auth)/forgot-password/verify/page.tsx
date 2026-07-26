"use client";

import ForgotPasswordVerifyHero from "@/components/auth/ForgotPasswordVerifyHero";
import ForgotPasswordVerifyForm from "@/components/auth/VerifyForm";

export default function ForgotPasswordVerifyPage() {
  return (
    <div className="bg-[#F8FAFC] py-6 sm:py-10 lg:py-14">
      <div className="flex justify-center items-center px-4 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 w-full max-w-sm sm:max-w-160 md:max-w-172 lg:max-w-212 mx-auto items-center">

          {/* Left Side: Split Image Cover Banner */}
          <div className="hidden sm:block w-full h-full">
            <ForgotPasswordVerifyHero />
          </div>

          {/* Right Side: Interactive Password Recovery Form */}
          <div className="w-full h-full flex items-center justify-center">
            <ForgotPasswordVerifyForm />
          </div>

        </div>
      </div>
    </div>
  );
}
