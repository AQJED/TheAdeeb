(function ($) {
  "use strict";

  // Global variable to hold the Typed instance
  var typed;

  // Loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Initiate WOW.js
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Smooth scrolling on navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );
      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Initialize/reinitialize Typed.js
  function initTyped() {
    if (typed) {
      typed.destroy();
    }
    if ($(".hero .hero-text h2").length === 1) {
      var heroSubtitleText = $("#hero_subtitle").text();
      var newStrings =
        currentLang === "ar"
          ? heroSubtitleText.split("، ")
          : heroSubtitleText.split(", ");
      typed = new Typed(".hero .hero-text h2", {
        strings: newStrings,
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  }

  // Skills waypoint
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
    },
  });

  // --- Language / Content Data ---

  var currentLang = "en";

  var translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_portfolio: "Portfolio",
      nav_skills: "Skills",
      nav_endorsements: "Endorsements",

      hero_prefix: "I'm",
      hero_title: "Adeeb Alqahtani",
      hero_subtitle:
        "Software Integration Engineer, Embedded Systems Developer, Data Scientist",

      btn_hire: "Hire Me",
      btn_resume: "My Resume",
      btn_lang: "عربي",

      about_title: "About Me",
      about_subtitle: "12+ Years Experience",
      about_text:
        "I'm a Software Integration Engineer with a focus on simulation and embedded systems. I hold a B.S. in Computer Engineering from CSUSB, a Deep Learning Nanodegree from MISK Foundation and an A.S. in Electrical & Electronics (Instrumentation and Control Systems) from Yanbu Industrial College. My passion lies in building intelligent systems that bridge the physical and digital worlds.\nMy technical expertise includes microcontroller programming, circuit design, hardware-software integration, and software development in defense and aerospace applications, developing low-latency solutions and integrating next-generation technologies into complex systems.",

      exp_header: "My Resume",
      exp_subheader: "Professional & Academic Career",

      exp_item1_title: "Software Integration Engineer",
      exp_item1_company: "Rheinmetall Arabia, Riyadh, Saudi Arabia",
      exp_item1_desc:
        "Skills: Middleware Development · Real-Time Data Processing · System Integration · CIGI Protocol · DIS Protocol · Embedded Systems · Software Optimization",

      exp_item2_title: "Flight Simulator Maintenance Supervisor(D)",
      exp_item2_company: "Saudia Academy, Jeddah, Saudi Arabia",
      exp_item2_desc:
        "Technical Service Department. | Skills: Team Leadership · Operations Management · Scheduling & Training Readiness · System Performance Optimization · Regulatory Compliance",

      exp_item3_title: "Flight Simulator Engineer",
      exp_item3_company: "Saudia Academy, Jeddah, Saudi Arabia",
      exp_item3_desc:
        "Skills: System Integration · Real-Time Data Processing · Hardware & Software Upgrades · Simulator Certification · FAA/EASA/GACA Compliance",

      exp_item4_title: "Deep Learning (AI) Nanodegree",
      exp_item4_company: "MISK Foundation",
      exp_item4_desc:
        "Intensive bootcamp with hands-on experience in 6 artificial intelligence projects. | Skills: Neural Networks · Deep Learning · Computer Vision · Natural Language Processing · Model Training & Optimization",

      exp_item5_title: "B.S. in Computer Engineering",
      exp_item5_company: "California State University, San Bernardino",
      exp_item5_desc:
        "Focused in high performance and embedded systems. | Skills: Embedded Systems · Microcontrollers · Digital Circuit Design · FPGA Programming · Software Development · C/C++ · Verilog",

      exp_item6_title: "Full Flight Simulator Technician",
      exp_item6_company: "Saudia Academy, Jeddah, Saudi Arabia",
      exp_item6_desc:
        "I worked as maintenance technician. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Avionics Systems · Instrumentation & Control · Motion & Visual Systems",

      exp_item7_title: "Simulator Maintenance Program",
      exp_item7_company: "CAE, Montreal, Canada",
      exp_item7_desc:
        "One Year Intensive Program. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Flight Simulator Systems",

      exp_item8_title: "Associate Degree in Electrical and Electronics",
      exp_item8_company: "Yanbu Industrial College",
      exp_item8_desc:
        "Majored in instrumentation and control system. | Skills: Instrumentation & Control · Circuit Design · Electrical Troubleshooting · PLC Programming · Industrial Automation",

      projects: {
        portfolioHeader: "My Portfolio",
        portfolioSubheader: "Projects",
        filters: {
          all: "All",
          professional: "Professional",
          personal: "Personal",
          academic: "Academic",
        },
        showMore: "Show More",
        showLess: "Show Less",
        projectCards: [
          {
            title:
              "Cougar Full Mission Simulator – Middleware System Development",
            subtitle: "Professional Application",
            description:
              "Middleware system for the Cougar Full Mission Simulator (FMS), a high-fidelity military flight simulator used for tactical training.",
            technologies:
              "C++, PCAPPLUSPLUS, Open DIS, CIGI, Boost, UDP, Git",
            link: "https://aqjed.github.io/FMS_MiddleWare/",
            category: "professional",
          },
          {
            title: "DIS to CIGI Middleware: Low-Level C++ Programming",
            subtitle: "Professional Application",
            description:
              "A middleware application that facilitates communication between a CGF system and an Image Generator by converting DIS protocol packets into CIGI protocol packets.",
            technologies:
              "C++, PCAPPLUSPLUS, Open DIS, CIGI, Boost, UDP, Git",
            link: "https://aqjed.github.io/DISCIGIMiddleware/",
            category: "professional",
          },
          {
            title:
              "Host Emulator for CIGI-Compliant Aircraft Simulation with Integrated User Interface",
            subtitle: "Professional Application",
            description:
              "A CIGI-compliant host emulator that simulates jet motion and offers a rich user interface for controlling, monitoring, and debugging aircraft simulation data.",
            technologies:
              "C++, CIGI v3.3, Boost.Asio, Windows Joystick API, Multithreading, DirectInput",
            link: "https://aqjed.github.io/hostemulator/",
            category: "professional",
          },
          {
            title: "LLM-Driven Cybersecurity Compliance Evaluator (AI)",
            subtitle: "Professional Application",
            description:
              "An automated tool that uses a large language model to evaluate a company's cybersecurity controls against National Cybersecurity Authority (NCA) compliance requirements.",
            technologies:
              "Ollama API (LLM), Python(Scripting/Automation), Pandas(Data Handling)",
            link:
              "https://aqjed.github.io/LLM-Driven-Cybersecurity-Compliance-Evaluator/",
            category: "professional",
          },
          {
            title: "CIGI to CIGI Middleware: Low-Level C++ Programming",
            subtitle: "Professional Application",
            description:
              "Facilitates communication between a Host Computer and an Image Generator by converting CIGI 3.1 packets into CIGI 3.3 packets.",
            technologies: "C++, CIGI, Boost, UDP, Git",
            link: "https://aqjed.github.io/Host-to-IG-Middleware/",
            category: "professional",
          },
          {
            title:
              "5 DOF Robotic Arm Object Detection (Embedded System)",
            subtitle: "Personal Project",
            description:
              "Determines the position and orientation of an object using laser beams and photoresistors to control a 5 DOF robotic arm.",
            technologies:
              "C/C++, Embedded Systems, Robotic Kinematics, DSP",
            link:
              "https://github.com/AQJED/5-DOF-Robotic-Arm-Object-Detection",
            category: "personal",
          },
        ],
      },

      skills_header: "Skills",
      skills_subheader: "Technical Proficiencies",

      testimonial1_text:
        "Adeeb is a brilliant innovator and a driven engineer. His dedication and technical skills make him an invaluable asset to any team.",
      testimonial1_name: "Ali Yamani",
      testimonial1_title:
        "Exhibits Maintenance Manager | Riyadh",

      testimonial2_text:
        "Adeeb’s expertise extends beyond technical proficiency; he possesses strong communication skills and a collaborative mindset. He has consistently demonstrated his ability to work effectively with cross-functional teams, ensuring seamless coordination and successful project outcomes.",
      testimonial2_name: "Khalid Alotaibi",
      testimonial2_title:
        "Flight Simulator Engineering Manager | Jeddah",

      footer_name: "Adeeb Alqahtani",
      footer_location: "Riyadh, Saudi Arabia",
      footer_email: "Adeeb.Alqahtani@gmail.com",
      footer_github: "https://github.com/AQJED",
      footer_linkedin:
        "https://www.linkedin.com/in/adalqahtani/",
    },

    ar: {
      nav_home: "الرئيسية",
      nav_about: "من أنا",
      nav_experience: "السيرة الذاتية",
      nav_portfolio: "المشاريع",
      nav_skills: "المهارات",
      nav_endorsements: "التوصيات",

      hero_prefix: "أنا",
      hero_title: "أديب القحطاني",
      hero_subtitle:
        "مهندس تكامل برمجيات، مطور أنظمة مضمنة، عالم بيانات",

      btn_hire: "وظّفني",
      btn_resume: "السيرة الذاتية",
      btn_lang: "English",

      about_title: "من أنا",
      about_subtitle: "أكثر من 12 عامًا من الخبرة",
      about_text:
        "مهندس تكامل برمجيات شغوف بتطوير البرمجيات، الأنظمة المدمجة، والذكاء الاصطناعي. أحمل بكالوريوس في هندسة الحاسب مع تخصص في الأنظمة عالية الأداء والمضمنة من جامعة كاليفورنيا، وشهادة نانو في التعلم العميق من مؤسسةمسك بالاظافة الى شهادة جامعية متوسطة في الهندسة الكهربائية والإلكترونية من جامعة ينبع الصناعية .\nلدي أكثر من 12 عاما من الخبرة،  حيث عملت في تطوير البرمجيات الوسيطة، تكامل البيانات، وتحسين أداء الأنظمة.",

      exp_header: "السيرة الذاتية",
      exp_subheader: "المسيرة المهنية والأكاديمية",

      exp_item1_title: "مهندس تكامل برمجي",
      exp_item1_company:
        "رينمتال العربية، الرياض، المملكة العربية السعودية",
      exp_item1_desc:
        " المهارات:  تطوير البرمجيات الوسيطة · معالجة بيانات المحاكيات · تكامل الأنظمة  ·الأنظمة المضمنة · تحسين البرمجيات",

      exp_item2_title:
        "مشرف صيانة محاكيات الطيران (م)",
      exp_item2_company:
        "أكاديمية السعودية، جدة، المملكة العربية السعودية",
      exp_item2_desc:
        " قسم الخدمة الفنية | المهارات :  قيادة الفريق · إدارة العمليات · تحسين أداء الأنظمة ",

      exp_item3_title: "مهندس محاكيات الطيران",
      exp_item3_company:
        "أكاديمية السعودية، جدة، المملكة العربية السعودية",
      exp_item3_desc:
        " المهارات: تكامل الأنظمة · ترقية الأجهزة والبرمجيات · الامتثال لمعايير الهيئة العامة للطيران المدني, وكالة سلامة الطيران الأوروبية و إدارة الطيران الفيدرالية الامريكية",

      exp_item4_title:
        "شهادة نانو في التعلم العميق (الذكاء الاصطناعي)",
      exp_item4_company: "مؤسسة مسك",
      exp_item4_desc:
        "معسكر تدريبي مكثف مع خبرة عملية في 6 مشاريع ذكاء اصطناعي. | المهارات: الشبكات العصبية · التعلم العميق · رؤية الحاسوب · معالجة اللغة الطبيعية · تدريب النماذج وتحسينها",

      exp_item5_title:
        "بكالوريوس في هندسة الحاسب الالي",
      exp_item5_company:
        "جامعة ولاية كاليفورنيا، سان برناردينو",
      exp_item5_desc:
        "تخصصت في الأنظمة عالية الأداء والأنظمة المضمنة. | المهارات: الأنظمة المضمنة · المتحكمات الدقيقة · تصميم الدوائر الرقمية · برمجة  · تطوير البرمجيات · ",

      exp_item6_title: "فني محاكيات الطيران ",
      exp_item6_company:
        "أكاديمية السعودية، جدة، المملكة العربية السعودية",
      exp_item6_desc:
        "عملت كفني صيانة. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية",

      exp_item7_title:
        "برنامج صيانة المحاكيات  ",
      exp_item7_company:
        "CAE، مونتريال، كندا",
      exp_item7_desc:
        "برنامج مكثف لمدة عام. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية",

      exp_item8_title:
        "شهادة جامعية متوسطة في الكهرباء والإلكترونيات",
      exp_item8_company: "كلية ينبع الصناعية",
      exp_item8_desc:
        "تخصصت في الالات الدقيقة و التحكم. | المهارات: القياس والتحكم · تصميم الدوائر الكهربائية وإصلاحها · الأتمتة الصناعية بي ال سي",

      projects: {
        portfolioHeader: "مشاريعي",
        portfolioSubheader: "المشاريع",
        filters: {
          all: "الكل",
          personal: "مشروع شخصي",
          professional: "مشروع احترافي",
          academic: "مشروع جامعي",
        },
        showMore: "عرض المزيد",
        showLess: "عرض أقل",
        projectCards: [
          {
            title:
              "نظام وسيط لمحاكي المهام الكاملة لطائرة الكوغر",
            subtitle: "تطبيق احترافي",
            description:
              "نظام وسيط لمحاكي المهام الكاملة لطائرة الكوغر (FMS)، وهو محاكي طيران عسكري عالي الدقة يُستخدم للتدريب التكتيكي.",
            technologies:
              "C++, PCAPPLUSPLUS, Open DIS, CIGI, Boost, UDP, Git",
            link: "https://aqjed.github.io/DISCIGIMiddleware/",
            category: "professional",
          },
          {
            title:
              "(DIS to CIGI) مشروع برمجيات وسيطة",
            subtitle: "تطبيق احترافي",
            description:
              "تطبيق وسيط يسهل الاتصال بين نظام CGF ونظام توليد الصور عن طريق تحويل حزم بروتوكول DIS إلى حزم CIGI.",
            technologies:
              "C++, PCAPPLUSPLUS, Open DIS, CIGI, Boost, UDP, Git",
            link: "https://aqjed.github.io/DISCIGIMiddleware/",
            category: "professional",
          },
          {
            title:
              "HostJet: محاكي لطائرة يستخدم عصا التحكم وواجهة مستخدم متقدمة",
            subtitle: "تطبيق احترافي",
            description:
              "محاكي هوست متوافق مع CIGI يحاكي حركة الطائرة باستخدام عصا التحكم ويوفر واجهة رسومية غنية للتحكم والمراقبة وتصحيح بيانات المحاكاة.",
            technologies:
              "C++, CIGI v3.3, Boost.Asio, Windows Joystick API, Multithreading, DirectInput",
            link: "https://aqjed.github.io/hostemulator/",
            category: "professional",
          },
          {
            title:
              "مقيّم امتثال الأمن السيبراني المعتمد على LLM (AI)",
            subtitle: "تطبيق احترافي",
            description:
              "أداة آلية تستخدم نموذج لغة كبير لتقييم ضوابط الأمن السيبراني في شركة مقابل متطلبات الامتثال من الهيئة الوطنية للأمن السيبراني (NCA).",
            technologies:
              "Ollama API (LLM), Python(Scripting/Automation), Pandas(Data Handling)",
            link:
              "https://aqjed.github.io/LLM-Driven-Cybersecurity-Compliance-Evaluator/",
            category: "professional",
          },
          {
            title: "ذراع آلي (نظام مضمن)",
            subtitle: "مشروع شخصي",
            description:
              "يحدد النظام موضع الجسم واتجاهه باستخدام أشعة الليزر والفوتوريسيستور للتحكم بذراع روبوتية بخمس درجات حرية.",
            technologies:
              "C/C++, Photo-resistors, Robotic Kinematics, Embedded Systems",
            link:
              "https://github.com/AQJED/5-DOF-Robotic-Arm-Object-Detection",
            category: "personal",
          },
          {
            title:
              "(CIGI to CIGI) مشروع برمجيات وسيطة",
            subtitle: "تطبيق احترافي",
            description:
              "تطبيق يسهل الاتصال بين الحاسوب المضيف ونظام توليد الصور عبر تحويل حزم CIGI 3.1 إلى CIGI 3.3.",
            technologies: "C++, CIGI, Boost, UDP, Git",
            link: "https://aqjed.github.io/Host-to-IG-Middleware/",
            category: "professional",
          },
        ],
      },

      skills_header: "المهارات",
      skills_subheader: "المهارات التقنية",

      testimonial1_text:
        "Adeeb is a brilliant innovator and a driven engineer. His dedication and technical skills make him an invaluable asset to any team.",
      testimonial1_name: "Ali Yamani",
      testimonial1_title:
        "Exhibits Maintenance Manager | Riyadh",

      testimonial2_text:
        "Adeeb’s expertise extends beyond technical proficiency; he possesses strong communication skills and a collaborative mindset. He has consistently demonstrated his ability to work effectively with cross-functional teams.",
      testimonial2_name: "Khalid Alotaibi",
      testimonial2_title:
        "Flight Simulator Engineering Manager | Jeddah",

      footer_name: "أديب القحطاني",
      footer_location: "الرياض، المملكة العربية السعودية",
      footer_email: "Adeeb.Alqahtani@gmail.com",
      footer_github: "https://github.com/AQJED",
      footer_linkedin:
        "https://www.linkedin.com/in/adalqahtani/",
    },
  };

  function updateLanguage() {
    const t = translations[currentLang];

    // Nav
    $("#nav_home").text(t.nav_home);
    $("#nav_about").text(t.nav_about);
    $("#nav_experience").text(t.nav_experience);
    $("#nav_portfolio").text(t.nav_portfolio);
    $("#nav_skills").text(t.nav_skills);
    $("#nav_endorsements").text(t.nav_endorsements);
    $("#btn_hire").text(t.btn_hire);
    $("#btn_resume").text(t.btn_resume);
    $("#lang-toggle").text(t.btn_lang);

    // Direction & alignment
    if (currentLang === "ar") {
      $(".navbar-nav").removeClass("ml-auto").addClass("mr-auto");
      $(".navbar, .navbar-nav, .navbar-brand, .hero, .hero-text, .about-content")
        .css({ textAlign: "right", direction: "rtl" });
      $(".about-content .section-header")
        .removeClass("text-left").addClass("text-right");
    } else {
      $(".navbar-nav").removeClass("mr-auto").addClass("ml-auto");
      $(".navbar, .navbar-nav, .navbar-brand, .hero, .hero-text, .about-content")
        .css({ textAlign: "left", direction: "ltr" });
      $(".about-content .section-header")
        .removeClass("text-right").addClass("text-left");
    }

    // Hero
    $("#hero_prefix").text(t.hero_prefix);
    $("#hero_title").text(t.hero_title);
    $("#hero_subtitle").text(t.hero_subtitle);
    initTyped();

    // About
    $("#about_title").text(t.about_title);
    $("#about_subtitle").text(t.about_subtitle);
    $("#about_text").html(
      t.about_text.replace(/\n/g, "<br><br>")
    );

    // Experience
    $("#exp_header").text(t.exp_header);
    $("#exp_subheader").text(t.exp_subheader);
    for (let i = 1; i <= 8; i++) {
      $("#exp_item" + i + "_title").text(t["exp_item" + i + "_title"]);
      $("#exp_item" + i + "_company").text(t["exp_item" + i + "_company"]);
      $("#exp_item" + i + "_desc").text(t["exp_item" + i + "_desc"]);
    }

    // Portfolio labels
    $("#portfolio_header").text(t.projects.portfolioHeader);
    $("#portfolio_subheader").text(t.projects.portfolioSubheader);
    $(".filter-btn[data-filter='all']").text(t.projects.filters.all);
    $(".filter-btn[data-filter='professional']").text(
      t.projects.filters.professional
    );
    $(".filter-btn[data-filter='personal']").text(
      t.projects.filters.personal
    );
    $(".filter-btn[data-filter='academic']").text(
      t.projects.filters.academic
    );
    $("#toggle-projects").text(t.projects.showMore);

    // Projects grid
    var projectsGrid = document.getElementById("projects-grid");
    if (projectsGrid) {
      projectsGrid.innerHTML = "";
      var cards = t.projects.projectCards || [];
      cards.forEach(function (project) {
        var card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute(
          "data-category",
          project.category || "all"
        );
        card.innerHTML =
          '<h3><a href="' +
          project.link +
          '" target="_blank">' +
          project.title +
          "</a></h3>" +
          '<h4 class="proj-subtitle">' +
          project.subtitle +
          "</h4>" +
          '<p class="proj-desc">' +
          project.description +
          "</p>" +
          '<p class="tech-stack"><strong>Tech Stack:</strong> ' +
          project.technologies +
          "</p>";
        projectsGrid.appendChild(card);
      });
    }

    // RTL helpers
    if (currentLang === "ar") {
      $(".project-filters").addClass("rtl-filters");
      $("#projects-grid").addClass("rtl-projects");
      $("#experience").addClass("rtl-experience");
    } else {
      $(".project-filters").removeClass("rtl-filters");
      $("#projects-grid").removeClass("rtl-projects");
      $("#experience").removeClass("rtl-experience");
    }

    // Skills
    $("#skills_header").text(t.skills_header);
    $("#skills_subheader").text(t.skills_subheader);

    // Testimonials
    $("#testimonial1_text").text(t.testimonial1_text);
    $("#testimonial1_name").text(t.testimonial1_name);
    $("#testimonial1_title").text(t.testimonial1_title);
    $("#testimonial2_text").text(t.testimonial2_text);
    $("#testimonial2_name").text(t.testimonial2_name);
    $("#testimonial2_title").text(t.testimonial2_title);

    // Footer
    $("#footer_name").text(t.footer_name);
    $("#footer_location").text(t.footer_location);
    $("#footer_email").text(t.footer_email);
    $("#footer_github").attr("href", t.footer_github);
    $("#footer_linkedin").attr("href", t.footer_linkedin);

    // Refresh testimonials carousel
    $(".testimonials-carousel").trigger("refresh.owl.carousel");
  }

  // Language toggle handler
  $("#lang-toggle").on("click", function () {
    currentLang = currentLang === "en" ? "ar" : "en";
    updateLanguage();
  });

  // Initial load
  updateLanguage();

})(jQuery);

// Project filter buttons
$(document).ready(function () {
  $(".filter-btn").on("click", function () {
    var filterValue = $(this).attr("data-filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filterValue === "all") {
      $(".project-card").fadeIn();
    } else {
      $(".project-card").each(function () {
        if ($(this).attr("data-category") === filterValue) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    }
  });
});
