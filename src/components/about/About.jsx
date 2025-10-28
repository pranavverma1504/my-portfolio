import myPhoto from "../../assets/myPhoto.png";
import './About.css'

const About = () => {
  return (
    <div className="about">
      {/* Left Section */}
      <div className="about-left">
        <div className="about-left-top">
          <span>Hello there <br /></span> <span> I'm Pranav Verma</span> <br />
          <p>I’M A PASSIONATE WEB DEVELOPER DEDICATED TO CREATING MODERN, INTERACTIVE, AND VISUALLY STUNNING WEB EXPERIENCES. I SPECIALIZE IN BUILDING SMOOTH, RESPONSIVE FRONTENDS AND POWERFUL FULL-STACK APPLICATIONS USING THE MERN STACK. MY GOAL IS TO TURN IDEAS INTO FUNCTIONAL, ELEGANT, AND ENGAGING DIGITAL SOLUTIONS THAT LEAVE A LASTING IMPRESSION</p>
        </div>
        <div className="about-left-bottom">
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              <li>Full-Stack Development</li>
              <li>Frontend Development</li>
              <li>Animations & UI</li>
              <li>Backend Development</li>
              <li>Database Management</li>
              <li>Authentication & Security</li>
              <li>API Integration</li>
              <li>Version Control</li>
              <li>Deployment & Cloud</li>
              <li>Performance & SEO</li>
            </ul>
          </div>

          <div className="techstack">
            <h2>Tech Stack</h2>
            <ul>
              <li>MERN STACK</li>
              <li>HTML5, CSS3, React.js, Redux, Tailwind CSS</li>
              <li>GSAP, Framer Motion</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, Firebase</li>
              <li>JWT, bcrypt, Firebase Auth</li>
              <li>RESTful APIs</li>
              <li>Git, GitHub</li>
              <li>Vercel, Netlify, Render</li>
              <li>Responsive Design, SPA, SEO</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <img src={myPhoto} alt="profile" />
      </div>
    </div>
  )
}

export default About