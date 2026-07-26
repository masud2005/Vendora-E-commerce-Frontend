"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email or phone number is required.");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    // Simulate API Login request
    setTimeout(() => {
      setLoading(false);
      toast.success("Success! Signing in to your dashboard...");
      setEmail("");
      setPassword("");
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm sm:w-72 lg:w-96 sm:h-120 lg:h-150 mx-auto flex flex-col justify-center px-4 sm:px-0">
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
          Welcome Back
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5">
          Sign in to your Vendora account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-4 lg:mt-6 flex flex-col gap-3 lg:gap-4">
        
        {/* Email Field */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1 select-none">
            Email or Phone Number
          </label>
          <div className={`relative flex items-center border rounded px-3 transition-all focus-within:ring-2 ${
            emailError 
              ? "border-brand-semantic-400 focus-within:border-brand-semantic-400 focus-within:ring-brand-semantic-50/50" 
              : "border-gray-200 focus-within:border-brand-primary-600 focus-within:bg-white focus-within:ring-brand-primary-100"
          }`}>
            <Mail className="size-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              placeholder="name@example.com"
              className="w-full bg-transparent border-0 py-2 lg:py-2.5 text-sm text-gray-800 outline-none"
            />
          </div>
          {emailError && (
            <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-1 select-none">
              {emailError}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs sm:text-sm font-bold text-gray-700 select-none">
              Password
            </label>
            <a
              href="/forgot-password"
              className="text-xs font-bold text-brand-primary-600 hover:text-brand-primary-800 transition-colors"
            >
              Forgot Password?
            </a>
          </div>
          <div className={`relative flex items-center border rounded px-3 transition-all focus-within:ring-2 ${
            passwordError 
              ? "border-brand-semantic-400 focus-within:border-brand-semantic-400 focus-within:ring-brand-semantic-50/50" 
              : "border-gray-200 focus-within:border-brand-primary-600 focus-within:bg-white focus-within:ring-brand-primary-100"
          }`}>
            <Lock className="size-4 text-gray-400 mr-2 shrink-0" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              className="w-full bg-transparent border-0 py-2 lg:py-2.5 text-sm text-gray-800 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2 focus:outline-none shrink-0"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          {passwordError && (
            <p className="text-[10px] sm:text-xs text-brand-semantic-600 font-bold mt-1 select-none">
              {passwordError}
            </p>
          )}
        </div>


        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-primary-800 hover:bg-brand-primary-900 text-white font-bold w-full py-2.5 lg:py-3 rounded text-sm sm:text-base transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center active:translate-y-px"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

      </form>

      {/* Or Divider */}
      <div className="flex items-center gap-4 my-3 lg:my-5 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest select-none">
        <div className="flex-1 border-b border-gray-200"></div>
        <span>Or continue with</span>
        <div className="flex-1 border-b border-gray-200"></div>
      </div>

      {/* Social Login Buttons */}
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

      {/* SignUp Promo */}
      <p className="text-center text-xs sm:text-sm text-gray-500 font-medium mt-3 lg:mt-4">
        Don't have an account?{" "}
        <a
          href="/register"
          className="text-brand-primary-600 font-bold hover:underline transition-colors"
        >
          Register Now
        </a>
      </p>

      {/* Secure Badge */}
      <div className="flex items-center justify-center gap-1.5 mt-4 lg:mt-6 text-[10px] font-bold text-gray-400 tracking-wider uppercase select-none">
        <ShieldCheck className="size-4 text-gray-400 stroke-[2.2]" />
        <span>Secured by reCAPTCHA</span>
      </div>
    </div>
  );
}
