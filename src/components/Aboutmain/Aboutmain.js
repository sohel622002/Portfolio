import "./Aboutmain.css";
import htmllogo from "../../Assets/skills/html-5 logo.png";
import csslogo from "../../Assets/skills/CSS logo.png";
import jslogo from "../../Assets/skills/JavaScript logo.png";
import reactlogo from "../../Assets/skills/React logo.png";
import fireabeslogo from "../../Assets/skills/Firebase logo.png";
import scsslogo from "../../Assets/skills/scss logo.png";
import figmalogo from "../../Assets/skills/Figma logo.png";
import reduxlogo from "../../Assets/skills/Redux logo.png";

import zyklo_p_image from "../../Assets/Project images/Screenshot 2023-10-20 214845.png";
import { NavLink } from "react-router-dom";

function Aboutmain() {
  return (
    <div className="aboutmain">
      <div className="aboutmain-container">
        <h2 className="about-header">About</h2>
        <h4 className="about-subheader">
          A Frontend Developer with passion for Web Development.
        </h4>
        <div className="about-detail">
          <p>
            Hello, I'm Shaikh Mohammed Sohel, a recent physics graduate from
            Bhavans R A Collage of Science with a newfound passion for web
            development. While my academic background is in physics, I
            discovered my fascination for web development in 2022. What drew me
            to this field is the ability to build, create, and see tangible
            results. I take immense pride in the websites and applications I
            create.
          </p>
          <p>
            Over the past year, I've been on a self-guided learning journey
            through online resources like YouTube. This hands-on experience has
            given me a strong foundation in web development. Additionally, I'm
            currently enhancing my skills through professional IT training at a
            top technology institute.
          </p>
          <p>
            My journey into web development is ongoing, and I'm excited to
            continue exploring this dynamic field. I'm eager to collaborate,
            learn, and create in the world of web development, and I'm always
            open to new opportunities and challenges.
          </p>
        </div>
        <div className="eduction-container">
          <h3 className="education-header">Education</h3>
          <div className="education">
            <div className="degree-marks">
              <h2>BSC Physics</h2>
            </div>
            <div className="collage-detail">
              <span>Bhavans R A Collage Of Science</span>
              <span>Ahmedabad</span>
            </div>
            <span>04/2019 to 07/2022</span>
          </div>
          <div className="education">
            <div className="degree-marks">
              <h2>12th Science</h2>
              <h2 className="marks">61.27%</h2>
            </div>
            <div className="collage-detail">
              <span>D N High School</span>
              <span>Anand</span>
            </div>
            <span>03/2018 to 04/2019</span>
          </div>
        </div>

        <div className="skill-container">
          <h3 className="skill-header">Skills</h3>
          <div className="skills-wrapper">
            <img src={htmllogo} className="skill-png" />
            <img src={csslogo} className="skill-png" />
            <img src={jslogo} className="skill-png" />
            <img src={reactlogo} className="skill-png" />
            <img src={fireabeslogo} className="skill-png" />
            <img src={scsslogo} className="skill-png" />
            <img src={figmalogo} className="skill-png" />
            <img src={reduxlogo} className="skill-png" />
          </div>
        </div>

        <div className="lang-container">
          <h3 className="lang-header">Languages</h3>
          <div className="lang-wrapper">
            <div className="lang">
              <h4>English</h4>
              <p>Native or Bilingual Proficiency</p>
            </div>
            <div className="lang">
              <h4>Hindi</h4>
              <p>Full Professional Proficiency</p>
            </div>
            <div className="lang">
              <h4>Gujrati</h4>
              <p>Full Professional Proficiency</p>
            </div>
          </div>
        </div>

        <div className="experience-container">
          <div className="exp-flex">
            <h3 className="experience">Experience</h3>
            <span className="see-more-link">
              <NavLink to="/projects">
                See More &gt;
              </NavLink>
            </span>
          </div>
          <div className="sample-project">
            <div className="project-image">
              <img src={zyklo_p_image} />
            </div>
            <div className="project-detail-container">
              <div className="project-detail">
                <h4>Zyklo React App</h4>
                <p>A Social Media App</p>
                <p>
                  User can create Account and post their Images and comment/like
                  posts and Delete their images
                </p>
              </div>
              <div className="project-techstack">
                <span className="react-tech">React</span>
                <span className="firebase-tech">Firebase</span>
                <span className="css-tech">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutmain-footer"><p>Made With ❤️ / From Sohel Shaikh</p></div>
    </div>
  );
}

export default Aboutmain;
