import React, { useState, useEffect, useRef } from "react";

function App() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinkStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    color: darkMode ? "#b0b0b0" : "#666666",
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s ease",
    padding: 0,
  };

  const sectionTitleStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: darkMode ? "#fafafa" : "#000000",
    transition: "color 0.3s ease",
    textAlign: "center",
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      items: "Java, Python, C, R, SQL, JavaScript, HTML/CSS",
    },
    {
      title: "Frameworks",
      items: "React, FastAPI, Flask, Vite, JUnit, JavaFX",
    },
    {
      title: "Developer Tools",
      items:
        "Git, Supabase, Docker, Google Suite, Microsoft Office, Tableau, VS Code, Google Colab",
    },
    {
      title: "Libraries",
      items: "Pandas, NumPy, Matplotlib, OpenCV, YoloV8, Cytoscape.js, Recharts",
    },
    {
      title: "Interests",
      items:
        "Music, Fantasy Football, Basketball, Golf, Poker, Madden, NBA 2K, Weightlifting",
    },
  ];

  const projects = [
    {
      title: "Lotus",
      date: "February 2026 - Present",
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
      date: "December 2025 - Present",
      description:
        "A voice-powered personal assistant for expense tracking, pantry management, and meal planning using Deepgram STT and Groq LLM for multi-intent classification. Features Groq Vision OCR receipt scanning, AI spending insights, budget alerts, a drag-and-drop pantry with expiration tracking, and AI meal recommendations. Built with async FastAPI backend, Supabase Auth, PostgreSQL real-time subscriptions, and shared shopping lists.",
      techStack:
        "Python, React, FastAPI, Groq LLM, Groq Vision, Deepgram, Supabase, PostgreSQL",
      links: [
        { label: "GitHub", url: "https://github.com/pradyunbachu/VoiceP_App" },
      ],
    },
    {
      title: "Redline",
      date: "November 2025 - Present",
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
      date: "October 2025",
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
      date: "Coming Soon",
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
      date: "Coming Soon",
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

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1a1a1a" : "#fafafa",
        margin: 0,
        padding: 0,
        transition: "background-color 0.3s ease",
      }}>
      {/* Landing Page Section */}
      <div
        className="fade-in-up"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
        {/* Top Left - Logo + Nav Links */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            zIndex: 1000,
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }>
            <img
              src={`${import.meta.env.BASE_URL}PBLogoWebsite.png`}
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Desktop Nav Links */}
          <nav
            className="nav-bar"
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}>
            {[
              { label: "About", ref: aboutRef },
              { label: "Experience", ref: timelineRef },
              { label: "Skills", ref: skillsRef },
              { label: "Projects", ref: projectsRef },
            ].map((item) => (
              <button
                key={item.label}
                className="nav-link"
                onClick={() => scrollToSection(item.ref)}
                style={navLinkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = darkMode
                    ? "#fafafa"
                    : "#000000")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = darkMode
                    ? "#b0b0b0"
                    : "#666666")
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
              color: darkMode ? "#fafafa" : "#000000",
              fontSize: "22px",
              padding: "4px",
            }}>
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "80px",
              left: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              backgroundColor: darkMode
                ? "rgba(30, 30, 30, 0.95)"
                : "rgba(250, 250, 250, 0.95)",
              padding: "16px 24px",
              borderRadius: "8px",
              zIndex: 999,
              backdropFilter: "blur(10px)",
            }}>
            {[
              { label: "About", ref: aboutRef },
              { label: "Experience", ref: timelineRef },
              { label: "Skills", ref: skillsRef },
              { label: "Projects", ref: projectsRef },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                style={{
                  ...navLinkStyle,
                  fontSize: "15px",
                  textAlign: "left",
                }}>
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}>
          <div
            className="fade-in-up landing-name"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "64px",
              fontWeight: 700,
              color: darkMode ? "#fafafa" : "#000000",
              textAlign: "center",
              transition: "color 0.3s ease",
            }}>
            Pradyun Bachu
          </div>
          <div
            className="fade-in-delay-1 landing-subtitle"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "24px",
              fontWeight: 400,
              color: darkMode ? "#e0e0e0" : "#000000",
              textAlign: "center",
              transition: "color 0.3s ease",
            }}>
            Fullstack Developer, Economist, and Student
          </div>
        </div>

        {/* Top Right - Social Icons, Resume, Dark Mode */}
        <div
          className="fade-in-delay-2 top-right-links"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "18px",
            alignItems: "center",
          }}>
          <a
            href={`${import.meta.env.BASE_URL}Bachu_Pradyun_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: darkMode ? "#fafafa" : "#000000",
              textDecoration: "none",
              padding: "8px 16px",
              border: `1px solid ${darkMode ? "#fafafa" : "#000000"}`,
              borderRadius: "4px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = darkMode
                ? "#fafafa"
                : "#000000";
              e.currentTarget.style.color = darkMode ? "#1a1a1a" : "#fafafa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = darkMode ? "#fafafa" : "#000000";
            }}>
            Resume
          </a>
          <a
            href="https://github.com/pradyunbachu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              color: darkMode ? "#fafafa" : "#24292e",
              textDecoration: "none",
              fontSize: "28px",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.color = darkMode ? "#ffffff" : "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = darkMode ? "#fafafa" : "#24292e";
            }}>
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:pbachu@wisc.edu"
            style={{
              cursor: "pointer",
              color: "#ea4335",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }>
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pradyun-bachu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              color: "#0077b5",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }>
            <i className="fab fa-linkedin"></i>
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: darkMode ? "#2a2a2a" : "#f5f5f5",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = darkMode
                ? "#3a3a3a"
                : "#e0e0e0";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = darkMode
                ? "#2a2a2a"
                : "#f5f5f5";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            <i
              className={darkMode ? "fas fa-sun" : "fas fa-moon"}
              style={{
                fontSize: "16px",
                color: darkMode ? "#fafafa" : "#000000",
              }}></i>
          </button>
        </div>
      </div>

      {/* Content Section - Below Landing Page */}
      <div
        style={{
          width: "100%",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
        {/* About Me Section */}
        <div
          ref={aboutRef}
          id="about"
          className={
            visibleSections.has("about") ? "fade-in-up" : "scroll-fade-hidden"
          }
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            textAlign: "center",
          }}>
          <div style={sectionTitleStyle}>About Me</div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: darkMode ? "#e0e0e0" : "#000000",
              lineHeight: "1.6",
              maxWidth: "800px",
              transition: "color 0.3s ease",
            }}>
            Hello! I'm Pradyun, a undergraduate student at the University of
            Wisconsin - Madison majoring in Computer Science and Economics with a
            Math Emphasis. I'm interested in Fullstack Development, Data
            Analytics, and Economics.
          </div>
        </div>

        {/* Timeline Section */}
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
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
            width: "100%",
          }}>
          <div style={{ ...sectionTitleStyle, marginBottom: "20px" }}>
            Experience & Education
          </div>

          {/* Timeline Container */}
          <div className="timeline-container">
            {/* Vertical Line */}
            <div
              className="timeline-line"
              style={{
                backgroundColor: darkMode ? "#fafafa" : "#000000",
              }}
            />

            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                {item.side === "left" ? (
                  <>
                    <div className="timeline-content-left">
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: darkMode ? "#fafafa" : "#000000",
                          marginBottom: "5px",
                          transition: "color 0.3s ease",
                        }}>
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: darkMode ? "#b0b0b0" : "#666666",
                          marginBottom: "5px",
                          transition: "color 0.3s ease",
                        }}>
                        {item.org}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: darkMode ? "#b0b0b0" : "#666666",
                          fontStyle: "italic",
                          marginBottom: "5px",
                          transition: "color 0.3s ease",
                        }}>
                        {item.date}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: darkMode ? "#b0b0b0" : "#666666",
                          transition: "color 0.3s ease",
                        }}>
                        {item.location}
                      </div>
                    </div>
                    <div
                      className="timeline-dot"
                      style={{
                        backgroundColor: darkMode ? "#fafafa" : "#000000",
                        border: darkMode ? "none" : "2px solid #fafafa",
                      }}
                    />
                    <div className="timeline-spacer-right"></div>
                  </>
                ) : (
                  <>
                    <div className="timeline-spacer-left"></div>
                    <div
                      className="timeline-dot"
                      style={{
                        backgroundColor: darkMode ? "#fafafa" : "#000000",
                        border: darkMode ? "none" : "2px solid #fafafa",
                      }}
                    />
                    <div className="timeline-content-right">
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: darkMode ? "#fafafa" : "#000000",
                          transition: "color 0.3s ease",
                          marginBottom: "5px",
                        }}>
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: darkMode ? "#b0b0b0" : "#666666",
                          transition: "color 0.3s ease",
                          marginBottom: "5px",
                        }}>
                        {item.org}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: darkMode ? "#b0b0b0" : "#666666",
                          transition: "color 0.3s ease",
                          fontStyle: "italic",
                          marginBottom: "5px",
                        }}>
                        {item.date}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: darkMode ? "#b0b0b0" : "#666666",
                          transition: "color 0.3s ease",
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

        {/* Skills Section - Always Visible */}
        <div
          ref={skillsRef}
          id="skills"
          className={
            visibleSections.has("skills") ? "fade-in-up" : "scroll-fade-hidden"
          }
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
          }}>
          <div style={sectionTitleStyle}>Skills</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
            }}>
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px 20px",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  borderRadius: "6px",
                  border: `1px solid ${darkMode ? "#3a3a3a" : "#e0e0e0"}`,
                  transition: "all 0.3s ease",
                }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "left",
                  }}>
                  {cat.title}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                    textAlign: "left",
                    lineHeight: "1.6",
                  }}>
                  {cat.items}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
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
            gap: "30px",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
          }}>
          <div style={sectionTitleStyle}>Projects</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              width: "100%",
            }}>
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#3a3a3a" : "#e0e0e0"}`,
                  borderRadius: "8px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s ease",
                }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  {project.title}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: darkMode ? "#888888" : "#999999",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                    fontStyle:
                      project.date === "Coming Soon" ? "italic" : "normal",
                  }}>
                  {project.date}
                </div>
                {project.description && (
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: darkMode ? "#d0d0d0" : "#333333",
                      transition: "color 0.3s ease",
                      lineHeight: "1.6",
                      textAlign: "left",
                    }}>
                    {project.description}
                  </div>
                )}
                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: darkMode ? "#fafafa" : "#000000",
                      transition: "color 0.3s ease",
                      marginTop: "8px",
                    }}>
                    Tech Stack:
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: darkMode ? "#b0b0b0" : "#666666",
                      transition: "color 0.3s ease",
                      marginTop: "4px",
                    }}>
                    {project.techStack}
                  </div>
                  {project.links.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        marginTop: "12px",
                        flexWrap: "wrap",
                      }}>
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "12px",
                            color: darkMode ? "#fafafa" : "#000000",
                            transition: "color 0.3s ease",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            width: "100%",
            padding: "40px 20px",
            textAlign: "center",
            borderTop: `1px solid ${darkMode ? "#3a3a3a" : "#e0e0e0"}`,
            marginTop: "60px",
            transition: "border-color 0.3s ease",
          }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: darkMode ? "#b0b0b0" : "#666666",
              transition: "color 0.3s ease",
            }}>
            © 2026. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
