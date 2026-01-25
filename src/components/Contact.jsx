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

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" className="form-input" required />
        <input type="email" placeholder="Your Email" className="form-input" required />
        <textarea placeholder="Your Message" rows="5" className="form-input" required></textarea>
        <button type="submit" className="form-btn">Send Message</button>
      </form>

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

          .contact-form {
            max-width: 600px;
            margin: 40px auto 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .form-input {
            width: 100%;
            padding: 16px 20px;
            border-radius: 14px;
            border: 1px solid var(--border);
            background: var(--card);
            backdrop-filter: blur(10px); 
            color: var(--text);
            font-size: 15px;
            font-family: inherit;
            transition: all 0.2s ease;
            resize: vertical;
          }
          
          .form-input:focus {
            outline: none;
            border-color: var(--accent);
            background: var(--bg-soft);
            box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.1);
          }

          .form-btn {
            padding: 16px;
            border-radius: 14px;
            background: linear-gradient(135deg, var(--accent), var(--accent-strong));
            color: white;
            border: none;
            font-weight: 700;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 10px 30px -5px rgba(147, 51, 234, 0.4);
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .form-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px -5px rgba(219, 39, 119, 0.5);
          }
        `}
      </style>
    </section>
  );
}
