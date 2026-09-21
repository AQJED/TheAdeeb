
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

  // WOW.js drives the static section headers. Content injected by
  // updateLanguage() is intentionally left unanimated.
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
      // Measure the sticky navbar so the target heading clears it.
      var navHeight = $(".navbar").outerHeight() || 45;
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - navHeight,
        },
        1500,
        "easeInOutExpo"
      );
      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
        // Close the collapsed mobile menu after picking a destination.
        $("#navbarCollapse").collapse("hide");
      }
    }
  });

  // Function to initialize or reinitialize the Typed instance
  function initTyped() {
    if (typed) {
      typed.destroy();
    }
    if ($(".hero .hero-text h2").length === 1) {
      var heroSubtitleText = $("#hero_subtitle").text();
      var newStrings;
      if (currentLang === "ar") {
        newStrings = heroSubtitleText.split("، ");
      } else {
        newStrings = heroSubtitleText.split(", ");
      }
      typed = new Typed(".hero .hero-text h2", {
        strings: newStrings,
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  }

  // --- Language Toggle Code ---
  var currentLang = "en";
  var translations = {
      "en": {
          "nav_home": "Home",
          "nav_about": "About",
          "nav_experience": "Experience",
          "nav_certifications": "Certifications",
          "nav_portfolio": "Portfolio",
          "nav_skills": "Skills",
          "hero_prefix": "I'm",
          "hero_title": "Adeeb Alqahtani",
          "hero_subtitle": "Senior Software Integration Engineer, Technical Lead (R&D), Real-Time Systems Engineer, Defense Systems Integration",
          "btn_hire": "Blog",
          "btn_resume": "My Resume",
          "btn_lang": "عربي",
          "about_title": "About Me",
          "about_subtitle": "Real-Time Systems for Defense & Aviation",
          "about_text": "Software Integration Engineer specialized in defense systems, working on middleware development, systems integration, and performance optimization for sensitive defense applications and flight simulators.",
          "exp_header": "My Resume",
          "exp_subheader": "Professional & Academic Career",
          "experience": [
              {
                  "date": "2024 - Now",
                  "title": "Software Integration Engineer",
                  "company": "Rheinmetall Arabia, Riyadh, Saudi Arabia",
                  "desc": "Skills: Middleware Development · Real-Time Data Processing · System Integration · CIGI Protocol · DIS Protocol · Embedded Systems · Software Optimization"
              },
              {
                  "date": "2024 - 2024",
                  "title": "Flight Simulator Maintenance Supervisor(D)",
                  "company": "Saudia Academy, Jeddah, Saudi Arabia",
                  "desc": "Technical Service Department. | Skills: Team Leadership · Operations Management · Scheduling & Training Readiness · System Performance Optimization · Regulatory Compliance"
              },
              {
                  "date": "2019 - 2024",
                  "title": "Flight Simulator Engineer",
                  "company": "Saudia Academy, Jeddah, Saudi Arabia",
                  "desc": "Skills: System Integration · Real-Time Data Processing · Hardware & Software Upgrades · Simulator Certification · FAA/EASA/GACA Compliance"
              },
              {
                  "date": "2019-2019",
                  "title": "Deep Learning (AI) Nanodegree",
                  "company": "MISK Foundation",
                  "desc": "Intensive bootcamp with hands-on experience in 6 artificial intelligence projects. | Skills: Neural Networks · Deep Learning · Computer Vision · Natural Language Processing · Model Training & Optimization"
              },
              {
                  "date": "2015 - 2018",
                  "title": "B.S. in Computer Engineering",
                  "company": "California State University, San Bernardino",
                  "desc": "Focused in high performance and embedded systems. | Skills: Embedded Systems · Microcontrollers · Digital Circuit Design · FPGA Programming · Software Development · C/C++ · Verilog"
              },
              {
                  "date": "2010 - 2013",
                  "title": "Full Flight Simulator Technician",
                  "company": "Saudia Academy, Jeddah, Saudi Arabia",
                  "desc": "I worked as maintenance technician. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Avionics Systems · Instrumentation & Control · Motion & Visual Systems"
              },
              {
                  "date": "2009 - 2010",
                  "title": "Simulator Maintenance Program",
                  "company": "CAE, Montreal, Canada",
                  "desc": "One Year Intensive Program. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Flight Simulator Systems"
              },
              {
                  "date": "2004 - 2008",
                  "title": "Associate Degree in Electrical and Electronics",
                  "company": "Yanbu Industrial College",
                  "desc": "Majored in instrumentation and control system. | Skills: Instrumentation & Control · Circuit Design · Electrical Troubleshooting · PLC Programming · Industrial Automation"
              }
          ],
          "cert_header": "Credentials",
          "cert_subheader": "Certifications & Advanced Studies",
          "certifications": [
              {
                  "title": "Software Engineering in Defense Systems",
                  "issuer": "GAMI — General Authority for Military Industries"
              },
              {
                  "title": "Developer Certificate",
                  "issuer": "TÜBİTAK Defense Industry R&D Institute, Türkiye"
              },
              {
                  "title": "Advanced Software Engineering",
                  "issuer": "L3Harris"
              },
              {
                  "title": "One-Year Intensive Training Program",
                  "issuer": "CAE — Canadian Aviation Electronics, Canada"
              },
              {
                  "title": "1,000+ Hours: Simulator & Training Systems",
                  "issuer": "CAE · Thales · L3Harris · Collins Aerospace"
              },
              {
                  "title": "Deep Learning (AI) Nanodegree",
                  "issuer": "MISK Foundation"
              },
          ],
          "projects": {
              "portfolioHeader": "My Portfolio",
              "portfolioSubheader": "Projects",
              "showMore": "View More on GitHub",
              "projectCards": [
                  {
                      "title": "Cougar Full Mission Simulator — Middleware System Development",
                      "subtitle": "Royal Saudi Air Force",
                      "description": "Core C-based middleware architecture binding the host, CGF, IOS, BDS and IG subsystems of a high-fidelity tactical training simulator. Built on zero-copy single-producer/single-consumer shared-memory queues, with a real-time DIS-to-CIGI protocol converter, coordinate-system mapping and high-precision timestamp synchronization across distributed entities and image generators.",
                      "technologies": "C, C++, Open DIS, CIGI, PcapPlusPlus, Boost, Shared Memory, SPSC Queues, UDP, Git",
                      "link": "https://aqjed.github.io/FMS_MiddleWare/"
                  },
                  {
                      "title": "SFATE Tactical Simulation — Host Integration",
                      "subtitle": "Professional Application",
                      "description": "C++ backend integrating simulated aircraft into the SFATE simulation engine through a vendor SDK plugin. Drives entities, automates scenario control, visualizes SFATE events in the image generator, and emits DIS for multi-platform interoperability.",
                      "technologies": "C++, SFATE SDK, DIS Protocol, UDP, Boost, Multi-threading",
                      "link": "https://aqjed.github.io/DISCIGIMiddleware/"
                  },
                  {
                      "title": "Bell 412 Mission Simulator — Middleware System Development",
                      "subtitle": "Professional Application",
                      "description": "High-performance C++ middleware interfacing the flight dynamics engine with simulator subsystems, paired with a custom Instructor Operator Station (IOS) on a C++ backend for real-time scenario management.",
                      "technologies": "C++, CIGI 3.1/3.3, Network Programming (UDP), Boost, Git",
                      "link": ""
                  },
                  {
                      "title": "Engagement Skills Trainer (EST) Shooting Simulator",
                      "subtitle": "Professional Application",
                      "description": "Shooting training simulator built on computer vision and sensor fusion. OptiTrack sensors integrated through the C++ SDK detect IR laser weapons using temporal synchronization and hardware timestamping.",
                      "technologies": "C++, OptiTrack SDK, Computer Vision, Sensor Fusion, Temporal Sync",
                      "link": ""
                  },
                  {
                      "title": "Real-Time Protocol Stress Engine & Performance Validator",
                      "subtitle": "Internal Tool",
                      "description": "High-performance C++ utility that stress-tests middleware stability with high-frequency DIS and CIGI traffic, profiling latency and jitter to expose bottlenecks under worst-case entity density.",
                      "technologies": "C++, Open DIS, CIGI, Boost, UDP",
                      "link": ""
                  },
                  {
                      "title": "CIGI-Compliant Host Emulator with Integrated User Interface",
                      "subtitle": "Professional Application",
                      "description": "A CIGI-compliant host emulator that simulates jet motion and offers a rich interface for controlling, monitoring and debugging aircraft simulation data.",
                      "technologies": "C++, CIGI v3.3, Boost.Asio, Windows Joystick API, Multithreading, DirectInput",
                      "link": "https://aqjed.github.io/hostemulator/"
                  }
              ]
          },
          "skills_header": "Skills",
          "skills_subheader": "Technical Proficiencies",
          "footer_name": "Adeeb Alqahtani",
          "footer_location": "Riyadh, Saudi Arabia",
          "footer_email": "Adeeb.Alqahtani@gmail.com",
          "footer_github": "https://github.com/AQJED",
          "footer_linkedin": "https://www.linkedin.com/in/adalqahtani/"
      },
      "ar": {
          "nav_home": "الرئيسية",
          "nav_about": "من أنا",
          "nav_experience": "السيرة الذاتية",
          "nav_certifications": "الشهادات",
          "nav_portfolio": "المشاريع",
          "nav_skills": "المهارات",
          "hero_prefix": "أنا",
          "hero_title": "أديب القحطاني",
          "hero_subtitle": "مهندس تكامل برمجيات، قائد تقني (بحث وتطوير)، مهندس أنظمة الزمن الحقيقي، تكامل أنظمة الدفاع",
          "btn_hire": "مدونتي",
          "btn_resume": "السيرة الذاتية",
          "btn_lang": "English",
          "about_title": "من أنا",
          "about_subtitle": "أنظمة الزمن الحقيقي للدفاع والطيران",
          "about_text": "مهندس تكامل برمجيات متخصص في أنظمة الدفاع، أعمل على تطوير البرمجيات الوسيطة، وتكامل الأنظمة، وتحسين أدائها للتطبيقات الدفاعية الحساسة ومحاكيات الطيران.",
          "exp_header": "السيرة الذاتية",
          "exp_subheader": "المسيرة المهنية والأكاديمية",
          "experience": [
              {
                  "date": "2024 - Now",
                  "title": "مهندس تكامل برمجي",
                  "company": "رينمتال العربية، الرياض، المملكة العربية السعودية",
                  "desc": "المهارات: تطوير البرمجيات الوسيطة · معالجة بيانات المحاكيات · تكامل الأنظمة ·الأنظمة المضمنة · تحسين البرمجيات"
              },
              {
                  "date": "2024 - 2024",
                  "title": "مشرف صيانة محاكيات الطيران (م)",
                  "company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
                  "desc": "قسم الخدمة الفنية | المهارات : قيادة الفريق · إدارة العمليات · تحسين أداء الأنظمة"
              },
              {
                  "date": "2019 - 2024",
                  "title": "مهندس محاكيات الطيران",
                  "company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
                  "desc": "المهارات: تكامل الأنظمة · ترقية الأجهزة والبرمجيات · الامتثال لمعايير الهيئة العامة للطيران المدني, وكالة سلامة الطيران الأوروبية و إدارة الطيران الفيدرالية الامريكية"
              },
              {
                  "date": "2019-2019",
                  "title": "شهادة نانو في التعلم العميق (الذكاء الاصطناعي)",
                  "company": "مؤسسة مسك",
                  "desc": "معسكر تدريبي مكثف مع خبرة عملية في 6 مشاريع ذكاء اصطناعي. | المهارات: الشبكات العصبية · التعلم العميق · رؤية الحاسوب · معالجة اللغة الطبيعية · تدريب النماذج وتحسينها"
              },
              {
                  "date": "2015 - 2018",
                  "title": "بكالوريوس في هندسة الحاسب الالي",
                  "company": "جامعة ولاية كاليفورنيا، سان برناردينو",
                  "desc": "تخصصت في الأنظمة عالية الأداء والأنظمة المضمنة. | المهارات: الأنظمة المضمنة · المتحكمات الدقيقة · تصميم الدوائر الرقمية · برمجة · تطوير البرمجيات ·"
              },
              {
                  "date": "2010 - 2013",
                  "title": "فني محاكيات الطيران",
                  "company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
                  "desc": "عملت كفني صيانة. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية"
              },
              {
                  "date": "2009 - 2010",
                  "title": "برنامج صيانة المحاكيات",
                  "company": "CAE، مونتريال، كندا",
                  "desc": "برنامج مكثف لمدة عام. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية"
              },
              {
                  "date": "2004 - 2008",
                  "title": "شهادة جامعية متوسطة في تقنية الكهرباء والإلكترونيات",
                  "company": "كلية ينبع الصناعية",
                  "desc": "تخصصت في الالات الدقيقة و التحكم. | المهارات: القياس والتحكم · تصميم الدوائر الكهربائية وإصلاحها · الأتمتة الصناعية بي ال سي"
              }
          ],
          "cert_header": "المؤهلات",
          "cert_subheader": "الشهادات والدورات المتقدمة",
          "certifications": [
              {
                  "title": "هندسة البرمجيات في أنظمة الدفاع",
                  "issuer": "الهيئة العامة للصناعات العسكرية (GAMI)"
              },
              {
                  "title": "شهادة مطوّر",
                  "issuer": "معهد بحوث وتطوير الصناعات الدفاعية TÜBİTAK، تركيا"
              },
              {
                  "title": "هندسة برمجيات متقدمة",
                  "issuer": "L3Harris"
              },
              {
                  "title": "برنامج تدريبي مكثف لمدة عام",
                  "issuer": "CAE، كندا"
              },
              {
                  "title": "أكثر من 1000 ساعة تدريب في أنظمة المشبهات والتدريب",
                  "issuer": "CAE · Thales · L3Harris · Collins Aerospace"
              },
              {
                  "title": "شهادة نانو في التعلم العميق (الذكاء الاصطناعي)",
                  "issuer": "مؤسسة مسك"
              },
          ],
          "projects": {
              "portfolioHeader": "مشاريعي",
              "portfolioSubheader": "المشاريع",
              "showMore": "المزيد على GitHub",
              "projectCards": [
                  {
                      "title": "Cougar Full Mission Simulator — Middleware System Development",
                      "subtitle": "القوات الجوية الملكية السعودية",
                      "description": "معمارية برمجيات وسيطة أساسية بلغة C تربط أنظمة المضيف وCGF وIOS وBDS ومولّد الصور في محاكي تدريب تكتيكي عالي الدقة. مبنية على طوابير ذاكرة مشتركة خالية من النسخ (SPSC)، مع محوّل لحظي من DIS إلى CIGI، وخوارزميات تحويل أنظمة الإحداثيات، ومزامنة زمنية عالية الدقة بين الكيانات الموزّعة ومولّدات الصور.",
                      "technologies": "C, C++, Open DIS, CIGI, PcapPlusPlus, Boost, Shared Memory, SPSC Queues, UDP, Git",
                      "link": "https://aqjed.github.io/FMS_MiddleWare/"
                  },
                  {
                      "title": "SFATE Tactical Simulation — Host Integration",
                      "subtitle": "مشروع احترافي",
                      "description": "واجهة خلفية بلغة C++ تدمج الطائرات المحاكاة في محرك محاكاة SFATE عبر إضافة من حزمة تطوير المورّد. تقود الكيانات، وتؤتمت التحكم بالسيناريوهات، وتعرض أحداث SFATE في مولّد الصور، وتُصدر بيانات DIS للتشغيل البيني متعدد المنصات.",
                      "technologies": "C++, SFATE SDK, DIS Protocol, UDP, Boost, Multi-threading",
                      "link": "https://aqjed.github.io/DISCIGIMiddleware/"
                  },
                  {
                      "title": "Bell 412 Mission Simulator — Middleware System Development",
                      "subtitle": "مشروع احترافي",
                      "description": "برمجيات وسيطة عالية الأداء بلغة C++ تربط محرك ديناميكا الطيران بالأنظمة الفرعية للمحاكي، مع محطة مشغّل مدرّب (IOS) مخصصة بواجهة خلفية بلغة C++ لإدارة السيناريوهات لحظيًا.",
                      "technologies": "C++, CIGI 3.1/3.3, Network Programming (UDP), Boost, Git",
                      "link": ""
                  },
                  {
                      "title": "Engagement Skills Trainer (EST) Shooting Simulator",
                      "subtitle": "مشروع احترافي",
                      "description": "محاكي تدريب على الرماية مبني على رؤية الحاسوب ودمج المستشعرات. مستشعرات OptiTrack مدمجة عبر حزمة تطوير C++ تكتشف أسلحة الليزر تحت الحمراء باستخدام المزامنة الزمنية والختم الزمني العتادي.",
                      "technologies": "C++, OptiTrack SDK, Computer Vision, Sensor Fusion, Temporal Sync",
                      "link": ""
                  },
                  {
                      "title": "Real-Time Protocol Stress Engine & Performance Validator",
                      "subtitle": "أداة داخلية",
                      "description": "أداة عالية الأداء بلغة C++ تختبر استقرار البرمجيات الوسيطة تحت ضغط بيانات DIS وCIGI عالية التردد، مع تحليل زمن الاستجابة والتذبذب لكشف الاختناقات في أسوأ سيناريوهات كثافة الكيانات.",
                      "technologies": "C++, Open DIS, CIGI, Boost, UDP",
                      "link": ""
                  },
                  {
                      "title": "CIGI-Compliant Host Emulator with Integrated User Interface",
                      "subtitle": "مشروع احترافي",
                      "description": "محاكي مضيف متوافق مع CIGI يحاكي حركة الطائرات النفاثة، ويوفّر واجهة غنية للتحكم في بيانات محاكاة الطيران ومراقبتها وتصحيحها.",
                      "technologies": "C++, CIGI v3.3, Boost.Asio, Windows Joystick API, Multithreading, DirectInput",
                      "link": "https://aqjed.github.io/hostemulator/"
                  }
              ]
          },
          "skills_header": "المهارات",
          "skills_subheader": "المهارات التقنية",
          "footer_name": "أديب القحطاني",
          "footer_location": "الرياض، المملكة العربية السعودية",
          "footer_email": "Adeeb.Alqahtani@gmail.com",
          "footer_github": "https://github.com/AQJED",
          "footer_linkedin": "https://www.linkedin.com/in/adalqahtani/"
      }
  };

  function updateLanguage() {
    var t = translations[currentLang];
    var isArabic = currentLang === "ar";

    // Document language and direction, for assistive tech and bidi.
    $("html").attr({ lang: currentLang, dir: isArabic ? "rtl" : "ltr" });
    // Arabic styling keys off this class; see the note in style.css.
    $("body").toggleClass("lang-ar", isArabic);

    // Navigation
    $("#nav_home").text(t.nav_home);
    $("#nav_about").text(t.nav_about);
    $("#nav_experience").text(t.nav_experience);
    $("#nav_certifications").text(t.nav_certifications);
    $("#nav_portfolio").text(t.nav_portfolio);
    $("#nav_skills").text(t.nav_skills);
    $("#btn_hire").text(t.btn_hire);
    $("#btn_resume").text(t.btn_resume);
    $("#lang-toggle").text(t.btn_lang);

    // Navbar alignment & direction
    if (isArabic) {
      $(".navbar-nav").removeClass("ml-auto").addClass("mr-auto");
      $(".navbar, .navbar-nav, .navbar-brand, .hero, .hero-text, .about-content").css({
        "text-align": "right",
        direction: "rtl",
      });
      $(".about-content .section-header").removeClass("text-left").addClass("text-right");
    } else {
      $(".navbar-nav").removeClass("mr-auto").addClass("ml-auto");
      $(".navbar, .navbar-nav, .navbar-brand, .hero, .hero-text, .about-content").css({
        "text-align": "left",
        direction: "ltr",
      });
      $(".about-content .section-header").removeClass("text-right").addClass("text-left");
    }

    // Re-insert the nav list so its font-size re-resolves against the current
    // language class. The links inherit the new --fs-nav but do not re-resolve
    // on their own while their parent takes inline styles in the same frame.
    // The same node is detached and re-attached, so no state is lost.
    var navList = document.querySelector(".navbar-nav");
    if (navList && navList.parentNode) {
      var navParent = navList.parentNode;
      var navNext = navList.nextSibling;
      navParent.removeChild(navList);
      navParent.insertBefore(navList, navNext);
    }

    // Hero
    $("#hero_prefix").text(t.hero_prefix);
    $("#hero_title").text(t.hero_title);
    $("#hero_subtitle").text(t.hero_subtitle);
    initTyped();

    // About
    $("#about_title").text(t.about_title);
    $("#about_subtitle").text(t.about_subtitle);
    $("#about_text").html(t.about_text.replace(/\n/g, "<br><br>"));

    // Experience timeline, built from data so dates travel with the entry.
    $("#exp_header").text(t.exp_header);
    $("#exp_subheader").text(t.exp_subheader);
    var timeline = document.getElementById("timeline");
    timeline.innerHTML = "";
    (t.experience || []).forEach(function (item, i) {
      var side = i % 2 === 0 ? "left" : "right";
      var entry = document.createElement("div");
      // No .wow class here: these nodes are rebuilt on every language switch,
      // and a re-registered element can hold its slide-in start transform.
      entry.className = "timeline-item " + side;
      entry.innerHTML =
        '<div class="timeline-text">' +
        '<div class="timeline-date">' +
        item.date +
        "</div>" +
        "<h2>" +
        item.title +
        "</h2>" +
        "<h4>" +
        item.company +
        "</h4>" +
        (item.desc ? '<p class="timeline-desc">' + item.desc + "</p>" : "") +
        "</div>";
      timeline.appendChild(entry);
    });

    // Certifications
    $("#cert_header").text(t.cert_header);
    $("#cert_subheader").text(t.cert_subheader);
    var certGrid = document.getElementById("cert-grid");
    certGrid.innerHTML = "";
    (t.certifications || []).forEach(function (cert) {
      var card = document.createElement("div");
      card.className = "cert-card";
      card.innerHTML =
        "<h3>" + cert.title + "</h3>" + '<p class="cert-issuer">' + cert.issuer + "</p>";
      certGrid.appendChild(card);
    });

    // Projects
    $("#portfolio_header").text(t.projects.portfolioHeader);
    $("#portfolio_subheader").text(t.projects.portfolioSubheader);
    $("#toggle-projects").text(t.projects.showMore);
    var projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = "";
    // Project cards stay in English in both languages -- one source of truth.
    (translations.en.projects.projectCards || []).forEach(function (project) {
      var card = document.createElement("div");
      card.className = "project-card";
      var heading = project.link
        ? '<h3><a href="' + project.link + '" target="_blank" rel="noopener">' + project.title + "</a></h3>"
        : "<h3>" + project.title + "</h3>";
      card.innerHTML =
        heading +
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

    // Skills
    $("#skills_header").text(t.skills_header);
    $("#skills_subheader").text(t.skills_subheader);

    // RTL containers
    $("#experience").toggleClass("rtl-experience", isArabic);
    $("#certifications").toggleClass("rtl-certifications", isArabic);

    // Footer
    $("#footer_name").text(t.footer_name);
    $("#footer_location").text(t.footer_location);
    $("#footer_email").text(t.footer_email).attr("href", "mailto:" + t.footer_email);
    $("#footer_github").attr("href", t.footer_github);
    $("#footer_linkedin").attr("href", t.footer_linkedin);

  }

  // Language toggle event
  $("#lang-toggle").on("click", function () {
    currentLang = currentLang === "en" ? "ar" : "en";
    updateLanguage();
  });

  // Initialize language on page load
  updateLanguage();

  // Other functions (e.g., initTyped) remain unchanged
})(jQuery);

