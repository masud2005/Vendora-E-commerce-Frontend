"use client";

import ResetPasswordHero from "@/components/auth/ResetPasswordHero";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="bg-white py-6 sm:py-10 lg:py-14">
      <div className="flex justify-center items-center px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:gap-14 w-full max-w-sm sm:max-w-148 md:max-w-152 lg:max-w-212 mx-auto items-center">
          
          {/* Left Side: Split Image Cover Banner */}
          <div className="hidden sm:block w-full h-full">
            <ResetPasswordHero />
          </div>

          {/* Right Side: Interactive Password Reset Form */}
          <div className="w-full h-full flex items-center justify-center">
            <ResetPasswordForm />
          </div>

        </div>
      </div>
    </div>
  );
}
