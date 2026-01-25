import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProfileImage from "../assets/ProfileImage.jpg";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },


  { label: "Education", to: "education" },

  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Resume", to: "resume" },
  { label: "Contact", to: "contact" }
];

export default function Navbar() {
  const [theme, setTheme] = useState("dark");


  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };


  /* Navbar colors matching new Premium Theme */
  const navBg =
    theme === "dark"
      ? "rgba(3, 0, 20, 0.85)"
      : "rgba(255, 255, 255, 0.85)";

  const navBorder =
    theme === "dark"
      ? "1px solid rgba(147, 51, 234, 0.2)"
      : "1px solid rgba(124, 58, 237, 0.1)";

  const titleColor = theme === "dark" ? "#f8fafc" : "#0f172a";
  const subtitleColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const linkColor = theme === "dark" ? "#e2e8f0" : "#1e293b";

  const burgerBorder =
    theme === "dark"
      ? "1px solid rgba(147, 51, 234, 0.3)"
      : "1px solid rgba(124, 58, 237, 0.2)";

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        width: "100%",
        backdropFilter: "blur(18px)",
        background: navBg,
        borderBottom: navBorder
      }}
    >
      { }
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          padding: "14px 18px",
          width: "100%"
        }}
      >
        { }
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={ProfileImage}
            alt="Rushikesh Kale"
            style={{
              width: 42,
              height: 42,
              borderRadius: "999px",
              objectFit: "cover",
              border: "2px solid rgba(34, 197, 94, 0.9)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
              flexShrink: 0
            }}
          />

          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: titleColor }}>
              Rushikesh Kale
            </div>
            <div style={{ fontSize: 12.5, color: subtitleColor }}>
              Java Full Stack Developer
            </div>
          </div>
        </div>

        { }
        <div
          className="navbar-desktop"
          style={{
            display: "flex",
            gap: 20,
            fontSize: 15,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              hashSpy={true}
              activeClass="active-link"
              className="nav-link"
              style={{
                cursor: "pointer",
                color: linkColor,
                fontWeight: 600,
                transition: "0.2s",
                whiteSpace: "nowrap"
              }}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="btn-ghost"
            style={{
              padding: "8px 16px",
              fontSize: 13,
              borderRadius: 999,
              border:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.18)"
                  : "1px solid rgba(0,0,0,0.12)",
              color: titleColor,
              whiteSpace: "nowrap"
            }}
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>

        { }
        <div className="mobile-controls">
          <button
            onClick={toggleTheme}
            style={{
              padding: "8px 12px",
              fontSize: 12,
              borderRadius: 999,
              border:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.18)"
                  : "1px solid rgba(0,0,0,0.12)",
              color: titleColor,
              background: "transparent",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="navbar-burger"
            aria-label="Toggle menu"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: theme === "dark" ? "rgba(2,6,23,0.35)" : "rgba(255,255,255,0.72)",
              border: burgerBorder,
              cursor: "pointer",
              color: titleColor,
              fontWeight: 800,
              lineHeight: 1,
              minWidth: 44
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      { }
      {menuOpen && (
        <div
          className="navbar-mobile"
          style={{
            width: "100%",
            borderTop: navBorder,
            padding: "14px 18px 18px",
            maxWidth: 1200,
            margin: "0 auto"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background:
                theme === "dark"
                  ? "rgba(2,6,23,0.42)"
                  : "rgba(255,255,255,0.76)",
              border:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.10)"
                  : "1px solid rgba(15,23,42,0.10)",
              borderRadius: 18,
              padding: 14
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                hashSpy={true}
                onClick={() => setMenuOpen(false)}
                style={{
                  cursor: "pointer",
                  color: linkColor,
                  fontWeight: 700,
                  padding: "10px 12px",
                  borderRadius: 12,
                  transition: "0.2s",
                  border:
                    theme === "dark"
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(15,23,42,0.06)"
                }}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="btn-ghost"
              style={{
                padding: "10px 14px",
                fontSize: 13,
                borderRadius: 999,
                border:
                  theme === "dark"
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid rgba(0,0,0,0.12)",
                color: titleColor,
                fontWeight: 750
              }}
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      )}

      { }
      <style>
        {`
          .mobile-controls {
            display: none !important;
          }

          @media (max-width: 900px) {
            .navbar-desktop {
              display: none !important;
            }
            .mobile-controls {
              display: flex !important;
              align-items: center;
              gap: 12px;
            }
          }
        `}
      </style>
    </motion.nav>
  );
}
