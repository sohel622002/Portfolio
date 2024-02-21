import React, { useEffect, useState } from "react";
import Project from "../../components/Project/Project";

import styles from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = fetch(`https://myportfolio-backend-dg0a.onrender.com/projects`)
      .then((res) => res.json())
      .then((d) => setProjects(d))
      .catch((error) => setError("There is Error Fetching Project Data!"));
  }, []);

  return (
    <div className={styles.projects_container}>
      {error}
      {projects?.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default Projects;
