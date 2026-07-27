"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenAuth?: () => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTourDropdownOpen, setIsTourDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-margin-desktop transition-all duration-500 backdrop-blur-3xl bg-white/90 border-b border-white/40 shadow-2xl ${
        isScrolled ? "h-[80px] bg-white/95" : "h-[100px]"
      }`}
    >
      <div className="flex items-center gap-16">
        <a className="flex items-center" href="#">
          <img
            alt="ARX Travels Logo"
            className="h-16 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLDo0HrKIaOwehfBwqGiKKzkzvFfS1KrWB5JHubjeMPtgbIbu8U-eX3vFijMn-cXc5TSCb1xcN32lZ6zR-3xcksycNzZBhU8Y4NKjWylSPvgZD7astGe4BUrioC44PQf-pixyQLj3kVIYh3InS5J0DUQs8pAG6TQy6rzpgJFwtrOWszDJR_pAMkPSAihyw_EihGPzB6J1S4aF-vRmucmZb_UP4X_WxoLq0xWUPu-jAHm3NW43KUM423Kwu2D4v41iGKejPWo43lk"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-10">
          <a className="relative nav-link text-primary font-bold font-poppins text-[15px]" href="#">
            Home
          </a>
          <div className="relative group">
            <button className="relative nav-link font-semibold hover:text-primary transition-all duration-300 flex items-center gap-1 font-poppins text-[15px] text-primary">
              Tour Packages{" "}
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            <div className="mega-menu absolute top-full left-0 mt-6 w-[640px] bg-white/90 backdrop-blur-3xl rounded-4xl p-10 shadow-2xl border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-poppins text-primary mb-6 text-[20px] font-bold">
                    Global Escapes
                  </h4>
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
                  <h4 className="font-poppins text-primary mb-6 text-[20px] font-bold">
                    Specialty Cruises
                  </h4>
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
          <a className="relative nav-link font-semibold hover:text-primary transition-all duration-300 font-poppins text-[15px] text-primary" href="#">
            Gallery
          </a>
          <a className="relative nav-link font-semibold hover:text-primary transition-all duration-300 font-poppins text-[15px] text-primary" href="#">
            Reviews
          </a>
          <a className="relative nav-link font-semibold hover:text-primary transition-all duration-300 font-poppins text-[15px] text-primary" href="#">
            Blog
          </a>
          <a className="relative nav-link font-semibold hover:text-primary transition-all duration-300 font-poppins text-[15px] text-primary" href="#">
            Contact
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden xl:flex items-center gap-6 text-on-surface-variant">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
            search
          </span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
            favorite
          </span>
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border-2 border-white shadow-sm ring-1 ring-primary/10">
            <img
              alt="Traveler profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhmObXJ52MdNtQ7Hwxx-4L3HNwDGM0dvGNXR5WLgJ4k3_vwLWlB0AUJ3ISsdgQBnEpSZ5oEVZ3Ho0GKPJYzyqG8jGxnEjXjngme_FnVRtXrEw-JspMIwnW9Ct0YVjnqq8CZqH38ke3UNyLvYY6SmIjLwVjH3gvIcy2oeKuNXKg2gGDfSN-4A2JNJaP_zVk3AoZhEaZe7n_9KTS-FQVtYDFOZlQx7sT2K35jEcBoMB1XA5OBAM8iRAEXXGF1v6-38FuHmV6d-m3_Us"
            />
          </div>
        </div>
        
        <button
          onClick={onOpenAuth}
          className="bg-accent-orange text-white px-8 py-4 rounded-full font-poppins text-[15px] shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-bold"
        >
          Plan My Trip
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-white z-40 transition-all duration-300 lg:hidden border-t border-gray-100 ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{ top: isScrolled ? "80px" : "100px" }}
      >
        <nav className="flex flex-col p-6 space-y-4 h-full overflow-y-auto">
          <a className="text-primary font-bold text-[18px] py-2 border-b border-gray-50" href="#">
            Home
          </a>
          <div>
            <button
              onClick={() => setIsTourDropdownOpen(!isTourDropdownOpen)}
              className="w-full flex justify-between items-center text-primary font-bold text-[18px] py-2 border-b border-gray-50"
            >
              Tour Packages
              <span
                className="material-symbols-outlined transition-transform duration-200"
                style={{ transform: isTourDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>
            <div
              className={`pl-4 space-y-3 pt-2 overflow-hidden transition-all duration-300 ${
                isTourDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <a href="#" className="block text-on-surface-variant text-[15px]">Europe Grand Tour</a>
              <a href="#" className="block text-on-surface-variant text-[15px]">Maldives Luxury</a>
              <a href="#" className="block text-on-surface-variant text-[15px]">Mediterranean Blue</a>
            </div>
          </div>
          <a className="text-primary font-bold text-[18px] py-2 border-b border-gray-50" href="#">Gallery</a>
          <a className="text-primary font-bold text-[18px] py-2 border-b border-gray-50" href="#">Reviews</a>
          <a className="text-primary font-bold text-[18px] py-2" href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}