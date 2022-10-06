import React, { Component } from "react";
import "./header.css";
import NavBar from "../../components/NavBar/NavBar";
import Link from "react-scroll/modules/components/Link";
const Header = (Open) => {
  return (
    <div className="container" id="home">
      <div className="text">
        <div className="cyt">,,Muzyka jest dobra na wszystko.''</div>
        <div className="div">
          <Link to="galeria" smooth={true} duration={10}>Media</Link>

          <Link to="about" smooth={true} duration={10}>O mnie</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
