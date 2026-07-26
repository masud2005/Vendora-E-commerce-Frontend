"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Key, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Field specific errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear all errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");

    let hasError = false;

    if (!name.trim()) {
      setNameError("Full name is required.");
      hasError = true;
    }
    if (!emailOrPhone.trim()) {
      setEmailError("Email or phone number is required.");
      hasError = true;
    }
    if (!password.trim()) {
      setPasswordError("Password is required.");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      hasError = true;
    }
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm password is required.");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      hasError = true;
    }
    if (!agreeTerms) {
      setTermsError("You must agree to the terms.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    // Simulate API registration request
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully!");
      // Reset form fields
      setName("");
      setEmailOrPhone("");
      setPassword("");
      setConfirmPassword("");
      setAgreeTerms(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm sm:w-72 lg:w-96 sm:h-120 lg:h-150 mx-auto flex flex-col justify-center px-4 sm:px-0">
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-700 tracking-tight leading-tight">
          Create Account
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5 leading-tight">
          Join the Vendora marketplace to start shopping and selling today.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-4 lg:mt-6 flex flex-col gap-2.5 lg:gap-3.5">
        
        {/* Full Name Field */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 select-none">
            Full Name
          </label>
          <div className={`relative flex items-center border rounded px-3 transition-all focus-within:ring-2 ${
            nameError 
              ? "border-brand-semantic-400  focus-within:ring-brand-semantic-50/50" 
              : "focus-within:border-brand-primary-600 focus-within:bg-white focus-within:ring-brand-primary-100"
          }`}>
            <User className="size-3.5 lg:size-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError("");
              }}
              placeholder="Enter your full name"
              className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-xs lg:text-sm text-gray-700 outline-none"
            />
          </div>
          {nameError && (
            <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
              {nameError}
            </p>
          )}
        </div>

        {/* Email or Phone Number */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1 select-none">
            Email or Phone Number
          </label>
          <div className={`relative flex items-center border rounded px-3 transition-all focus-within:ring-2 ${
            emailError 
              ? "border-brand-semantic-400 focus-within:ring-brand-semantic-50/50" 
              : "border-gray-200 focus-within:bg-white focus-within:ring-brand-primary-100"
          }`}>
            <Mail className="size-3.5 lg:size-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => {
                setEmailOrPhone(e.target.value);
                if (emailError) setEmailError("");
              }}
              placeholder="example@email.com "
              className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-xs lg:text-sm  text-gray-700 outline-none"
            />
          </div>
          {emailError && (
            <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
              {emailError}
            </p>
          )}
        </div>

        {/* Password & Confirm Password (Side-by-Side Grid) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 select-none">
              Password
            </label>
            <div className={`relative flex items-center border rounded px-3 transition-all focus-within:ring-2 ${
              passwordError 
                ? "border-brand-semantic-400  focus-within:ring-brand-semantic-50/50" 
                : "border-gray-200 focus-within:bg-white focus-within:ring-brand-primary-100"
            }`}>
              <Lock className="size-3.5 lg:size-4 text-gray-400 mr-2 shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError("");
                }}
                placeholder="Min. 8 chars"
                className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-xs lg:text-sm text-gray-700 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer ml-1 focus:outline-none shrink-0"
              >
                {showPassword ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
              </button>
            </div>
            {passwordError && (
              <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
                {passwordError}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 select-none">
              Confirm Password
            </label>
            <div className={`relative flex items-center border rounded px-3 transition-all focus-within:ring-2 ${
              confirmPasswordError 
                ? "border-brand-semantic-400  focus-within:ring-brand-semantic-50/50" 
                : "border-gray-200 focus-within:bg-white focus-within:ring-brand-primary-100"
            }`}>
              <Lock className="size-3.5 lg:size-4 text-gray-400 mr-2 shrink-0" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (confirmPasswordError) setConfirmPasswordError("");
                }}
                placeholder="Repeat password"
                className="w-full bg-transparent border-0 py-1.5 lg:py-2 text-xs lg:text-sm text-gray-700 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer ml-1 focus:outline-none shrink-0"
              >
                {showConfirmPassword ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
              </button>
            </div>
            {confirmPasswordError && (
              <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-0.5 select-none">
                {confirmPasswordError}
              </p>
            )}
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex flex-col">
          <label className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-500 font-medium my-1 select-none cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (termsError) setTermsError("");
              }}
              className="size-4 rounded border-gray-300 text-brand-primary-600 focus:ring-brand-primary-500 mt-0.5 cursor-pointer"
            />
            <span>
              I agree to the{" "}
              <a href="/terms" className="text-brand-primary-600 font-bold hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-brand-primary-600 font-bold hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {termsError && (
            <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold select-none">
              {termsError}
            </p>
          )}
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-primary-800 hover:bg-brand-primary-900 text-white font-bold w-full py-2.5 rounded text-sm md:text-base transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center active:translate-y-px mt-1"
        >
          {loading ? "Registering..." : "Register Now"}
        </button>

      </form>

      {/* Or Divider */}
      <div className="flex items-center gap-4 my-2.5 lg:my-3.5 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest select-none">
        <div className="flex-1 border-b border-gray-200"></div>
        <span>Or continue with</span>
        <div className="flex-1 border-b border-gray-200"></div>
      </div>

      {/* Social Register Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {/* Google Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 border border-gray-200 rounded py-2 lg:py-2.5 hover:bg-gray-50 transition-colors duration-150 cursor-pointer text-xs sm:text-sm font-bold text-gray-700 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="size-4 shrink-0">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Google</span>
        </button>

        {/* Facebook Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 border border-gray-200 rounded py-2 lg:py-2.5 hover:bg-gray-50 transition-colors duration-150 cursor-pointer text-xs sm:text-sm font-bold text-gray-700 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="size-4 shrink-0 fill-[#1877F2]">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span>Facebook</span>
        </button>
      </div>

      {/* Login Promo */}
      <p className="text-center text-xs sm:text-sm text-gray-500 font-medium mt-3.5">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-brand-primary-600 font-bold hover:underline transition-colors"
        >
          Log In
        </a>
      </p>
    </div>
  );
}
