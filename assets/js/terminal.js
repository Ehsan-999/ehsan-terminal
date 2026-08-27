(function () {
  "use strict";

  var screen = document.getElementById("screen");
  var input = document.getElementById("cmd-input");
  var hint = document.getElementById("hint");
  var langBadge = document.getElementById("lang-badge");
  if (!screen || !input || !hint || !langBadge) return;

  var history = [];
  var histIndex = -1;
  var lang = "en";

  var pageCopy = {
    en: {
      navTerminal: "Terminal",
      navContact: "Contact",
      kicker: "Resume · Portfolio",
      name: "Ehsan<br>Noorbakhsh",
      role: "Computer Engineering",
      place: "University of Qom",
      lead: "Explore my background through an interactive terminal — type a command and dig in.",
      contactTitle: "Contact",
      contactLead: "Say hello — or jump into one of these.",
      labelEmail: "Email",
      labelPhone: "Phone",
      labelLocation: "Location",
      locationValue: "Qom, Iran",
      footerName: "Ehsan Noorbakhsh",
      hint: 'Type <b>help</b> to get started · switch language: <b>lang fa</b>',
      title: "Ehsan Noorbakhsh — Resume",
    },
    fa: {
      navTerminal: "ترمینال",
      navContact: "تماس",
      kicker: "رزومه · نمونه‌کار",
      name: "احسان<br>نوربخش",
      role: "مهندسی کامپیوتر",
      place: "دانشگاه قم",
      lead: "از طریق ترمینال تعاملی با مسیر و کارهایم آشنا شو — یک دستور بزن و ادامه بده.",
      contactTitle: "تماس",
      contactLead: "سلام کن — یا از این راه‌ها وارد شو.",
      labelEmail: "ایمیل",
      labelPhone: "تلفن",
      labelLocation: "موقعیت",
      locationValue: "قم، ایران",
      footerName: "احسان نوربخش",
      hint: 'برای شروع تایپ کن: <b>help</b>  ·  تغییر زبان: <b>lang en</b>',
      title: "احسان نوربخش — رزومه",
    },
  };

  var ascii =
    "  ______ _   _\n |  ____| \\ | |\n | |__  |  \\| |\n |  __| | . ` |\n | |____| |\\  |\n |______|_| \\_|";

  function addLine(text, cls) {
    var d = document.createElement("div");
    d.className = "line" + (cls ? " " + cls : "");
    d.textContent = text;
    screen.appendChild(d);
  }

  function addGap() {
    var d = document.createElement("div");
    d.className = "line gap";
    screen.appendChild(d);
  }

  function addRaw(html, cls) {
    var d = document.createElement("div");
    d.className = "line" + (cls ? " " + cls : "");
    d.innerHTML = html;
    screen.appendChild(d);
  }

  function addLinkLine(prefix, url, displayText, cls) {
    var d = document.createElement("div");
    d.className = "line" + (cls ? " " + cls : "");
    if (prefix) {
      d.appendChild(document.createTextNode(prefix));
    }
    var a = document.createElement("a");
    a.href = url;
    a.textContent = displayText;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    d.appendChild(a);
    screen.appendChild(d);
  }

  function scrollBottom() {
    screen.scrollTop = screen.scrollHeight;
  }

  function r(cls) {
    return lang === "fa" ? ("rtl " + (cls || "")).trim() : cls || "";
  }

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var commands = {
    help: function () {
      if (lang === "fa") {
        addLine("دستورات موجود:", r("accent"));
        addLine("  about       — درباره من", r());
        addLine("  edu         — تحصیلات", r());
        addLine("  skills      — مهارت‌های فنی", r());
        addLine("  proj        — پروژه‌های متن‌باز", r());
        addLine("  cert        — گواهی‌ها", r());
        addLine("  contact     — راه‌های ارتباطی", r());
        addLine("  whoami      — من کی‌ام؟", r());
        addLine("  ls          — لیست فایل‌ها", r());
        addLine("  lang        — تغییر زبان (fa/en)", r());
        addLine("  clear       — پاک کردن صفحه", r());
      } else {
        addLine("Available commands:", "accent");
        addLine("  about       — about me");
        addLine("  edu         — education");
        addLine("  skills      — technical skills");
        addLine("  proj        — open-source projects");
        addLine("  cert        — certificates");
        addLine("  contact     — contact info");
        addLine("  whoami      — who am I?");
        addLine("  ls          — list files");
        addLine("  lang        — switch language (fa/en)");
        addLine("  clear       — clear screen");
      }
    },
    about: function () {
      if (lang === "fa") {
        addLine("احسان نوربخش — دانشجوی مهندسی کامپیوتر، دانشگاه قم", r("clay"));
        addGap();
        addLine("دانشجوی مهندسی کامپیوتر دانشگاه قم هستم و تجربه‌ی انجام چندین پروژه‌ی دانشگاهی و عملی", r());
        addLine("در زمینه‌ی برنامه‌نویسی و توسعه‌ی نرم‌افزار دارم. با Python و php و #C کار کرده‌ام و در طراحی", r());
        addLine("و پیاده‌سازی مدل‌های یادگیری ماشین تجربه دارم. همچنین در توسعه‌ی وب‌سایت یک شرکت هم", r());
        addLine("نقش داشته‌ام که با فرآیندهای واقعی توسعه‌ی نرم‌افزار آشناترم کرد.", r());
        addGap();
        addLine("علاقه‌مند به هوش مصنوعی‌ام و همیشه در حال یادگیری تکنولوژی‌های جدید برای رشد شخصی", r("dim"));
        addLine("و حرفه‌ای هستم.", r("dim"));
      } else {
        addLine("Ehsan Noorbakhsh — Computer Engineering student, University of Qom", "clay");
        addGap();
        addLine("I'm a computer engineering student at the University of Qom with hands-on");
        addLine("experience building academic and personal software projects. I've worked with");
        addLine("Python , C# and php , and have experience designing and implementing machine learning");
        addLine("models. I also contributed to a company website, which gave me real exposure");
        addLine("to actual development workflows.");
        addGap();
        addLine("I'm interested in AI and always learning new technologies to keep growing,", "dim");
        addLine("both personally and professionally.", "dim");
      }
    },
    edu: function () {
      if (lang === "fa") {
        addLine("کارشناسی مهندسی کامپیوتر", r("clay"));
        addLine("  دانشگاه قم  ·  مهر ۱۴۰۳ تا اکنون", r("dim"));
        addGap();
        addLine("دیپلم ریاضی", r("clay"));
        addLine("  دبیرستان استعدادهای درخشان دکتر شهریاری، قم  ·  ۱۴۰۰ تا ۱۴۰۳", r("dim"));
      } else {
        addLine("B.Sc. in Computer Engineering", "clay");
        addLine("  University of Qom  ·  Sep 2024 – present", "dim");
        addGap();
        addLine("Math Diploma", "clay");
        addLine("  Shahriari Talented Students High School, Qom  ·  2021 – 2024", "dim");
      }
    },
    skills: function () {
      addLine(lang === "fa" ? "مهارت‌های فنی:" : "Technical skills:", r("accent"));
      addGap();
      var bar = function (name, pct, level) {
        var filled = Math.round(pct / 10);
        var b = "█".repeat(filled) + "░".repeat(10 - filled);
        addLine("  " + name.padEnd(17, " ") + b + "  " + level);
      };
      bar("Python", 70, "2-4y");
      bar("HTML5", 70, "2-4y");
      bar("Machine Learning", 35, "<1y");
      bar("JavaScript", 35, "<1y");
      bar("Windows Forms", 35, "<1y");
      bar("C#", 30, "<1y");
      bar("C++", 25, "<1y");
      addGap();
      addLine(
        lang === "fa"
          ? "فناوری‌های مورد علاقه: Python, JavaScript, C#, HTML, CSS, C++"
          : "Favorite technologies: Python, JavaScript, C#, HTML, CSS, C++",
        r("dim")
      );
    },
    proj: function () {
      if (lang === "fa") {
        addLine("پروژه‌های متن‌باز:", r("accent"));
        addGap();
        addLine("1. Kanban  [PHP]", "clay");
        addLine("   بک‌اند یک سیستم مدیریت کانبان مشابه ترلو/جیرا؛ احراز هویت، بوردها، تسک‌ها و سطوح دسترسی.", r("dim"));
        addLinkLine("   → ", "https://github.com/Ehsan-999/Kanban", "github.com/ehsannoorbakhsh/Kanban");
        addGap();
        addLine("2. API-Foods  [Python / FastAPI]", "clay");
        addLine("   REST API برای مدیریت آیتم‌های غذایی با CRUD کامل و اعتبارسنجی Pydantic.", r("dim"));
        addLinkLine("   → ", "https://github.com/Ehsan-999/API-Foods", "github.com/ehsannoorbakhsh/API-Foods");
        addGap();
        addLine("3. clipboard-pro  [Python / Tkinter]", "clay");
        addLine("   مدیریت‌کننده‌ی کلیپ‌بورد با قابلیت پین‌کردن، جست‌وجو و ذخیره‌سازی.", r("dim"));
        addLinkLine("   → ", "https://github.com/Ehsan-999/clipboard-pro", "github.com/ehsannoorbakhsh/clipboard-pro");
        addGap();
        addLine("4. Housing-price-prediction  [Python / Jupyter]", "clay");
        addLine("   پیش‌بینی قیمت خانه با رگرسیون خطی بر اساس متراژ، اتاق، پارکینگ و آدرس.", r("dim"));
        addLinkLine("   → ", "https://github.com/Ehsan-999/Housing-price-prediction", "github.com/ehsannoorbakhsh/Housing-price-prediction");
        addGap();
        addLine("5. Inventory-Management-System  [C# / SQL Server]", "clay");
        addLine("   سیستم انبارداری با ورود کاربر، ثبت محصول، ردیابی موجودی و گزارش تراکنش‌ها.", r("dim"));
        addLinkLine(
          "   → ",
          "https://github.com/Ehsan-999/Inventory-Management-System-Cs-WinForms-and-SQL-Server",
          "github.com/ehsannoorbakhsh/Inventory-Management-System"
        );
      } else {
        addLine("Open-source projects:", "accent");
        addGap();
        addLine("1. Kanban  [PHP]", "clay");
        addLine("   Backend for a Kanban board system similar to Trello/Jira — auth, boards,");
        addLine("   tasks, comments, and permissions.");
        addLinkLine("   → ", "https://github.com/Ehsan-999/Kanban", "github.com/ehsannoorbakhsh/Kanban");
        addGap();
        addLine("2. API-Foods  [Python / FastAPI]", "clay");
        addLine("   A REST API for managing food items with full CRUD and Pydantic validation.");
        addLinkLine("   → ", "https://github.com/Ehsan-999/API-Foods", "github.com/ehsannoorbakhsh/API-Foods");
        addGap();
        addLine("3. clipboard-pro  [Python / Tkinter]", "clay");
        addLine("   A clipboard manager with pinning, search, and history.");
        addLinkLine("   → ", "https://github.com/Ehsan-999/clipboard-pro", "github.com/ehsannoorbakhsh/clipboard-pro");
        addGap();
        addLine("4. Housing-price-prediction  [Python / Jupyter]", "clay");
        addLine("   House price prediction using linear regression based on area, rooms,");
        addLine("   parking, and address.");
        addLinkLine("   → ", "https://github.com/Ehsan-999/Housing-price-prediction", "github.com/ehsannoorbakhsh/Housing-price-prediction");
        addGap();
        addLine("5. Inventory-Management-System  [C# / SQL Server]", "clay");
        addLine("   An inventory system with login, product registration, stock tracking,");
        addLine("   and transaction reports.");
        addLinkLine(
          "   → ",
          "https://github.com/Ehsan-999/Inventory-Management-System-Cs-WinForms-and-SQL-Server",
          "github.com/ehsannoorbakhsh/Inventory-Management-System"
        );
      }
    },
    contact: function () {
      addLinkLine("Email    : ", "mailto:ehsannoorbakhsh864@gmail.com", "ehsannoorbakhsh864@gmail.com");
      addLinkLine("Phone    : ", "tel:+989052818292", "0905 281 8292");
      addLine("Location : Qom, Iran");
      addLinkLine("GitHub   : ", "https://github.com/Ehsan-999", "github.com/Ehsan-999");
      addLinkLine("LinkedIn : ", "https://www.linkedin.com/in/ehsan-noorbakhsh-a4a32a203", "linkedin.com/in/ehsannoorbakhsh");
      addLinkLine("Telegram : ", "https://t.me/Ehsan2k", "t.me/Ehsan2k");
    },
    whoami: function () {
      if (lang === "fa") {
        addLine("ehsan — computer engineering student, qom university", "accent");
        addLine("عاشق پایتون، یادگیری ماشین، و ساختن چیزهایی که واقعاً کار می‌کنن.", r("dim"));
      } else {
        addLine("ehsan — computer engineering student, qom university", "accent");
        addLine("Loves Python, machine learning, and building things that actually work.", "dim");
      }
    },
    ls: function () {
      addLine("about.txt   education.txt   skills.json   projects/   contact.sh", "dim");
    },
    date: function () {
      addLine(new Date().toString());
    },
    sudo: function () {
      if (lang === "fa") {
        addLine("ehsan is not in the sudoers file. This incident will be reported.", "err");
        addLine(" آروم باش رفیق، فقط یه رزومه‌ست", r("dim"));
      } else {
        addLine("ehsan is not in the sudoers file. This incident will be reported.", "err");
        addLine(" relax, it's just a resume", "dim");
      }
    },
    lang: function (arg) {
      var choice = (arg || "").toLowerCase();
      if (choice === "en" || choice === "english") {
        setLang("en");
        addLine("Language switched to English.", "accent");
      } else if (choice === "fa" || choice === "farsi" || choice === "persian") {
        setLang("fa");
        addLine("زبان به فارسی تغییر کرد.", r("accent"));
      } else if (choice === "") {
        setLang(lang === "fa" ? "en" : "fa");
        addLine(lang === "fa" ? "زبان به فارسی تغییر کرد." : "Language switched to English.", r("accent"));
      } else {
        addLine(lang === "fa" ? "استفاده: lang fa | lang en" : "Usage: lang fa | lang en", r("err"));
      }
    },
    cert: function () {
      if (lang === "fa") {
        addLine("گواهی‌ها:", r("accent"));
        addGap();
        addLine("تجزیه و تحلیل و آماده‌سازی داده‌ها با پایتون", r("clay"));
        addLine("  فرادرس  ·  اعتبار از دی ۱۴۰۴ تا اکنون", r("dim"));
        addLine("  Preprocessor, Data Analysis, NumPy, Pandas, Python");
        addGap();
        addLine("یادگیری ماشین با پایتون", r("clay"));
        addLine("  مکتب‌خونه  ·  اعتبار از آذر ۱۴۰۴ تا اکنون", r("dim"));
        addLine("  Recommendation Engine, Logistic Regression, Classification, Machine Learning, Hierarchical Clustering");
        addGap();
        addLine("طراحی صفحات وب پیشرفته", r("clay"));
        addLine("  جهاد دانشگاهی  ·  اعتبار از مرداد ۱۴۰۴ تا اکنون", r("dim"));
        addLine("  DOM, API, JavaScript");
        addGap();
        addLine("پایتون پیشرفته", r("clay"));
        addLine("  مکتب‌خونه  ·  اعتبار از بهمن ۱۴۰۳ تا اکنون", r("dim"));
        addLine("  Decision Tree, Beautiful Soup, MySQL, Python");
        addGap();
        addLine("طراحی صفحات وب مقدماتی", r("clay"));
        addLine("  جهاد دانشگاهی  ·  اعتبار از دی ۱۴۰۳ تا اکنون", r("dim"));
        addLine("  CSS, HTML");
        addGap();
        addLine("پایتون مقدماتی", r("clay"));
        addLine("  دبیرستان شهید دکتر شهریاری  ·  اعتبار از دی ۱۳۹۹ تا اکنون", r("dim"));
        addLine("  Python");
      } else {
        addLine("Certificates:", "accent");
        addGap();
        addLine("Data Analysis & Preprocessing with Python", "clay");
        addLine("  Faradars  ·  issued Dey 1404 (ongoing)", "dim");
        addLine("  Preprocessor, Data Analysis, NumPy, Pandas, Python");
        addGap();
        addLine("Machine Learning with Python", "clay");
        addLine("  Maktabkhooneh  ·  issued Azar 1404 (ongoing)", "dim");
        addLine("  Recommendation Engine, Logistic Regression, Classification, Machine Learning, Hierarchical Clustering");
        addGap();
        addLine("Advanced Web Page Design", "clay");
        addLine("  Jahad Daneshgahi  ·  issued Mordad 1404 (ongoing)", "dim");
        addLine("  DOM, API, JavaScript");
        addGap();
        addLine("Advanced Python", "clay");
        addLine("  Maktabkhooneh  ·  issued Bahman 1403 (ongoing)", "dim");
        addLine("  Decision Tree, Beautiful Soup, MySQL, Python");
        addGap();
        addLine("Beginner Web Page Design", "clay");
        addLine("  Jahad Daneshgahi  ·  issued Dey 1403 (ongoing)", "dim");
        addLine("  CSS, HTML");
        addGap();
        addLine("Beginner Python", "clay");
        addLine("  Shahid Dr. Shahriari High School  ·  issued Dey 1399 (ongoing)", "dim");
        addLine("  Python");
      }
    },
    clear: function () {
      screen.innerHTML = "";
    },
  };

  function applyPageLang() {
    var copy = pageCopy[lang] || pageCopy.en;
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-fa", lang === "fa");
    document.title = copy.title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (copy[key] != null) el.textContent = copy[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (copy[key] != null) el.innerHTML = copy[key];
    });

    langBadge.textContent = lang.toUpperCase();
    hint.className = lang === "fa" ? "rtl" : "";
    hint.innerHTML = copy.hint;
  }

  function setLang(l) {
    lang = l === "fa" ? "fa" : "en";
    applyPageLang();
  }

  function toggleLang(announce) {
    setLang(lang === "fa" ? "en" : "fa");
    if (announce) {
      addLine(
        lang === "fa" ? "زبان به فارسی تغییر کرد." : "Language switched to English.",
        r("accent")
      );
      addGap();
      scrollBottom();
    }
  }

  function runCommand(raw) {
    var trimmed = raw.trim();
    addRaw('<span class="prompt">guest@ehsan:~$</span> ' + escapeHtml(trimmed), "line cmd");
    if (trimmed === "") {
      scrollBottom();
      return;
    }
    var parts = trimmed.split(/\s+/);
    var name = parts[0].toLowerCase();
    if (Object.prototype.hasOwnProperty.call(commands, name)) {
      commands[name](parts[1]);
    } else {
      addLine("-bash: " + name + ": command not found");
      addLine(
        lang === "fa"
          ? "دستور نامعتبره — برای دیدن گزینه‌ها 'help' رو بزن"
          : "Unknown command — type 'help' to see options",
        r("dim")
      );
    }
    addGap();
    scrollBottom();
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var val = input.value;
      history.push(val);
      histIndex = history.length;
      input.value = "";
      runCommand(val);
    } else if (e.key === "ArrowUp") {
      if (histIndex > 0) {
        histIndex--;
        input.value = history[histIndex];
        setTimeout(function () {
          input.selectionStart = input.selectionEnd = input.value.length;
        }, 0);
      }
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      if (histIndex < history.length - 1) {
        histIndex++;
        input.value = history[histIndex];
      } else {
        histIndex = history.length;
        input.value = "";
      }
      e.preventDefault();
    }
  });

  function focusInput() {
    input.focus({ preventScroll: true });
  }

  function focusIfNoSelection() {
    var sel = window.getSelection();
    if (!sel || sel.toString().length === 0) {
      focusInput();
    }
  }

  screen.addEventListener("mouseup", focusIfNoSelection);
  document.getElementById("terminal").addEventListener("mouseup", function (e) {
    if (e.target === langBadge) return;
    if (e.target.id === "terminal" || e.target.classList.contains("input-wrap")) {
      focusIfNoSelection();
    }
  });

  langBadge.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggleLang(true);
  });

  var asciiEl = document.createElement("div");
  asciiEl.className = "ascii";
  asciiEl.textContent = ascii;
  screen.appendChild(asciiEl);
  addLine("Welcome to Ehsan Noorbakhsh's interactive resume.", "accent");
  addLine("Type: help to see available commands", "dim");
  addLine("Available commands:", "accent");
  addLine("  about       — about me");
  addLine("  edu         — education");
  addLine("  skills      — technical skills");
  addLine("  proj        — open-source projects");
  addLine("  cert        — certificates");
  addLine("  contact     — contact info");
  addLine("  whoami      — who am I?");
  addLine("  ls          — list files");
  addLine("  lang        — switch language (fa/en)");
  addLine("  clear       — clear screen");
  addGap();

  applyPageLang();

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
})();
