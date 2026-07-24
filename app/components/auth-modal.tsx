"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface AuthModalProps {
  onLoginSuccess?: () => void;
}

export default function AuthModal({ onLoginSuccess }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="relative w-full max-w-5xl rounded-[36px] overflow-hidden shadow-[0_30px_90px_rgba(14,90,111,0.22)] border border-slate-200/80 grid md:grid-cols-12 min-h-[630px] my-4 font-sans backdrop-blur-2xl bg-[#f4f7f9]">
      
      {/* Ambient background glow effects */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent-orange/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* LEFT COLUMN: Visual Brand Panel */}
      <div className="md:col-span-5 relative hidden md:flex flex-col justify-between p-10 overflow-hidden bg-gradient-to-br from-[#0c4e61] via-[#0e5a6f] to-[#07323f] text-white z-10">
        
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
            alt="Paradise Resort"
            className="w-full h-full object-cover scale-105 opacity-40 mix-blend-overlay transition-opacity duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#093c4b] via-[#0e5a6f]/75 to-transparent"></div>
        </div>

        {/* Brand Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-orange to-amber-400 flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[20px] font-black tracking-tight font-poppins leading-none block text-white">
              ARX<span className="text-accent-orange">.</span>TRAVELS
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold-accent font-poppins">
              Journey Beyond
            </span>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="relative z-10 space-y-4 my-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold font-poppins uppercase tracking-wider text-amber-300 shadow-sm">
            ★ Member Perks
          </div>
          <h2 className="font-serif text-[34px] font-bold leading-snug drop-shadow-sm text-white">
            Unlock Exclusive Deals & Bespoke Itineraries
          </h2>
          <p className="text-slate-100 text-[14px] leading-relaxed font-normal">
            Sign in to access personalized member rates, track your active bookings, and save your favorite world destinations.
          </p>

          <ul className="space-y-3 pt-2 text-[13px] text-white font-medium">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
              <span>Up to 25% off on Luxury Tier Stays</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
              <span>Zero cancellation fees on select packages</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
              <span>24/7 Priority Concierge Support</span>
            </li>
          </ul>
        </div>

        {/* Security Footer */}
        <div className="relative z-10 pt-6 border-t border-white/15 flex items-center gap-2 text-slate-200 text-xs">
          <ShieldCheck className="w-4 h-4 text-accent-orange shrink-0" />
          <span>256-bit Encrypted Secure Authentication</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Rich Warm Glass Form */}
      <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ebf0f5] relative z-10">
        
        {/* Tab Toggle Control */}
        <div className="flex bg-slate-200/80 p-1.5 rounded-2xl mb-8 max-w-xs mx-auto md:mx-0 border border-slate-300/50 shadow-inner">
          <button
            type="button"
            onClick={() => setAuthMode("signin")}
            className={`flex-1 py-2.5 px-4 rounded-xl font-poppins text-xs font-bold transition-all ${
              authMode === "signin"
                ? "bg-white text-primary shadow-md border border-slate-200"
                : "text-slate-600 hover:text-primary"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("signup")}
            className={`flex-1 py-2.5 px-4 rounded-xl font-poppins text-xs font-bold transition-all ${
              authMode === "signup"
                ? "bg-white text-primary shadow-md border border-slate-200"
                : "text-slate-600 hover:text-primary"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Header */}
        <div className="mb-6">
          <h3 className="font-serif text-[32px] font-bold text-slate-900 leading-snug">
            {authMode === "signin" ? "Welcome Back!" : "Start Your Journey"}
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            {authMode === "signin"
              ? "Enter your credentials to manage your travel experiences."
              : "Join 50,000+ global travelers and explore bespoke destinations."}
          </p>
        </div>

        {/* Social Authentication */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white border border-slate-300/80 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-700 text-xs font-bold font-poppins shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
            Google
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white border border-slate-300/80 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-700 text-xs font-bold font-poppins shadow-sm"
          >
            <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 1-2.82-.9.04-2 .6-2.65 1.36-.58.67-1.08 1.75-.95 2.78 1.01.08 2.03-.52 2.6-1.32z" />
            </svg>
            Apple
          </button>
        </div>

        {/* Separator Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-300/70 w-full"></div>
          <span className="bg-[#f2f6f9] px-3 text-slate-500 text-[11px] font-bold uppercase tracking-wider font-poppins absolute">
            Or with email
          </span>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "signup" && (
            <div>
              <label className="block text-slate-700 text-xs font-bold font-poppins mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jainam Shah"
                  className="w-full bg-white border border-slate-300/80 rounded-2xl py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange transition-all shadow-sm"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-slate-700 text-xs font-bold font-poppins mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white border border-slate-300/80 rounded-2xl py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange transition-all shadow-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-slate-700 text-xs font-bold font-poppins">
                Password
              </label>
              {authMode === "signin" && (
                <a
                  href="#"
                  className="text-xs font-semibold text-accent-orange hover:underline font-poppins"
                >
                  Forgot Password?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white border border-slate-300/80 rounded-2xl py-3.5 pl-11 pr-11 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {authMode === "signin" && (
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-slate-300 text-accent-orange focus:ring-accent-orange accent-accent-orange cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-slate-600 font-medium cursor-pointer">
                Remember me on this device
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-accent-orange to-amber-500 text-white py-4 rounded-2xl font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent-orange/25 hover:brightness-110 active:scale-[0.99] transition-all"
          >
            {authMode === "signin" ? "Sign In to Account" : "Create My Account"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-500 mt-6 leading-relaxed">
          By continuing, you agree to ARX Travels&apos;{" "}
          <a href="#" className="underline hover:text-slate-800">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-slate-800">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}