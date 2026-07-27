"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AuthModal from "./components/auth-modal";
import Footer from "./components/footer";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"Stays" | "Flights" | "Experiences">("Stays");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthOverlay, setShowAuthOverlay] = useState(false);

  // 1. LOGIN GATE (NO GLOBAL FOOTER / NO NAVBAR)
  if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0e2a38] to-[#0d1b2a] flex flex-col justify-center items-center relative overflow-hidden px-4 py-8">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-accent-orange/15 to-primary/25 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="w-full max-w-5xl flex justify-end relative z-20 mb-4">
            <button
              onClick={() => setIsAuthenticated(true)}
              className="text-xs font-bold text-white/80 hover:text-accent-orange transition-colors font-poppins flex items-center gap-1 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              Continue as Guest &rarr;
            </button>
          </div>

          <main className="w-full max-w-5xl flex items-center justify-center relative z-20">
            <AuthModal onLoginSuccess={() => setIsAuthenticated(true)} />
          </main>
        </div>
      );
    }

  // 2. MAIN APP CONTENT (WITH NAVBAR & GLOBAL FOOTER)
  return (
    <div className="min-h-screen bg-surface animate-fade-in">
      <Navbar onOpenAuth={() => setIsAuthenticated(false)} />

      {/* Hero Section */}
      <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary pt-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury overwater villa in the Maldives at sunset"
            className="w-full h-full object-cover scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmv1tFHzWYvdbRNZWY4NhPmHUChszXbN5RywOu8ibOcHooBgro3E8XVxxnpBsbyAYKXs-GRIDNdiYzougvBAeZG8946I23USfCDMVjnsstmYfyIRJ9MmBTBcFJBr15-eSAJA4VTUEDjWJ8vHxqVTjaC7njZFiIyv1GdIooMUsd4oeeiC_am0wqJbwTZF5U5EZl-X65HNWVAa-ZvOivNKP6WDBXFX7WCNgOvRVCeFRL4P-Yj53VyJLRAEOeVB2j8UWsSX0eIelrC8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                {/* <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_#f27b21]"></span>
                  <span className="text-white font-poppins text-[12px] tracking-[0.25em] uppercase font-bold">
                    Explore Beyond Limits
                  </span>
                </div> */}
                <h1 className="font-poppins text-[84px] lg:text-[100px] leading-[0.9] font-black text-white hero-text-shadow tracking-tight">
                  YOUR JOURNEY,<br />
                  <span className="text-accent-orange">OUR PASSION</span>
                </h1>
                <p className="text-[22px] text-white/90 max-w-xl leading-relaxed font-medium">
                  Bespoke domestic and international travel experiences curated by global experts for the modern visionary traveler.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <button className="bg-[#0e5a6f] text-white px-10 py-5 rounded-full font-poppins text-[16px] font-bold shadow-2xl hover:scale-105 hover:bg-accent-orange transition-all duration-300">
                  Explore Destinations
                </button>
                <button className="group flex items-center gap-4 text-white font-poppins text-[16px] font-bold hover:text-accent-orange transition-colors">
                  <span className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center group-hover:border-accent-orange transition-all bg-white/5 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[32px]">play_circle</span>
                  </span>
                  Watch Experience
                </button>
              </div>

              <div className="flex items-center gap-12 pt-12">
                <div className="flex flex-col gap-1">
                  <span className="font-poppins text-[32px] text-white font-bold leading-none">50,000+</span>
                  <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">Global Travelers</span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-poppins text-[32px] text-white font-bold leading-none">4.9</span>
                    <span className="material-symbols-outlined text-accent-orange text-[24px]">star</span>
                  </div>
                  <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">Average Rating</span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-poppins text-[32px] text-white font-bold leading-none">100+</span>
                  <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">Elite Venues</span>
                </div>
              </div>
            </div>

            {/* Interactive Search Box */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full max-w-[420px] bg-white/10 backdrop-blur-xl rounded-[48px] border border-white/20 p-8 shadow-2xl animate-fade-up">
                <div className="flex bg-black/20 rounded-full p-1.5 mb-8">
                  {(["Stays", "Flights", "Experiences"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-grow py-2.5 px-4 rounded-full font-bold text-[14px] transition-all ${
                        activeTab === tab
                          ? "bg-white text-primary"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-accent-orange font-poppins text-[10px] tracking-widest uppercase font-black mb-3">
                      Where are you heading?
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">explore</span>
                      <input
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-orange/50 transition-all"
                        placeholder="Search destination"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-accent-orange font-poppins text-[10px] tracking-widest uppercase font-black mb-3">
                        Arrival
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">calendar_today</span>
                        <input
                          className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 text-[14px] focus:outline-none"
                          placeholder="dd-mm-yyyy"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-accent-orange font-poppins text-[10px] tracking-widest uppercase font-black mb-3">
                        Departure
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">calendar_today</span>
                        <input
                          className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 text-[14px] focus:outline-none"
                          placeholder="dd-mm-yyyy"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-accent-orange font-poppins text-[10px] tracking-widest uppercase font-black mb-3">
                      Guests &amp; Tiers
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">person</span>
                      <select className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-10 text-white appearance-none focus:outline-none">
                        <option className="text-primary">2 Adults, Luxury Tier</option>
                        <option className="text-primary">1 Adult, Standard Tier</option>
                        <option className="text-primary">Family, Premium Tier</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-10 bg-accent-orange text-white py-5 rounded-2xl font-poppins font-black text-[16px] flex items-center justify-center gap-3 shadow-lg hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined">search</span>
                  Search Luxury Experiences
                </button>

                <div className="flex justify-center gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-orange text-[18px]">verified</span>
                    <span className="text-white/70 font-poppins text-[10px] tracking-widest uppercase font-bold">Best Price</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-orange text-[18px]">lock</span>
                    <span className="text-white/70 font-poppins text-[10px] tracking-widest uppercase font-bold">Secure Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Top Destinations Section */}
      <section className="py-section-gap bg-[#f7f9fb] overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
              <span className="text-[#C89B5E] font-poppins text-[12px] tracking-[0.2em] uppercase font-bold">
                TOP DESTINATIONS
              </span>
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
            </div>
            <h2 className="font-serif text-[64px] text-[#1D1D1D] font-bold mb-6 tracking-tight">
              Explore Our Most Loved Destinations
            </h2>
            <div className="mb-6 flex justify-center">
              <svg fill="none" height="24" viewBox="0 0 120 24" width="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 2L64 12L60 22L56 12L60 2Z" fill="#C89B5E"></path>
                <path d="M0 12H50M70 12H120" stroke="#C89B5E" strokeWidth="1"></path>
              </svg>
            </div>
            <p className="text-[#666666] max-w-2xl leading-relaxed text-[18px]">
              Discover breathtaking mountains, spiritual escapes, thrilling adventures,<br />
              and unforgettable experiences curated by ARX Travels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Manali Card */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-surface-container transition-all duration-500 hover:shadow-lg group">
              <div className="h-[420px] overflow-hidden p-6">
                <img
                  alt="Manali"
                  className="w-full h-full object-cover rounded-[24px] transition-transform duration-1000 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <div className="px-10 pb-10 pt-2 space-y-8">
                <div>
                  <h3 className="font-serif text-[48px] text-[#191c1e] font-bold mb-4">Manali</h3>
                  <p className="text-on-surface-variant text-[16px] leading-relaxed">
                    Escape to Himachal&apos;s mountain paradise with breathtaking landscapes, snow adventures, cozy stays, and unforgettable Himalayan experiences.
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">location_on</span> Himachal Pradesh
                  </span>
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">landscape</span> Snow Paradise
                  </span>
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">architecture</span> Adventure Sports
                  </span>
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">forest</span> Nature Retreat
                  </span>
                </div>
                <div>
                  <button className="inline-flex items-center gap-2 px-8 py-3 border border-[#c5a059]/40 text-[#c5a059] font-serif font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#c5a059]/5">
                    Explore More <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Rishikesh Card */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-surface-container transition-all duration-500 hover:shadow-lg group">
              <div className="h-[420px] overflow-hidden p-6">
                <img
                  alt="Rishikesh"
                  className="w-full h-full object-cover rounded-[24px] transition-transform duration-1000 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <div className="px-10 pb-10 pt-2 space-y-8">
                <div>
                  <h3 className="font-serif text-[48px] text-[#191c1e] font-bold mb-4">Rishikesh</h3>
                  <p className="text-on-surface-variant text-[16px] leading-relaxed">
                    Experience the Yoga Capital of the World with sacred temples, thrilling rafting adventures, peaceful ghats, and spiritual serenity.
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">location_on</span> Uttarakhand
                  </span>
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">spa</span> Yoga Capital
                  </span>
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">kayaking</span> River Rafting
                  </span>
                  <span className="flex items-center gap-2 text-on-surface-variant font-medium text-[14px]">
                    <span className="material-symbols-outlined text-[18px] text-[#c5a059]">temple_hindu</span> Spiritual Escape
                  </span>
                </div>
                <div>
                  <button className="inline-flex items-center gap-2 px-8 py-3 border border-[#c5a059]/40 text-[#c5a059] font-serif font-bold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#c5a059]/5">
                    Explore More <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Travel Packages Section */}
      <section className="py-section-gap bg-[#FAFAFA] bg-gradient-to-b from-[#FAFAFA] to-[#FFF9F2] overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
              <span className="text-[#C89B5E] font-poppins text-[12px] tracking-[0.2em] uppercase font-bold">
                TOP TRAVEL PACKAGES
              </span>
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
            </div>
            <h2 className="font-serif text-[64px] text-[#1D1D1D] font-bold mb-6 tracking-tight">
              Our Top Travel Packages
            </h2>
            <div className="mb-6 flex justify-center">
              <svg fill="none" height="24" viewBox="0 0 120 24" width="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 2L64 12L60 22L56 12L60 2Z" fill="#C89B5E"></path>
                <path d="M0 12H50M70 12H120" stroke="#C89B5E" strokeWidth="1"></path>
              </svg>
            </div>
            <p className="text-[#666666] max-w-2xl leading-relaxed text-[18px]">
              Handpicked mountain adventures and spiritual escapes designed for unforgettable journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Manali Family */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-surface-container transition-all duration-500 hover:translate-y-[-12px] group">
              <div className="relative h-[320px] overflow-hidden">
                <img
                  alt="Manali Family"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute top-5 left-5 bg-[#C89B5E] text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-1">
                  ★ BEST SELLER
                </div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white text-[12px] px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 5 Days / 4 Nights
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-[32px] text-[#1D1D1D] font-bold mb-2">Manali Family Package</h3>
                <div className="flex items-center gap-2 text-[#C89B5E] mb-8">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-[14px] font-semibold uppercase tracking-wider">Himachal Pradesh</span>
                </div>
                <div className="flex justify-between items-end mb-8 border-t border-b border-surface-container py-6">
                  <div>
                    <p className="text-[#666666] text-[10px] font-black uppercase tracking-widest mb-1">STARTING FROM</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[28px] font-black text-primary">₹8,500</span>
                      <span className="text-[#666666] text-[14px]">/ person</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#666666] text-[10px] font-black uppercase tracking-widest mb-1">PERFECT FOR</p>
                    <div className="flex items-center justify-end gap-2">
                      <span className="material-symbols-outlined text-accent-orange text-[20px]">groups</span>
                      <span className="text-[16px] font-bold text-[#1D1D1D]">6 People</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">landscape</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Solang Valley</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">snowboarding</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Rohtang Pass</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">temple_hindu</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Hadimba Temple</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">storefront</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Mall Road</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">kayaking</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">River Rafting</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-[#C89B5E] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  Book Now <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 2: Manali Couple */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-surface-container transition-all duration-500 hover:translate-y-[-12px] group">
              <div className="relative h-[320px] overflow-hidden">
                <img
                  alt="Manali Couple"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute top-5 left-5 bg-[#C89B5E] text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-1">
                  ★ MOST POPULAR
                </div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white text-[12px] px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 4 Days / 3 Nights
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-[32px] text-[#1D1D1D] font-bold mb-2">Manali Couple &amp; Friends Package</h3>
                <div className="flex items-center gap-2 text-[#C89B5E] mb-8">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-[14px] font-semibold uppercase tracking-wider">Himachal Pradesh</span>
                </div>
                <div className="flex justify-between items-end mb-8 border-t border-b border-surface-container py-6">
                  <div>
                    <p className="text-[#666666] text-[10px] font-black uppercase tracking-widest mb-1">STARTING FROM</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[28px] font-black text-primary">₹7,800</span>
                      <span className="text-[#666666] text-[14px]">/ person</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#666666] text-[10px] font-black uppercase tracking-widest mb-1">PERFECT FOR</p>
                    <div className="flex items-center justify-end gap-2">
                      <span className="material-symbols-outlined text-accent-orange text-[20px]">group</span>
                      <span className="text-[16px] font-bold text-[#1D1D1D]">4 People</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">landscape</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Solang Valley</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">circle</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Atal Tunnel</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">mountain_flag</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Sissu</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">coffee</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Café Tour</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">camera_outdoor</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Local Sightseeing</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-[#C89B5E] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  Book Now <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 3: Rishikesh Adventure */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-surface-container transition-all duration-500 hover:translate-y-[-12px] group">
              <div className="relative h-[320px] overflow-hidden">
                <img
                  alt="Rishikesh Adventure"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute top-5 left-5 bg-[#C89B5E] text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-1">
                  ♨ SPIRITUAL ESCAPE
                </div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white text-[12px] px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 3 Days / 2 Nights
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-[32px] text-[#1D1D1D] font-bold mb-2">Rishikesh Adventure Package</h3>
                <div className="flex items-center gap-2 text-[#C89B5E] mb-8">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-[14px] font-semibold uppercase tracking-wider">Uttarakhand</span>
                </div>
                <div className="flex justify-between items-end mb-8 border-t border-b border-surface-container py-6">
                  <div>
                    <p className="text-[#666666] text-[10px] font-black uppercase tracking-widest mb-1">STARTING FROM</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[28px] font-black text-primary">₹6,999</span>
                      <span className="text-[#666666] text-[14px]">/ person</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#666666] text-[10px] font-black uppercase tracking-widest mb-1">PERFECT FOR</p>
                    <div className="flex items-center justify-end gap-2">
                      <span className="material-symbols-outlined text-accent-orange text-[20px]">family_restroom</span>
                      <span className="text-[16px] font-bold text-[#1D1D1D]">4 - 6 People</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">kayaking</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">River Rafting</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">circle</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Lakshman Jhula</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">oil_barrel</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Ganga Aarti</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">temple_hindu</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Neelkanth Temple</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#C89B5E]">self_improvement</span>
                    <span className="text-[8px] text-center font-bold uppercase text-[#666666]">Yoga Ashram Visit</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-[#C89B5E] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  Book Now <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-section-gap bg-[#f7f9fb] relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C89B5E] text-[20px] fill-1">star</span>
                <span className="text-[#C89B5E] font-poppins text-[14px] tracking-[0.2em] uppercase font-bold">TESTIMONIALS</span>
                <span className="material-symbols-outlined text-[#C89B5E] text-[20px] fill-1">star</span>
              </div>
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
            </div>
            <h2 className="font-serif text-[64px] text-[#1D1D1D] font-bold mb-6 tracking-tight">
              Stories from Our <span className="text-[#C89B5E]">Happy Travelers</span>
            </h2>
            <div className="mb-8 flex justify-center">
              <svg fill="none" height="24" viewBox="0 0 120 24" width="120" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 2L64 12L60 22L56 12L60 2Z" fill="#C89B5E"></path>
                <path d="M0 12H50M70 12H120" stroke="#C89B5E" strokeWidth="1"></path>
              </svg>
            </div>
            <p className="text-[#666666] max-w-3xl leading-relaxed text-[18px]">
              Discover authentic experiences shared by travelers who explored India with ARX Travels. Every journey tells a story of unforgettable memories and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Rahul Sharma */}
            <div className="bg-white rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-surface-container relative flex flex-col">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img
                    alt="Rahul Sharma"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhmObXJ52MdNtQ7Hwxx-4L3HNwDGM0dvGNXR5WLgJ4k3_vwLWlB0AUJ3ISsdgQBnEpSZ5oEVZ3Ho0GKPJYzyqG8jGxnEjXjngme_FnVRtXrEw-JspMIwnW9Ct0YVjnqq8CZqH38ke3UNyLvYY6SmIjLwVjH3gvIcy2oeKuNXKg2gGDfSN-4A2JNJaP_zVk3AoZhEaZe7n_9KTS-FQVtYDFOZlQx7sT2K35jEcBoMB1XA5OBAM8iRAEXXGF1v6-38FuHmV6d-m3_Us"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#C89B5E] text-white rounded-full p-1.5 border-2 border-white shadow-md">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-[24px] text-[#1D1D1D] font-bold">Rahul Sharma</h4>
                  <p className="flex items-center gap-1 text-[#666666] text-[14px] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#C89B5E]">location_on</span> Delhi, India
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#C89B5E]/10 rounded-full">
                    <span className="material-symbols-outlined text-[14px] text-[#C89B5E] fill-1">verified</span>
                    <span className="text-[#C89B5E] text-[10px] font-bold uppercase tracking-wider">Verified Traveler</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex text-accent-orange">
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star_half</span>
                  </div>
                  <span className="text-[#1D1D1D] font-bold text-[14px] ml-1">4.9/5</span>
                </div>
                <span className="px-3 py-1 bg-[#C89B5E]/10 rounded-full text-[#C89B5E] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">family_restroom</span> Family Trip
                </span>
              </div>
              <p className="text-on-surface-variant text-[16px] leading-relaxed relative z-10 px-2 mb-8 flex-grow">
                Our family trip to Manali was perfectly organized. Hotels, sightseeing, transportation, and support exceeded our expectations. Highly recommended.
              </p>
              <div className="pt-8 border-t border-surface-container grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">terrain</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Visited</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">Manali</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">calendar_view_month</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Duration</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">5 Days / 4 Nights</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">schedule</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Traveled in</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">June 2026</p>
                </div>
              </div>
            </div>

            {/* Card 2: Priya Verma */}
            <div className="bg-white rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-surface-container relative flex flex-col">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img
                    alt="Priya Verma"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhmObXJ52MdNtQ7Hwxx-4L3HNwDGM0dvGNXR5WLgJ4k3_vwLWlB0AUJ3ISsdgQBnEpSZ5oEVZ3Ho0GKPJYzyqG8jGxnEjXjngme_FnVRtXrEw-JspMIwnW9Ct0YVjnqq8CZqH38ke3UNyLvYY6SmIjLwVjH3gvIcy2oeKuNXKg2gGDfSN-4A2JNJaP_zVk3AoZhEaZe7n_9KTS-FQVtYDFOZlQx7sT2K35jEcBoMB1XA5OBAM8iRAEXXGF1v6-38FuHmV6d-m3_Us"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#C89B5E] text-white rounded-full p-1.5 border-2 border-white shadow-md">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-[24px] text-[#1D1D1D] font-bold">Priya Verma</h4>
                  <p className="flex items-center gap-1 text-[#666666] text-[14px] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#C89B5E]">location_on</span> Lucknow, India
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#C89B5E]/10 rounded-full">
                    <span className="material-symbols-outlined text-[14px] text-[#C89B5E] fill-1">verified</span>
                    <span className="text-[#C89B5E] text-[10px] font-bold uppercase tracking-wider">Verified Traveler</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex text-accent-orange">
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star_half</span>
                  </div>
                  <span className="text-[#1D1D1D] font-bold text-[14px] ml-1">4.9/5</span>
                </div>
                <span className="px-3 py-1 bg-[#C89B5E]/10 rounded-full text-[#C89B5E] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">favorite</span> Couple Trip
                </span>
              </div>
              <p className="text-on-surface-variant text-[16px] leading-relaxed relative z-10 px-2 mb-8 flex-grow">
                The Ganga Aarti, river rafting, and yoga retreat were unforgettable. ARX Travels handled everything professionally. It was a truly spiritual experience.
              </p>
              <div className="pt-8 border-t border-surface-container grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">terrain</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Visited</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">Rishikesh</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">calendar_view_month</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Duration</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">3 Days / 2 Nights</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">schedule</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Traveled in</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">May 2026</p>
                </div>
              </div>
            </div>

            {/* Card 3: Amit Singh */}
            <div className="bg-white rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-surface-container relative flex flex-col">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img
                    alt="Amit Singh"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhmObXJ52MdNtQ7Hwxx-4L3HNwDGM0dvGNXR5WLgJ4k3_vwLWlB0AUJ3ISsdgQBnEpSZ5oEVZ3Ho0GKPJYzyqG8jGxnEjXjngme_FnVRtXrEw-JspMIwnW9Ct0YVjnqq8CZqH38ke3UNyLvYY6SmIjLwVjH3gvIcy2oeKuNXKg2gGDfSN-4A2JNJaP_zVk3AoZhEaZe7n_9KTS-FQVtYDFOZlQx7sT2K35jEcBoMB1XA5OBAM8iRAEXXGF1v6-38FuHmV6d-m3_Us"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#C89B5E] text-white rounded-full p-1.5 border-2 border-white shadow-md">
                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-[24px] text-[#1D1D1D] font-bold">Amit Singh</h4>
                  <p className="flex items-center gap-1 text-[#666666] text-[14px] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#C89B5E]">location_on</span> Jaipur, India
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#C89B5E]/10 rounded-full">
                    <span className="material-symbols-outlined text-[14px] text-[#C89B5E] fill-1">verified</span>
                    <span className="text-[#C89B5E] text-[10px] font-bold uppercase tracking-wider">Verified Traveler</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex text-accent-orange">
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                    <span className="material-symbols-outlined text-[20px] fill-1">star_half</span>
                  </div>
                  <span className="text-[#1D1D1D] font-bold text-[14px] ml-1">4.9/5</span>
                </div>
                <span className="px-3 py-1 bg-[#C89B5E]/10 rounded-full text-[#C89B5E] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">hiking</span> Adventure Trip
                </span>
              </div>
              <p className="text-on-surface-variant text-[16px] leading-relaxed relative z-10 px-2 mb-8 flex-grow">
                Excellent customer service with beautiful hotels and smooth travel arrangements. The itinerary was well planned and worth every penny.
              </p>
              <div className="pt-8 border-t border-surface-container grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">terrain</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Visited</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">Manali</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">calendar_view_month</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Duration</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">4 Days / 3 Nights</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-[24px] text-[#C89B5E] mb-1">schedule</span>
                  <p className="text-[10px] font-bold text-[#C89B5E] uppercase">Traveled in</p>
                  <p className="text-[12px] font-bold text-[#1D1D1D]">July 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#C89B5E] to-[#b0854d] text-white px-12 py-5 rounded-2xl font-poppins font-bold text-[16px] flex items-center gap-3 shadow-xl hover:brightness-110 transition-all group">
              View All Reviews
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </section>

      {/* Adventure Banner Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop relative z-20 mb-20 -mt-20">
        <div className="relative w-full rounded-[32px] overflow-hidden shadow-2xl bg-[#FCFAF6] border border-[#E8E2D6] min-h-[340px] flex items-center">
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>
          <div className="relative z-10 w-full grid md:grid-cols-12 items-center gap-0">
            <div className="md:col-span-4 h-full relative flex items-center justify-center min-h-[340px]">
              <div className="relative w-full h-full flex items-center justify-center scale-90 lg:scale-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmv1tFHzWYvdbRNZWY4NhPmHUChszXbN5RywOu8ibOcHooBgro3E8XVxxnpBsbyAYKXs-GRIDNdiYzougvBAeZG8946I23USfCDMVjnsstmYfyIRJ9MmBTBcFJBr15-eSAJA4VTUEDjWJ8vHxqVTjaC7njZFiIyv1GdIooMUsd4oeeiC_am0wqJbwTZF5U5EZl-X65HNWVAa-ZvOivNKP6WDBXFX7WCNgOvRVCeFRL4P-Yj53VyJLRAEOeVB2j8UWsSX0eIelrC8"
                  alt="Luxury Suitcase"
                  className="w-64 h-auto object-contain z-10 relative drop-shadow-2xl"
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnSQWEYoUc4XNjcpPl_Q6uBrDGc_LoKBmGnKKO8yC6Dg8hl7vlyCbilYoMqDUNhsKRd_Qk3JnzMxfIaBfAHiBAc_-FyAVQpHu8xEbkAdIOOi6jXjfv7WZXhg3DzbXaGU_v0dTa6MIbIeZwHseQtCOGzBAD8qF1L8gc-53DOZMewrMB7B_HOq8E3ViRUInx6F1vitLfvPC4y0jKZfykMHjM5c753uGsjIYcBtgMTl7yPu38MdVEC0bFd6gTF4PpEP_MDOLlHtcaHxU"
                  alt="Travel Hat"
                  className="absolute -top-4 left-1/4 w-40 h-auto object-contain z-20 drop-shadow-xl -rotate-12"
                />
                <div className="absolute bottom-8 right-8 z-20 drop-shadow-xl rotate-12 bg-white p-2 rounded-xl border border-surface-container-highest">
                  <span className="material-symbols-outlined text-[48px] text-[#1E1E1E]">photo_camera</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 py-12 px-8 md:px-0 text-center md:text-left">
              <h3 className="font-serif text-[42px] lg:text-[52px] text-[#1E1E1E] font-bold leading-tight mb-4">
                Ready for Your Next <br />
                <span className="text-gold-accent">Adventure?</span>
              </h3>
              <p className="text-[#666666] font-medium text-[18px] leading-relaxed max-w-md">
                Book your dream vacation with ARX Travels and create unforgettable memories with your loved ones.
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col gap-5 px-8 pb-12 md:pb-0 md:pr-12 relative h-full justify-center">
              <button className="bg-gold-accent hover:bg-[#A8783D] text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl text-[16px] group font-poppins">
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">flight_takeoff</span>
                Book Your Trip
              </button>
              <button className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent/5 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-[16px] font-poppins">
                <span className="material-symbols-outlined">call</span>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer Rendered Here */}
      <Footer />

      {/* Modal Popup Overlay when triggered from Navbar */}
      {showAuthOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setShowAuthOverlay(false)}
              className="absolute -top-12 right-0 text-white hover:text-accent-orange transition-colors flex items-center gap-1 font-poppins text-xs font-bold"
            >
              Close <span className="material-symbols-outlined text-sm">close</span>
            </button>
            <AuthModal
              onLoginSuccess={() => {
                setShowAuthOverlay(false);
                setIsAuthenticated(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}