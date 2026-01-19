import ResumeImage from "../assets/Rushikesh_Kale_Java_FullStack_Developer.jpg";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeImage;
    link.download = "Rushikesh-Kale-Java-FullStack-Developer.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume">
      <p className="section-subtitle">Resume</p>
      <h2 className="section-title">Full resume preview.</h2>

      <div className="card resume-card">
        <div className="resume-preview">
          <img
            src={ResumeImage}
            alt="Rushikesh Kale – Java Full Stack Developer Resume"
            className="resume-img"
          />
        </div>

        <button
          type="button"
          className="btn-primary resume-download-btn"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>

      <style>
        {`
          .resume-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 26px;
            max-width: 1050px;
            margin: 0 auto;
          }

          .resume-preview{
            width: 100%;
            max-width: 720px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(148,163,184,0.5);
            background: rgba(2, 6, 23, 0.65);
          }

          .resume-img{
            width: 100%;
            height: auto;
            display: block;
          }

          .resume-download-btn{
            margin-top: 4px;
            font-size: 16px;
            padding: 13px 28px;
            border-radius: 999px;
            white-space: nowrap;
          }

          @media (max-width: 720px){
            .resume-card{
              padding: 18px;
            }
            .resume-preview{
              max-width: 100%;
            }
          }

          @media (max-width: 520px){
            .resume-download-btn{
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
    </section>
  );
}
