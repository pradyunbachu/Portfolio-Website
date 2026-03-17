import React, { useState, useEffect, useRef } from "react";

function App() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);

  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = [
      aboutRef.current,
      timelineRef.current,
      skillsRef.current,
      projectsRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const element = ref.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const skillCategories = [
    {
      title: "LANGUAGES",
      items: ["Java", "Python", "C", "R", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
      title: "FRAMEWORKS",
      items: ["React", "FastAPI", "Flask", "Vite", "JUnit", "JavaFX"],
    },
    {
      title: "DEV TOOLS",
      items: [
        "Git", "Supabase", "Docker", "Google Suite", "Microsoft Office",
        "Tableau", "VS Code", "Google Colab",
      ],
    },
    {
      title: "LIBRARIES",
      items: [
        "Pandas", "NumPy", "Matplotlib", "OpenCV", "YoloV8",
        "Cytoscape.js", "Recharts",
      ],
    },
    {
      title: "INTERESTS",
      items: [
        "Music", "Fantasy Football", "Basketball", "Golf", "Poker",
        "Madden", "NBA 2K", "Weightlifting",
      ],
    },
  ];

  const projects = [
    {
      title: "Lotus",
      ticker: "LTUS",
      date: "February 2026 - Present",
      status: "ACTIVE",
      description:
        "Collaborated with a team to build a healthcare cost projection platform using Deepgram speech-to-text and a two-layer detection system (regex + Groq LLM) to map symptoms to 40+ ICD-10 conditions. Features a simulation engine using odds ratios from 1.5M+ MEPS patient records, interactive Cytoscape.js disease progression visualization, and side-by-side CMS marketplace insurance plan comparison with Supabase Google OAuth authentication.",
      techStack:
        "Python, React, FastAPI, Groq LLM, Deepgram, Cytoscape.js, Supabase, Vite",
      links: [
        { label: "GitHub", url: "https://github.com/pradyunbachu/Lotus" },
      ],
    },
    {
      title: "Voxal",
      ticker: "VXAL",
      date: "December 2025 - Present",
      status: "ACTIVE",
      description:
        "A voice-powered personal assistant for expense tracking, pantry management, and meal planning using Deepgram STT and Groq LLM for multi-intent classification. Features Groq Vision OCR receipt scanning, AI spending insights, budget alerts, a drag-and-drop pantry with expiration tracking, and AI meal recommendations. Built with async FastAPI backend, Supabase Auth, PostgreSQL real-time subscriptions, and shared shopping lists.",
      techStack:
        "Python, React, FastAPI, Groq LLM, Groq Vision, Deepgram, Supabase, PostgreSQL",
      links: [
        { label: "GitHub", url: "https://github.com/pradyunbachu/VoiceP_App" },
        { label: "Live App", url: "https://voxal.vercel.app/" },
      ],
    },
    {
      title: "Redline",
      ticker: "RDLN",
      date: "November 2025 - Present",
      status: "ACTIVE",
      description:
        "A full-stack web app using YOLOv8 to detect and classify vehicle damage from 3000+ images with automated cost estimation. Built Flask REST API and React frontend with real-time damage visualization and Groq LLM chatbot for support. Trained YOLOv8 model with OpenCV preprocessing, classifying damage severity across multiple vehicle components.",
      techStack: "Python, React, YOLOv8, Groq LLM, Flask, OpenCV",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/UniqueRed/badger-buildhacks",
        },
        { label: "Video Demo", url: "https://youtu.be/6G34sUlco60" },
      ],
    },
    {
      title: "Shadows & Suits",
      ticker: "S&S",
      date: "October 2025",
      status: "SHIPPED",
      description:
        "Medieval twist on poker Texas Hold'em with a rustic UI where players are able to experience poker in a completely new way.",
      techStack: "React, TypeScript, Vite, Tailwind CSS",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pradyunbachu/PokerGame",
        },
        { label: "Live Demo", url: "https://poker-game-iota.vercel.app/" },
      ],
    },
    {
      title: "Risk Dashboard Analyzer",
      ticker: "RISK",
      date: "Coming Soon",
      status: "IN DEV",
      description:
        "A full-stack analytics tool that pulls historical market data, stores it in a PostgreSQL database, and calculates key risk metrics used by financial institutions. Users can build custom portfolios and visualize how their holdings might perform under different market conditions.",
      techStack: "Python, PostgreSQL, SQL, Pandas, Streamlit",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pradyunbachu/Risk-Dashboard-Analyzer",
        },
      ],
    },
    {
      title: "NFL Game Predictor",
      ticker: "NFLP",
      date: "Coming Soon",
      status: "IN DEV",
      description: null,
      techStack: "Python, Pandas, NumPy, Matplotlib",
      links: [],
    },
  ];

  const timelineItems = [
    {
      side: "left",
      title: "Data Analyst Intern",
      org: "United Nations: DESA",
      date: "May 2025 – August 2025",
      location: "New York, NY",
    },
    {
      side: "right",
      title: "B.S. Computer Science, Economics with Math Emphasis",
      org: "University of Wisconsin-Madison",
      date: "2024 - 2027 (expected)",
      location: "Madison, WI",
    },
    {
      side: "left",
      title: "Senior Engineer",
      org: "Peddie Robotics",
      date: "September 2021 – May 2024",
      location: "Hightstown, NJ",
    },
    {
      side: "right",
      title: "Event Day Judge & Logistics Team Lead",
      org: "PeddieHacks",
      date: "September 2020 – August 2025",
      location: "Hightstown, NJ",
    },
  ];

  const tickerItems = [
    { symbol: "LTUS", change: "+12.4%" },
    { symbol: "VXAL", change: "+8.7%" },
    { symbol: "RDLN", change: "+5.2%" },
    { symbol: "S&S", change: "+15.1%" },
    { symbol: "RISK", change: "IPO" },
    { symbol: "NFLP", change: "IPO" },
    { symbol: "JAVA", change: "+3.1%" },
    { symbol: "PYTH", change: "+6.8%" },
    { symbol: "REACT", change: "+4.5%" },
    { symbol: "FAPI", change: "+9.2%" },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "ACTIVE": return "var(--green)";
      case "SHIPPED": return "var(--blue)";
      case "IN DEV": return "var(--orange)";
      default: return "var(--text-secondary)";
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        margin: 0,
        padding: 0,
      }}>
      {/* ===== TOP BAR ===== */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "36px",
          backgroundColor: "var(--bg-panel)",
          borderBottom: "1px solid var(--border-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          zIndex: 1000,
          fontFamily: "var(--mono)",
          fontSize: "11px",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "var(--orange)", fontWeight: 700, letterSpacing: "1px" }}>
            Pradyun's Terminal
          </span>
          <span style={{ color: "var(--border-highlight)" }}>|</span>
          <span style={{ color: "var(--text-secondary)" }}>
            {formatDate(currentTime)}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "var(--green)", fontFamily: "var(--mono)" }}>
            {formatTime(currentTime)}
          </span>
          <span style={{ color: "var(--border-highlight)" }}>|</span>
          <span style={{ color: "var(--text-secondary)" }}>EST</span>
        </div>
      </div>

      {/* ===== STICKY NAV BAR ===== */}
      <div
        style={{
          position: "fixed",
          top: "36px",
          left: 0,
          right: 0,
          height: "50px",
          backgroundColor: "var(--bg-panel)",
          borderBottom: "1px solid var(--border-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          zIndex: 999,
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "4px",
              cursor: "pointer",
              border: "1px solid var(--border-color)",
              transition: "border-color 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--bg-panel)",
              fontFamily: "var(--mono)",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--green)",
              letterSpacing: "1px",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--green)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-color)")
            }>
            PB
          </div>

          {/* Desktop Nav */}
          <nav
            className="nav-bar"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {[
              { label: "ABOUT", ref: aboutRef },
              { label: "EXPERIENCE", ref: timelineRef },
              { label: "SKILLS", ref: skillsRef },
              { label: "PROJECTS", ref: projectsRef },
            ].map((item) => (
              <button
                key={item.label}
                className="nav-link"
                onClick={() => scrollToSection(item.ref)}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  padding: "4px 0",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--green)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--green)",
              fontSize: "20px",
              padding: "4px",
            }}>
            <i
              className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>

        {/* Right side links */}
        <div
          className="top-right-links"
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}>
          <a
            href={`${import.meta.env.BASE_URL}Bachu_Pradyun_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--orange)",
              textDecoration: "none",
              padding: "6px 14px",
              border: "1px solid var(--orange)",
              borderRadius: "2px",
              transition: "all 0.2s",
              cursor: "pointer",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--orange)";
              e.currentTarget.style.color = "var(--bg-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--orange)";
            }}>
            Resume
          </a>
          <a
            href="https://github.com/pradyunbachu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "22px",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-bright)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:pbachu@wisc.edu"
            style={{
              cursor: "pointer",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "22px",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--orange)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pradyun-bachu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "22px",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--blue)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "4px",
              backgroundColor: "var(--bg-panel)",
              border: "1px solid var(--border-color)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              padding: 0,
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--orange)";
              e.currentTarget.style.color = "var(--orange)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "86px",
            left: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            backgroundColor: "var(--bg-panel)",
            border: "1px solid var(--border-color)",
            padding: "12px 20px",
            borderRadius: "4px",
            zIndex: 999,
          }}>
          {[
            { label: "ABOUT", ref: aboutRef },
            { label: "EXPERIENCE", ref: timelineRef },
            { label: "SKILLS", ref: skillsRef },
            { label: "PROJECTS", ref: projectsRef },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "4px 0",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }>
              {">"} {item.label}
            </button>
          ))}
        </div>
      )}

      {/* ===== LANDING PAGE ===== */}
      <div
        className="fade-in-up"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "86px",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}>
          <div
            className="fade-in-up landing-name"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "56px",
              fontWeight: 700,
              color: "var(--text-bright)",
              textAlign: "center",
              letterSpacing: "-1px",
            }}>
            Pradyun Bachu
          </div>
          <div
            className="fade-in-delay-1 landing-subtitle cursor-blink"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "16px",
              fontWeight: 400,
              color: "var(--green)",
              textAlign: "center",
              letterSpacing: "2px",
            }}>
            FULLSTACK DEV // ECONOMIST // DATA ENGINEER
          </div>
        </div>
      </div>

      {/* ===== TICKER BAR ===== */}
      <div className="ticker-bar">
        <div className="ticker-content">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>
              <span style={{ color: "var(--text-bright)", fontWeight: 600 }}>
                {item.symbol}
              </span>{" "}
              <span
                className={
                  item.change === "IPO" ? "" : "ticker-item-up"
                }
                style={
                  item.change === "IPO"
                    ? { color: "var(--orange)", fontWeight: 600 }
                    : {}
                }>
                {item.change}
              </span>
              <span className="ticker-separator">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div
        style={{
          width: "100%",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
        {/* ===== ABOUT PANEL ===== */}
        <div
          ref={aboutRef}
          id="about"
          className={`terminal-panel ${
            visibleSections.has("about") ? "fade-in-up" : "scroll-fade-hidden"
          }`}>
          <div className="panel-header">
            <span className="panel-header-title">ABOUT // PROFILE</span>
            <span className="panel-header-status">ONLINE</span>
          </div>
          <div className="panel-body" style={{ padding: "20px 24px" }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "13px",
                color: "var(--text-primary)",
                lineHeight: "1.8",
                maxWidth: "800px",
              }}>
              <span style={{ color: "var(--green)" }}>$</span> Hello! I'm
              Pradyun, an undergraduate student at the University of
              Wisconsin - Madison majoring in Computer Science and Economics
              with a Math Emphasis. I'm interested in Fullstack Development,
              Data Analytics, and Economics.
            </div>
          </div>
        </div>

        {/* ===== EXPERIENCE PANEL ===== */}
        <div
          ref={timelineRef}
          id="timeline"
          className={
            visibleSections.has("timeline")
              ? "fade-in-up"
              : "scroll-fade-hidden"
          }
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
            width: "100%",
          }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--orange)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            EXPERIENCE & EDUCATION
          </div>

          <div className="timeline-container">
            <div className="timeline-line" />

            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                {item.side === "left" ? (
                  <>
                    <div className="timeline-content-left">
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--text-bright)",
                          marginBottom: "4px",
                        }}>
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--green)",
                          marginBottom: "4px",
                        }}>
                        {item.org}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--text-secondary)",
                          marginBottom: "2px",
                        }}>
                        {item.date}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--text-secondary)",
                        }}>
                        {item.location}
                      </div>
                    </div>
                    <div className="timeline-dot" />
                    <div className="timeline-spacer-right"></div>
                  </>
                ) : (
                  <>
                    <div className="timeline-spacer-left"></div>
                    <div className="timeline-dot" />
                    <div className="timeline-content-right">
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "var(--text-bright)",
                          marginBottom: "4px",
                        }}>
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--green)",
                          marginBottom: "4px",
                        }}>
                        {item.org}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--text-secondary)",
                          marginBottom: "2px",
                        }}>
                        {item.date}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--text-secondary)",
                        }}>
                        {item.location}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== SKILLS PANEL ===== */}
        <div
          ref={skillsRef}
          id="skills"
          className={`terminal-panel ${
            visibleSections.has("skills") ? "fade-in-up" : "scroll-fade-hidden"
          }`}>
          <div className="panel-header">
            <span className="panel-header-title">SKILLS // TECH STACK</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "10px" }}>
              {skillCategories.reduce((acc, cat) => acc + cat.items.length, 0)} ITEMS LOADED
            </span>
          </div>
          <div
            className="panel-body"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              padding: "12px",
            }}>
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "10px 12px",
                  borderRadius: "2px",
                  alignItems: "flex-start",
                  transition: "background-color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--bg-panel-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--orange)",
                    minWidth: "110px",
                    letterSpacing: "0.5px",
                    paddingTop: "2px",
                  }}>
                  {cat.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--text-primary)",
                        padding: "3px 10px",
                        backgroundColor: "var(--skill-chip-bg)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "2px",
                        transition: "all 0.15s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--green-dim)";
                        e.currentTarget.style.color = "var(--green)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-color)";
                        e.currentTarget.style.color = "var(--text-primary)";
                      }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROJECTS PANEL ===== */}
        <div
          ref={projectsRef}
          id="projects"
          className={
            visibleSections.has("projects")
              ? "fade-in-up"
              : "scroll-fade-hidden"
          }
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--orange)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            PROJECTS // PORTFOLIO
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "16px",
              width: "100%",
            }}>
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                {/* Card Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    backgroundColor: "var(--card-header-bg)",
                    borderBottom: "1px solid var(--border-color)",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--text-bright)",
                      }}>
                      {project.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        color: "var(--text-secondary)",
                        backgroundColor: "var(--skill-chip-bg)",
                        padding: "2px 6px",
                        borderRadius: "2px",
                        border: "1px solid var(--border-color)",
                      }}>
                      {project.ticker}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: statusColor(project.status),
                      letterSpacing: "0.5px",
                    }}>
                    {project.status}
                  </span>
                </div>

                {/* Card Body */}
                <div style={{ padding: "16px" }}>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--text-secondary)",
                      marginBottom: "10px",
                      letterSpacing: "0.5px",
                    }}>
                    {project.date}
                  </div>

                  {project.description && (
                    <div
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "12px",
                        color: "var(--text-primary)",
                        lineHeight: "1.7",
                        marginBottom: "14px",
                      }}>
                      {project.description}
                    </div>
                  )}

                  <div style={{ marginTop: "auto" }}>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "var(--orange)",
                        marginBottom: "4px",
                        letterSpacing: "1px",
                      }}>
                      STACK
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        marginBottom: "12px",
                        lineHeight: "1.5",
                      }}>
                      {project.techStack}
                    </div>

                    {project.links.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          flexWrap: "wrap",
                          borderTop: "1px solid var(--border-color)",
                          paddingTop: "12px",
                        }}>
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: "var(--mono)",
                              fontSize: "11px",
                              color: "var(--green)",
                              textDecoration: "none",
                              cursor: "pointer",
                              padding: "3px 10px",
                              border: "1px solid var(--green-dim)",
                              borderRadius: "2px",
                              transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "var(--green)";
                              e.currentTarget.style.color = "var(--bg-primary)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                              e.currentTarget.style.color = "var(--green)";
                            }}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <div
          style={{
            width: "100%",
            padding: "30px 20px",
            textAlign: "center",
            borderTop: "1px solid var(--border-color)",
            marginTop: "40px",
          }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "var(--text-secondary)",
              letterSpacing: "1px",
            }}>
            <span style={{ color: "var(--green)" }}>$</span> {"\u00A9"} 2026
            Pradyun Bachu. All rights reserved.{" "}
            <span style={{ color: "var(--border-highlight)" }}>|</span>{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              SESSION ACTIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
