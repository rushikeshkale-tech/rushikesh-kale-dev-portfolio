import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import ProfileImage from "../assets/ProfileImage.jpg";

function useTypingText(
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1200
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        const nextText = currentWord.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
        timeoutRef.current = setTimeout(handleTyping, typingSpeed);
      } else {
        const nextText = currentWord.substring(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timeoutRef.current = setTimeout(handleTyping, 250);
          return;
        }
        timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
      }
    };

    timeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Home() {
  const rotatingText = useTypingText(
    [
      "Java Developer",
      "Spring Boot Backend Developer",
      "React Frontend Developer",
      "I build modern web applications"
    ],
    90,
    45,
    1200
  );

  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section-home">
      <div className="home-container">
        <div className="home-grid">
          <div className="home-text">
            <p className="home-hello">Hi there!</p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="home-title"
            >
              I&apos;m <span className="home-name">Rushikesh Kale</span>,
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="home-desc"
            >
              I build scalable Spring Boot microservices and modern React
              applications with clean UI, secure APIs, and performance-focused
              architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="home-rotate"
            >
              <span className="home-rotate-text">{rotatingText}</span>
              <span className="home-cursor" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="home-social"
            >
              <a
                href="https://github.com/rushikeshkale-dev"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rushikeshkale-dev/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://m.facebook.com/rushikesh.kaledeshmukh/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/rushikesh_kale_deshmukh?igsh=cG5jaGd0Y3ZuYWp4"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://leetcode.com/u/rushikeshkaledev/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <SiLeetcode />
              </a>

              <a
                href="https://x.com/KaleRushik51028"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="btn-primary home-btn"
              onClick={handleScrollToAbout}
            >
              More about me <FaArrowRight size={18} />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="home-imageSide"
          >
            <div className="home-imageWrap">
              <img
                src={ProfileImage}
                alt="Rushikesh Kale"
                className="home-image"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .home-container{
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 10px 20px 60px;
          }

          .home-grid{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 56px;
            flex-wrap: wrap;
          }

          .home-text{
            flex: 1 1 520px;
            max-width: 680px;
            text-align: left;
            min-width: 280px;
          }

          .home-hello{
            font-size: 20px;
            color: var(--muted);
            margin-bottom: 12px;
          }

          .home-title{
            font-size: clamp(32px, 5vw, 60px);
            line-height: 1.08;
            font-weight: 900;
            margin-bottom: 16px;
            word-break: break-word;
          }

          .home-name{
            color: var(--text);
          }

          .home-desc{
            margin-bottom: 12px;
            color: var(--text);
            font-size: clamp(15px, 2vw, 20px);
            line-height: 1.8;
            max-width: 620px;
          }

          .home-rotate{
            margin-bottom: 26px;
            font-size: clamp(16px, 2.5vw, 22px);
            font-weight: 800;
            color: #ff4fa3;
            display: flex;
            align-items: center;
            gap: 10px;
            min-height: 30px;
            flex-wrap: wrap;
          }

          .home-rotate-text{
            word-break: break-word;
          }

          .home-cursor{
            display: inline-block;
            width: 8px;
            height: 24px;
            background-color: #ff4fa3;
            border-radius: 3px;
            animation: blink 0.8s infinite;
          }

          .home-social{
            display: flex;
            gap: 22px;
            margin-bottom: 28px;
            font-size: 26px;
            flex-wrap: wrap;
          }

          .home-btn{
            padding: 14px 34px;
            font-size: 18px;
            border-radius: 9999px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            max-width: 100%;
          }

          .home-imageSide{
            flex: 1 1 360px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 260px;
          }

          .home-imageWrap{
            width: min(430px, 100%);
            aspect-ratio: 4 / 5;
            border-radius: 999px;
            overflow: hidden;
            box-shadow: 0 32px 90px rgba(0,0,0,0.55);
            border: 10px solid rgba(255,255,255,0.85);
            margin-top: 40px;
          }

          .home-image{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
          }

          @media (max-width: 900px){
            .home-container{
              padding: 8px 14px 50px;
            }
            .home-grid{
              gap: 34px;
            }

            .home-imageWrap{
              width: min(340px, 92%);
              aspect-ratio: 4 / 5;
              margin-top: 20px;
              border-radius: 999px;
            }
          }

          @media (max-width: 600px){
            .home-text{
              text-align: center;
            }
            .home-desc{
              margin-left: auto;
              margin-right: auto;
            }
            .home-social{
              justify-content: center;
            }
            .home-rotate{
              justify-content: center;
            }

            .home-imageWrap{
              width: min(320px, 92%);
              aspect-ratio: 4 / 5;
              margin-top: 10px;
              border-radius: 999px;
            }
          }
        `}
      </style>
    </section>
  );
}
