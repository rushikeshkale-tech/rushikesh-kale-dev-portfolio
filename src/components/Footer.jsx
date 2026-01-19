export default function Footer() {
  const year = new Date().getFullYear();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">Rushikesh Kale</div>
          <div className="footer-sub">Java Full Stack Developer • Pune, India</div>
        </div>

        <div className="footer-right">
          <a
            href="#home"
            className="footer-link"
            onClick={(e) => handleScroll(e, "home")}
          >
            Home
          </a>
          <a
            href="#skills"
            className="footer-link"
            onClick={(e) => handleScroll(e, "skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="footer-link"
            onClick={(e) => handleScroll(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#resume"
            className="footer-link"
            onClick={(e) => handleScroll(e, "resume")}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="footer-link"
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="footer-bottom">© {year} Rushikesh Kale. All Rights Reserved.</div>

      <style>
        {`
          .footer-right .footer-link{
            padding: 6px 10px;
            border-radius: 10px;
          }

          .footer-right .footer-link:hover{
            background: rgba(148,163,184,0.10);
          }

          html[data-theme='light'] .footer-right .footer-link:hover{
            background: rgba(15,23,42,0.06);
          }
        `}
      </style>
    </footer>
  );
}
