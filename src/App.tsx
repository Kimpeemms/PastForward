/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Language } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeGallery from "./components/HomeGallery";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import InquiryDrawer from "./components/InquiryDrawer";
import { Sparkles, ArrowUp } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [page, setPage] = useState<"home" | "terms" | "privacy">("home");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedInquiryItem, setSelectedInquiryItem] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (itemName?: string) => {
    setSelectedInquiryItem(itemName);
    setInquiryOpen(true);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF4] selection:bg-[#8B0000] selection:text-white relative">
      
      {/* Editorial Luxury Top Greeting Stripe */}
      <div className="w-full bg-[#1b1c18] text-white py-2 px-4 text-center border-b border-metallic-gold/30 relative z-50">
        <p className="text-[9px] uppercase tracking-[0.3em] font-sans font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />
          <span>
            {lang === "EN" 
              ? "Bespoke Ayutthaya Weaving Consultations are open for Summer 2026 Season" 
              : "เปิดระบบติดต่อที่ปรึกษาสั่งทอพัสตราภรณ์กษัตริย์ ประจำคอลเลกชันฤดูร้อน ๒๕๖๙"}
          </span>
        </p>
      </div>

      {/* Editorial Navigation Header */}
      <Header
        currentLang={lang}
        setLang={setLang}
        currentPage={page}
        setCurrentPage={setPage}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Dynamic Workspace Screen */}
      <main className="flex-grow">
        {page === "home" && (
          <HomeGallery
            currentLang={lang}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {page === "terms" && (
          <TermsOfService
            currentLang={lang}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {page === "privacy" && (
          <PrivacyPolicy
            currentLang={lang}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
      </main>

      {/* Curated Editorial Footer */}
      <Footer
        currentLang={lang}
        currentPage={page}
        setCurrentPage={setPage}
      />

      {/* Guestbook Bespoke Customization Form Drawer */}
      <InquiryDrawer
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        selectedItemName={selectedInquiryItem}
        currentLang={lang}
      />

      {/* Sticky Scroll to Top Pin button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={handleScrollTop}
          className="p-3 bg-[#fafaf3] border border-[#e3beb8]/40 hover:border-heritage-red text-neutral-500 hover:text-heritage-red shadow-md transition-all cursor-pointer group"
          aria-label="Scroll to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
}
