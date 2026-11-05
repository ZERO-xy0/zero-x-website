const translations = {
  en: {
    hero_title: "ZERO X",
    hero_tagline: "The adult content blocker that protects your focus.",
    hero_sub: "Available for Android & Linux.",
    btn_android: "Download for Android",
    btn_linux: "Download for Linux",
    why_title: "Why download ZERO X?",
    why1_title: "Powerful Blocking",
    why1_desc: "Blocks adult websites at the system level, before they even load.",
    why2_title: "Lightweight",
    why2_desc: "Runs silently in the background without slowing your device.",
    why3_title: "Private",
    why3_desc: "No tracking, no data collection. Your privacy comes first.",
    why4_title: "Cross-Platform",
    why4_desc: "Works on Android and Linux with the same reliable protection.",
    screenshot_title: "Inside the App",
    screenshot_desc_title: "Clean, Modern Interface",
    screenshot_desc_text: "ZERO X features a beautiful dark glassmorphism design inspired by iOS. It shows you a clear status of your protection, offers daily advice to keep you motivated, and provides a smooth, distraction-free experience.",
    screenshot_feat1: "🟢 PC Protection Active Status",
    screenshot_feat2: "💡 Daily Motivation & Advice",
    screenshot_feat3: "💖 Benefits of Abstinence",
    faq_title: "Frequently Asked Questions",
    faq1_q: "What exactly does ZERO X block?",
    faq1_a: "ZERO X blocks adult and pornographic websites at the system level, before they load. It works across browsers and apps on Android and Linux.",
    faq2_q: "Is ZERO X free?",
    faq2_a: "Yes. ZERO X is free to download and use. There are no ads and no hidden subscriptions.",
    faq3_q: "Which platforms are supported?",
    faq3_a: "ZERO X is currently available for Android and Linux. Support for more platforms is planned.",
    cta_title: "Take control today.",
    cta_desc: "Download ZERO X and start protecting your attention.",
    footer_text: "© 2026 ZERO X. All rights reserved."
  },
  ar: {
    hero_title: "ZERO X",
    hero_tagline: "التطبيق الذي يمنع المواقع الإباحية ويحمي تركيزك.",
    hero_sub: "متوفر لأنظمة أندرويد ولينكس.",
    btn_android: "تحميل لأندرويد",
    btn_linux: "تحميل للينكس",
    why_title: "لماذا يجب أن تحميل ZERO X؟",
    why1_title: "حجب قوي",
    why1_desc: "يمنع المواقع الإباحية على مستوى النظام، قبل أن يتم تحميلها.",
    why2_title: "خفيف الوزن",
    why2_desc: "يعمل بصمت في الخلفية دون إبطاء جهازك.",
    why3_title: "خصوصية تامة",
    why3_desc: "لا تتبع، ولا جمع للبيانات. خصوصيتك تأتي أولاً.",
    why4_title: "متعدد المنصات",
    why4_desc: "يعمل على أندرويد ولينكس بنفس الحماية الموثوقة.",
    screenshot_title: "داخل التطبيق",
    screenshot_desc_title: "واجهة نظيفة وعصرية",
    screenshot_desc_text: "يتميز ZERO X بتصميم زجاجي داكن مستوحى من نظام iOS. يعرض لك حالة الحماية بوضوح، ويقدم نصائح يومية لتبقيك متحفزاً، ويوفر تجربة سلسة وخالية من المشتتات.",
    screenshot_feat1: "🟢 حالة الحماية مفعلة",
    screenshot_feat2: "💡 نصائح وتحفيز يومي",
    screenshot_feat3: "💖 فوائد الابتعاد",
    faq_title: "الأسئلة الشائعة",
    faq1_q: "ما الذي يمنعه ZERO X بالضبط؟",
    faq1_a: "يمنع ZERO X المواقع الإباحية على مستوى النظام، قبل تحميلها. ويعمل مع المتصفحات والتطبيقات على أندرويد ولينكس.",
    faq2_q: "هل ZERO X مجاني؟",
    faq2_a: "نعم. ZERO X مجاني للتحميل والاستخدام. لا توجد إعلانات ولا اشتراكات خفية.",
    faq3_q: "ما هي المنصات المدعومة؟",
    faq3_a: "ZERO X متوفر حالياً لأندرويد ولينكس. ومن المخطط دعم منصات أخرى في المستقبل.",
    cta_title: "تحكم في نفسك اليوم.",
    cta_desc: "قم بتحميل ZERO X وابدأ في حماية انتباهك.",
    footer_text: "© 2026 ZERO X. جميع الحقوق محفوظة."
  }
};

let currentLang = "en";
const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  langToggle.textContent = lang === "en" ? "العربية" : "English";
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "ar" : "en");
});

const saved = localStorage.getItem("zerox_lang");
if (saved) applyLanguage(saved);
langToggle.addEventListener("click", () => localStorage.setItem("zerox_lang", currentLang));

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// --- كود الأنيميشنس (الظهور عند التمرير) ---
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target); // كيخدم غير مرة وحدة
    }
  });
}, {
  threshold: 0.15 // كيبدا الأنيميشنس منين يبان 15% من القسم
});

revealElements.forEach(el => revealObserver.observe(el));