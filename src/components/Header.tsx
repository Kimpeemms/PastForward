import { Language, TRANSLATIONS } from "../data";
import { ShoppingBag, ChevronRight, Menu, X, Landmark, Globe } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  currentPage: "home" | "terms" | "privacy";
  setCurrentPage: (page: "home" | "terms" | "privacy") => void;
  onOpenInquiry: (itemName?: string) => void;
}

export default function Header({
  currentLang,
  setLang,
  currentPage,
  setCurrentPage,
  onOpenInquiry,
}: HeaderProps) {
  const t = TRANSLATIONS[currentLang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const handleNavClick = (anchorId: string) => {
    setCurrentPage("home");
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fafaf3]/95 backdrop-blur-md border-b border-[#e3beb8]/20 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <button
          onClick={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 cursor-pointer group text-left"
          id="logo-brand-btn"
        >
          {/* Elegant traditional golden crown/crest marker */}
          <div className="w-9 h-9 bg-heritage-red flex items-center justify-center relative shadow-sm border border-metallic-gold/40">
            <span className="text-[14px] font-serif font-semibold text-white tracking-widest">
              PF
            </span>
            <span className="absolute -top-[1.5px] -left-[1.5px] w-1.5 h-1.5 border-t border-l border-metallic-gold"></span>
            <span className="absolute -bottom-[1.5px] -right-[1.5px] w-1.5 h-1.5 border-b border-r border-metallic-gold"></span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif tracking-[0.25em] text-heritage-red font-bold leading-none">
              {t.brandName}
            </h1>
            <p className="text-[8px] tracking-[0.2em] text-metallic-gold mt-1 font-sans uppercase font-semibold">
              {currentLang === "EN" ? "Ayutthaya Atelier" : "อู่ทอศิลป์อยุธยา"}
            </p>
          </div>
        </button>

        {/* Center: Curated Navigation Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          <button
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-200 cursor-pointer ${
              currentPage === "home"
                ? "text-heritage-red border-b border-heritage-red/60 pb-0.5"
                : "text-neutral-600 hover:text-heritage-red"
            }`}
          >
            {t.theCollection}
          </button>
          <button
            onClick={() => handleNavClick("heritage-section")}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-600 hover:text-heritage-red cursor-pointer"
          >
            {t.heritage}
          </button>
          <button
            onClick={() => handleNavClick("atelier-section")}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-600 hover:text-heritage-red cursor-pointer"
          >
            {t.atelier}
          </button>
          <button
            onClick={() => {
              setCurrentPage("terms");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-200 cursor-pointer ${
              currentPage === "terms"
                ? "text-heritage-red border-b border-heritage-red/60 pb-0.5"
                : "text-neutral-600 hover:text-heritage-red"
            }`}
          >
            {t.termsOfService}
          </button>
          <button
            onClick={() => {
              setCurrentPage("privacy");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-200 cursor-pointer ${
              currentPage === "privacy"
                ? "text-heritage-red border-b border-heritage-red/60 pb-0.5"
                : "text-neutral-600 hover:text-heritage-red"
            }`}
          >
            {t.privacyPolicy}
          </button>
        </nav>

        {/* Right Side: Language Toggle & Shopping Enquiry Basket */}
        <div className="flex items-center gap-6">
          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-[#efeee7]/80 px-2.5 py-1.5 border border-[#e3beb8]/30">
            <button
              onClick={() => setLang("EN")}
              className={`text-[10px] uppercase tracking-wider font-bold transition-all duration-200 px-2 ${
                currentLang === "EN"
                  ? "text-heritage-red scale-105"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              EN
            </button>
            <span className="text-neutral-300 select-none text-[10px]">|</span>
            <button
              onClick={() => setLang("TH")}
              className={`text-[10px] uppercase tracking-wider font-bold transition-all duration-200 px-2 ${
                currentLang === "TH"
                  ? "text-heritage-red scale-105"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              TH
            </button>
          </div>

          {/* Luxury Inquiry Bag */}
          <div className="relative">
            <button
              onClick={() => setBagOpen(!bagOpen)}
              className="p-2 text-neutral-800 hover:text-heritage-red transition-all cursor-pointer relative"
              aria-label="Toggle Inquiry Bag"
              id="shopping-bag-btn"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-heritage-red rounded-full"></span>
            </button>

            {/* Quick Bag Dropdown */}
            {bagOpen && (
              <div 
                className="absolute right-0 mt-3 w-80 bg-[#fafaf3] border border-metallic-gold/30 shadow-xl p-5 z-50 animate-fade-in"
                id="shopping-bag-dropdown"
              >
                <div className="flex items-center justify-between border-b border-[#e3beb8]/30 pb-3 mb-3">
                  <h4 className="font-serif text-[13px] tracking-widest uppercase text-heritage-red font-bold">
                    {currentLang === "EN" ? "Atelier Inquiries" : "รายการติดต่อจองทอ"}
                  </h4>
                  <button
                    onClick={() => setBagOpen(false)}
                    className="text-neutral-400 hover:text-neutral-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1596265376427-46464b73dd67?auto=format&fit=crop&q=80&w=150"
                      alt="Sample fabric"
                      className="w-12 h-12 object-cover border border-[#e3beb8]/30"
                    />
                    <div>
                      <p className="text-[11px] uppercase font-bold text-neutral-800 leading-tight">
                        {currentLang === "EN" ? "The Royal Crimson" : "ผ้าสไบดิ้นทองลอย"}
                      </p>
                      <p className="text-[10px] text-metallic-gold mt-1">
                        {currentLang === "EN" ? "Custom Loom Weave" : "ลายพิกุลกษัตริย์ทอมือ"}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-600 italic">
                    {currentLang === "EN"
                      ? "Each magnificent textile is woven bespoke with real silver and gold filaments."
                      : "พัสตราภรณ์ทอมือราชสำนักทุกฝืนประสานด้วยเกลียวดิ้นเด่น สรรค์สร้างตามขนาดกายเฉพาะ"}
                  </p>
                  <button
                    onClick={() => {
                      setBagOpen(false);
                      onOpenInquiry();
                    }}
                    className="w-full bg-heritage-red text-white py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-900 transition-colors duration-300"
                  >
                    {currentLang === "EN" ? "Inquire Via Concierge" : "เข้าพบแผนกต้อนรับ"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-heritage-red transition-colors"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden w-full bg-[#fafaf3] border-t border-[#e3beb8]/20 px-6 py-8 space-y-5 animate-fade-in"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setCurrentPage("home");
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-neutral-100 text-[13px] uppercase tracking-widest font-bold text-neutral-800 hover:text-heritage-red"
            >
              {t.theCollection}
            </button>
            <button
              onClick={() => handleNavClick("heritage-section")}
              className="text-left py-2 border-b border-neutral-100 text-[13px] uppercase tracking-widest font-bold text-neutral-800 hover:text-heritage-red"
            >
              {t.heritage}
            </button>
            <button
              onClick={() => handleNavClick("atelier-section")}
              className="text-left py-2 border-b border-neutral-100 text-[13px] uppercase tracking-widest font-bold text-neutral-800 hover:text-heritage-red"
            >
              {t.atelier}
            </button>
            <button
              onClick={() => {
                setCurrentPage("terms");
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-neutral-100 text-[13px] uppercase tracking-widest font-bold text-neutral-800 hover:text-heritage-red"
            >
              {t.termsOfService}
            </button>
            <button
              onClick={() => {
                setCurrentPage("privacy");
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-neutral-100 text-[13px] uppercase tracking-widest font-bold text-neutral-800 hover:text-heritage-red"
            >
              {t.privacyPolicy}
            </button>
          </div>
          <p className="text-[10px] text-neutral-500 italic mt-6 leading-relaxed">
            {t.brandMotto}
          </p>
        </div>
      )}
    </header>
  );
}
