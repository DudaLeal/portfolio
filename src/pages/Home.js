import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/home.css";
import { personalData, techStack, projectsData } from "../data/db";

function Home() {
  return (
    <div className="home-page">
      <section className="hero home-section">
        <div className="hero-text">
          <p className="greeting">Hello 👋, I'm</p>
          <h1 className="title-name">
            {personalData.name.split(" ")[0]}
            <br />
            {personalData.name.split(" ")[1]}
          </h1>
          <h2 className="subtitle">{personalData.role}</h2>

          <p className="hero-desc">{personalData.introduction}</p>

          <div className="hero-actions">
            <a href={personalData.cvLink} download className="btn-primary">
              Download CV
            </a>
            <div className="social-icons">
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-img-container">
          <img
            src={personalData.heroImage}
            alt={personalData.name}
            className="profile-pic"
          />
        </div>
      </section>

      <section className="about-preview home-section">
        <div className="content-wrapper">
          <h2>About me</h2>
          <h3>I am a front-end developer based in {personalData.location}</h3>

          <div className="about-text-content">
            <p>{personalData.aboutMeShort}</p>
            <Link to="/about" className="link-underline">
              MORE ABOUT ME
            </Link>
          </div>
        </div>
      </section>

      <section className="tech-stack-section home-section">
        <div className="content-wrapper">
          <h2>My Tech Stack</h2>
          <p className="section-sub">
            Technologies I’ve been working with recently
          </p>

          <div className="stack-grid">
            {techStack.map((tech, index) => (
              <div key={index} title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-preview home-section">
        <div className="content-wrapper">
          <h2>Projects</h2>
          <p className="section-sub">Things I've built so far</p>

          <div className="projects-grid">
            {projectsData.map((proj) => (
              <Link
                to={`/projects/${proj.id}`}
                className="project-card-home"
                key={proj.id}
              >
                <div className="card-image-wrapper">
                  <img src={proj.image} alt={proj.title} />
                </div>
                <div className="card-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <small className="stack-list">{proj.stack}</small>

                  <div className="card-footer">
                    <span className="link-text">
                      <FaGithub style={{ marginRight: 5 }} /> View Code
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {projectsData.length > 6 && (
            <div className="more-projects-left">
              <Link to="/projects" className="link-underline">
                MORE PROJECTS
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
