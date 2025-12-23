
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

  // --- Language Toggle Code ---
  var currentLang = "en";
  var translations = {
    "en": {
      "nav_home": "Home",
      "nav_about": "About",
      "nav_experience": "Experience",
      "nav_portfolio": "Portfolio",
      "nav_skills": "Skills",
      "nav_endorsements": "Endorsements",
      "hero_prefix": "I'm",
      "hero_title": "Adeeb Alqahtani",
      "hero_subtitle": "Software Integration Engineer, Real-Time Systems Engineer, Simulation Interoperability Engineer", 
      "btn_hire": "Blog",
      "btn_resume": "My Resume",
      "btn_lang": "عربي",
      "about_title": "About Me",
      "about_subtitle": "12+ Years Experience",
      "about_text": "I'm a Software Integration Engineer in defense and aerospace, specializing in real-time middleware and interface systems. I hold a B.S. in Computer Engineering (high-performance and embedded systems) from California State University, San Bernardino and an A.S. in Electrical & Electronics (Instrumentation and Control Systems) from Yanbu Industrial College. \nMy technical expertise includes designing and integrating low latency software and hardware for mission critical defense applications, including C/C++ development for flight simulators, digital and analog circuit design, and hardware and software integration that connects sensors, avionics, and real time training systems.",
	  "exp_header": "My Resume",
      "exp_subheader": "Professional & Academic Career",
      "exp_item1_title": "Software Integration Engineer",
      "exp_item1_company": "Rheinmetall Arabia, Riyadh, Saudi Arabia",
      "exp_item1_desc": "Skills: Middleware Development · Real-Time Data Processing · System Integration · CIGI Protocol · DIS Protocol · Embedded Systems · Software Optimization",
      "exp_item2_title": "Flight Simulator Maintenance Supervisor(D)",
      "exp_item2_company": "Saudia Academy, Jeddah, Saudi Arabia",
      "exp_item2_desc": "Technical Service Department. | Skills: Team Leadership · Operations Management · Scheduling & Training Readiness · System Performance Optimization · Regulatory Compliance",
      "exp_item3_title": "Flight Simulator Engineer",
      "exp_item3_company": "Saudia Academy, Jeddah, Saudi Arabia",
      "exp_item3_desc": "Skills: System Integration · Real-Time Data Processing · Hardware & Software Upgrades · Simulator Certification · FAA/EASA/GACA Compliance",
      "exp_item4_title": "Deep Learning (AI) Nanodegree",
      "exp_item4_company": "MISK Foundation",
      "exp_item4_desc": "Intensive bootcamp with hands-on experience in 6 artificial intelligence projects. | Skills: Neural Networks · Deep Learning · Computer Vision · Natural Language Processing · Model Training & Optimization",
      "exp_item5_title": "B.S. in Computer Engineering",
      "exp_item5_company": "California State University, San Bernardino",
      "exp_item5_desc": "Focused in high performance and embedded systems. | Skills: Embedded Systems · Microcontrollers · Digital Circuit Design · FPGA Programming · Software Development · C/C++ · Verilog",
      "exp_item6_title": "Full Flight Simulator Technician",
      "exp_item6_company": "Saudia Academy, Jeddah, Saudi Arabia",
      "exp_item6_desc": "I worked as maintenance technician. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Avionics Systems · Instrumentation & Control · Motion & Visual Systems",
      "exp_item7_title": "Simulator Maintenance Program",
      "exp_item7_company": "CAE, Montreal, Canada",
      "exp_item7_desc": "One Year Intensive Program. | Skills: Flight Simulator Maintenance · Hardware Troubleshooting · System Calibration · Flight Simulator Systems",
      "exp_item8_title": "Associate Degree in Electrical and Electronics",
      "exp_item8_company": "Yanbu Industrial College",
      "exp_item8_desc": "Majored in instrumentation and control system. | Skills: Instrumentation & Control · Circuit Design · Electrical Troubleshooting · PLC Programming · Industrial Automation",
      "projects": {
  "portfolioHeader": "My Portfolio",
  "portfolioSubheader": "Projects",
  "filters": {
    "all": "All",
    "professional": "Professional",
    "personal": "Personal",
    "academic": "Academic"
  },
  "showMore": "Show More",
  "showLess": "Show Less",
  "projectCards": [
    {
      "title": "Cougar Full Mission Simulator – Middleware System Development",
      "subtitle": "Professional Application",
      "description": "Middleware system for the Cougar Full Mission Simulator (FMS), a high-fidelity military flight simulator used for tactical training.",
      "technologies": "C++, PCAPPLUSPLUS, Open DIS, CIGI, Boost, UDP, Git",
      "link": "https://aqjed.github.io/FMS_MiddleWare/",
      "category": "professional"
    },
	{
  "title": "SFATE Tactical Integration & Scenario Control",
  "subtitle": "Professional Application",
  "description": "A C++ middleware solution designed to bridge external hosts with the SFATE tactical simulation. This system utilizes custom plugins to drive entities and automates scenario control, while also providing DIS protocol output for multi-platform interoperability.",
  "technologies": "C++, SFATE SDK, DIS Protocol, UDP, Boost, Multi-threading",
  "link": "https://aqjed.github.io/DISCIGIMiddleware/",
  "category": "professional"
},
   {
  "title": "Host Emulator for CIGI-Compliant Aircraft Simulation with Integrated User Interface",
  "subtitle": "Professional Application",
  "description": "A CIGI-compliant host emulator that simulates jet motion and offers a rich user interface for controlling, monitoring, and debugging aircraft simulation data.",
  "technologies": "C++, CIGI v3.3, Boost.Asio, Windows Joystick API, Multithreading, DirectInput",
  "link": "https://aqjed.github.io/hostemulator/",
  "category": "professional"
},
	  {
  "title": "CIGI Protocol Bridge & IG Visualization Middleware",
  "subtitle": "Professional Application",
  "description": "A low-level C++ middleware that enables high-fidelity real-time visualization by converting CIGI 3.1 host packets into CIGI 3.3. This ensures legacy simulation hosts can successfully drive modern Image Generators (IG) for immersive 3D rendering.",
  "technologies": "C++, CIGI 3.1/3.3, Network Programming (UDP), Boost, Git",
  "link": "https://aqjed.github.io/Host-to-IG-Middleware/",
  "category": "professional"
},
    {
      "title": "LLM-Driven Cybersecurity Compliance Evaluator (AI)",
      "subtitle": "Professional Application",
      "description": "An automated tool that uses a large language model to evaluate a company's cybersecurity controls against National Cybersecurity Authority (NCA) compliance requirements.",
      "technologies": "Ollama API (LLM), Python(Scripting/Automation), Pandas(Data Handling)",
      "link": "https://aqjed.github.io/LLM-Driven-Cybersecurity-Compliance-Evaluator/",
      "category": "professional"
    },
    
    {
      "title": "NMF-Based Facial Recognition System (MATLAB)",
      "subtitle": "Academic Project",
      "description": "MATLAB-based face verification tool that uses Non-negative Matrix Factorization (NMF) to compare a captured facial image against a stored image dataset and decide whether there is a valid identity match.",
      "technologies": "MATLAB, NMF, Image Processing, GUI, Pattern Recognition",
      "link": "https://github.com/AQJED/Facial-Recognition-App-with-Matlab",
      "category": "academic"
    },
    {
      "title": "5 DOF Robotic Arm Object Detection (Embedded System)",
      "subtitle": "Personal Project",
      "description": "Determines the position and orientation of an object using laser beams and photoresistors to control a 5 DOF robotic arm.",
      "technologies": "C/C++, Embedded Systems, Robotic Kinematics, DSP",
      "link": "https://github.com/AQJED/5-DOF-Robotic-Arm-Object-Detection",
      "category": "personal"
    },
   
    
    {
      "title": "Real-Time Parking Occupancy Controller (Verilog / FPGA)",
      "subtitle": "Personal Project",
      "description": "Designed and implemented a Verilog-based FSM on a Xilinx FPGA to track vehicle entry/exit and update parking occupancy status in real time.",
      "technologies": "Verilog, FSM Design, FPGA, Xilinx",
      "link": "https://github.com/AQJED/Parking-lot-occupancy",
      "category": "personal"
    },
    {
      "title": "ARINC 429 Avionics Bus Interface (Verilog / FPGA)",
      "subtitle": "Personal Project",
      "description": "Designed and implemented an ARINC 429 transmitter/receiver core in Verilog on a Xilinx FPGA, handling word formatting, label decoding, parity, and data monitoring via a PC interface.",
      "technologies": "Verilog, FPGA, ARINC 429, FSM Design, UART",
      "link": "https://github.com/AQJED",
      "category": "personal"
    },
    {
      "title": "Light Control and Path Prediction (Embedded System)",
      "subtitle": "Academic Project",
      "description": "A cost-effective embedded system for intelligent light control and basic path prediction, utilizing an Arduino and various sensors.",
      "technologies": "C/C++, Sensors, Microcontroller, Circuit Design",
      "link": "https://github.com/AQJED/Light-Control-and-Path-Prediction-Embedded-System-",
      "category": "academic"
      }
  ]
},
      "skills_header": "Skills",
      "skills_subheader": "Technical Proficiencies",
      "testimonial1_text": "Adeeb is a brilliant innovator and a driven engineer. His dedication and technical skills make him an invaluable asset to any team.",
      "testimonial1_name": "Ali Yamani",
      "testimonial1_title": "Exhibits Maintenance Manager | Riyadh",
      "testimonial2_text": "Adeeb’s expertise extends beyond technical proficiency; he possesses strong communication skills and a collaborative mindset. He has consistently demonstrated his ability to work effectively with cross-functional teams, ensuring seamless coordination and successful project outcomes.",
      "testimonial2_name": "Khalid Alotaibi",
      "testimonial2_title": "Flight Simulator Engineering Manager | Jeddah",
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
      "nav_portfolio": "المشاريع",
      "nav_skills": "المهارات",
      "nav_endorsements": "التوصيات",
      "hero_prefix": "أنا",
      "hero_title": "أديب القحطاني",
      "hero_subtitle": "مهندس تكامل برمجيات، مهندس أنظمة لحظية، مهندس تكامل وتوافق أنظمة المحاكاة",
      "btn_hire": "مدونتي",
      "btn_resume": "السيرة الذاتية",
      "btn_lang": "English",
      "about_title": "من أنا",
      "about_subtitle": "أكثر من 12 عامًا من الخبرة",
	  "about_text": "مهندس تكامل برمجيات شغوف بتطوير البرمجيات وتكامل انظمة الزمن الحقيقي. أحمل بكالوريوس في هندسة الحاسب مع تخصص في الأنظمة عالية الأداء والمضمنة من جامعة كاليفورنيا بالاظافة الى شهادة جامعية متوسطة في الهندسة الكهربائية والإلكترونية من جامعة ينبع الصناعية .\nلدي أكثر من 12 عاما من الخبرة،  حيث عملت في تطوير البرمجيات الوسيطة و تكامل وتحسين أداء الأنظمة للتطبيقات الدفاعية الحساسة ومحاكيات الطيران.",      
	  "exp_header": "السيرة الذاتية",
      "exp_subheader": "المسيرة المهنية والأكاديمية",
      "exp_item1_title": "مهندس تكامل برمجي",
      "exp_item1_company": "رينمتال العربية، الرياض، المملكة العربية السعودية",
      "exp_item1_desc": " المهارات:  تطوير البرمجيات الوسيطة · معالجة بيانات المحاكيات · تكامل الأنظمة  ·الأنظمة المضمنة · تحسين البرمجيات",
      "exp_item2_title": "مشرف صيانة محاكيات الطيران (م)",
      "exp_item2_company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
      "exp_item2_desc": " قسم الخدمة الفنية | المهارات :  قيادة الفريق · إدارة العمليات · تحسين أداء الأنظمة ",
      "exp_item3_title": "مهندس محاكيات الطيران",
      "exp_item3_company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
      "exp_item3_desc": " المهارات: تكامل الأنظمة · ترقية الأجهزة والبرمجيات · الامتثال لمعايير الهيئة العامة للطيران المدني, وكالة سلامة الطيران الأوروبية و إدارة الطيران الفيدرالية الامريكية",
      "exp_item4_title": "شهادة نانو في التعلم العميق (الذكاء الاصطناعي)",
      "exp_item4_company": "مؤسسة مسك",
      "exp_item4_desc": "معسكر تدريبي مكثف مع خبرة عملية في 6 مشاريع ذكاء اصطناعي. | المهارات: الشبكات العصبية · التعلم العميق · رؤية الحاسوب · معالجة اللغة الطبيعية · تدريب النماذج وتحسينها",
      "exp_item5_title": "بكالوريوس في هندسة الحاسب الالي",
      "exp_item5_company": "جامعة ولاية كاليفورنيا، سان برناردينو",
      "exp_item5_desc": "تخصصت في الأنظمة عالية الأداء والأنظمة المضمنة. | المهارات: الأنظمة المضمنة · المتحكمات الدقيقة · تصميم الدوائر الرقمية · برمجة  · تطوير البرمجيات · ",
      "exp_item6_title": "فني محاكيات الطيران ",
      "exp_item6_company": "أكاديمية السعودية، جدة، المملكة العربية السعودية",
      "exp_item6_desc": "عملت كفني صيانة. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية",
      "exp_item7_title": "برنامج صيانة المحاكيات  ",
      "exp_item7_company": "CAE، مونتريال، كندا",
      "exp_item7_desc": "برنامج مكثف لمدة عام. | المهارات: صيانة محاكيات الطيران · استكشاف أخطاء الأجهزة وإصلاحها · معايرة الأنظمة · أنظمة الطيران · القياس والتحكم · الأنظمة الحركية والبصرية",
      "exp_item8_title": "شهادة جامعية متوسطة في تقنية الكهرباء والإلكترونيات",
      "exp_item8_company": "كلية ينبع الصناعية",
      "exp_item8_desc": "تخصصت في الالات الدقيقة و التحكم. | المهارات: القياس والتحكم · تصميم الدوائر الكهربائية وإصلاحها · الأتمتة الصناعية بي ال سي",
      "projects": {
  "portfolioHeader": "مشاريعي",
  "portfolioSubheader": "المشاريع",
  "filters": {
    "all": "الكل",
    "personal": "مشروع شخصي",
    "professional": "مشروع احترافي",
    "academic": "مشروع جامعي"
  },
  "showMore": "عرض المزيد",
  "showLess": "عرض أقل",
  "projectCards": [
    {
      "title": "نظام وسيط لمحاكي المهام الكاملة لطائرة الكوغر",
      "subtitle": "تطبيق احترافي",
      "description": "نظام وسيط لمحاكي المهام الكاملة لطائرة الكوغر (FMS)، وهو محاكي طيران عسكري عالي الدقة يُستخدم للتدريب التكتيكي.",
      "technologies": "C++, PCAPPLUSPLUS, Open DIS, CIGI, Boost, UDP, Git",
      "link": "https://aqjed.github.io/DISCIGIMiddleware/",
      "category": "professional"
    },
    {
  "title": "تكامل SFATE التكتيكي والتحكم بالسيناريو",
  "subtitle": "تطبيق احترافي للتكامل والتحكم",
  "description": "طبقة برمجية وسيطة مكتوبة بلغة C++ لربط أنظمة المضيف الخارجية بمحاكاة SFATE التكتيكية. يعتمد النظام على إضافات برمجية (Plugins) مخصصة للتحكم بالكيانات وأتمتة أوامر السيناريو (مثل: تحميل/بدء/إيقاف/إيقاف مؤقت)، مع بث رسائل بروتوكول DIS عبر UDP لضمان التشغيل البيني مع الأنظمة المختلفة.",
  "technologies": "C++، SFATE SDK، بروتوكول DIS، UDP، Boost، تعدد الخيوط (Multi-threading)",
  "link": "https://aqjed.github.io/DISCIGIMiddleware/",
  "category": "احترافي"
},

{
  "title": "محاكي لطائرة يستخدم عصا التحكم وواجهة مستخدم متقدمة",
  "subtitle": "تطبيق احترافي",
  "description": "محاكي هوست متوافق مع CIGI يحاكي حركة الطائرة باستخدام عصا التحكم ويوفر واجهة مستخدم للتحكم والمراقبة وتصحيح بيانات المحاكاة.",
  "technologies": "C++, CIGI v3.3, Boost.Asio, Windows Joystick API, Multithreading, DirectInput",
  "link": "https://aqjed.github.io/hostemulator/",
  "category": "professional"
},
	  {
  "title": "وسيط CIGI لربط المضيف بمولّد الصور (IG)",
  "subtitle": "تطبيق احترافي للتكامل المرئي",
  "description": "برمجية وسيطة مكتوبة بلغة C++ تقوم بترقية رسائل CIGI الصادرة من الحاسب المضيف من الإصدار 3.1 إلى 3.3، لتمكين أنظمة المحاكاة القديمة من العمل بسلاسة مع مولّدات الصور الحديثة (IG). النتيجة هي تحديثات آنية لموضع/اتجاه الكيانات وتشغيل عرض ثلاثي الأبعاد أكثر دقة واستقرارًا.",
  "technologies": "C++، CIGI 3.1/3.3، برمجة الشبكات (UDP)، Boost، Git",
  "link": "https://aqjed.github.io/Host-to-IG-Middleware/",
  "category": "احترافي"
},

	  {
  "title": "مقيّم امتثال الأمن السيبراني المعتمد على LLM (AI)",
  "subtitle": "تطبيق احترافي",
  "description": "أداة آلية تستخدم نموذج لغة كبير لتقييم ضوابط الأمن السيبراني في شركة مقابل متطلبات الامتثال من الهيئة الوطنية للأمن السيبراني (NCA).",
  "technologies": "Ollama API (LLM), Python(Scripting/Automation), Pandas(Data Handling)",
  "link": "https://aqjed.github.io/LLM-Driven-Cybersecurity-Compliance-Evaluator/",
  "category": "professional"
},
    {
      "title": "ذراع آلي (نظام مضمن)",
      "subtitle": "مشروع شخصي",
      "description": "يحدد النظام موضع الجسم واتجاهه باستخدام أشعة الليزر والفوتوريسيستور للتحكم بذراع روبوتية بخمس درجات حرية.",
      "technologies": "C/C++, Photo-resistors, Robotic Kinematics, Embedded Systems",
      "link": "https://github.com/AQJED/5-DOF-Robotic-Arm-Object-Detection",
      "category": "personal"
    },
    {
      "title": "نظام التعرف على الوجوه",
      "subtitle": "مشروع جامعي",
      "description": "باستخدام تحليل المصفوفة غير السالبة (NMF)، يتم تحليل الصورة الملتقطة للتعرف على الشخص بمقارنتها مع قاعدة البيانات.",
      "technologies": "MATLAB, NMF, Image Processing, GUI, Pattern Recognition",
      "link": "https://github.com/AQJED/Facial-Recognition-App-with-Matlab",
      "category": "academic"
    },
    

    {
      "title": "متحكم إشغال مواقف السيارات Real-Time (Verilog / FPGA)",
      "subtitle": "مشروع شخصي",
      "description": "تصميم وتنفيذ متحكم لإشغال مواقف السيارات باستخدام Verilog وآلة حالات منتهية (FSM) على  Xilinx FPGA، لتتبع دخول وخروج المركبات وتحديث حالة المواقف المتاحة بشكل Real time.",
      "technologies": "Verilog, FSM, FPGA, Xilinx",
      "link": "https://github.com/AQJED/Parking-lot-occupancy",
      "category": "personal"
    },
    {
      "title": "التحكم في الإضاءة وتوقع المسار (نظام مضمن)",
      "subtitle": "مشروع جامعي",
      "description": "نظام مضمن منخفض التكلفة للتحكم الذكي في الإضاءة وتوقع اتجاه مسار المشاة باستخدام مستشعرات متعددة.",
      "technologies": "C/C++, Sensors, Microcontroller, Circuit Design",
      "link": "https://github.com/AQJED/Light-Control-and-Path-Prediction-Embedded-System-",
      "category": "academic"
    },
	    {
  "title": "واجهة ناقل إلكترونيات الطيران ARINC 429 (Verilog / FPGA)",
  "subtitle": "مشروع شخصي",
  "description": "تصميم وتنفيذ نواة مرسل ومستقبل لبروتوكول ARINC 429 باستخدام Verilog على  Xilinx FPGA.",
  "technologies": "Verilog, FPGA, ARINC 429, FSM Design, UART",
  "link": "https://github.com/AQJED",
  "category": "personal"
}
  ]
},
      "skills_header": "المهارات",
      "skills_subheader": "المهارات التقنية",
      "testimonial1_text": "Adeeb is a brilliant innovator and a driven engineer. His dedication and technical skills make him an invaluable asset to any team.",
      "testimonial1_name": "Ali Yamani",
      "testimonial1_title": "Exhibits Maintenance Manager | Riyadh",
      "testimonial2_text": "Adeeb’s expertise extends beyond technical proficiency; he possesses strong communication skills and a collaborative mindset. He has consistently demonstrated his ability to work effectively with cross-functional teams.",
      "testimonial2_name": "Khalid Alotaibi",
      "testimonial2_title": "Flight Simulator Engineering Manager | Jeddah",
      "footer_name": "أديب القحطاني",
      "footer_location": "الرياض، المملكة العربية السعودية",
      "footer_email": "Adeeb.Alqahtani@gmail.com",
      "footer_github": "https://github.com/AQJED",
      "footer_linkedin": "https://www.linkedin.com/in/adalqahtani/"
    }
  };

  function updateLanguage() {
    // Navigation update
    $("#nav_home").text(translations[currentLang].nav_home);
    $("#nav_about").text(translations[currentLang].nav_about);
    $("#nav_experience").text(translations[currentLang].nav_experience);
    $("#nav_portfolio").text(translations[currentLang].nav_portfolio);
    $("#nav_skills").text(translations[currentLang].nav_skills);
    $("#nav_endorsements").text(translations[currentLang].nav_endorsements);
    $("#btn_hire").text(translations[currentLang].btn_hire);
    $("#btn_resume").text(translations[currentLang].btn_resume);
    $("#lang-toggle").text(translations[currentLang].btn_lang);

    // Navbar alignment & direction for Arabic
      if (currentLang === "ar") {
          $(".navbar-nav").removeClass("ml-auto").addClass("mr-auto");
          $(".navbar, .navbar-nav, .navbar-brand, .hero, .hero-text, .about-content").css({
              "text-align": "right",
              "direction": "rtl",
          });
          // Change about header alignment for Arabic
          $(".about-content .section-header").removeClass("text-left").addClass("text-right");
      } else {
          $(".navbar-nav").removeClass("mr-auto").addClass("ml-auto");
          $(".navbar, .navbar-nav, .navbar-brand, .hero, .hero-text, .about-content").css({
              "text-align": "left",
              "direction": "ltr",
          });
          // Restore about header alignment for English
          $(".about-content .section-header").removeClass("text-right").addClass("text-left");
      }


    // Hero update
    $("#hero_prefix").text(translations[currentLang].hero_prefix);
    $("#hero_title").text(translations[currentLang].hero_title);
    $("#hero_subtitle").text(translations[currentLang].hero_subtitle);
    initTyped();

    // About update
    $("#about_title").text(translations[currentLang].about_title);
    $("#about_subtitle").text(translations[currentLang].about_subtitle);
    $("#about_text").html(
      translations[currentLang].about_text.replace(/\n/g, "<br><br>")
    );

    // Experience update
    $("#exp_header").text(translations[currentLang].exp_header);
    $("#exp_subheader").text(translations[currentLang].exp_subheader);
    $("#exp_item1_title").text(translations[currentLang].exp_item1_title);
    $("#exp_item1_company").text(translations[currentLang].exp_item1_company);
    $("#exp_item1_desc").text(translations[currentLang].exp_item1_desc);
    $("#exp_item2_title").text(translations[currentLang].exp_item2_title);
    $("#exp_item2_company").text(translations[currentLang].exp_item2_company);
    $("#exp_item2_desc").text(translations[currentLang].exp_item2_desc);
    $("#exp_item3_title").text(translations[currentLang].exp_item3_title);
    $("#exp_item3_company").text(translations[currentLang].exp_item3_company);
    $("#exp_item3_desc").text(translations[currentLang].exp_item3_desc);
    $("#exp_item4_title").text(translations[currentLang].exp_item4_title);
    $("#exp_item4_company").text(translations[currentLang].exp_item4_company);
    $("#exp_item4_desc").text(translations[currentLang].exp_item4_desc);
    $("#exp_item5_title").text(translations[currentLang].exp_item5_title);
    $("#exp_item5_company").text(translations[currentLang].exp_item5_company);
    $("#exp_item5_desc").text(translations[currentLang].exp_item5_desc);
    $("#exp_item6_title").text(translations[currentLang].exp_item6_title);
    $("#exp_item6_company").text(translations[currentLang].exp_item6_company);
    $("#exp_item6_desc").text(translations[currentLang].exp_item6_desc);
    $("#exp_item7_title").text(translations[currentLang].exp_item7_title);
    $("#exp_item7_company").text(translations[currentLang].exp_item7_company);
    $("#exp_item7_desc").text(translations[currentLang].exp_item7_desc);
    $("#exp_item8_title").text(translations[currentLang].exp_item8_title);
    $("#exp_item8_company").text(translations[currentLang].exp_item8_company);
    $("#exp_item8_desc").text(translations[currentLang].exp_item8_desc);

    // Projects section update – use the new "projects" object
    $("#portfolio_header").text(translations[currentLang].projects.portfolioHeader);
	$("#portfolio_subheader").text(translations[currentLang].projects.portfolioSubheader);
	$(".filter-btn[data-filter='all']").text(translations[currentLang].projects.filters.all);
    $(".filter-btn[data-filter='personal']").text(translations[currentLang].projects.filters.personal);
	$(".filter-btn[data-filter='professional']").text(translations[currentLang].projects.filters.professional);
	$(".filter-btn[data-filter='academic']").text(translations[currentLang].projects.filters.academic);
    $("#toggle-projects").text(translations[currentLang].projects.showMore);
    var projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = "";
    var projectCards = translations[currentLang].projects.projectCards || [];
    projectCards.forEach(function (project) {
      var card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", project.category || "all");
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
	// Add or remove a class on the projects container for RTL styling
if (currentLang === "ar") {
  $(".project-filters").addClass("rtl-filters");
  $("#projects-grid").addClass("rtl-projects");
  $("#experience").addClass("rtl-experience");
} else {
  $(".project-filters").removeClass("rtl-filters");
  $("#projects-grid").removeClass("rtl-projects");
  $("#experience").removeClass("rtl-experience");
}


    // Skills update
    $("#skills_header").text(translations[currentLang].skills_header);
    $("#skills_subheader").text(translations[currentLang].skills_subheader);

    // Testimonials update
    $("#testimonial1_text").text(translations[currentLang].testimonial1_text);
    $("#testimonial1_name").text(translations[currentLang].testimonial1_name);
    $("#testimonial1_title").text(translations[currentLang].testimonial1_title);
    $("#testimonial2_text").text(translations[currentLang].testimonial2_text);
    $("#testimonial2_name").text(translations[currentLang].testimonial2_name);
    $("#testimonial2_title").text(translations[currentLang].testimonial2_title);

    // Footer update
	$("#footer_name").text(translations[currentLang].footer_name); 
	$("#footer_location").text(translations[currentLang].footer_location); 
	$("#footer_email").text(translations[currentLang].footer_email); 
	$("#footer_github").attr("href", translations[currentLang].footer_github); 
	$("#footer_linkedin").attr("href", translations[currentLang].footer_linkedin);   

// Refresh Owl Carousel for testimonials
$(".testimonials-carousel").trigger("refresh.owl.carousel");
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
$(document).ready(function () {
  $('.filter-btn').on('click', function () {
    var filterValue = $(this).attr('data-filter');

    // Set the active class on the clicked button
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Filter the project cards
    if (filterValue === 'all') {
      $('.project-card').fadeIn();
    } else {
      $('.project-card').each(function () {
        if ($(this).attr('data-category') === filterValue) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    }
  });
});
