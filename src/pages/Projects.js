import React from "react";
import { Link } from "react-router-dom";
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
              <Link
                to={`/projects/${proj.id}`}
                className="project-image-container"
              >
                <img src={proj.image} alt={proj.title} />
              </Link>

              <div className="project-details">
                <Link
                  to={`/projects/${proj.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h2>{proj.title}</h2>
                </Link>

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
                  <Link to={`/projects/${proj.id}`} className="action-link">
                    VIEW DETAILS <BsArrowUpRight className="icon" />
                  </Link>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-link"
                  >
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
