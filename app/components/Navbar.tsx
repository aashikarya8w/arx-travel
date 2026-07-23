'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTourDropdownOpen, setIsTourDropdownOpen] = useState(false);

  // स्क्रॉल करने पर हेडर का बैकग्राउंड और हाइट बदलने के लिए
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // मोबाइल मेनू खुला होने पर बैकग्राउंड स्क्रॉल को रोकने के लिए
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-300 backdrop-blur-md border-b ${
      isScrolled 
        ? 'h-[75px] bg-white/95 shadow-md border-gray-100' 
        : 'h-[95px] bg-white/80 border-white/40'
    }`}>
      
      {/* लोगो (Logo) */}
      <div className="flex items-center gap-16">
        <a className="text-[24px] font-black text-[#0e5a6f] tracking-tighter" style={{ fontFamily: 'Poppins' }} href="#">
          ARX<span className="text-[#F97316]">.</span>TRAVELS
        </a>

        {/* डेस्कटॉप नेविगेशन (Desktop Links) */}
        <nav className="hidden lg:flex items-center gap-8">
          <a className="relative nav-link text-[#0e5a6f] font-bold text-[15px]" style={{ fontFamily: 'Poppins' }} href="#">Home</a>
          
          {/* मेगा मेनू / ड्रॉपडाउन (Mega Menu) */}
          <div className="relative group">
            <button className="relative nav-link font-semibold flex items-center gap-1 text-[15px] text-[#0e5a6f]" style={{ fontFamily: 'Poppins' }}>
              Tour Packages <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            
            {/* ड्रॉपडाउन कंटेंट */}
            <div className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#0e5a6f] mb-4 text-[16px] font-bold" style={{ fontFamily: 'Poppins' }}>Global Escapes</h4>
                  <ul className="space-y-3 text-[#40484c] text-[14px]">
                    <li className="hover:text-[#F97316] transition-colors cursor-pointer flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#F97316]/80">flight_takeoff</span> Europe Grand Tour
                    </li>
                    <li className="hover:text-[#F97316] transition-colors cursor-pointer flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#F97316]/80">beach_access</span> Maldives Luxury
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#0e5a6f] mb-4 text-[16px] font-bold" style={{ fontFamily: 'Poppins' }}>Specialty Cruises</h4>
                  <ul className="space-y-3 text-[#40484c] text-[14px]">
                    <li className="hover:text-[#F97316] transition-colors cursor-pointer flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#F97316]/80">directions_boat</span> Mediterranean Blue
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a className="relative nav-link font-semibold text-[15px] text-[#0e5a6f]" style={{ fontFamily: 'Poppins' }} href="#">Gallery</a>
          <a className="relative nav-link font-semibold text-[15px] text-[#0e5a6f]" style={{ fontFamily: 'Poppins' }} href="#">Reviews</a>
          <a className="relative nav-link font-semibold text-[15px] text-[#0e5a6f]" style={{ fontFamily: 'Poppins' }} href="#">Contact</a>
        </nav>
      </div>

      {/* राइट साइड एक्शन बटन्स (Right Actions) */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex items-center gap-4 text-[#40484c]">
          <span className="material-symbols-outlined cursor-pointer hover:text-[#0e5a6f] transition-colors">search</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-[#0e5a6f] transition-colors">favorite</span>
        </div>
        
        <button className="bg-[#F97316] text-white px-6 py-3 rounded-full text-[14px] shadow-md hover:scale-105 active:scale-95 transition-all duration-300 font-bold" style={{ fontFamily: 'Poppins' }}>
          Plan My Trip
        </button>

        {/* मोबाइल मेनू बटन (Mobile Menu Toggle) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#0e5a6f] hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* मोबाइल ड्रावर मेनू (Mobile Menu Overlay) */}
      {/* FIX: top ऑफसेट को डायनामिक किया ताकि स्क्रॉल होने पर गैप न दिखे */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden border-t border-gray-100 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ top: isScrolled ? '75px' : '95px' }}>
        <nav className="flex flex-col p-6 space-y-4 h-full overflow-y-auto">
          <a className="text-[#0e5a6f] font-bold text-[18px] py-2 border-b border-gray-50" href="#">Home</a>
          
          {/* मोबाइल ड्रॉपडाउन */}
          <div>
            <button 
              onClick={() => setIsTourDropdownOpen(!isTourDropdownOpen)}
              className="w-full flex justify-between items-center text-[#0e5a6f] font-bold text-[18px] py-2 border-b border-gray-50"
            >
              Tour Packages
              <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: isTourDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                expand_more
              </span>
            </button>
            
            {/* स्मूथ हाइट ट्रांजिशन के लिए max-h एडजस्टमेंट */}
            <div className={`pl-4 space-y-3 pt-2 overflow-hidden transition-all duration-300 ${isTourDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <a href="#" className="block text-[#40484c] text-[15px]">Europe Grand Tour</a>
              <a href="#" className="block text-[#40484c] text-[15px]">Maldives Luxury</a>
              <a href="#" className="block text-[#40484c] text-[15px]">Mediterranean Blue</a>
            </div>
          </div>

          <a className="text-[#0e5a6f] font-bold text-[18px] py-2 border-b border-gray-50" href="#">Gallery</a>
          <a className="text-[#0e5a6f] font-bold text-[18px] py-2 border-b border-gray-50" href="#">Reviews</a>
          <a className="text-[#0e5a6f] font-bold text-[18px] py-2" href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}