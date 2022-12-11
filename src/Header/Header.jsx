import React from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div onClick={() => scroll.scrollToTop()} className="nav-title">
            OCTOPUS
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="">Who we are</Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
          <Link spy={true} smooth={true} offset={-70} duration={500} to="team">
            Team
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Gallery
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
