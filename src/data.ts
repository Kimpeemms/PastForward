export type Language = "EN" | "TH";

export interface CollectionItem {
  id: string;
  nameEN: string;
  nameTH: string;
  categoryEN: string;
  categoryTH: string;
  priceEN: string;
  priceTH: string;
  image: string;
  detailImage: string;
  descriptionEN: string;
  descriptionTH: string;
  specEN: string;
  specTH: string;
}

export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: "item-1",
    nameEN: "The Royal Crimson Drape",
    nameTH: "ผ้าสไบราชาสีแดงคราม",
    categoryEN: "Yok Dok Heritage Silk",
    categoryTH: "ผ้าไหมยกดอกอัตลักษณ์หลวง",
    priceEN: "฿85,000",
    priceTH: "85,000 บาท",
    image: "https://images.unsplash.com/photo-1596265376427-46464b73dd67?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=800",
    descriptionEN: "A majestic hand-woven silk colored in deep royal crimson, adorned with delicate gold-plated traditional Thai flower motifs. Each thread is spun over three months to capture the absolute peak of Ayutthaya excellence.",
    descriptionTH: "ผ้าสไบไหมทอมือมรดกพรีเมียมสีแดงก่ำหลวง ตกแต่งด้วยลายพิกุลแทรกดิ้นทองแท้ ทุกเส้นใยผ่านการปั่นและถักทอด้วยมืออย่างพิถีพิถันนานกว่าสามเดือน เพื่อสะท้อนถึงความวิจิตรบรรจงอันเปี่ยมด้วยจิตวิญญาณแห่งอยุธยา",
    specEN: "100% Organic Mulberry Silk, Hand-spun real gold thread (Dhin Gold), 2.4m length",
    specTH: "ไหมเส้นไหมมัลเบอร์รี่แท้ 100%, ดิ้นทองคำแท้ทอมือยกดอก, ความยาว 2.4 เมตร"
  },
  {
    id: "item-2",
    nameEN: "The Ivory Loom Tassels",
    nameTH: "ผ้าไหล่ชายคลื่นมรดกสีไอวอรี",
    categoryEN: "Classic Weave Weft",
    categoryTH: "คอลเลกชันทอคลาสสิก",
    priceEN: "฿42,000",
    priceTH: "42,000 บาท",
    image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
    descriptionEN: "Meticulous ivory white tassels displaying the exquisite warp and weft craftsmanship of the artisan. Perfect for modern high-fashion draping while paying tribute to traditional Thai looming.",
    descriptionTH: "ผ้าพาดไหล่ตกแต่งพู่ทอละเอียดประณีต เผยให้เห็นลายสอดประสานของเส้นยืนและเส้นพุ่งอันวิจิตร เหมาะสำหรับการสวมใส่และคลุมไหล่ในระดับสากลทว่ายังคงรักษาเสน่ห์ของงานทอมือไทยแบบดั้งเดิม",
    specEN: "Hand spun high-density fine cotton & wild silk, hand-knotted fringe accents",
    specTH: "เส้นใยฝ้ายผสมไหมป่าทอมือระดับความหนาแน่นสูง, ตกแต่งชายพู่ทอมือทำมือ"
  },
  {
    id: "item-3",
    nameEN: "The Royal Suwannabhumi Brocade",
    nameTH: "ผ้าไหมยกทองสุวรรณภูมิ",
    categoryEN: "Loom Masterpieces",
    categoryTH: "ผลงานศิลปกรรรมเครื่องทอผ้า",
    priceEN: "฿120,000",
    priceTH: "120,000 บาท",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    descriptionEN: "A supreme heritage masterpiece. Styled with gold leaf filaments interwoven tightly with maroon dyed wild silk, depicting the historical celestial grid patterns of the Siamese courts.",
    descriptionTH: "งานชิ้นเอกระดับราชสำนักขั้นสูงสุด ออกแบบด้วยลวดลายกะบังหรี่แทรกดิ้นทองคำแท้ ทอแน่นประสานกับไหมป่าที่ย้อมด้วยสีธรรมชาติจากครั่งและสมุนไพรโบราณอันทรงคุณค่า",
    specEN: "Siamese Royal Weave Pattern, Natural Lac-dyed Silk yarn, Double-weft luxury structure",
    specTH: "ลายยกทองโบราณราชสำนักสยาม, เส้นไหมย้อมสีธรรมชาติจากครั่ง, โครงสร้างทับซ้อนเกลียวไหมสองชั้น"
  },
  {
    id: "item-4",
    nameEN: "The Obsidian Loom Heritage Yarn",
    nameTH: "ผ้าห่มยกดอกมรดกออบซิเดียน",
    categoryEN: "Monochrome Artisan Silk",
    categoryTH: "ไหมศิลปหัตถกรรมร่วมสมัย",
    priceEN: "฿64,000",
    priceTH: "64,000 บาท",
    image: "https://images.unsplash.com/photo-1524295988346-e575b5b9c7b9?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1614850523011-8f49fc9ec671?auto=format&fit=crop&q=80&w=800",
    descriptionEN: "Minimalist slate-tinted and gray raw silks, folded masterfully with a traditional hand shuttle loom tool on display. It represents structured design meets historical precision.",
    descriptionTH: "ผ้าไหมทอดิบสีชาร์โคลมินิมอลผสานเฉดเทาเงิน พับเรียงร้อยด้วยความสมดุลหรูหรา มาพร้อมกระสวยทอไม้ชิงชัน โชว์พลังความร่วมสมัยที่ไม่เคยโรยราของงานถักทอลายราชสำนัก",
    specEN: "Premium high-twist raw silk from Ayutthaya weaving hubs, structured matte finish",
    specTH: "ไหมเส้นใยดิบคูรูคุณภาพสูงตีเกลียวหนาแน่นจากอู่ทออยุธยา, ผิวสัมผัสเนื้อแมตต์หรูหรา"
  }
];

export const TRANSLATIONS = {
  EN: {
    brandName: "PASTFORWARD",
    brandMotto: "Preserving the soul of Siamese weaving through contemporary luxury and timeless storytelling.",
    brandLegacy: "AYUTTHAYA ATELIER",
    frameworkTitle: "LEGAL FRAMEWORK",
    legalGov: "LEGAL GOVERNANCE",
    theCollection: "The Collection",
    heritage: "Heritage",
    atelier: "Atelier",
    journal: "Journal",
    inquireBtn: "Inquire via Line",
    inquireTitle: "Artisanal Inquiry",
    inquireSubtitle: "Contact our dedicated concierge to acquire or customize your piece.",
    placeholderName: "Your Distinguished Name",
    placeholderEmail: "Email Address",
    placeholderPhone: "Line ID / Phone Number",
    placeholderMessage: "Express your interest, bespoke customization requests, or queries...",
    submitInquiry: "Submit Bespoke Inquiry",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    contactUs: "Contact Us",
    exploreBelow: "Explore the Collection Below",
    effectiveDate: "Effective Date: October 24, 2023",
    lastUpdated_October_2024: "Last Updated: October 2024",
    conciergeText: "For inquiries regarding these terms, please contact our concierge",
    disclaimer: "© 2026 PastForward. All Rights Reserved.",
    backToGallery: "Back to Gallery",
    sendSuccess: "Thank you. Our private concierge will reach out to you within 24 hours.",
    sendLoading: "Connecting with the concierge...",
    featuredTitle: "Featured Pieces",
    featuredSub: "Curated selections from our latest collection, embodying the intersection of historical grandeur and contemporary minimalism.",
    rightsTitle: "Your Rights",
    rightsSub: "As a valued patron, you retain full sovereignty over your data. You have the right to:",
    inquireLineLine: "INQUIRE VIA LINE",
    rights_access_title: "ACCESS & REVIEW",
    rights_access_desc: "Request a comprehensive copy of all personal data we hold in our archives.",
    rights_rect_title: "RECTIFICATION",
    rights_rect_desc: "Update or correct any inaccuracies in your profile or purchase history.",
    rights_erase_title: "ERASURE",
    rights_erase_desc: "Request the permanent deletion of your data from our systems, subject to legal obligations.",
    rights_obj_title: "OBJECTION",
    rights_obj_desc: "Withdraw consent for marketing communications at any time with immediate effect."
  },
  TH: {
    brandName: "PASTFORWARD",
    brandMotto: "ธำรงคุณค่าแห่งจิตวิญญาณสยามผ่านผืนผ้าอันงดงามร่วมสมัยและการเล่าเรื่องที่ไร้กาลเวลา",
    brandLegacy: "อู่ทอศิลป์อยุธยา",
    frameworkTitle: "กรอบข้อตกลงทางกฎหมาย",
    legalGov: "โครงสร้างธรรมาภิบาลทางข้อมูล",
    theCollection: "พัสตราภรณ์",
    heritage: "มรดกกรรม",
    atelier: "อู่ทอศิลป์",
    journal: "ประวัติศาสตร์",
    inquireBtn: "สอบถามผ่านบริการ Line",
    inquireTitle: "ติดต่ออู่ศิลป์พัสตราภรณ์",
    inquireSubtitle: "ให้ข้อมูลผู้เชี่ยวชาญเฉพาะบุคคลดูแลการสั่งทอพิเศษหรือจัดซื้อชิ้นงานระดับมาสเตอร์พีซของคุณ",
    placeholderName: "นามอันทรงเกียรติของคุณ",
    placeholderEmail: "ที่อยู่อีเมลของคุณ",
    placeholderPhone: "Line ID หรือหมายเลขโทรศัพท์",
    placeholderMessage: "ความประสงค์ในการทอพิเศษ หรือความต้องการรายละเอียดงานศิลปร่วมสมัย...",
    submitInquiry: "ส่งคำปรึกษาสั่งทอพิเศษ",
    termsOfService: "เงื่อนไขการให้บริการ",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    contactUs: "ติดต่อเรา",
    exploreBelow: "ร่วมสำรวจมรดึกพัสตราภรณ์ด้านล่าง",
    effectiveDate: "มีผลบังคับใช้ตั้งแต่วันที่: 24 ตุลาคม 2566",
    lastUpdated_October_2024: "ปรับปรุงล่าสุด: ตุลาคม 2567",
    conciergeText: "หากมีข้อสงสัยใด ๆ เกี่ยวกับเงื่อนไขข้างต้น โปรดติดต่อแผนกต้อนรับส่วนตัวของเรา",
    disclaimer: "© 2026 PastForward. สงวนลิขสิทธิ์ทั้งหมด",
    backToGallery: "กลับสู่หน้าแกลเลอรี่",
    sendSuccess: "กราบขอบพระคุณอย่างยิ่ง ทางแผนกต้อนรับส่วนบุคคลของเราจะติดต่อกลับหาคุณภายใน 24 ชั่วโมง",
    sendLoading: "ตักเตรียมสัญญาณการเชื่อมต่อ...",
    featuredTitle: "ผ้าชิ้นเด่นคัดสรรพิเศษ",
    featuredSub: "ผลงานเอกอุจากคอลเลกชันฤดูร้อนล่าสุด ที่หลอมรวมระหว่างอัตลักษณ์รุ่งโรจน์ทางประวัติศาสตร์และทัศนศิลป์แห่งความประณีตเรียบเฉียบสไตล์มินิมัลร่วมสมัย",
    rightsTitle: "สิทธิของคุณในฐานะผู้อุปถัมภ์",
    rightsSub: "ในฐานะลูกค้าระดับสูงผู้ทรงคุณค่า คุณจะมีสิทธิ์เด็ดขาดในข้อมูลส่วนบุคคลของคุณ ดังนี้:",
    inquireLineLine: "ติดต่อเราผ่านทาง LINE",
    rights_access_title: "การเข้าถึงและการตรวจสอบสิทธิ์",
    rights_access_desc: "ขอคำร้องสำเนาข้อมูลส่วนบุคคลทั้งหมดที่เราบันทึกจัดเก็บไว้ในหอจดหมายเหตุแบรนด์",
    rights_rect_title: "การแจ้งลบและแก้ไขข้อมูล",
    rights_rect_desc: "อัปเดตหรือชี้แจงส่วนต่าง ๆ ของโปรไฟล์ทางธุรกิจและประวัติการจัดซื้อชิ้นงานให้ถูกต้อง",
    rights_erase_title: "การทำลายข้อมูลอย่างสมบูรณ์",
    rights_erase_desc: "ยื่นเรื่องสั่งลบข้อมูลประวัติทั้งหมดของท่านจากฐานระบบคอมพิวเตอร์อย่างถาวรตามกฎหมายข้อมูล",
    rights_obj_title: "การระงับใช้ข้อมูลเพื่อสิทธิ์",
    rights_obj_desc: "ถอนคำอนุญาตในการสื่อสารนโยบายการตลาดกับแบรนด์ได้ทุกเมื่อ โดยมีผลบังคับใช้อย่างเป็นทางการทันที"
  }
};

export const TERMS_SECTIONS = [
  {
    num: "1.",
    titleEN: "Introduction",
    titleTH: "บทนําการสถาปนาข้อตกลง",
    contentEN: "Welcome to PastForward (referred to as \"we,\" \"us,\" or \"our\"). These Terms of Service govern your use of our website and services provided through our digital boutique. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms, which comply with Thailand's Electronic Transactions Act B.E. 2544 and the Consumer Protection Act B.E. 2522.",
    contentTH: "ขอต้อนรับแด่ผู้มาเยือนทุกท่านเข้าสู่ PastForward (ซึ่งต่อไปนี้จะเรียกว่า \"เรา\" \"แบรนด์\" หรือ \"อู่ศิลป์\") เงื่อนไขการให้บริการเหล่านี้จัดขึ้นเพื่อควบคุมดูแลและคุ้มครองประโยชน์ของการเข้าใช้บริการแพลตฟอร์มผ่านหน้าดีไซน์รูปลักษณ์แกลเลอรี่ดิจิทัลเรือนหลวงนี้ การที่ท่านกดเข้า ยืนยัน หรือใช้งานอู่ทอผ้าดิจิทัลแต่อย่างใด ถือเป็นการตกลงยินยอมยอมรับซึ่งกรอบความรับผิดชอบทางกฎหมาย ภายใต้พระราชบัญญัติว่าด้วยธุรกรรมทางอิเล็กทรอนิกส์ พ.ศ. 2544 และพระราชบัญญัติคุ้มครองผู้บริโภค พ.ศ. 2522 แห่งราชอาณาจักรไทยอย่างสัมบูรณ์"
  },
  {
    num: "2.",
    titleEN: "Use of Service",
    titleTH: "ข้อปฏิบัติตามหลักสิทธิ์เข้าใช้บริการ",
    contentEN: "The services provided by PastForward are reserved for individuals of legal age in their respective jurisdictions. You agree to use the service for personal, non-commercial use only. Any fraudulent, abusive, or illegal activity may be grounds for termination of your access to the service.",
    contentTH: "การบริการข้อมูลศิลป์ทอพิเศษและผลงานจัดสร้างทั้งหมด จัดสงวนไว้เฉพาะสำหรับบุคลากรผู้บรรลุนิติภาวะตามพระราชบัญญัติแห่งเขตอำนาจศาลชั้นศาลของตนอย่างเคร่งครัด ท่านรับปรารภตกลงในการใช้งานข้อมูลเหล่านี้เพื่อวัตถุประสงค์เสพความงามส่วนศิลปกรรมโดยสงวนสิทธิ์ส่วนตัวเท่านั้น ห้ามนำข้อมูล แฟลชดีไซน์ ภาพถ่ายสิทธิ และรายละเอียดสิ่งถักทอม้วนโบราณในแกลเลอรี่ไปทำธุรกรรมเชิงคิชการค้าต่อแต่อย่างใดโดยไม่ได้รับลายลักษณ์อักษร"
  },
  {
    num: "3.",
    titleEN: "Intellectual Property & Yok Dok Heritage",
    titleTH: "ทรัพย์สินทางปัญญากรรมสิทธิ์ และการปกป้องลายผ้าโบราณ 'ยกดอกหลวง'",
    highlight: true,
    contentEN: "All content on this site, including but not limited to the signature Yok Dok patterns, textile designs, photography, and brand identity, is the exclusive intellectual property of Ayutthaya Atelier and protected under the Copyright Act B.E. 2537. The intricate weaving techniques and patterns showcased are a result of centuries of Thai heritage; reproduction, modification, or distribution without express written consent is strictly prohibited and constitutes a violation of traditional cultural expression rights.",
    contentTH: "ผลงานฝีพระหัตถ์ สิทธิบัตรกรรมวิธี และทรัพย์สินทางปัญญาแผงการออกแบบสิ่งประดับตกแต่งทั้งหมด โดยเฉพาะอย่างยิ่งลวดลายขึ้นเส้นทอดั้งเดิมอย่าง 'รอยลายยกดอกอยุธยาหลวง-พิกุลกษัตริย์' ตลอดจนสิทธิทางนวัตกรรมการวิจัยลวดลายไหม อัตลักษณ์เครื่องหมายการค้า และภาพถ่าย Cinematic ทั้งหมด ถือเป็นเอกสิทธิ์สิทธิ์ขาดของ อู่ทอศิลป์อยุธยา ภายใต้การคุ้มครองตามพระราชบัญญัติลิขสิทธิ์ พ.ศ. 2537 และสากลบัญญัติว่าด้วยทรัพย์สินทางปัญญากลุ่มชาติพันธุ์ดั้งเดิม การคัดลอก ดัดแปลง แอบอ้าง หรือเผยแพร่ต่อยอดเชิงพณิชย์เป็นสิ่งต้องห้ามและมีบทกำหนดโทษสูงสุด"
  },
  {
    num: "4.",
    titleEN: "Product Orders & Payments",
    titleTH: "วิถีแห่งการเข้าจองผลงาน และระบบการชำระแลกเปลี่ยน",
    contentEN: "All orders are subject to acceptance and availability. Given the artisanal nature of our textiles, slight variations in weave and color may occur, which are hallmarks of authentic handmade Yok Dok. Prices are listed in Thai Baht (THB) inclusive of applicable Value Added Tax (VAT). Payment must be made through our secured payment gateways or authorized bank transfers.",
    contentTH: "เนื่องด้วยผลงานส่วนใหญ่เป็นงานหัตถศิลป์ระดับพรีเมียมลิมิเต็ด (Bespoke Handwoven) ชิ้นชิ้นทอพิเศษจะมีรายละเอียดที่เป็นเรื่องราวและเฉดสีที่พริ้วไหวเปลี่ยนไปตามผู้เชี่ยวชาญการสาวหัตถไหมโบราณ ซึ่งนั่นคือคุณค่าและตรารับรองเอกลักษณ์งานทำมือแท้ราคาประเมินทั้งหมดระบุไว้ในอัตราสกุลเงินบาทไทย (THB) ร่วมรวมภาษีมูลค่าเพิ่มเรียบร้อย กระทำการชำระโอนหรือตรวจสอบเครดิตผ่านช่องทางที่กำหนดโดยแผนกที่ปรึกษาส่วนตัวแบรนด์"
  },
  {
    num: "5.",
    titleEN: "Shipping & Returns",
    titleTH: "การขนส่งอัญเชิญส่งพัสดุมรดกล้ำค่า และนโยบายการส่งคืน",
    contentEN: "We utilize premium logistics partners to ensure the safe delivery of your heritage pieces. In accordance with Thailand's Consumer Protection laws, customers are entitled to a return or exchange within 7 days of receipt if the product is found to be defective or significantly different from its description. Returned items must be in their original, pristine condition with all heritage seals intact.",
    contentTH: "การปันความรักส่งต่อมรดกพัสตรากรของท่านจะจัดส่งผ่านระบบขนส่งนิรภัยคุ้มครองพิเศษสูงสุด พร้อมตรวจสอบกล่องหุ้มไม้สักแท้ผนึกตราครั่งตราสัญญาลักษณ์ อ้างอิงสิทธิตามกฎหมายคุ้มครองผู้บริโภค ลูกจักสามารถขอติดต่อทำเรื่องพิจารณาเปลี่ยนชิ้นงานภายใน 7 วันทำการหลังลงชื่อรับ หากพบความบกพร่องตามเอกลักษณ์หรือความคลาดเคลื่อนเกินขีดความงามดั้งเดิม ทั้งนี้ผืนผ้าเครื่องทองต้องอยู่ในสภาพสมบูรณ์พร้อมซีลผนึกกษัตริย์ไร้รอยถก"
  },
  {
    num: "6.",
    titleEN: "Limitation of Liability",
    titleTH: "ขีดจำกัดความรับผิดทางกรณีข้อบกพร่องทางดิจิทัล",
    contentEN: "To the maximum extent permitted by Thai law, Ayutthaya Atelier shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or products. We do not warrant that the website will be uninterrupted or error-free.",
    contentTH: "ภายใต้กรอบอำนาจความคุ้มครองสูงสุดตามประมวลกฎหมายแพ่งและพาณิชย์และคุ้มครองผู้บริโภคแห่งสยาม แบรนด์อู่ศิลป์อยุธยาไม่ต้องรับผิดชอบกรณีความล่าช้าอันเนื่องจากภัยธรรมชาติ การบกพร่องทางดิจิทัล หรือสิ่งบกพร่องจากการแฮ็คเจาะกลุ่มข้อมูลแต่อย่างใด ทว่าเราให้สัญญาสัจจะวาจาว่าจะตรวจสอบเซิร์ฟเวอร์ความสง่างามตลอดสิทธิ์ทุกคืนวัน"
  },
  {
    num: "7.",
    titleEN: "Governing Law",
    titleTH: "กฎหมายและเขตอำนาจศาลปกครองความยุติธรรม",
    contentEN: "These terms are governed by and construed in accordance with the laws of the Kingdom of Thailand. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bangkok, Thailand.",
    contentTH: "ข้อตกลง สรรพเงื่อนไข และรายละเอียดความสัตย์จริงทั้งหมดบนขั้วดีไซน์นี้ จะต้องดึงมาอธิบายปรับปรุง ตีความตามกรอบแห่งกฎหมายรัฐธรรมนูญและสารบัญญัติแห่งราชอาณาจักรไทยเป็นสำคัญ ข้อพิพาทใด ๆ จะถูกนำเสนอพิจารณาคดีโดยใช้เขตศาลสั่นกระดิ่งศาลพระนคร กรุงเทพมหานคร ไทย เป็นที่ประจักษ์เสร็จสิ้น"
  }
];

export const PRIVACY_SECTIONS = [
  {
    num: "1.",
    titleEN: "Introduction",
    titleTH: "คําประกาศนโยบายความเป็นส่วนตัว",
    contentEN: "Welcome to PastForward. Our commitment to protecting your privacy is integral to the trust you place in us as a purveyor of fine heritage textiles. This Privacy Policy outlines our transparent data practices, ensuring you understand how we safeguard your personal information while providing an exceptional digital experience. By engaging with our platform, you acknowledge the collection and use of information in accordance with this policy. We adhere to the highest standards of data integrity, reflecting our brand's dedication to excellence in every thread of our operation.",
    contentTH: "ขออัญเชิญยินต้อนรับสู่แผงธรรมาภิบาลทางดิจิทัลของ PastForward บรรพสัญญาและพันธกิจหลักของเราในการระวังรักษาความลับของท่านคือหัวใจสูงสุดแห่งสายใยศรัทธาลูกค้าระดับสูง นโยบายความเป็นส่วนตัวนี้จัดทำขึ้นโดยแผงความสมัครใจโปร่งใสเต็มเปี่ยมภายใต้หลักพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) เพื่อให้ท่านมอบพลังความอุ่นใจเต็มร้อยทุกตารางเข็มที่กดเคลื่อนไหวในแกลเลอรี่นิทรรศการพัสตราสยามดิจิทัลนี้"
  },
  {
    num: "2.",
    titleEN: "Information We Collect",
    titleTH: "ประเภทหมวดหมู่ข้อมูลที่เราจัดเก็บดูแลรักษา",
    contentEN: "To provide a bespoke service, we collect specific categories of data: Personal Identification (Name, email address, physical mailing address, and contact telephone numbers provided during inquiry or purchase), Purchase History (Records of the exquisite pieces you have acquired, including transaction details and sizing preferences for custom atelier commissions), and Technical Data (IP address, browser type, device identifiers, and navigation patterns on our digital gallery to improve user flow).",
    contentTH: "เพื่อการสร้างสรรค์ประสบการณ์การต้อนรับชั้นสูงสุดและการปั้นเส้นทางส่วนบุคคล (Bespoke Services) ข้อมูลที่จัดเก็บมีเพียง: ข้อมูลติดต่อจำเพาะ (ชื่อ-สกุลมงคล, ที่อยู่อีเมล, เบอร์Line ตลอดจนที่อยู่จัดส่งพัสดุหิ้วไม้), ประวัติการเลือกผ้าทอโบราณ (ความสนใจสีสันประเภทลายยกดอก คตินิยมรอยตัดสูทโบราณ) และสถิติวิเคราะห์เทคโนโลยีดิจิทัล (สแกน IP บิสสิเนส คุกกี้สร้างสรรค์บรรยากาศ) เพื่อรสนิยมและการปรับความสวยงามอันลงตัวไร้ที่ติ"
  },
  {
    num: "3.",
    titleEN: "How We Use Your Information",
    titleTH: "วิถีธรรมนำข้อมูลไปใช้งานเพื่อพาลึกวิจิตร",
    contentEN: "Your data serves the sole purpose of enhancing your relationship with the Atelier: Order Fulfillment (Managing logistics, authentication, and secure delivery of our textiles to your doorstep), Exquisite Communication (Delivering curated updates on new collections, heritage stories, and private viewings that align with your aesthetic interests), and Service Refinement (Analyzing engagement to ensure our digital presence remains as seamless and sophisticated as our craftsmanship).",
    contentTH: "ข้อมูลอันมีค่าของท่านจะได้รับการต้อนรับเสมือนเพชรเม็ดงามเพื่อวัตถุประสงค์เดียวคือดูแลท่าน: การรังสรรค์จัดจองชิ้นงานทอให้สมบูรณ์ (ตรวจสอบลายเส้นไหมผนึกกล่องส่งถึงหน้าประตูพระราชฐาน), การส่งสารจดหมายเหตุพิเศษ (เชิญชวนงานนิทรรศการปิด อวดคอลเลกชันจำเพาะ และเกร็ดศิลปลายพัสตราภรณ์) และการสร้างเกราะประมูลเสถียรภาพ เพื่อให้ระบบดิจิทัลของเรางดงามไร้รอยต่อเหมือนผืนเกลียวลวดลายยกลอย"
  }
];

export const PRIVACY_SECTIONS_PART2 = [
  {
    num: "4.",
    titleEN: "Data Sharing and Protection",
    titleTH: "การควบคุมความปลอดภัยข้อมูลและการแบ่งปันเฉพาะส่วนสากล",
    contentEN: "Ayutthaya Atelier does not sell, trade, or rent your personal information to third parties. We only share data with essential service partners—such as secure payment gateways and premium white-glove couriers—who are contractually bound to maintain the same level of confidentiality and security as our own institution. We employ sophisticated encryption and secure server protocols to ensure your data remains protected against unauthorized access, maintaining the sanctity of your private information.",
    contentTH: "อู่ทอศิลป์อยุธยาแบรนด์หลวงจะไม่แพร่งพราย ปั่น แลก หรือขายข้อมูลส่วนพระองค์ของท่านต่อสาธารณชนเชิงพาณิชย์เด็ดขาด ข้อมูลจะเคลื่อนสู่ผู้ร่วมงานภายนอกระดับสิริมงคลเฉพาะคราวอู่ทองจัดส่งระดับวีไอพี (White-glove Couriers) และเกตเวย์ความมั่นคงทางการเงินแห่งชาติระบบชั้นนำเท่านั้น ภายใต้ข้อควบคุมและโปรโตคอลเข้ารหัสลับชั้นสูงสุดประดับขั้วเครือข่ายรักษาความปลอดภัย"
  },
  {
    num: "6.",
    titleEN: "Cookies Policy",
    titleTH: "เอกสิทธิ์นโยบายขั้วคุกกี้สร้างรสนิยมดิจิทัล",
    contentEN: "Our digital gallery utilizes \"cookies\" and similar tracking technologies to enhance your browsing experience. These small data files allow us to remember your preferences, manage your shopping bag, and understand which parts of our collection resonate most with our audience. You may choose to disable cookies through your browser settings; however, please note that certain features of the Atelier's digital experience may become unavailable.",
    contentTH: "เรือนจัดนิทรรศการมีเดียดิจิทัลของเราใช้เทคโนโลยีระบุตัวตนอัจฉริยะ 'คุกกี้สยาม' ขนาดกะทัดรัด เพื่อช่วยจำลองรูปแบบแสงเงาสู่พิกเซลคอมพิวเตอร์ จดจำระดับเสียงดนตรีบรรรเลงคลอ และลายผ้าที่คุณโปรดปรานระลึกค้าง หากท่านปิดฟังก์ชันจดจำคุกกี้ อรรถรสความชอุ่มเงางามลอยตัวของฉากศิลปกรรม 3D ก็อาจหลุดลอยหยาบกระด้างไปชั่วครู่ ท่านจึงสามารถเลือกเปิดไว้เพื่ออรรถรสสูงสุด"
  }
];
