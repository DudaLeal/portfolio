import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  personalData,
  aboutPageData,
  experienceData,
  educationData,
} from "../data/db";
import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-section-row">
        <div className="row-left">
          <h1 className="section-title">ABOUT ME</h1>
        </div>
        <div className="row-right">
          <h3 className="about-subtitle">
            I am a front-end developer based in {personalData.location}.<br />
            Has Mechanical Engineering background.
          </h3>
          <p className="about-text">{personalData.aboutMeShort}</p>

          <div className="about-actions">
            <a href={personalData.cvLink} download className="btn-primary">
              DOWNLOAD RESUME
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
      </section>
      <section className="about-section-row">
        <div className="row-left">
          <h1 className="section-title">MY CAPABILITIES</h1>
        </div>
        <div className="row-right">
          <p className="about-text">{aboutPageData.capabilitiesDescription}</p>

          <div className="capabilities-wrapper">
            {aboutPageData.capabilitiesList.map((cap, index) => (
              <span key={index} className="capability-pill">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="about-section-row">
        <div className="row-left">
          <h1 className="section-title">MY EXPERIENCE</h1>
        </div>
        <div className="row-right">
          {experienceData.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="exp-date">{exp.date}</span>
              </div>
              <p className="exp-text">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about-section-row no-border">
        <div className="row-left">
          <h1 className="section-title">MY EDUCATION</h1>
        </div>
        <div className="row-right">
          {educationData.map((edu, index) => (
            <div className="experience-item" key={index}>
              <div className="exp-header">
                <h3>{edu.title}</h3>
                <span className="exp-date">{edu.date}</span>
              </div>
              <p className="exp-text">{edu.institution}</p>
              <p
                className="exp-text"
                style={{ fontSize: "0.9rem", color: "#666" }}
              >
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
