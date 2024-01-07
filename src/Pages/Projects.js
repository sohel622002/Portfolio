import React from "react";
import Sidebarwithdetail from "../components/Sidebarwithdetail/Sidebarwithdetail";
import Projectmain from "../components/Projectmain/Projectmain";

function Projects() {
  return (
    <>
      <div
        className="about-main"
        style={{
          display: "flex",
          height: "calc(100vh - 64.8px)",
          overflow: "hidden"
        }}
      >
        <Sidebarwithdetail />
        <Projectmain />
      </div>
    </>
  );
}

export default Projects;