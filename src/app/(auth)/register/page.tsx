"use client";

import RegisterHero from "@/components/auth/RegisterHero";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="bg-white py-7 md:py-11 lg:py-14">
      <div className="flex justify-center items-center px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:gap-14 w-full max-w-sm sm:max-w-148 md:max-w-152 lg:max-w-212 mx-auto items-center">
          
          {/* Left Side: Interactive Registration Form */}
          <div className="w-full h-full">
            <RegisterForm />
          </div>

          {/* Right Side: Split Image Cover Banner */}
          <div className="hidden sm:block w-full h-full">
            <RegisterHero />
          </div>

        </div>
      </div>
    </div>
  );
}
