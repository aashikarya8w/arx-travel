"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"Stays" | "Flights" | "Experiences">("Stays");

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation Header */}
      <header
        id="main-header"
        className="fixed top-0 w-full z-50 h-[100px] flex items-center justify-between px-margin-desktop transition-all duration-500 backdrop-blur-3xl bg-white/90 border-b border-white/40 shadow-2xl"
      >
        <div className="flex items-center gap-16">
          <a href="#" className="flex items-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLDo0HrKIaOwehfBwqGiKKzkzvFfS1KrWB5JHubjeMPtgbIbu8U-eX3vFijMn-cXc5TSCb1xcN32lZ6zR-3xcksycNzZBhU8Y4NKjWylSPvgZD7astGe4BUrioC44PQf-pixyQLj3kVIYh3InS5J0DUQs8pAG6TQy6rzpgJFwtrOWszDJR_pAMkPSAihyw_EihGPzB6J1S4aF-vRmucmZb_UP4X_WxoLq0xWUPu-jAHm3NW43KUM423Kwu2D4v41iGKejPWo43lk"
              alt="ARX Travels Logo"
              className="h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="relative nav-link text-primary font-bold text-[15px]">
              Home
            </a>
            <div className="relative group">
              <button className="relative nav-link font-semibold hover:text-primary transition-all duration-300 flex items-center gap-1 text-[15px] text-primary">
                Tour Packages <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <div className="mega-menu absolute top-full left-0 mt-6 w-[640px] bg-white/90 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-primary mb-6 text-[20px] font-bold">Global Escapes</h4>
                    <ul className="space-y-4 text-on-surface-variant">
                      <li className="group/item hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-accent-orange/60 group-hover/item:text-accent-orange">
                          flight_takeoff
                        </span>
                        <span className="font-medium">Europe Grand Tour</span>
                      </li>
                      <li className="group/item hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-accent-orange/60 group-hover/item:text-accent-orange">
                          beach_access
                        </span>
                        <span className="font-medium">Maldives Luxury</span>
                      </li>
                      <li className="group/item hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-accent-orange/60 group-hover/item:text-accent-orange">
                          landscape
                        </span>
                        <span className="font-medium">Swiss Alps Adventure</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-primary mb-6 text-[20px] font-bold">Specialty Cruises</h4>
                    <ul className="space-y-4 text-on-surface-variant">
                      <li className="group/item hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-accent-orange/60 group-hover/item:text-accent-orange">
                          directions_boat
                        </span>
                        <span className="font-medium">Mediterranean Blue</span>
                      </li>
                      <li className="group/item hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-accent-orange/60 group-hover/item:text-accent-orange">
                          sailing
                        </span>
                        <span className="font-medium">Caribbean Dream</span>
                      </li>
                      <li className="group/item hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-accent-orange/60 group-hover/item:text-accent-orange">
                          ice_skating
                        </span>
                        <span className="font-medium">Arctic Expedition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="relative nav-link font-semibold hover:text-primary transition-all duration-300 text-[15px] text-primary">
              Gallery
            </a>
            <a href="#" className="relative nav-link font-semibold hover:text-primary transition-all duration-300 text-[15px] text-primary">
              Reviews
            </a>
            <a href="#" className="relative nav-link font-semibold hover:text-primary transition-all duration-300 text-[15px] text-primary">
              Blog
            </a>
            <a href="#" className="relative nav-link font-semibold hover:text-primary transition-all duration-300 text-[15px] text-primary">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-6 text-on-surface-variant">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">search</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">favorite</span>
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border-2 border-white shadow-sm ring-1 ring-primary/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhmObXJ52MdNtQ7Hwxx-4L3HNwDGM0dvGNXR5WLgJ4k3_vwLWlB0AUJ3ISsdgQBnEpSZ5oEVZ3Ho0GKPJYzyqG8jGxnEjXjngme_FnVRtXrEw-JspMIwnW9Ct0YVjnqq8CZqH38ke3UNyLvYY6SmIjLwVjH3gvIcy2oeKuNXKg2gGDfSN-4A2JNJaP_zVk3AoZhEaZe7n_9KTS-FQVtYDFOZlQx7sT2K35jEcBoMB1XA5OBAM8iRAEXXGF1v6-38FuHmV6d-m3_Us"
                alt="Traveler profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <button className="bg-accent-orange text-white px-8 py-4 rounded-full text-[15px] shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-bold">
            Plan My Trip
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmv1tFHzWYvdbRNZWY4NhPmHUChszXbN5RywOu8ibOcHooBgro3E8XVxxnpBsbyAYKXs-GRIDNdiYzougvBAeZG8946I23USfCDMVjnsstmYfyIRJ9MmBTBcFJBr15-eSAJA4VTUEDjWJ8vHxqVTjaC7njZFiIyv1GdIooMUsd4oeeiC_am0wqJbwTZF5U5EZl-X65HNWVAa-ZvOivNKP6WDBXFX7WCNgOvRVCeFRL4P-Yj53VyJLRAEOeVB2j8UWsSX0eIelrC8"
            alt="Luxury overwater villa"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_10px_#f27b21]"></span>
                  <span className="text-white text-[12px] tracking-[0.25em] uppercase font-bold">Explore Beyond Limits</span>
                </div>
                <h1 className="text-[84px] lg:text-[100px] leading-[0.9] font-black text-white tracking-tight">
                  YOUR JOURNEY,<br />
                  <span className="text-accent-orange">OUR PASSION</span>
                </h1>
                <p className="text-[22px] text-white/90 max-w-xl leading-relaxed font-medium">
                  Bespoke domestic and international travel experiences curated by global experts for the modern visionary traveler.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <button className="bg-[#0e5a6f] text-white px-10 py-5 rounded-full text-[16px] font-bold shadow-2xl hover:scale-105 hover:bg-accent-orange transition-all duration-300">
                  Explore Destinations
                </button>
                <button className="group flex items-center gap-4 text-white text-[16px] font-bold hover:text-accent-orange transition-colors">
                  <span className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center group-hover:border-accent-orange transition-all bg-white/5 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[32px]">play_circle</span>
                  </span>
                  Watch Experience
                </button>
              </div>
              <div className="flex items-center gap-12 pt-12">
                <div className="flex flex-col gap-1">
                  <span className="text-[32px] text-white font-bold leading-none">50,000+</span>
                  <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">Global Travelers</span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[32px] text-white font-bold leading-none">4.9</span>
                    <span className="material-symbols-outlined text-accent-orange text-[24px]">star</span>
                  </div>
                  <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">Average Rating</span>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-[32px] text-white font-bold leading-none">100+</span>
                  <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">Elite Venues</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="w-full max-w-[420px] bg-white/10 backdrop-blur-xl rounded-[48px] border border-white/20 p-8 shadow-2xl">
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
                    <label className="block text-accent-orange text-[10px] tracking-widest uppercase font-black mb-3">
                      Where are you heading?
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">explore</span>
                      <input
                        type="text"
                        placeholder="Search destination"
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-orange/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-accent-orange text-[10px] tracking-widest uppercase font-black mb-3">Arrival</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">calendar_today</span>
                        <input
                          type="text"
                          placeholder="dd-mm-yyyy"
                          className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 text-[14px] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-accent-orange text-[10px] tracking-widest uppercase font-black mb-3">Departure</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">calendar_today</span>
                        <input
                          type="text"
                          placeholder="dd-mm-yyyy"
                          className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 text-[14px] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-accent-orange text-[10px] tracking-widest uppercase font-black mb-3">Guests & Tiers</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/60">person</span>
                      <select className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-10 text-white appearance-none focus:outline-none">
                        <option className="text-primary">2 Adults, Luxury Tier</option>
                        <option className="text-primary">1 Adult, Standard Tier</option>
                        <option className="text-primary">Family, Premium Tier</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 bg-accent-orange text-white py-5 rounded-2xl font-black text-[16px] flex items-center justify-center gap-3 shadow-lg hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined">search</span>
                  Search Luxury Experiences
                </button>
                <div className="flex justify-center gap-8 mt-8">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-orange text-[18px]">verified</span>
                    <span className="text-white/70 text-[10px] tracking-widest uppercase font-bold">Best Price</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-orange text-[18px]">lock</span>
                    <span className="text-white/70 text-[10px] tracking-widest uppercase font-bold">Secure Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Destinations Section */}
      <section className="py-section-gap bg-[#f7f9fb] overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
              <span className="text-[#C89B5E] text-[12px] tracking-[0.2em] uppercase font-bold">TOP DESTINATIONS</span>
              <div className="w-12 h-px bg-[#C89B5E]/40"></div>
            </div>
            <h2 className="font-serif text-[64px] text-[#1D1D1D] font-bold mb-6 tracking-tight">
              Explore Our Most Loved Destinations
            </h2>
            <div className="mb-6 flex justify-center">
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgcng9IjgiIGZpbGw9IiNlOGVhZWQiLz48cGF0aCBkPSJNMTcwIDEzMCBsMzAgNDAgbDIwLTE1IGw0MCA1NSBIMTQweiIgZmlsbD0iI2JkYzFjNiIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEyMCIgcj0iMTgiIGZpbGw9IiNiZGMxYzYiLz48L3N2Zz4="
                  alt="Manali"
                  className="w-full h-full object-cover rounded-[24px] transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="px-10 pb-10 pt-2 space-y-8">
                <div>
                  <h3 className="font-serif text-[48px] text-[#191c1e] font-bold mb-4">Manali</h3>
                  <p className="text-on-surface-variant text-[16px] leading-relaxed">
                    Escape to Himachal's mountain paradise with breathtaking landscapes, snow adventures, cozy stays, and unforgettable Himalayan experiences.
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
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgcng9IjgiIGZpbGw9IiNlOGVhZWQiLz48cGF0aCBkPSJNMTcwIDEzMCBsMzAgNDAgbDIwLTE1IGw0MCA1NSBIMTQweiIgZmlsbD0iI2JkYzFjNiIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEyMCIgcj0iMTgiIGZpbGw9IiNiZGMxYzYiLz48L3N2Zz4="
                  alt="Rishikesh"
                  className="w-full h-full object-cover rounded-[24px] transition-transform duration-1000 group-hover:scale-105"
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

      {/* Footer */}
      <footer className="relative w-full bg-[#f7f9fb] overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLDo0HrKIaOwehfBwqGiKKzkzvFfS1KrWB5JHubjeMPtgbIbu8U-eX3vFijMn-cXc5TSCb1xcN32lZ6zR-3xcksycNzZBhU8Y4NKjWylSPvgZD7astGe4BUrioC44PQf-pixyQLj3kVIYh3InS5J0DUQs8pAG6TQy6rzpgJFwtrOWszDJR_pAMkPSAihyw_EihGPzB6J1S4aF-vRmucmZb_UP4X_WxoLq0xWUPu-jAHm3NW43KUM423Kwu2D4v41iGKejPWo43lk"
                    alt="ARX Travels Logo"
                    className="h-20 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-[28px] font-black text-[#1E1E1E] leading-none tracking-tighter">ARX TRAVELS</span>
                    <span className="text-[#C89B5E] text-[10px] font-bold tracking-[0.2em] uppercase">JOURNEY BEYOND LIMITS</span>
                  </div>
                </div>
                <p className="text-[#666666] text-[14px] leading-relaxed">
                  Creating unforgettable travel experiences across India with premium packages, trusted guides, and exceptional customer service.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                    <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">location_on</span>
                    <span>Varanasi, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                    <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">call</span>
                    <span>+91 90769 76545</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                    <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">mail</span>
                    <span>contact@arxtravels.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="font-serif text-[20px] font-bold text-[#1E1E1E] border-b-2 border-[#C89B5E] w-fit pb-1">Quick Links</h4>
              <nav className="flex flex-col gap-4">
                {["Home", "About Us", "Destinations", "Tour Packages", "Gallery", "Testimonials", "Contact Us"].map((link) => (
                  <a key={link} href="#" className="text-[#666666] hover:text-[#C89B5E] transition-colors flex items-center gap-2 text-[15px]">
                    <span className="text-[#C89B5E] font-bold">&gt;</span> {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="font-serif text-[20px] font-bold text-[#1E1E1E] border-b-2 border-[#C89B5E] w-fit pb-1">Stay Updated</h4>
              <p className="text-[#666666] text-[14px]">Subscribe to receive exclusive offers and tour packages.</p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-white border border-[#E8E2D6] rounded-xl py-4 px-6 focus:outline-none focus:border-[#C89B5E] transition-all text-[14px]"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#666666]">mail</span>
                </div>
                <button className="w-full bg-[#C89B5E] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md">
                  Subscribe <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8E2D6] py-6 bg-white">
          <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-[#666666] font-medium">
            <p>© 2026 ARX Travels. All Rights Reserved.</p>
            <p>
              GSTIN: <span className="text-[#C89B5E]">09AAXFA1234B1Z5</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#C89B5E] transition-colors">Privacy Policy</a>
              <span className="text-[#E8E2D6]">|</span>
              <a href="#" className="hover:text-[#C89B5E] transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}