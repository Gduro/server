import React, { Component } from "react";
import "./footer.css";
import Link from "react-scroll/modules/components/Link";
const Footer = () => {
  return (
    <>

      <div className="container_v3">
        <div className="footer-basic">
          <footer>

            <ul className="list-inline">
              <div className="flex">
              <li className="list-inline-item">
                <Link to="home"smooth={true} duration={10}>Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="about" smooth={true} duration={10}>O mnie</Link>
              </li>
              <li className="list-inline-item">
                <Link to="galeria" smooth={true} duration={10}>Media</Link>
              </li>
              <li className="list-inline-item">
                <a href="#">Zgłoś się!</a>
              </li>
              </div>

              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p className="copyright">Gdurro © 2018</p>
          </footer>
        </div>

      </div>
    </>
  );
};

export default Footer;
