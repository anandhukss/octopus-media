import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">JoGeek</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="//github.io/jo_geek">Who we are</a>
          <a href="http://stackoverflow.com/users/4084003/">Services</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph">Team</a>
          <a href="https://codepen.io/jo_Geek/">Gallery</a>
          <a href="https://jsfiddle.net/user/jo_Geek/">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
