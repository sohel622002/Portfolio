import React from "react";
import Sidebarwithdetail from "../components/Sidebarwithdetail/Sidebarwithdetail";
import Aboutmain from "../components/Aboutmain/Aboutmain";

function About() {
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
        <Aboutmain />
      </div>
    </>
  );
}

export default About;
