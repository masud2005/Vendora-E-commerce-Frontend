"use client";

import AuthHero from "@/components/auth/AuthHero";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white py-6 sm:py-10 lg:py-14">
      <div className=" flex justify-center items-center px-2 md:px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:gap-14  w-full max-w-sm sm:max-w-148 md:max-w-152 lg:max-w-212 mx-auto items-center">
          
          {/* Left Side: Split Image Cover Banner */}
          <div className="hidden sm:block  w-full h-full">
            <AuthHero />
          </div>

          {/* Right Side: Interactive Login Form */}
          <div className="w-full h-full">
            <LoginForm />
          </div>

        </div>
      </div>
    </div>
  );
}
