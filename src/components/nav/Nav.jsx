import { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after clicking link
  };

  return (
    <nav>
      <span className="name">
        <Link
          to="hero"
          smooth={true}
          duration={700}
          spy={true}
          offset={-70}
          activeClass="active"
          onClick={handleLinkClick}
        >
          PranavVerma
        </Link>
      </span>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={700}
            spy={true}
            offset={-70}
            activeClass="active"
            onClick={handleLinkClick}
          >
            WORK
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={700}
            spy={true}
            offset={-70}
            activeClass="active"
            onClick={handleLinkClick}
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            spy={true}
            offset={-70}
            activeClass="active"
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <a
  href="/resume.pdf"
  download="Pranav_Verma_Resume.pdf"
  className="resume-btn"
>
  Resume
</a>

    </nav>
  );
};

export default Nav;
