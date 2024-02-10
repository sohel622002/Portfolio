import React from "react";
import "./Project.css";
import "../../App.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Project({ project }) {

  return (
    <div className="project-container">
      <div className="project-image">
        <img src={project.project_image} alt="Zyklo React App" />
      </div>
      <div className="project-detail">
        <div className="project-detail-extra">
          <div>
            <h2>{project.name}</h2>
            <a href={project.liveAt}><FaExternalLinkAlt /></a>
          </div>
          <p>{project.desc}</p>
        </div>
        <div className="tech-used">
          {project.techs.map(tech => (
            <span className={`${tech}-text`}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
