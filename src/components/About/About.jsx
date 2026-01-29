// src/components/About/About.jsx
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__title">About GRR</h1>
        <p className="about__text">
          Greenlight Ready Release helps you quickly see whether a GitHub
          repository is ready to ship by summarizing key workflow signals in one
          place.
        </p>
        <p className="about__text">
          Enter a GitHub username or organization on the dashboard to view
          repositories and their latest workflow status, then jump directly to
          GitHub for details when something needs attention.
        </p>
      </div>
    </section>
  );
}

export default About;
