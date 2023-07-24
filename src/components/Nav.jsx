import React from "react";
import "../style/nav.scss";
import logo from "../images/library_logo.png";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="library logo" />
        <h3>Library</h3>
      </div>
      <ul>
        <li>Software</li>
        <li>History</li>
        <li>Biography</li>
      </ul>
    </nav>
  );
}

export default Nav;
