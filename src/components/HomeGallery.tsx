import { Language, TRANSLATIONS, COLLECTION_ITEMS, CollectionItem } from "../data";
import ThreeCanvas from "./ThreeCanvas";
import { Sparkles, Compass, Eye, ShieldCheck, ChevronRight, PenTool } from "lucide-react";
import { useState } from "react";

interface HomeGalleryProps {
  currentLang: Language;
  onOpenInquiry: (itemName?: string) => void;
}

export default function HomeGallery({ currentLang, onOpenInquiry }: HomeGalleryProps) {
  const t = TRANSLATIONS[currentLang];
  const [selectedProduct, setSelectedProduct] = useState<CollectionItem | null>(null);

  return (
    <div className="space-y-24 pb-20 animate-fade-in" id="home-gallery-wrapper">
      
      {/* 1. CINEMATIC HERO BANNER & THREEJS CANVAS GRID */}
      <section className="relative w-full bg-[#130704] text-white overflow-hidden py-16 md:py-24 px-4 sm:px-8 md:px-16" id="hero-banner-section">
        {/* Editorial silk backdrop drape image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
          <img
            src="https://images.unsplash.com/photo-1596265376427-46464b73dd67?auto=format&fit=crop&q=80&w=1600"
            alt="Royal Silk Backdrop"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Hero Left: Large luxurious typography layout */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-[#e9c349]">
              {currentLang === "EN" ? "Summer 2026 Editorial" : "บทบรรณาธิการ ฤดูร้อน ๒๕๖๙"}
            </span>

            <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[68px] font-bold leading-[1.1] tracking-tight max-w-xl text-neutral-50">
              {currentLang === "EN" ? "Heritage Reimagined The Summer Collection" : "ผสานมรดกสรรสร้างใหม่ คอลเลกชันฤดูร้อนเกียรติยศ"}
            </h1>

            <p className="text-[13px] md:text-sm font-sans text-neutral-300 max-w-md leading-relaxed tracking-wide">
              {currentLang === "EN"
                ? "Experience the spectacular, fluid intersection of traditional Siamese royal weaving with uncompromising high-fashion modern minimalism."
                : "ตราตรึงอารมณ์แห่งการสอดเส้นไหมคูรูลื่นพริ้วไหว ถักทอยกลวดลายดิ้นระยิบที่เกริ่นระลึกจากอารยธรรมราชสำนักอยุธยาผสมผสานศิลปะมินิมัลเฉียบสากล"}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  document.getElementById("featured-grid-anchor")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#D4AF37] hover:bg-white text-neutral-900 border border-transparent hover:border-metallic-gold py-4 px-8 text-xs font-bold uppercase tracking-wider transition-all duration-300 select-none cursor-pointer"
              >
                {t.exploreBelow}
              </button>

              <button
                onClick={() => onOpenInquiry("The Summer Collection Custom Set")}
                className="border border-[#e3beb8]/40 hover:border-white text-neutral-200 hover:text-white py-4 px-6 text-xs uppercase tracking-wider transition-all"
              >
                {currentLang === "EN" ? "Connect with private Weaver" : "ติดต่อพูดคุยกับหัวหน้าช่างทอ"}
              </button>
            </div>
          </div>

          {/* Hero Right: High-end Interactive 3D Three.js active loom canvas */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="border border-metallic-gold/30 bg-black/40 backdrop-blur-md p-2">
              <ThreeCanvas themeColor="red" />
            </div>
          </div>

        </div>
      </section>


      {/* 2. THE HERITAGE OF MOTION SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16" id="heritage-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text: Editorial storytelling layout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-heritage-red font-bold">
              <Compass className="w-4 h-4 text-metallic-gold" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-sans">
                {currentLang === "EN" ? "THE SARTORIAL ESSENCE" : "ความพริ้วไหวแห่งพัสตรากร"}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              {currentLang === "EN" ? "The Heritage of Motion" : "หัตถศิลป์แห่งความเคลื่อนไหว"}
            </h2>

            <p className="text-xs text-neutral-500 font-mono italic">
              {currentLang === "EN" ? "Ayutthaya Dynasty Dress Codex" : "สวสัดิภาพตำรับเครื่องแต่งกายอยุธยาตอนปลาย"}
            </p>

            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              {currentLang === "EN"
                ? "Discover the sartorial wisdom of the Ayutthaya Kingdom, where dress was an elegant response to the tropical sun. Men and women of the era were defined by the structured grace of the Chong Kraben, a traditional Thai silhouette reimagined for modern elegance."
                : "สืบเสาะถ้อยธรรมวิจิตรส่วนอารยศิลปรสพของอาณาจักรอยุธยาโบราณ เมื่อการแต่งกายคือสุนทรียภาพแห่งการประนีประนอมกับแสงสุริยาร้อนชื้น การใช้ผ้าสไบร้อยด้ายพู่ และการโจงกระเบนด้วยทรงโค้งมนพริ้ว ช่วยอำนวยความเบาลื่นระบายกายอย่างน่าอัศจรรย์ใจ"}
            </p>

            <blockquote className="border-l-2 border-[#D4AF37] pl-4 italic text-xs text-neutral-600 font-sans leading-relaxed">
              {currentLang === "EN"
                ? "These magnificent drapes provided effortless breathability and motion, woven with the same fine gold filaments and natural Mulberry silk yarn that defines our esteemed atelier today."
                : "\"ผืนผ้าเหล่านี้ช่วยมอบปีกแห่งความหรูที่เคลื่อนไหวคล่องเนื้อ ทอสอดด้ายทองคำแท่งเหลวอันเป็นสิทธิการศึกษาเดียวกับอู่ทอปัจจุบันสะท้อนผ่านหน้าแกลเลอรี่นี้\""}
            </blockquote>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry("Custom Chong Kraben Weave Consultation")}
                className="text-[11px] uppercase tracking-widest text-[#8B0000] hover:text-neutral-900 font-bold border-b border-[#8B0000]/30 hover:border-neutral-900 transition-all py-1"
              >
                {currentLang === "EN" ? "Read Dynasty Treatise" : "ศึกษาบันทึกหอพัสตราลัย"}
              </button>
            </div>
          </div>

          {/* Right Fine Art Frame: Outline drawing depicting traditional Thai pose */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="bg-[#f5f4ed] border border-[#e3beb8]/30 shadow-md p-6 max-w-lg w-full flex flex-col items-center">
              
              {/* Image resembling fine charcoal illustration */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-white border border-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800"
                  alt="Ancient Thai Costume Sketch Drawing"
                  className="w-full h-full object-cover mix-blend-multiply filter contrast-125"
                />
                
                {/* Visual Label overlay */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-neutral-300 p-2 text-left">
                  <p className="text-[9px] font-mono uppercase text-neutral-500 tracking-wider">
                    Plat-No. 12 • Traditional Silhouette
                  </p>
                  <p className="text-[10px] font-serif font-bold text-heritage-red">
                    Yok Dok Royal Draping
                  </p>
                </div>
              </div>

              {/* Curator caption notes below */}
              <div className="w-full text-center mt-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                  {currentLang === "EN" ? "Museum Exhibition Canvas Frame No. 4" : "ภาพบันทึกพรมทองลำดับที่ ๔ พิพิธภัณฑ์อู่ทอง"}
                </p>
                <p className="text-[9px] text-neutral-400 mt-1 italic font-mono">
                  Fine-yarn archival charcoal on fiber-paper • Private Curator collection
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* 3. SEWING AND WEAVING BLUEPRINT SKETCHES (FULL SCREEN CULTURAL BANNER) */}
      <section className="bg-[#efeee7] border-y border-[#e3beb8]/40 py-16 px-4 sm:px-8 md:px-16" id="atelier-section">
        <div className="max-w-[1440px] mx-auto text-center space-y-10">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] tracking-[0.25em] text-metallic-gold uppercase font-bold font-sans">
              {currentLang === "EN" ? "DESIGN SYNTHESIS & INCEPTION" : "กระบวนการรังสรรค์พิมพ์เขียวลายทอ"}
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-heritage-red">
              {currentLang === "EN" ? "Ayutthaya Atelier: Heritage & Innovation" : "อยุธยาเวหาเทียร์: มรดกและวิศวกรรมร่วมสมัย"}
            </h2>
            <p className="text-xs text-neutral-600 max-w-xl mx-auto leading-relaxed">
              {currentLang === "EN"
                ? "Witness how ancient Thai loom drafts and pattern notations meet high-pressure modern suit tailoring techniques to materialize pieces of elite luxury."
                : "ชมถ้อยโครงร่างจำลองการเย็บประสานรอยปกสากลตะวันตก เข้ากับลายผ้าเบื้องล่างกะบังหลวง เพื่อให้ชิ้นงานทอไม่เพียงเสพความสวยงาม แต่วาดลวดโครงเสื้อผ้าหรูสวมใส่สบาย"}
            </p>
          </div>

          {/* Sewing pattern blueprints details overlapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="bg-[#fafaf3] border border-neutral-300 p-5 space-y-3 text-left">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                <span>SEGMENT A-1 • PATTERN DRAFT</span>
                <PenTool className="w-4.5 h-4.5 text-metallic-gold" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400"
                alt="Draft sketch detail"
                className="w-full h-44 object-cover filter saturate-50 contrast-125 border border-neutral-200"
              />
              <p className="font-serif text-xs font-bold text-heritage-red uppercase tracking-wider">
                {currentLang === "EN" ? "Celestial Weft Loom Grid" : "ลายกตัญญูกริด ทรงเกลียวพานดาว"}
              </p>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {currentLang === "EN"
                  ? "Symmetrical matrices used to guide the weaver in placing each golden thread at a precise 90-degree intersection."
                  : "โครงแบบลายยัดพุ่งแบบตาราง อัญเชิญสูตรสมดุลดั้งเดิมเพื่อประทับลวดลายได้ระนาบ 90 องศาแนวขนาน"}
              </p>
            </div>

            <div className="bg-[#fafaf3] border border-neutral-300 p-5 space-y-3 text-left">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                <span>SEGMENT B-4 • SILK PROCESSING</span>
                <Sparkles className="w-4.5 h-4.5 text-metallic-gold" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=400"
                alt="Process sketch detail"
                className="w-full h-44 object-cover filter grayscale border border-neutral-200"
              />
              <p className="font-serif text-xs font-bold text-heritage-red uppercase tracking-wider">
                {currentLang === "EN" ? "Organic Filament Softening" : "สุนทรียภาพแห่งสระเส้นไหมดิบ"}
              </p>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {currentLang === "EN"
                  ? "Natural raw threads boiled in rainwater and organic leaves to acquire a unique subtle sheen and buttery texture."
                  : "ต้มสลัดล้างเซริซินรังไหมในอุณหภูมิน้ำฝนบริสุทธิ์ ผสมยอดใบชาป่าเพื่อให้เส้นไหมนิ่มเหนียวระยับพริ้วงาม"}
              </p>
            </div>

            <div className="bg-[#fafaf3] border border-neutral-300 p-5 space-y-3 text-left md:col-span-2 lg:col-span-1">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                <span>SEGMENT C-9 • TAILORED FORM</span>
                <ShieldCheck className="w-4.5 h-4.5 text-metallic-gold" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&q=80&w=400"
                alt="Dress form details"
                className="w-full h-44 object-cover filter contrast-125 border border-neutral-200"
              />
              <p className="font-serif text-xs font-bold text-heritage-red uppercase tracking-wider">
                {currentLang === "EN" ? "Drape Shoulder Anatomy" : "สรีรวิทยาสไบไหล่ประกบโค้งมน"}
              </p>
              <p className="text-[11px] text-neutral-600 leading-normal">
                {currentLang === "EN"
                  ? "Carefully formulated seam allocations allowing the heavy hand-woven brocade to rest securely on modern blazer lines."
                  : "วิธีการจัดทำแพทเทิร์นขอบเอวขี่ทับ เพื่อให้ความหนาของไหมทอยกรอยโบราณเกาะไหล่แจ็กเกตสากลได้ไร้ความเต่งตึง"}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 4. THE CURATED EXHIBITION OF FEATURED PIECES */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 space-y-12" id="featured-grid-anchor">
          
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-bold font-sans">
            {currentLang === "EN" ? "MUSEUM GRADE ACQUISITIONS" : "ผลงานอนุรักษ์ระดับครอบครองพิเศษ"}
          </span>
          <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-heritage-red">
            {t.featuredTitle}
          </h2>
          <div className="w-12 h-[2px] bg-metallic-gold mx-auto" />
          <p className="text-xs text-neutral-600 leading-relaxed max-w-xl mx-auto">
            {t.featuredSub}
          </p>
        </div>

        {/* Gallery grid featuring the 4 pieces explicitly requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {COLLECTION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#fafaf4] border border-[#e3beb8]/30 overflow-hidden flex flex-col justify-between hover:border-metallic-gold/60 transition-all duration-500 hover:shadow-lg relative"
              id={`product-card-${item.id}`}
            >
              {/* Product Visual */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-neutral-900 border-b border-[#e3beb8]/20">
                <img
                  src={item.image}
                  alt={currentLang === "EN" ? item.nameEN : item.nameTH}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlap tag in high-fashion fashion template */}
                <div className="absolute top-4 left-4 bg-[#1b1c18] text-white px-3 py-1.5 text-[8px] uppercase tracking-widest font-bold border border-metallic-gold/30">
                  {currentLang === "EN" ? item.categoryEN : item.categoryTH}
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[#FCFBF4] text-heritage-red px-2.5 py-1 text-[8px] uppercase tracking-[0.2em] font-sans font-bold border border-heritage-red">
                    Rare Provenance
                  </span>
                </div>
              </div>

              {/* Informative Grid Data */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-between items-baseline gap-4 pr-1">
                  <h3 className="font-serif text-[18px] md:text-[20px] font-bold text-heritage-red tracking-tight leading-tight">
                    {currentLang === "EN" ? item.nameEN : item.nameTH}
                  </h3>
                  <span className="text-xs font-mono font-bold text-metallic-gold">
                    {currentLang === "EN" ? item.priceEN : item.priceTH}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed min-h-[50px]">
                  {currentLang === "EN" ? item.descriptionEN : item.descriptionTH}
                </p>

                {/* Deep Specifications */}
                <div className="bg-[#f5f4ed] p-3 text-[10px] text-[#5a403c] font-medium border-l-2 border-metallic-gold/40 space-y-1">
                  <span className="text-[8px] tracking-wider text-neutral-400 font-bold uppercase block">
                    {currentLang === "EN" ? "TECHNICAL SIGNATURE" : "อัตลักษณ์ชิ้นทอมือ"}
                  </span>
                  <span>{currentLang === "EN" ? item.specEN : item.specTH}</span>
                </div>

                {/* Call to Bespoke Actions */}
                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => onOpenInquiry(currentLang === "EN" ? item.nameEN : item.nameTH)}
                    className="flex-1 bg-heritage-red text-white hover:bg-neutral-900 py-3 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-300 text-center select-none cursor-pointer"
                  >
                    {currentLang === "EN" ? "Request To Order" : "ยื่นเรื่องสั่งทอพิเศษ"}
                  </button>

                  <button
                    onClick={() => setSelectedProduct(selectedProduct?.id === item.id ? null : item)}
                    className="p-3 border border-[#8e706b]/30 hover:border-heritage-red text-neutral-600 hover:text-heritage-red transition-all cursor-pointer"
                    aria-label="View close up detail"
                  >
                    <Eye className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
              </div>

              {/* Collapsible detailed closeup drawing */}
              {selectedProduct?.id === item.id && (
                <div className="p-6 bg-[#f5f4ed] border-t border-[#e3beb8]/40 animate-fade-in text-left">
                  <h4 className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-3">
                    {currentLang === "EN" ? "Macro Textile Weft Closeup" : "ภาพซูมกล้องจุลทรรศน์เกลียวพุ่งเส้นไหม"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <img
                      src={item.detailImage}
                      alt="Closeup weave details"
                      className="sm:col-span-5 w-full h-28 object-cover border border-neutral-300"
                    />
                    <div className="sm:col-span-7 space-y-2 text-[11px] text-neutral-600 leading-relaxed">
                      <p className="italic font-serif">
                        {currentLang === "EN"
                          ? "This macro view demonstrates the incredible thread count density and the golden or silver ribbon wefts that define the craft."
                          : "รายละเอียดการอัดแน่นของกลุ่มไหมเส้นหลัก ช่วยประสานดิ้นทองไม่ให้หลุดขาดง่าย แม้บรรจุพัสดุหีบยาวหลอมหุ้มกล่อง"}
                      </p>
                      <span className="text-[8px] font-mono text-metallic-gold tracking-widest uppercase block">
                        AUTHENTICATED • AYUTTHAYA GOVERNMENT SIGNATURE
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
