import { Language, TRANSLATIONS } from "../data";
import { Globe, Share2, Volume2, ShieldCheck, HelpCircle } from "lucide-react";

interface FooterProps {
  currentLang: Language;
  currentPage: "home" | "terms" | "privacy";
  setCurrentPage: (page: "home" | "terms" | "privacy") => void;
}

export default function Footer({
  currentLang,
  currentPage,
  setCurrentPage,
}: FooterProps) {
  const t = TRANSLATIONS[currentLang];

  const handleNav = (page: "home" | "terms" | "privacy") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f5f4ed] border-t border-[#e3beb8]/30 pt-16 pb-8 px-4 sm:px-8 md:px-16" id="app-luxury-footer">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-[#e3beb8]/30">
        
        {/* Brand Motto Block */}
        <div className="md:col-span-5 space-y-4">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-9 h-9 bg-heritage-red flex items-center justify-center relative border border-metallic-gold/30">
              <span className="text-[13px] font-serif font-bold text-white">PF</span>
            </div>
            <div>
              <h2 className="text-xl font-serif tracking-[0.2em] text-heritage-red font-bold leading-none">
                PastForward
              </h2>
              <span className="text-[8px] tracking-[0.25em] text-metallic-gold block mt-1 uppercase font-semibold">
                AYUTTHAYA ATELIER
              </span>
            </div>
          </button>
          
          <p className="text-xs text-neutral-600 leading-relaxed max-w-sm pt-2">
            {currentLang === "EN"
              ? "Preserving the legacy of Thai weaving through contemporary luxury and uncompromising craftsmanship."
              : "สืบสานรักษามรดกคตินิยมเครื่องราชพัสตราภรณ์ไทยโบราณ ยกพรายดิ้นแก้วยกดอกอยุธยา สู่รสนิยมล้ำค่าไร้กาลสมัยแห่งเวทีโลก"}
          </p>
        </div>

        {/* Explore Links column (Grid spacer) */}
        <div className="md:col-span-1" />

        {/* Explore Navigation column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold">
            {currentLang === "EN" ? "Explore" : "สำรวจชิ้นงาน"}
          </h4>
          <ul className="space-y-2.5">
            <li>
              <button
                onClick={() => handleNav("home")}
                className={`text-[12px] tracking-wide font-medium transition-colors duration-200 cursor-pointer ${
                  currentPage === "home"
                    ? "text-heritage-red font-bold"
                    : "text-neutral-700 hover:text-heritage-red"
                }`}
              >
                {t.theCollection}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNav("home");
                  setTimeout(() => {
                    document.getElementById("heritage-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 200);
                }}
                className="text-[12px] tracking-wide text-neutral-600 hover:text-heritage-red cursor-pointer"
              >
                {currentLang === "EN" ? "Heritage of Motion" : "หัตถศิลป์กรรมมรดก"}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNav("home");
                  setTimeout(() => {
                    document.getElementById("atelier-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 200);
                }}
                className="text-[12px] tracking-wide text-neutral-600 hover:text-heritage-red cursor-pointer"
              >
                {currentLang === "EN" ? "Atelier Sketches" : "อู่ดีไซน์ร่างพิมพ์ลาย"}
              </button>
            </li>
          </ul>
        </div>

        {/* Legal Regulatory column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold">
            {currentLang === "EN" ? "Legal & Framework" : "กฎหมายและกรอบข้อตกลง"}
          </h4>
          <ul className="space-y-2.5">
            <li>
              <button
                onClick={() => handleNav("privacy")}
                className={`text-[12px] tracking-wide font-medium transition-colors duration-200 cursor-pointer ${
                  currentPage === "privacy"
                    ? "text-heritage-red font-bold"
                    : "text-neutral-700 hover:text-heritage-red"
                }`}
              >
                {t.privacyPolicy}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("terms")}
                className={`text-[12px] tracking-wide font-medium transition-colors duration-200 cursor-pointer ${
                  currentPage === "terms"
                    ? "text-heritage-red font-bold"
                    : "text-neutral-700 hover:text-heritage-red"
                }`}
              >
                {t.termsOfService}
              </button>
            </li>
            <li className="flex items-center gap-1.5 text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-metallic-gold" />
              <span className="text-[11px] tracking-wide">
                {currentLang === "EN" ? "PDPA Protected" : "คุ้มครองสิทธิ์ PDPA"}
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Extreme Bottom Footplate */}
      <div className="max-w-[1440px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright notice */}
        <div className="text-[11px] text-neutral-500 font-medium">
          {currentLang === "EN" ? "© 2026 PastForward. All Rights Reserved." : "© 2026 PastForward. สงวนลิขสิทธิ์ทั้งหมด"}
        </div>

        {/* Decorative Luxury Quick Badges */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              alert(currentLang === "EN" ? "Direct hotline: +66 2 456 7890" : "สายด่วนแผนกต้อนรับ: 02-456-7890");
            }}
            className="p-1 px-2 border border-neutral-300 text-[10px] uppercase tracking-wider text-neutral-500 hover:text-heritage-red hover:border-heritage-red transition-all flex items-center gap-1 cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-metallic-gold" />
            <span>Support Line</span>
          </button>

          <div className="flex items-center gap-3 text-neutral-500">
            <button
              onClick={() => alert(currentLang === "EN" ? "Share luxury link copied to clipboard!" : "คัดลอกลิงก์อ้างอิงแกลเลอรี่เสร็จสิ้น!")}
              className="hover:text-heritage-red p-1 transition-all"
              aria-label="Share Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const url = window.location.href;
                alert(currentLang === "EN" ? `Gallery Region: Southeast Asia (Bangkok Hub) \nURL: ${url}` : `กลุ่มเครือข่ายอู่ทอศิลป์: ภูมิภาคเอเชียตะวันออกเฉียงใต้ \nลิงก์: ${url}`);
              }}
              className="hover:text-heritage-red p-1 transition-all"
              aria-label="Toggle Regional Coordinates"
            >
              <Globe className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
