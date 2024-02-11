import "./Homemain.css";

import githubLogo from "../../Assets/logos/GitHub logo.png";
import instagram from "../../Assets/logos/Instagram.png";
import Lovefooter from "../Lovefooter/Lovefooter";

function Homemain() {
  return (
    <div className="main-content">
      <p className="greeting-header">Hey There 👋🏻</p>
      <div className="content-container">
        <h1 className="main-header">
          My name is
          <br />
          Shaikh Mohammed Sohel{" "}
        </h1>
        <p className="main-sub-header">A Frontend Developer & a Keen Lerner</p>
        <div className="main-button-container">
          <a href="/about">
            <button className="readmore-btn">Read more</button>
          </a>
          <button className="contct-btn">Contact</button>
        </div>
      </div>
      <div className="main-footer">
        <div className="footer-social-links">
          <a className="link" href="/">
            <img src={githubLogo} alt="github" />
            <span>sohel0602</span>
          </a>
          <a className="link" href="/">
            <img src={instagram} alt="instagram" />
            <span>sohelshaikh</span>
          </a>
        </div>
        <Lovefooter />
      </div>
    </div>
  );
}

export default Homemain;
