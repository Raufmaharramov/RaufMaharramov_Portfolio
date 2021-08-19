import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Full-Stack Software Engineer</h1>
        <Typed className="typed-text" strings={["Software Design & Development", "Software Development Life Cycle", "Software Engineering", "Software Project Management", "Object-Oriented Design", "Web Development", "Software Testing & Debugging", "Database Management", "Data Structures & Algorithms", "Data Modeling", "Source/Version Control"]} typeSpeed={40} backSpeed={60} loop />
        {/* <a href="#!" className="btn-main-offer">
          
        </a> */}
        <Link smooth={true} to="contacts" offset={-110} className="nav-link btn-main-offer" href="#!">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
