import React, { useState, useEffect, useRef } from "react";

function App() {
  const [openSkillCategory, setOpenSkillCategory] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [darkMode, setDarkMode] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('[data-dropdown]')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const element = ref.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset above
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setDropdownOpen(false);
    }
  };

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
        {/* Logo with Dropdown - Top Left */}
        <div
          data-dropdown
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1000,
          }}>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              cursor: "pointer",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              overflow: "hidden",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}>
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
          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "70px",
                left: "0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minWidth: "200px",
                zIndex: 1001,
              }}>
              <button
                className="dropdown-item-1"
                onClick={() => scrollToSection(aboutRef)}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: darkMode ? "#fafafa" : "#000000",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}>
                About Me
              </button>
              <button
                className="dropdown-item-2"
                onClick={() => scrollToSection(timelineRef)}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: darkMode ? "#fafafa" : "#000000",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}>
                Experience & Education
              </button>
              <button
                className="dropdown-item-3"
                onClick={() => scrollToSection(skillsRef)}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: darkMode ? "#fafafa" : "#000000",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}>
                Skills
              </button>
              <button
                className="dropdown-item-4"
                onClick={() => scrollToSection(projectsRef)}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  border: "none",
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: darkMode ? "#fafafa" : "#000000",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}>
                Projects
              </button>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}>
          <div
            className="fade-in-up"
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
            className="fade-in-delay-1"
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

        {/* Social Icons and Resume Button - Top Right */}
        <div
          className="fade-in-delay-2"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}>
          <a
            href={`${import.meta.env.BASE_URL}PradyunBachu_Resume.pdf`}
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
              fontSize: "24px",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.color = darkMode ? "#ffffff" : "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = darkMode ? "#fafafa" : "#24292e";
            }}>
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:pradyun.bachu@gmail.com"
            style={{
              cursor: "pointer",
              color: "#ea4335",
              textDecoration: "none",
              fontSize: "24px",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
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
              fontSize: "24px",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }>
            <i className="fab fa-linkedin"></i>
          </a>
          <button
            className="fade-in-delay-2"
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
          gap: "40px",
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
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: darkMode ? "#fafafa" : "#000000",
              transition: "color 0.3s ease",
            }}>
            About Me
          </div>
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
            Wisconsin - Madison majoring in Computer Science and Economics with
            a Math Emphasis. I'm interested in Fullstack Development, Data
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
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: darkMode ? "#fafafa" : "#000000",
              textAlign: "center",
              marginBottom: "20px",
              transition: "color 0.3s ease",
            }}>
            Experience & Education
          </div>

          {/* Timeline Container */}
          <div
            style={{
              position: "relative",
              padding: "20px 0",
            }}>
            {/* Vertical Line - Centered */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "2px",
                backgroundColor: darkMode ? "#fafafa" : "#000000",
                transform: "translateX(-50%)",
                transition: "background-color 0.3s ease",
              }}
            />

            {/* Timeline Items - Alternating */}
            {/* Item 1: Data Analyst Intern (Left - Top) */}
            <div
              style={{
                position: "relative",
                marginBottom: "60px",
                display: "flex",
                alignItems: "center",
                minHeight: "80px",
              }}>
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingRight: "60px",
                  textAlign: "right",
                }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    marginBottom: "5px",
                    transition: "color 0.3s ease",
                  }}>
                  Data Analyst Intern
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
                  United Nations: DESA
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
                  May 2025 – August 2025
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  New York, NY
                </div>
              </div>
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: darkMode ? "#fafafa" : "#000000",
                  border: darkMode ? "none" : "2px solid #fafafa",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingLeft: "60px",
                }}></div>
            </div>

            {/* Item 2: B.S. Computer Science (Right - Top) */}
            <div
              style={{
                position: "relative",
                marginBottom: "60px",
                display: "flex",
                alignItems: "center",
                minHeight: "80px",
              }}>
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingRight: "60px",
                }}></div>
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: darkMode ? "#fafafa" : "#000000",
                  border: darkMode ? "none" : "2px solid #fafafa",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingLeft: "60px",
                  textAlign: "left",
                }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginBottom: "5px",
                  }}>
                  B.S. Computer Science, Economics with Math Emphasis
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
                  University of Wisconsin-Madison
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
                  2024 - 2027 (expected)
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Madison, WI
                </div>
              </div>
            </div>

            {/* Item 3: Senior Engineer (Left - Bottom) */}
            <div
              style={{
                position: "relative",
                marginBottom: "60px",
                display: "flex",
                alignItems: "center",
                minHeight: "80px",
              }}>
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingRight: "60px",
                  textAlign: "right",
                }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginBottom: "5px",
                  }}>
                  Senior Engineer
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
                  Peddie Robotics
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
                  September 2021 – May 2024
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Hightstown, NJ
                </div>
              </div>
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: darkMode ? "#fafafa" : "#000000",
                  border: darkMode ? "none" : "2px solid #fafafa",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingLeft: "60px",
                }}></div>
            </div>

            {/* Item 4: PeddieHacks (Right - Bottom) */}
            <div
              style={{
                position: "relative",
                marginBottom: "60px",
                display: "flex",
                alignItems: "center",
                minHeight: "80px",
              }}>
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingRight: "60px",
                }}></div>
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: darkMode ? "#fafafa" : "#000000",
                  border: darkMode ? "none" : "2px solid #fafafa",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  width: "calc(50% - 20px)",
                  paddingLeft: "60px",
                  textAlign: "left",
                }}>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginBottom: "5px",
                  }}>
                  Event Day Judge & Logistics Team Lead
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
                  PeddieHacks
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
                  September 2020 – August 2025
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Hightstown, NJ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Centered */}
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
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: darkMode ? "#fafafa" : "#000000",
              transition: "color 0.3s ease",
            }}>
            Skills
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}>
            {/* Buttons Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "20px",
                width: "100%",
              }}>
              {/* Programming Languages Box */}
              <div
                onClick={() =>
                  setOpenSkillCategory(
                    openSkillCategory === "languages" ? null : "languages"
                  )
                }
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: darkMode ? "#fafafa" : "#000000",
                  transition: "color 0.3s ease",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#3a3a3a" : "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#2a2a2a" : "#ffffff";
                }}>
                Programming Languages
              </div>

              {/* Frameworks Box */}
              <div
                onClick={() =>
                  setOpenSkillCategory(
                    openSkillCategory === "frameworks" ? null : "frameworks"
                  )
                }
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: darkMode ? "#fafafa" : "#000000",
                  transition: "color 0.3s ease",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#3a3a3a" : "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#2a2a2a" : "#ffffff";
                }}>
                Frameworks
              </div>

              {/* Developer Tools Box */}
              <div
                onClick={() =>
                  setOpenSkillCategory(
                    openSkillCategory === "tools" ? null : "tools"
                  )
                }
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: darkMode ? "#fafafa" : "#000000",
                  transition: "color 0.3s ease",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#3a3a3a" : "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#2a2a2a" : "#ffffff";
                }}>
                Developer Tools
              </div>

              {/* Libraries Box */}
              <div
                onClick={() =>
                  setOpenSkillCategory(
                    openSkillCategory === "libraries" ? null : "libraries"
                  )
                }
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: darkMode ? "#fafafa" : "#000000",
                  transition: "color 0.3s ease",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#3a3a3a" : "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#2a2a2a" : "#ffffff";
                }}>
                Libraries
              </div>

              {/* Interests Box */}
              <div
                onClick={() =>
                  setOpenSkillCategory(
                    openSkillCategory === "interests" ? null : "interests"
                  )
                }
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: darkMode ? "#fafafa" : "#000000",
                  transition: "color 0.3s ease",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#3a3a3a" : "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? "#2a2a2a" : "#ffffff";
                }}>
                Interests
              </div>
            </div>

            {/* Expanded Content - Full Width Below with Fixed Height */}
            <div
              style={{
                minHeight: "80px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {openSkillCategory === "languages" && (
                <div
                  className="skill-fade-in"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "all 0.3s ease",
                    padding: "20px",
                    backgroundColor: darkMode ? "#2a2a2a" : "#f9f9f9",
                    borderRadius: "4px",
                    width: "100%",
                    textAlign: "center",
                  }}>
                  Java, Python, R, JavaScript, HTML/CSS
                </div>
              )}
              {openSkillCategory === "frameworks" && (
                <div
                  className="skill-fade-in"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "all 0.3s ease",
                    padding: "20px",
                    backgroundColor: darkMode ? "#2a2a2a" : "#f9f9f9",
                    borderRadius: "4px",
                    width: "100%",
                    textAlign: "center",
                  }}>
                  React, Flask, JUnit, JavaFX
                </div>
              )}
              {openSkillCategory === "tools" && (
                <div
                  className="skill-fade-in"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "all 0.3s ease",
                    padding: "20px",
                    backgroundColor: darkMode ? "#2a2a2a" : "#f9f9f9",
                    borderRadius: "4px",
                    width: "100%",
                    textAlign: "center",
                    lineHeight: "1.6",
                  }}>
                  Git, Google Suite, Microsoft Office, Tableau, Autodesk
                  Inventor, vCarve Pro, Onshape, VS Code, Visual Studio,
                  IntelliJ, Eclipse, Google Colab, SQL, Excel
                </div>
              )}
              {openSkillCategory === "libraries" && (
                <div
                  className="skill-fade-in"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "all 0.3s ease",
                    padding: "20px",
                    backgroundColor: darkMode ? "#2a2a2a" : "#f9f9f9",
                    borderRadius: "4px",
                    width: "100%",
                    textAlign: "center",
                  }}>
                  Pandas, NumPy, Matplotlib
                </div>
              )}
              {openSkillCategory === "interests" && (
                <div
                  className="skill-fade-in"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "all 0.3s ease",
                    padding: "20px",
                    backgroundColor: darkMode ? "#2a2a2a" : "#f9f9f9",
                    borderRadius: "4px",
                    width: "100%",
                    textAlign: "center",
                  }}>
                  Music, Fantasy Football, Poker, Madden, NBA 2K, Gym
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Section - Box Style */}
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
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: darkMode ? "#fafafa" : "#000000",
              transition: "color 0.3s ease",
            }}>
            Projects
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}>
            {/* Projects Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                width: "100%",
              }}>
              {/* Voxalyze Box */}
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  Voxalyze
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    lineHeight: "1.6",
                    textAlign: "left",
                  }}>
                  An AI-powered expense tracker that simplifies financial management through voice input. 
                  Simply speak your purchases and the app automatically extracts transaction details using 
                  advanced natural language processing. Features intelligent categorization, spending analytics, 
                  and visual insights to help you track and understand your expenses effortlessly.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginTop: "5px",
                  }}>
                  Tech Stack:
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Python, FastAPI, React, Groq LLM, SQLite, Web Speech API, Recharts
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "10px",
                  }}>
                  <a
                    href="https://github.com/pradyunbachu/VoiceP_App"
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
                    GitHub
                  </a>
                </div>
              </div>

              {/* Redline Box */}
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  Redline
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    lineHeight: "1.6",
                    textAlign: "left",
                  }}>
                  This is a AI Damage Detection software that estimates the cost
                  for car repair simply given a picture of the car, and a few
                  more additional details. It also includes an AI chatbot that
                  can further help with more specific issues the user has
                  questions about.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginTop: "5px",
                  }}>
                  Tech Stack:
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Python, React, YOLOv8, Groq LLM, OpenCV
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "10px",
                  }}>
                  <a
                    href="https://github.com/UniqueRed/badger-buildhacks"
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
                    GitHub
                  </a>
                  <a
                    href="https://youtu.be/6G34sUlco60"
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
                    Video Demo
                  </a>
                </div>
              </div>

              {/* Shadows & Suits Box */}
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  Shadows & Suits
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    lineHeight: "1.6",
                    textAlign: "left",
                  }}>
                  Medieval twist on poker Texas Hold'em with a rustic UI where
                  players are able to experience poker in a completely new way.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginTop: "5px",
                  }}>
                  Tech Stack:
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  React, TypeScript, Vite, Tailwind CSS
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "10px",
                  }}>
                  <a
                    href="https://github.com/pradyunbachu/PokerGame"
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
                    GitHub
                  </a>
                  <a
                    href="https://poker-game-iota.vercel.app/"
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
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Risk Dashboard Analyzer Box */}
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  Risk Dashboard Analyzer
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontStyle: "italic",
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  COMING SOON
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    lineHeight: "1.6",
                    textAlign: "left",
                  }}>
                  A full-stack analytics tool that pulls historical market data,
                  stores it in a PostgreSQL database, and calculates key risk
                  metrics used by financial institutions. Users can build custom
                  portfolios and visualize how their holdings might perform
                  under different market conditions.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginTop: "5px",
                  }}>
                  Tech Stack:
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Python, PostgreSQL, SQL, Pandas, Streamlit
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "10px",
                  }}>
                  <a
                    href="https://github.com/pradyunbachu/Risk-Dashboard-Analyzer"
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
                    GitHub
                  </a>
                </div>
              </div>

              {/* NFL Game Predictor Box */}
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
                  border: `2px solid ${darkMode ? "#fafafa" : "#000000"}`,
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  NFL Game Predictor
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontStyle: "italic",
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                  }}>
                  COMING SOON
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: darkMode ? "#fafafa" : "#000000",
                    transition: "color 0.3s ease",
                    marginTop: "5px",
                  }}>
                  Tech Stack:
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: darkMode ? "#b0b0b0" : "#666666",
                    transition: "color 0.3s ease",
                  }}>
                  Python, Pandas, NumPy, Matplotlib
                </div>
              </div>
            </div>
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
            © 2025. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
