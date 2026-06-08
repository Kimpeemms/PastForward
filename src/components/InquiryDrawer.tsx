import { Language, TRANSLATIONS, COLLECTION_ITEMS } from "../data";
import { X, Send, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import React, { useState, FormEvent } from "react";

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItemName?: string;
  currentLang: Language;
}

export default function InquiryDrawer({
  isOpen,
  onClose,
  selectedItemName,
  currentLang,
}: InquiryDrawerProps) {
  const t = TRANSLATIONS[currentLang];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bespokeWidth, setBespokeWidth] = useState("Standard (1.2m)");
  const [threadType, setThreadType] = useState("Pure Thai Royal Gold (พิกุลทองกษัตริย์)");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end animate-fade-in" id="inquiry-drawer-overlay">
      {/* Background Dim Backdrop */}
      <div
        className="absolute inset-0 bg-[#130704]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content panel */}
      <div className="relative w-full max-w-lg bg-[#fafaf3] h-full shadow-2xl flex flex-col z-10 border-l border-metallic-gold/30">
        {/* Header container */}
        <div className="p-8 border-b border-[#e3beb8]/30 flex items-center justify-between bg-[#f5f4ed]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-metallic-gold">
              {t.brandLegacy} • Bespoke Service
            </span>
            <h3 className="font-serif text-xl font-bold tracking-wider text-heritage-red mt-1">
              {t.inquireTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-1.5 text-neutral-500 hover:text-heritage-red hover:bg-[#efeee7] border border-transparent hover:border-neutral-300 transition-all cursor-pointer"
            id="close-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Panel */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          <p className="text-xs text-neutral-600 leading-relaxed">
            {t.inquireSubtitle}
          </p>

          {status === "success" ? (
            <div className="bg-[#efeee7] border-l-4 border-heritage-red p-6 space-y-4 animate-fade-in" id="inquiry-success-notification">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-metallic-gold animate-pulse" />
                <h4 className="font-serif text-[15px] font-bold text-heritage-red uppercase tracking-wider">
                  {currentLang === "EN" ? "Inquiry Acknowledged" : "จดบันทึกการสั่งจองเสร็จสิ้น"}
                </h4>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                {t.sendSuccess}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[10px] text-metallic-gold hover:text-heritage-red border-b border-metallic-gold/40 hover:border-heritage-red uppercase font-bold tracking-wider transition-all"
                >
                  {currentLang === "EN" ? "Make Another Inquiry" : "ต้องการจองเพิ่มอีกครั้ง"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Preselected Piece display */}
              {selectedItemName && (
                <div className="bg-[#f5f4ed] border border-[#e3beb8]/40 p-4">
                  <span className="text-[9px] uppercase tracking-wider text-metallic-gold block font-mono">
                    {currentLang === "EN" ? "Selected Masterpiece" : "ชิ้นงานจองทอจำเพาะ"}
                  </span>
                  <p className="font-serif text-sm font-semibold text-heritage-red mt-1">
                    {selectedItemName}
                  </p>
                </div>
              )}

              {/* Standard Guestbook Style inputs: Bottom border only (No Box style) */}
              <div className="space-y-5">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#5a403c] font-bold block mb-1">
                    {currentLang === "EN" ? "Distinguished Name" : "ชื่อ-นามสกุลจริง"}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.placeholderName}
                    className="w-full bg-transparent border-b border-[#8e706b]/40 py-2.5 text-xs text-neutral-800 placeholder-[#8e706b]/60 focus:outline-none focus:border-heritage-red transition-all"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#5a403c] font-bold block mb-1">
                    {currentLang === "EN" ? "Email Address" : "ที่อยู่อีเมลติดต่อหลัก"}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.placeholderEmail}
                    className="w-full bg-transparent border-b border-[#8e706b]/40 py-2.5 text-xs text-neutral-800 placeholder-[#8e706b]/60 focus:outline-none focus:border-heritage-red transition-all"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#5a403c] font-bold block mb-1">
                    {currentLang === "EN" ? "Line ID / Mobile Phone" : "Line ID หรือ เบอร์โทรศัพท์เคลื่อนที่"}
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.placeholderPhone}
                    className="w-full bg-transparent border-b border-[#8e706b]/40 py-2.5 text-xs text-neutral-800 placeholder-[#8e706b]/60 focus:outline-none focus:border-heritage-red transition-all"
                  />
                </div>

                {/* Custom Bespoke Tailoring Settings */}
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-metallic-gold font-bold block mb-2">
                      {currentLang === "EN" ? "Bespoke Width/Length" : "ขนาดสิ่งถักทอพิเศษ"}
                    </label>
                    <select
                      value={bespokeWidth}
                      onChange={(e) => setBespokeWidth(e.target.value)}
                      className="w-full bg-[#f5f4ed] border-b border-[#8e706b]/40 py-2 text-xs text-neutral-800 focus:outline-none"
                    >
                      <option>Standard (1.2m x 2.4m)</option>
                      <option>Royal Long (1.2m x 3.6m)</option>
                      <option>Waist Wrap Chong Kraben (1.5m x 4.2m)</option>
                      <option>Custom Hand Dimension (ระบุพิเศษ)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-metallic-gold font-bold block mb-2">
                      {currentLang === "EN" ? "Filament Gilded Yarn" : "เลือกดิ้นตกแต่งลายยกทอง"}
                    </label>
                    <select
                      value={threadType}
                      onChange={(e) => setThreadType(e.target.value)}
                      className="w-full bg-[#f5f4ed] border-b border-[#8e706b]/40 py-2 text-xs text-neutral-800 focus:outline-none"
                    >
                      <option>Royal Gold (พิกุลทองสยามกษัตริย์)</option>
                      <option>Celestial Silver (ดิ้นเงินพู่เงาวาวหลวง)</option>
                      <option>Rose Gold Copper (ดิ้นทองแดงโบร่ำประยุกต์)</option>
                      <option>Raw Organic Silk Weft Only (คราบไหมสัจจะดิบ)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#5a403c] font-bold block mb-1">
                    {currentLang === "EN" ? "Concierge Message" : "ระบุความจำนงเพิ่มเติมแก่อู่ทอศิลป์"}
                  </label>
                  <textarea
                    rows={4}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder={t.placeholderMessage}
                    className="w-full bg-transparent border-b border-[#8e706b]/40 py-2.5 text-xs text-neutral-800 placeholder-[#8e706b]/60 focus:outline-none focus:border-heritage-red transition-all resize-none"
                  />
                </div>
              </div>

              {/* Unique Royal Warrant and Security Seal */}
              <div className="bg-[#efeee7]/50 border border-neutral-200 p-4 space-y-2 text-[11px] text-neutral-500 leading-relaxed">
                <div className="flex items-center gap-2 text-[#5a403c] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-metallic-gold" />
                  <span>{currentLang === "EN" ? "Ayutthaya Provenance Guard" : "ค่านโยบายธรรมาภิบาล คุ้มครองรหัสลับสัญญาสยาม"}</span>
                </div>
                <p>
                  {currentLang === "EN"
                    ? "In compliance with PDPA guidelines, your contact details remain completely private and are encrypted within our legal archives."
                    : "ข้อมูลที่ท่านระบุเพื่อเข้าพบส่วนบุคคล จะถูกคุ้มครองรักษาอย่างเป็นส่วนตัวภายใต้กฎหมายสมาพันธ์ไทย ไม่มีการขายข้อมูลต่อเพื่อเสพสุขเชิงพาณิชย์"}
                </p>
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-heritage-red text-white py-4.5 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-neutral-900 transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 select-none cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>{t.sendLoading}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 stroke-[1.5]" />
                    <span>{t.submitInquiry}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer info inside Drawer */}
        <div className="p-6 bg-[#fafaf4] border-t border-[#e3beb8]/30 flex flex-col items-center justify-center gap-2">
          <p className="text-[10px] font-sans text-neutral-500 align-middle text-center">
            {currentLang === "EN" ? "Direct LINE Support: @pastforward" : "LINE ส่วนราชการชิ้นเอก: @pastforward"}
          </p>
          <p className="text-[9px] font-mono text-metallic-gold/70">
            SECURE EXQUISITE CONCIERGE CHANNEL
          </p>
        </div>
      </div>
    </div>
  );
}
