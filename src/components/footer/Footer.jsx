import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Section */}
      <div className="left">
        <div className="left1">
          <a
            href="https://www.instagram.com/pranav.verma_1502/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-verma-322907251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pranavverma1504"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="left2">
          <p>
            DURG <br />
            CHHATTISHGARH <br />
            INDIA{" "}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right">
        <div className="email-no">
          <p>vermapranav001@gmail.com</p>
          <p>+91 7389355960</p>
        </div>
        <p className="quote">DESIGNED & DEVELOPED BY PRANAV VERMA © 2025</p>
      </div>
    </div>
  );
};

export default Footer;
