import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { projectsData } from "../data/db";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-list">
          {projectsData.map((proj) => (
            <div className="project-row" key={proj.id}>
              <div className="project-image-container">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-details">
                <h2>{proj.title}</h2>
                <p className="project-desc">{proj.desc}</p>

                <div className="project-info-table">
                  <div className="info-row">
                    <span className="label">Year</span>
                    <span className="value">{proj.year}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Role</span>
                    <span className="value">{proj.role}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Tech Stack</span>
                    <span className="value">{proj.stack}</span>
                  </div>
                </div>
                <div className="project-actions">
                  <a href={`/projects/${proj.id}`} className="action-link">
                    VIEW PROJECT <BsArrowUpRight className="icon" />
                  </a>
                  <a href={proj.github} className="action-link">
                    SEE ON GITHUB <FaGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
