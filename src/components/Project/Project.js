import React from "react";
import "./Project.css";
import "../../App.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import zyklo_p_image from "../../Assets/Project images/zyklo-react-app.png";

function Project() {
  return (
    <div className="project-container">
      <div className="project-image">
        <img src={zyklo_p_image} alt="Zyklo React App" />
      </div>
      <div className="project-detail">
        <div className="project-detail-extra">
          <div>
            <h2>Zyklo React App</h2>
            <a href="https://zyklo-react-app.web.app/"><FaExternalLinkAlt /></a>
          </div>
          <p>This is some bio</p>
        </div>
        <div className="tech-used">
          <span className="react-text">React</span>
          <span className="css-text">CSS</span>
          <span className="firebase-text">Firebase</span>
        </div>
      </div>
    </div>
  );
}

export default Project;
