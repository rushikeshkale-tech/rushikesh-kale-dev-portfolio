import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import movieTicketImg from "../assets/movie-ticket.png";
import rideSharingImg from "../assets/ride-sharing.png";
import foodDeliveryImg from "../assets/food-delivery.png";
import adminLoginImg from "../assets/AdminLoginPage.jpg";

const projects = [
  {
    title: "Movie Ticket Booking – Microservices",
    stack:
      "React • Spring Boot • Spring Cloud • JPA • Kafka • Docker • Spring Security",
    highlights: [
      "Built 4-microservice architecture with Spring Cloud Gateway handling 500+ concurrent bookings with 99% uptime",
      "Eliminated double-booking using Redis distributed locking and implemented Kafka-based async event processing",
      "Reduced API response time by 45% through Redis caching and secured endpoints with JWT authentication"
    ],
    github: "https://github.com/1rushikeshkale/<movie-repo>",
    live: "https://<movie-app-live-url>",
    outputImg: movieTicketImg
  },
  {
    title: "Ride-Sharing – Real-Time Rides",
    stack: "React • Spring Boot • JPA • WebSockets • Redis",
    highlights: [
      "Developed real-time ride-matching system processing 1000+ concurrent requests with 2s WebSocket latency",
      "Implemented Redis geospatial indexing for driver matching within 5km radius, reducing lookup time by 70%",
      "Built RESTful APIs for booking, fare calculation, and trip management with 250ms average response time"
    ],
    github: "https://github.com/1rushikeshkale/<ride-repo>",
    live: "https://<ride-app-live-url>",
    outputImg: rideSharingImg
  },
  {
    title: "Food Delivery – Orders & Payments",
    stack: "React • Spring Boot • JPA • JWT • Redis • Payments",
    highlights: [
      "Created multi-restaurant ordering platform managing 50+ restaurants and 1000+ menu items with Spring Boot",
      "Reduced API response time by 60% using Redis caching and secured 12+ endpoints with JWT role-based access",
      "Built complete order workflow (Cart → Payment → Delivery) handling 200+ orders/hour during load testing"
    ],
    github: "https://github.com/1rushikeshkale/<food-repo>",
    live: "https://<food-app-live-url>",
    outputImg: foodDeliveryImg
  },
  {
    title:
      "Blockchain-Based Academic Certificate Verification & Credit Transfer System",
    stack: "React.js • Node.js • IPFS • Solidity • Hardhat • MongoDB",
    highlights: [
      "Engineered NEP 2020-compliant blockchain system with Solidity NFT contracts on Hardhat tamper-proof certificates stored on IPFS with MetaMask wallet auth",
      "Built 3 portals (Admin/Student/Verifier) using React.js, Node.js/Express, MongoDB automated credit mapping (12 week =3 credits, 8 week =2 credits, 4 week =1 credits) + PRN verification",
      "Deployed local EVM network; eliminates certificate fraud problem  instant blockchain verification for employers/universities"
    ],
    github: "https://github.com/rushikeshkale-dev/Blockchain-Based-Academic-Certificate-Verification-and-Credit-Transfer-System",
    live: "https://<blockchain-live-url>",
    outputImg: adminLoginImg
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-subtitle">Real work, not tutorials</p>
      <h2 className="section-title">Projects that prove skills.</h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="project-header">
              <div style={{ minWidth: 0 }}>
                <h3
                  className="project-title"
                  style={{ wordBreak: "break-word" }}
                >
                  {project.title}
                </h3>
                <p
                  className="project-stack"
                  style={{ wordBreak: "break-word" }}
                >
                  {project.stack}
                </p>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost project-btn"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost project-btn"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>

            <div className="project-output">
              <p className="project-output-title">Project Output</p>

              <div className="project-img-wrap">
                <img
                  src={project.outputImg}
                  alt={`${project.title} output`}
                  loading="lazy"
                  className="project-img"
                />
              </div>
            </div>

            <ul className="project-points">
              {project.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 600px){
            .project-header{
              flex-direction: column;
              align-items: flex-start;
            }
            .project-links{
              width: 100%;
            }
            .project-links a{
              flex: 1;
              justify-content: center;
            }
          }
        `}
      </style>
    </section>
  );
}
