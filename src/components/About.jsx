export default function About() {
  return (
    <section id="about">
      <p className="section-subtitle">About me</p>
      <h2 className="section-title">Who is Rushikesh?</h2>

      <div className="card about-card">
        <p className="about-text">
          Hi, I’m Rushikesh. I’m an MCA student and a Java Full Stack Developer
          (Fresher) passionate about building clean, scalable, and user-friendly
          web applications. I work with Java, Spring Boot, REST APIs, and
          databases like MySQL/PostgreSQL, along with modern frontend
          technologies like React and JavaScript.
        </p>

        <p className="about-text about-text-last">
          I enjoy solving real-world problems through code, following clean
          coding practices, and continuously learning new tools and frameworks.
          I’m currently looking for Java Backend / Full Stack opportunities
          where I can contribute, learn, and grow as a developer.
        </p>
      </div>

      <style>
        {`
          .about-card{
            max-width: 980px;
            margin: 0 auto;
          }

          .about-text{
            font-size: 17px;
            color: var(--text);
            margin-bottom: 16px;
            line-height: 1.8;
          }

          .about-text-last{
            margin-bottom: 0;
          }

          @media (max-width: 900px){
            .about-card{
              max-width: 100%;
            }
            .about-text{
              font-size: 16px;
            }
          }

          @media (max-width: 600px){
            .about-text{
              font-size: 15px;
              text-align: left;
            }
          }
        `}
      </style>
    </section>
  );
}
