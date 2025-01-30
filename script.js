document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        lv: {
            title: "Laipni lūdzam Imedpharm SIA",
            subtitle: "Licencēts starptautisks farmācijas uzņēmums.",
            hero_text: "Uzticams partneris farmācijas biznesā",
            footer_text: "© 2025 Imedpharm SIA. Visas tiesības aizsargātas.",
            nav_home: "Sākums",
            nav_about: "Par mums",
            nav_services: "Mūsu pakalpojumi",
            nav_licence: "Licence",
            nav_contact: "Kontakti",
            about_title: "Par mums",
            about_subtitle: "Kas mēs esam?",
            about_text: "Imedpharm SIA ir licencēts vairumtirdzniecības farmācijas uzņēmums...",
            services_title: "Mūsu pakalpojumi",
            services_subtitle: "Ko mēs piedāvājam?",
            services_text: "Vairumtirdzniecības piegādes, loģistikas risinājumi un farmācijas konsultācijas.",
            licence_title: "Licence",
            licence_text: "Mūsu darbība ir sertificēta un atbilst visiem starptautiskajiem standartiem.",
            contact_title: "Kontakti",
            contact_subtitle: "Sazinieties ar mums",
            contact_text: "Email: info@imedpharm.lv | Telefons: +371 123 456 78"
        },
        ru: {
            title: "Добро пожаловать в Imedpharm SIA",
            subtitle: "Лицензированная фармацевтическая компания международного уровня.",
            hero_text: "Надёжный партнёр в фармацевтическом бизнесе",
            footer_text: "© 2025 Imedpharm SIA. Все права защищены.",
            nav_home: "Главная",
            nav_about: "О нас",
            nav_services: "Наши услуги",
            nav_licence: "Лицензия",
            nav_contact: "Контакты",
            about_title: "О нас",
            about_subtitle: "Кто мы?",
            about_text: "Imedpharm SIA – лицензированная фармацевтическая компания...",
            services_title: "Наши услуги",
            services_subtitle: "Что мы предлагаем?",
            services_text: "Оптовые поставки, логистика и консультации в фармацевтическом бизнесе.",
            licence_title: "Лицензия",
            licence_text: "Наша деятельность сертифицирована и соответствует всем международным стандартам.",
            contact_title: "Контакты",
            contact_subtitle: "Свяжитесь с нами",
            contact_text: "Email: info@imedpharm.lv | Телефон: +371 123 456 78"
        },
        en: {
            title: "Welcome to Imedpharm SIA",
            subtitle: "A licensed international pharmaceutical company.",
            hero_text: "A Reliable Partner in the Pharmaceutical Business",
            footer_text: "© 2025 Imedpharm SIA. All rights reserved.",
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Our Services",
            nav_licence: "License",
            nav_contact: "Contacts",
            about_title: "About Us",
            about_subtitle: "Who are we?",
            about_text: "Imedpharm SIA is a licensed pharmaceutical wholesale company...",
            services_title: "Our Services",
            services_subtitle: "What do we offer?",
            services_text: "Wholesale supply, logistics, and pharmaceutical consulting.",
            licence_title: "License",
            licence_text: "Our activity is certified and complies with all international standards.",
            contact_title: "Contacts",
            contact_subtitle: "Get in touch",
            contact_text: "Email: info@imedpharm.lv | Phone: +371 123 456 78"
        }
    };

    function changeLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang); // Сохраняем выбранный язык
        document.querySelectorAll("[data-key]").forEach(el => {
            let key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            changeLanguage(this.dataset.lang);
        });
    });

    // Загружаем сохранённый язык
    const savedLanguage = localStorage.getItem("selectedLanguage") || "lv";
    changeLanguage(savedLanguage);
});
