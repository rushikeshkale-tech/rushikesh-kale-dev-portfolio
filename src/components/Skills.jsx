import { motion } from "framer-motion";

import CertOOP from "../assets/Fundamentals of Object Oriented Programming.jpg";
import CertJava from "../assets/Programming In Java.jpg";
import CertSQL from "../assets/SQL dvanced certificate.jpg";
import CertBackend from "../assets/Java Backend Development Bootcamp.jpg";

import { FaJava, FaBug, FaCode } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiJira,
  SiAmazonwebservices,
  SiIntellijidea,
  SiPostman,
  SiApachekafka,
  SiRabbitmq,
  SiCucumber,
  SiSwagger,
  SiJunit5,
  SiSolidity,
  SiEthereum,
  SiIpfs,
  SiWeb3Dotjs
} from "react-icons/si";

const skillBoxes = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#3776ab" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Spring MVC", icon: SiSpringboot, color: "#6db33f" },
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6db33f" },
      { name: "JPA / Hibernate", icon: SiHibernate, color: "#59666c" },
      { name: "REST APIs", icon: SiSwagger, color: "#85ea2d" },
      { name: "Microservices", icon: SiSpringboot, color: "#6db33f" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" }
    ]
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
      { name: "Jenkins", icon: SiJenkins, color: "#d24939" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Maven", icon: SiApachemaven, color: "#c71a36" },
      { name: "JIRA", icon: SiJira, color: "#0052cc" },
      { name: "AWS S3", icon: SiAmazonwebservices, color: "#ff9900" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#000000" },
      { name: "VS Code", icon: FaCode, color: "#007acc" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" }
    ]
  },
  {
    title: "Messaging",
    items: [
      { name: "Kafka", icon: SiApachekafka, color: "#231f20" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#ff6600" }
    ]
  },
  {
    title: "Testing",
    items: [
      { name: "JUnit", icon: SiJunit5, color: "#25a162" },
      { name: "Mockito", icon: FaBug, color: "#60a5fa" },
      { name: "Cucumber", icon: SiCucumber, color: "#23d96c" },
      { name: "Swagger", icon: SiSwagger, color: "#85ea2d" }
    ]
  }

 ,

{
  title: "Blockchain / Web3",
  items: [
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Hardhat", icon: SiEthereum, color: "#627eea" },
    { name: "IPFS", icon: SiIpfs, color: "#65c2cb" },
    { name: "MetaMask", icon: SiEthereum, color: "#f6851b" },
    { name: "Web3.js", icon: SiWeb3Dotjs, color: "#f16822" }
  ]
}




];

const certificates = [
  { title: "Fundamentals of Object Oriented Programming", img: CertOOP },
  { title: "Programming In Java", img: CertJava },
  { title: "SQL Advanced certificate", img: CertSQL },
  { title: "Java Backend Development Bootcamp", img: CertBackend }
];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-subtitle">Technical Skills</p>
      <h2 className="section-title">My tech stack.</h2>

      <div className="skills-grid">
        {skillBoxes.map((box) => (
          <motion.div
            key={box.title}
            className="card skill-box"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="skill-box-title">{box.title}</h3>

            <div className="skills-icons-grid">
              {box.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-iconWrap">
                      <Icon size={26} style={{ color: skill.color }} />
                    </div>

                    <div className="skill-name">{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="section-subtitle">Certificates</p>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <motion.div
            key={cert.title}
            className="card cert-card"
            whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.7)" }}
          >
            <h3 className="cert-title">{cert.title}</h3>

            <div className="cert-imgWrap">
              <img src={cert.img} alt={cert.title} className="cert-img" />
            </div>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .skills-grid{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
            margin-bottom: 44px;
          }

          .skill-box{
            padding: 22px 18px;
            border-radius: 18px;
            max-width: 100%;
            overflow: hidden;
          }

          .skill-box-title{
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 16px;
            word-break: break-word;
          }

          .skills-icons-grid{
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
          }

          .skill-item{
            text-align: center;
            padding: 12px 10px;
            border-radius: 16px;
            border: 1px solid rgba(148,163,184,0.22);
            background: rgba(255,255,255,0.04);
            min-width: 0;
          }

          .skill-iconWrap{
            width: 46px;
            height: 46px;
            margin: 0 auto 8px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            background: rgba(255,255,255,0.06);
          }

          .skill-name{
            font-size: 12.5px;
            font-weight: 700;
            color: var(--text);
            word-break: break-word;
          }

          .cert-grid{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .cert-card{
            max-width: 100%;
            overflow: hidden;
          }

          .cert-title{
            font-size: 17px;
            margin-bottom: 10px;
            word-break: break-word;
          }

          .cert-imgWrap{
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid rgba(148,163,184,0.4);
            max-height: 260px;
            width: 100%;
          }

          .cert-img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 980px){
            .skills-grid{
              grid-template-columns: 1fr;
            }
            .cert-grid{
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 520px){
            .skills-icons-grid{
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
        `}
      </style>
    </section>
  );
}
