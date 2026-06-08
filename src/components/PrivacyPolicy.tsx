import { Language, TRANSLATIONS, PRIVACY_SECTIONS, PRIVACY_SECTIONS_PART2 } from "../data";
import { Lock, CheckSquare, ShieldCheck, HelpCircle } from "lucide-react";

interface PrivacyPolicyProps {
  currentLang: Language;
  onOpenInquiry: (itemName?: string) => void;
}

export default function PrivacyPolicy({ currentLang, onOpenInquiry }: PrivacyPolicyProps) {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-20 animate-fade-in space-y-12" id="privacy-policy-view">
      
      {/* 1. LEGAL GOVERNANCE HEADER */}
      <section className="text-center space-y-4 max-w-xxl mx-auto">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold font-sans block">
          {t.legalGov}
        </span>
        <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-bold text-heritage-red tracking-tight leading-none">
          {t.privacyPolicy}
        </h1>
        <hr className="w-16 h-[0.5px] bg-[#e3beb8]/50 mx-auto" />
        <p className="text-xs sm:text-[13px] font-sans text-neutral-500 max-w-lg mx-auto italic leading-relaxed">
          {currentLang === "EN"
            ? "At PastForward, we treat your personal data with the same reverence and meticulous care as our heritage textiles."
            : "ณ อู่ศิลป์ทอรอยเด่น เราให้การต้อนรับปกป้องดูแลข้อมูลความปลอดภัยของท่านประดุจดั่งเกลียวไหมมรดกราชสำนักอันล้ำค่าสูงสุด"}
        </p>
      </section>

      {/* 2. PRIVACY SECTIONS PART 1 */}
      <section className="max-w-3xl mx-auto space-y-8">
        {PRIVACY_SECTIONS.map((section, index) => (
          <div key={index} className="space-y-3 pb-8 border-b border-dashed border-neutral-200" id={`privacy-block-${index + 1}`}>
            <h3 className="font-serif text-[18px] md:text-[22px] font-semibold text-heritage-red leading-tight flex items-start gap-2.5">
              <span className="font-mono text-xs text-[#D4AF37] pt-1.5">{section.num}</span>
              <span>{currentLang === "EN" ? section.titleEN : section.titleTH}</span>
            </h3>
            <p className="text-xs md:text-[13px] text-neutral-600 leading-relaxed font-sans">
              {currentLang === "EN" ? section.contentEN : section.contentTH}
            </p>
          </div>
        ))}
      </section>

      {/* 3. CORE CINEMATIC LANDSCAPE IMAGE (THE COPPERS / WARP THREADS ON LOOM) */}
      <section className="max-w-4xl mx-auto py-4" id="loom-threads-banner-section">
        <div className="border border-metallic-gold/30 p-1.5 bg-white">
          <div className="relative w-full aspect-[21/9] overflow-hidden bg-neutral-950">
            <img
              src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1200"
              alt="Loom threads setup warp wire details"
              className="w-full h-full object-cover object-center filter saturate-75 contrast-125"
            />
            {/* Visual corner accents denoting craft */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#FCFBF4]/80"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#FCFBF4]/80"></div>
          </div>
        </div>
        <p className="text-[10px] tracking-wider text-neutral-400 mt-2 text-center uppercase font-mono">
          {currentLang === "EN"
            ? "PLATE 42 • ALIGNMENT OF PRE-TENSIONED SILK FILAMENTS (WARP GRIDS)"
            : "หมวดคติภาพขั้ว ๔๒ • การสอดแถวเส้นด้ายดิ้นทองคำแนวระนาบก่อนยกดอก"}
        </p>
      </section>

      {/* 4. PRIVACY SECTIONS PART 2 */}
      <section className="max-w-3xl mx-auto space-y-8">
        {PRIVACY_SECTIONS_PART2.map((section, index) => (
          <div key={index} className="space-y-3 pb-8 border-b border-dashed border-neutral-200" id={`privacy-block-pt2-${index + 1}`}>
            <h3 className="font-serif text-[18px] md:text-[22px] font-semibold text-heritage-red leading-tight flex items-start gap-2.5">
              <span className="font-mono text-xs text-[#D4AF37] pt-1.5">{section.num}</span>
              <span>{currentLang === "EN" ? section.titleEN : section.titleTH}</span>
            </h3>
            <p className="text-xs md:text-[13px] text-neutral-600 leading-relaxed font-sans">
              {currentLang === "EN" ? section.contentEN : section.contentTH}
            </p>
          </div>
        ))}
      </section>

      {/* 5. INDIVIDUAL PATRON RIGHTS (BENTO CARDS) */}
      <section className="max-w-4xl mx-auto space-y-6" id="patron-rights-section">
        <div className="text-center space-y-2">
          <span className="text-[9px] uppercase tracking-wider text-metallic-gold font-bold">
            PATRON CONFIDENCE
          </span>
          <h2 className="font-serif text-2xl font-bold text-heritage-red uppercase tracking-wider">
            {t.rightsTitle}
          </h2>
          <p className="text-xs text-neutral-600 max-w-lg mx-auto leading-relaxed">
            {t.rightsSub}
          </p>
        </div>

        {/* Bento Grid with 4 beige container boxes exactly like mockup 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          
          <div className="bg-[#f5f4ed] border border-[#e3beb8]/30 p-5 space-y-2 text-left" id="card-right-access">
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#8B0000] font-bold">
              {t.rights_access_title}
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              {t.rights_access_desc}
            </p>
          </div>

          <div className="bg-[#f5f4ed] border border-[#e3beb8]/30 p-5 space-y-2 text-left" id="card-right-rect">
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#8B0000] font-bold">
              {t.rights_rect_title}
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              {t.rights_rect_desc}
            </p>
          </div>

          <div className="bg-[#f5f4ed] border border-[#e3beb8]/30 p-5 space-y-2 text-left" id="card-right-erase">
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#8B0000] font-bold">
              {t.rights_erase_title}
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              {t.rights_erase_desc}
            </p>
          </div>

          <div className="bg-[#f5f4ed] border border-[#e3beb8]/30 p-5 space-y-2 text-left" id="card-right-obj">
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#8B0000] font-bold">
              {t.rights_obj_title}
            </h4>
            <p className="text-[11px] text-neutral-600 leading-relaxed">
              {t.rights_obj_desc}
            </p>
          </div>

        </div>
      </section>

      {/* 6. CONTACT US / LINE ENQUIRY BLOCK */}
      <section className="max-w-3xl mx-auto pt-8 text-center" id="privacy-officer-section">
        <div className="bg-[#f5f4ed] border border-[#e3beb8]/30 p-8 md:p-12 space-y-6">
          <h3 className="font-serif text-[20px] md:text-[24px] font-bold text-heritage-red uppercase tracking-wider">
            7. {currentLang === "EN" ? "Contact Us" : "ส่งสารประสานงาน"}
          </h3>
          <p className="text-xs md:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
            {currentLang === "EN"
              ? "For all inquiries regarding your privacy, data protection, or to exercise your rights, please reach out to our dedicated Privacy Officer."
              : "สำหรับข้อพิพาท คราบคำร้องถอนสิทธิ์ข้อมูล หรือตรวจเช็คใบอนุญาตสัญญาทั้งหมด โปรดติดต่อเข้าพบนายทะเบียนความปลอดภัยข้อมูลอยุธยาผ่านช่องทางกลางพิเศษ"}
          </p>

          <div>
            <button
              onClick={() => onOpenInquiry("Privacy Policy Officer request")}
              className="bg-[#610000] hover:bg-neutral-900 text-white text-[11px] uppercase tracking-[0.25em] font-bold py-4 px-8 transition-colors duration-300"
              id="inquire-via-line-btn"
            >
              {t.inquireLineLine}
            </button>
          </div>

          <p className="text-[10px] text-neutral-400 font-mono pt-2">
            {t.lastUpdated_October_2024}
          </p>
        </div>
      </section>

    </div>
  );
}
