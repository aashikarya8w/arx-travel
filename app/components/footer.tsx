"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f7f9fb] overflow-hidden font-poppins border-t border-[#E8E2D6]">
      {/* Main Footer Content */}
      <div className="max-w-container-max mx-auto px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Details */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  alt="ARX Travels Logo"
                  className="h-20 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLDo0HrKIaOwehfBwqGiKKzkzvFfS1KrWB5JHubjeMPtgbIbu8U-eX3vFijMn-cXc5TSCb1xcN32lZ6zR-3xcksycNzZBhU8Y4NKjWylSPvgZD7astGe4BUrioC44PQf-pixyQLj3kVIYh3InS5J0DUQs8pAG6TQy6rzpgJFwtrOWszDJR_pAMkPSAihyw_EihGPzB6J1S4aF-vRmucmZb_UP4X_WxoLq0xWUPu-jAHm3NW43KUM423Kwu2D4v41iGKejPWo43lk"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-[28px] font-black text-[#1E1E1E] leading-none tracking-tighter">
                    ARX TRAVELS
                  </span>
                  <span className="text-[#C89B5E] text-[10px] font-bold tracking-[0.2em] uppercase">
                    JOURNEY BEYOND LIMITS
                  </span>
                </div>
              </div>
              <p className="text-[#666666] text-[14px] leading-relaxed">
                Creating unforgettable travel experiences across India with premium packages, trusted guides, and exceptional customer service.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">
                    location_on
                  </span>
                  <span>Varanasi, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">
                    call
                  </span>
                  <span>+91 90769 76545</span>
                </div>
                <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">
                    mail
                  </span>
                  <span>contact@arxtravels.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#666666] text-[14px]">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[20px]">
                    schedule
                  </span>
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E2D6] shadow-sm">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[18px]">
                    check_circle
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight">
                    Trusted &amp; Safe
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E2D6] shadow-sm">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[18px]">
                    check_circle
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight">
                    Best Price Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E2D6] shadow-sm">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[18px]">
                    check_circle
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight">
                    24/7 Support
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E2D6] shadow-sm">
                  <span className="material-symbols-outlined text-[#C89B5E] text-[18px]">
                    check_circle
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight">
                    100% Satisfied
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h4 className="font-serif text-[20px] font-bold text-[#1E1E1E] border-b-2 border-[#C89B5E] w-fit pb-1">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                "Home",
                "About Us",
                "Destinations",
                "Tour Packages",
                "Gallery",
                "Testimonials",
                "Travel Blog",
                "Contact Us",
                "FAQs",
              ].map((link) => (
                <a
                  key={link}
                  className="text-[#666666] hover:text-[#C89B5E] transition-colors flex items-center gap-2 text-[15px]"
                  href="#"
                >
                  <span className="text-[#C89B5E] font-bold">&gt;</span> {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Popular Destinations */}
          <div className="space-y-8">
            <h4 className="font-serif text-[20px] font-bold text-[#1E1E1E] border-b-2 border-[#C89B5E] w-fit pb-1">
              Popular Destinations
            </h4>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8E2D6]">
                  <img
                    alt="Manali"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=150&q=80"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#1E1E1E] group-hover:text-[#C89B5E] transition-colors">
                    Manali
                  </p>
                  <p className="text-[12px] text-[#666666]">Himachal Pradesh</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8E2D6]">
                  <img
                    alt="Rishikesh"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=150&q=80"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#1E1E1E] group-hover:text-[#C89B5E] transition-colors">
                    Rishikesh
                  </p>
                  <p className="text-[12px] text-[#666666]">Uttarakhand</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8E2D6]">
                  <img
                    alt="Varanasi"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmv1tFHzWYvdbRNZWY4NhPmHUChszXbN5RywOu8ibOcHooBgro3E8XVxxnpBsbyAYKXs-GRIDNdiYzougvBAeZG8946I23USfCDMVjnsstmYfyIRJ9MmBTBcFJBr15-eSAJA4VTUEDjWJ8vHxqVTjaC7njZFiIyv1GdIooMUsd4oeeiC_am0wqJbwTZF5U5EZl-X65HNWVAa-ZvOivNKP6WDBXFX7WCNgOvRVCeFRL4P-Yj53VyJLRAEOeVB2j8UWsSX0eIelrC8"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#1E1E1E] group-hover:text-[#C89B5E] transition-colors">
                    Varanasi
                  </p>
                  <p className="text-[12px] text-[#666666]">Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Social Links */}
          <div className="space-y-8">
            <h4 className="font-serif text-[20px] font-bold text-[#1E1E1E] border-b-2 border-[#C89B5E] w-fit pb-1">
              Stay Updated
            </h4>
            <p className="text-[#666666] text-[14px]">
              Subscribe to receive exclusive offers, travel tips, and latest tour packages.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  className="w-full bg-white border border-[#E8E2D6] rounded-xl py-4 px-6 focus:outline-none focus:border-[#C89B5E] transition-all text-[14px]"
                  placeholder="Enter your email address"
                  type="email"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#666666]">
                  mail
                </span>
              </div>
              <button className="w-full bg-[#C89B5E] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md">
                Subscribe <span className="material-symbols-outlined">send</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="pt-6">
              <h4 className="font-serif text-[20px] font-bold text-[#1E1E1E] mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-[#E8E2D6] flex items-center justify-center text-[#666666] hover:bg-[#C89B5E] hover:text-white hover:border-[#C89B5E] transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-[#E8E2D6] flex items-center justify-center text-[#666666] hover:bg-[#C89B5E] hover:text-white hover:border-[#C89B5E] transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-[#E8E2D6] flex items-center justify-center text-[#666666] hover:bg-[#C89B5E] hover:text-white hover:border-[#C89B5E] transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-[#E8E2D6] flex items-center justify-center text-[#666666] hover:bg-[#C89B5E] hover:text-white hover:border-[#C89B5E] transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-[#E8E2D6] flex items-center justify-center text-[#666666] hover:bg-[#C89B5E] hover:text-white hover:border-[#C89B5E] transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.296-.883-.726-1.48-1.623-1.653-1.92-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E8E2D6] py-6 bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-[#666666] font-medium">
          <p>© 2026 ARX Travels. All Rights Reserved.</p>
          <p>
            GSTIN: <span className="text-[#C89B5E]">09AAXFA1234B1Z5</span>
          </p>
          <div className="flex gap-6">
            <a className="hover:text-[#C89B5E] transition-colors" href="#">
              Privacy Policy
            </a>
            <span className="text-[#E8E2D6]">|</span>
            <a className="hover:text-[#C89B5E] transition-colors" href="#">
              Terms &amp; Conditions
            </a>
            <span className="text-[#E8E2D6]">|</span>
            <a className="hover:text-[#C89B5E] transition-colors" href="#">
              Refund Policy
            </a>
            <span className="text-[#E8E2D6]">|</span>
            <a className="hover:text-[#C89B5E] transition-colors" href="#">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}