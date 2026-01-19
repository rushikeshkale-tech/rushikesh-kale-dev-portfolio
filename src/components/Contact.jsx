import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const contactCards = [
    {
      title: "Address",
      value: "Pune, India",
      icon: <FaMapMarkerAlt />,
      link: null
    },
    {
      title: "Email Address",
      value: "rushikeshkale.dev@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:rushikeshkale.dev@gmail.com"
    },
    {
      title: "LinkedIn",
      value: "Connect",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/rushikeshkale-dev/"
    },
    {
      title: "Instagram",
      value: "Follow",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/rushikesh_kale_deshmukh?igsh=cG5jaGd0Y3ZuYWp4"
    }
  ];

  return (
    <section id="contact">
      <p className="section-subtitle">Let’s talk</p>
      <h2 className="section-title">Ready for the next opportunity.</h2>

      <div className="contact-grid">
        {contactCards.map((item, idx) => {
          const CardContent = (
            <div className="contact-card">
              <div className="contact-icon">{item.icon}</div>

              <div className="contact-title">{item.title}</div>

              <div className="contact-value">{item.value}</div>
            </div>
          );

          return item.link ? (
            <a
              key={idx}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              className="contact-link"
            >
              {CardContent}
            </a>
          ) : (
            <div key={idx}>{CardContent}</div>
          );
        })}
      </div>

      <style>
        {`
          #contact{
            scroll-margin-top: 90px;
          }

          .contact-grid{
            margin-top: 22px;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }

          .contact-link{
            text-decoration: none;
            color: inherit;
            display: block;
          }

          .contact-card{
            border-radius: 18px;
            padding: 22px 16px;
            text-align: center;
            min-height: 160px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            border: 1px solid var(--border);
            box-shadow: var(--shadow-soft);
            background: linear-gradient(
              135deg,
              rgba(11, 2, 38, 0.96),
              rgba(11, 2, 38, 0.90)
            );
            transition: transform 0.18s ease, border-color 0.18s ease;
          }

          html[data-theme='light'] .contact-card{
            background: linear-gradient(135deg, #ffffff, #f3e8ff);
          }

          .contact-card:hover{
            transform: translateY(-4px);
            border-color: rgba(168, 85, 247, 0.55);
          }

          .contact-icon{
            width: 52px;
            height: 52px;
            margin: 0 auto;
            border-radius: 14px;
            display: grid;
            place-items: center;
            font-size: 26px;

            background: rgba(168, 85, 247, 0.16);
            color: var(--accent);
            border: 1px solid rgba(168, 85, 247, 0.20);
          }

          html[data-theme='light'] .contact-icon{
            background: rgba(124, 58, 237, 0.12);
            border: 1px solid rgba(124, 58, 237, 0.20);
            color: var(--accent);
          }

          .contact-title{
            font-weight: 800;
            color: var(--text);
            font-size: 15px;
          }

          .contact-value{
            font-size: 13.5px;
            color: var(--muted);
            line-height: 1.5;
            word-break: break-word;
          }

          @media (max-width: 900px){
            .contact-grid{
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 520px){
            .contact-grid{
              grid-template-columns: repeat(1, minmax(0, 1fr));
            }
            .contact-card{
              min-height: 150px;
              padding: 20px 14px;
            }
          }
        `}
      </style>
    </section>
  );
}
