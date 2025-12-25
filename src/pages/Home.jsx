import pfp from "../assets/pfp.png";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";
import gmail from "../assets/Gmail.png";
import cvIcon from "../assets/CVIcon.png";

import "./Home.css";

function Home() {
  return (
    <div className="page">
      <div className="Row">
        <div className="ProfilePicture">
          <img src={pfp} alt="Profile picture" />
        </div>

        <div className="Description">
          <div className="TitleText">Harvey Emmerson</div>

          <div className="SubText">
            A fourth-year Software Engineering student currently pursuing an
            integrated master’s degree at the University of Hull. Specialises
            in full-stack development, using C# for RESTful backend API's and
            HTML with JavaScript for frontend development.
          </div>

          <div className="ButtonRow">
            <a
              href="https://www.linkedin.com/in/harvey-emmerson-6550622a4/"
              target="_blank"
              rel="noreferrer"
              className="IconButton"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/harvey4452"
              target="_blank"
              rel="noreferrer"
              className="IconButton"
            >
              <img src={github} alt="GitHub" />
            </a>

            <a
              href="mailto:harveyemmerson122004@gmail.com"
              className="IconButton"
            >
              <img src={gmail} alt="Email" />
            </a>

            <a
              href="/CV.pdf"
              className="IconButton"
              download
            >
              <img src={cvIcon} alt="CV" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
