import { Language, TRANSLATIONS, TERMS_SECTIONS } from "../data";
import { HelpCircle, ShieldCheck, Mail, FileText } from "lucide-react";

interface TermsOfServiceProps {
  currentLang: Language;
  onOpenInquiry: (itemName?: string) => void;
}

export default function TermsOfService({ currentLang, onOpenInquiry }: TermsOfServiceProps) {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-20 animate-fade-in space-y-12" id="terms-of-service-view">
      
      {/* 1. LEGAL FRAMEWORK TOP HEADER */}
      <section className="text-center space-y-4 max-w-xxl mx-auto">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold font-sans block">
          {t.frameworkTitle}
        </span>
        <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-bold text-heritage-red tracking-tight leading-none">
          {t.termsOfService}
        </h1>
        <hr className="w-16 h-[0.5px] bg-[#e3beb8]/50 mx-auto" />
        <p className="text-xs sm:text-sm font-sans text-neutral-500 italic">
          {t.effectiveDate}
        </p>
      </section>

      {/* 2. TERMS CLAUSES SECTIONS */}
      <section className="max-w-3xl mx-auto space-y-10">
        {TERMS_SECTIONS.map((section, index) => {
          const isHighlighted = section.highlight === true;

          return (
            <div
              key={index}
              className={`transition-all duration-300 ${
                isHighlighted
                  ? "bg-[#efeee7] border-l-4 border-[#8B0000] p-6 sm:p-8 space-y-4 shadow-sm"
                  : "space-y-3 pb-8 border-b border-dashed border-neutral-200"
              }`}
              id={`terms-block-${index + 1}`}
            >
              <h3 className="font-serif text-[18px] md:text-[22px] font-semibold text-heritage-red leading-tight flex items-start gap-2.5">
                <span className="font-mono text-xs text-metallic-gold/80 pt-1.5">{section.num}</span>
                <span>{currentLang === "EN" ? section.titleEN : section.titleTH}</span>
              </h3>

              <p className={`text-xs md:text-[13px] text-neutral-700 leading-relaxed font-sans ${
                isHighlighted ? "font-medium" : "text-neutral-600"
              }`}>
                {currentLang === "EN" ? section.contentEN : section.contentTH}
              </p>
              
              {isHighlighted && (
                <div className="flex items-center gap-2 pt-2 text-[9px] uppercase tracking-widest text-metallic-gold font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{currentLang === "EN" ? "Authenticated Weave Patent Protection" : "การปกป้องพระราชทรัพย์ศิลปกรรมลิขสิทธิ์"}</span>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 3. ROYAL PROVENANCE SEAL & CONCIERGE LINK */}
      <section className="pt-8 text-center space-y-6 max-w-md mx-auto">
        
        {/* Center item wax seal ornament image */}
        <div className="flex justify-center flex-col items-center">
          <div className="w-32 h-20 overflow-hidden border border-[#e3beb8]/30 shadow-inner bg-white p-1">
            <img
              src="https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=300"
              alt="Ayutthaya royal wax sealing wax"
              className="w-full h-full object-cover filter contrast-125 saturate-50"
            />
          </div>
          <span className="text-[8px] font-mono uppercase text-metallic-gold mt-2 tracking-widest">
            AUTHENTIC SEAL-FLAG NO. 12
          </span>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-neutral-600 font-sans italic">
            {t.conciergeText}
          </p>
          <button
            onClick={() => onOpenInquiry("Legal Terms Verification request")}
            className="inline-flex items-center gap-2 bg-[#1b1c18] hover:bg-neutral-800 text-white text-[10px] uppercase tracking-[0.25em] font-bold py-3.5 px-6 transition-all duration-300"
          >
            <HelpCircle className="w-3.5 h-3.5 text-metallic-gold" />
            <span>{currentLang === "EN" ? "Contact Legal Concierge" : "ติดต่อฝ่ายนิติอู่ศิลป์หลวง"}</span>
          </button>
        </div>

      </section>

    </div>
  );
}
