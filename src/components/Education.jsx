import { motion } from "framer-motion";

const educationData = [
  {
    title: "MCA (Master of Computer Applications)",
    institute:
      "Pillai HOC College of Engineering & Technology, University of Mumbai",
    cgpa: "7.47 CGPA (Current Semester: SGPA 8.30/10)",
    year: "Sep 2024 - May 2026",
    meta: "Rasayani, Maharashtra 410207"
  },
  {
    title: "BCA (Bachelor of Computer Applications)",
    institute:
      "Shriman Bhausaheb Zadbuke Mahavidyalaya, Punyashlok Ahilyadevi Holkar Solapur University",
    cgpa: "8.53 CGPA",
    year: "Sep 2021 - May 2024",
    meta: "Barshi, Maharashtra, 413401"
  },
  {
    title: "12th (Computer Science)",
    institute: "Sulakhe Secondary and Higher Secondary High School",
    percentage: "80.17%",
    year: "Jun 2020 - Aug 2021",
    meta: "Barshi, Maharashtra, 413401"
  }
];

export default function Education() {
  return (
    <section id="education">
      <div className="edu-container">
        <div className="badge">Education</div>

        <h2 className="section-title edu-title">Education</h2>

        <p className="section-subtitle">MCA → BCA → 12th CS</p>

        <div className="edu-li-wrap">
          <div className="edu-li-line" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="edu-li-row"
            >
              <div className="edu-li-dot" />

              <div className="edu-li-card card">
                <h3 className="edu-li-title">{item.title}</h3>

                <p className="edu-li-inst">{item.institute}</p>

                {item.cgpa && <p className="edu-li-score">CGPA: {item.cgpa}</p>}

                {item.percentage && (
                  <p className="edu-li-score">Percentage: {item.percentage}</p>
                )}

                <div className="edu-li-meta">
                  <span className="edu-li-chip">{item.year}</span>
                  <span className="edu-li-chip">{item.meta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          .edu-container{
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 10px 20px;
          }

          .edu-title{
            margin-top: 12px;
          }

          .edu-li-card{
            width: 100%;
            max-width: 720px;
            padding: 22px;
            overflow: hidden;
          }

          .edu-li-title,
          .edu-li-inst,
          .edu-li-score{
            word-break: break-word;
          }

          @media (max-width: 900px){
            .edu-container{
              padding: 10px 14px;
            }
          }

          @media (max-width: 650px){
            .edu-container{
              padding: 10px 12px;
            }

            .edu-li-wrap{
              padding: 16px 0;
            }

            .edu-li-row{
              padding-left: 54px;
              gap: 14px;
            }

            .edu-li-line{
              left: 18px;
            }

            .edu-li-dot{
              left: 18px;
              top: 30px;
            }

            .edu-li-card{
              padding: 18px;
              max-width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
}
