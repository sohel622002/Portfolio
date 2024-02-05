import React from "react";
import "./Sidebarwithdetail.css";
import profile from "../../Assets/prfile.jpg";

function Sidebarwithdetail() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <img src={profile} className="round-profile" alt="profile"/>
        <div className="sidebar-detail">
          <h2 className="sidebar-name">Shaikh Mohammed Sohel</h2>
          <p className="sidebar-tagline">Always Learning & Growing</p>
          <p className="sidebar-projects">10 Projects</p>
          <p className="sidebar-techs">7 Techs</p>
          <p className="sidebar-address">Ahmedabad, Gujrat, India</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebarwithdetail;
