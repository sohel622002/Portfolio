import React from "react";
import Project from "../../components/Project/Project";

import styles from "./Projects.module.css";

const projects = [
  {
    id : 12345,
    name : "Zyklo React App",
    project_image : "/Assets/Project images/zyklo-react-app.png",
    desc : "Zyklo React App Where user can login & signup and share posts, like posts, comment on other's posts",
    techs : ["react", "css", "firebase"],
    liveAt : "https://zyklo-react-app.web.app/"
  },
  {
    id : 12310,
    name : "Origin Financial",
    project_image : "/Assets/Project images/origin-financial.png",
    desc : "Origin Financial App to interact Doctors and patients.",
    techs : ["next", "tailwind", "typescript"],
    liveAt : "https://origin-fincancial.vercel.app/"
  },
  {
    id : 12350,
    name : "Lelong ",
    project_image : "/Assets/Project images/lelong.png",
    desc : "Lelong bidding website for client",
    techs : ["html", "css", "javascript"],
    liveAt : "https://lelongshopmalaysia.com/"
  },
]

function Projects() {
  return (
    <div className={styles.projects_container}>
      {projects.map(project => (
        <Project project={project}/>
      ))}
    </div>
  );
}

export default Projects;
