import React from "react";
import Project from "../../components/Project/Project";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projects_container}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default Projects;
