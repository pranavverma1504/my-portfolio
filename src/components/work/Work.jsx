import "./work.css";
import gitkeep from "../../assets/gitkeep.png";
import ecommerce from "../../assets/ecommerce.png";
import imageEnhancer from "../../assets/imageEnhancer.png";
import colorPicker from "../../assets/colorPicker.png";
import ekSaath from "../../assets/ekSaath.png";
import hopGamezone from "../../assets/hopGamezone.png";

const Work = () => {
  return (
    <>
      <div id="work" className="project1">
        <div className="title">
          <h1>Selected Work</h1>
        </div>

        <div className="p1-container">
          <div className="p1-left">
            <div className="left-img">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=pranavgit.gitkeep-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitkeep} alt="Gitkeep Manager" />
              </a>
            </div>
            <p>GITKEEP MANAGER: VS Code Extension</p>
          </div>
          <div className="p1-right">
            <div className="right-img">
              <a
                href="https://parocart-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ecommerce} alt="AI Ecommerce Website" />
              </a>
            </div>
            <p>AI POWERED MERN ECOMMERCE WEBSITE</p>
          </div>
        </div>
      </div>

      <div className="project2">
        <div className="p2-container">
          <div className="p2-left">
            <div className="left-img">
              <a
                href="https://imageenhancer1.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imageEnhancer} alt="AI Image Enhancer" />
              </a>
            </div>
            <p>AI IMAGE ENHANCER</p>
          </div>
          <div className="p2-right">
            <div className="right-img">
              <a
                href="https://github.com/pranavverma1504/web-color-grabber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={colorPicker} alt="Color Picker Extension" />
              </a>
            </div>
            <p>COLOR PICKER: Chrome Extension</p>
          </div>
        </div>
      </div>

      <div className="project3">
        <div className="p3-left">
          <div className="left-img">
            <a
              href="https://hopgamezone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={hopGamezone} alt="Hop Gamezone" />
            </a>
          </div>
          <p>HOP GAMEZONE: Landing Page</p>
        </div>
        <div className="p3-right">
          <div className="right-img">
            <a
              href="https://github.com/pranavverma1504/ekSaath_landingpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ekSaath} alt="Ek Saath Cafe" />
            </a>
          </div>
          <p>EK SAATH CAFE: Landing Page</p>
        </div>
      </div>
    </>
  );
};

export default Work;
