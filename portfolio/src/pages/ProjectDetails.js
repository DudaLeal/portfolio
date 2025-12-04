import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaGithub,
  FaFigma,
  FaFileDownload,
  FaChevronDown,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { projectsData } from "../data/db";
import "../styles/project-details.css";

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project not found</div>;

  const githubBtnClass = project.preview ? "btn-secondary" : "btn-primary";

  return (
    <div className="project-details-page">
      <div className="container">
        <div className="details-header">
          <h1 className="details-title">{project.title}</h1>
          <div className="details-meta-row">
            <span>{project.year}</span>
            <span className="dot">•</span>
            <span>{project.role}</span>
          </div>
        </div>

        <div className="details-image-container">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="details-content">
          <div className="details-left">
            <h3>Overview</h3>
            <p className="details-desc" style={{ whiteSpace: "pre-line" }}>
              {project.longDesc || project.desc}
            </p>

            <div className="details-actions">
              {project.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Live Demo <BsArrowUpRight style={{ marginLeft: 5 }} />
                </a>
              )}

              {project.githubBack ? (
                <div className="repo-dropdown">
                  <button className={`${githubBtnClass} dropdown-btn`}>
                    GitHub{" "}
                    <FaGithub style={{ marginLeft: 5, marginRight: 5 }} />{" "}
                    <FaChevronDown size={12} />
                  </button>

                  <div className="dropdown-content">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Frontend
                    </a>
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Backend
                    </a>
                  </div>
                </div>
              ) : (
                project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={githubBtnClass}
                  >
                    GitHub <FaGithub style={{ marginLeft: 5 }} />
                  </a>
                )
              )}

              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Figma <FaFigma style={{ marginLeft: 5 }} />
                </a>
              )}

              {project.documentation && (
                <a
                  href={project.documentation}
                  download
                  className="btn-secondary"
                >
                  Docs <FaFileDownload style={{ marginLeft: 5 }} />
                </a>
              )}
            </div>
          </div>

          <div className="details-right">
            <div className="tech-box">
              <h3>Technologies</h3>
              <p className="tech-list">{project.stack}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
