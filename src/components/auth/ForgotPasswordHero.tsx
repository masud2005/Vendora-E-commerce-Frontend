"use client";

export default function ForgotPasswordHero() {
  return (
    <div className="relative rounded overflow-hidden border border-gray-150 bg-white shadow-xs sm:w-72 lg:w-96 sm:h-120 lg:h-150">
      {/* Real Image to prevent background zoom/crop */}
      <img
        src="/images/forgot-pass-bg.png?v=2"
        alt="Secure Access"
        className="w-full h-full object-fill block"
      />
    </div>
  );
}
