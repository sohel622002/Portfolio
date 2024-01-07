import React from "react";
import "./Projectmain.css";
import '../../App.css';

import zyklo_p_image from "../../Assets/Project images/zyklo-react-app.png";
import healthcare_image from '../../Assets/Project images/Healthcare-project.png';
import quize_image from '../../Assets/Project images/quize-js.png';

function Projectmain() {
  return (
    <div className="project-container">
      <h2>Projects</h2>
      <div className="proect-wrapper">
        <div className="span2 project">
          <div className="project-image">
            <img src={zyklo_p_image} alt="Zyklo react app - screenshot"/>
          </div>
          <div className="project-detail">
            <div className="project-detail-header">
              <h2>Zyklo React App</h2>
              <p>A Social Media app</p>
              <p>
                User can create Account and post their images and comment/like
                posts and Delete their posts
              </p>
            </div>
            <div className="project-detail-footer">
                <p>Live on: <a href="https://zyklo-react-app.web.app/" target="_blank" rel="noreferrer">Zyklo-react-app</a></p>
                <div className="tech-used">
                    <span className="react-text">React</span>
                    <span className="firabase-text">Firebase</span>
                    <span className="css-text">CSS</span>
                </div>
            </div>
          </div>
        </div>
        <div className="project">
            <div className="project-image">
                <img src={healthcare_image} alt="healthcare-screenshot"/>
            </div>
            <div className="project-detail_small">
                <h2>Mubina Healthcare Center</h2>
                <p>Live on: <a href="https://mubinahealthcarecenter.netlify.app/" target="_blank" rel="noreferrer">mubinahealthcarecenter.netlify.app</a></p>
                <div className="tech-used">
                    <span className="html-text">HTML</span>
                    <span className="css-text">CSS</span>
                    <span className="js-text">JS</span>
                </div>
            </div>
        </div>

        <div className="project">
            <div className="project-image">
                <img src={quize_image} alt="quize-screenshot"/>
            </div>
            <div className="project-detail_small">
                <h2>Quize App with JS</h2>
                <div className="tech-used">
                    <span className="html-text">HTML</span>
                    <span className="css-text">CSS</span>
                    <span className="js-text">JS</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projectmain;
