import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Opinions } from "../../containers";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { System } from "../../containers";
import App from "../../App";
import "./navbar.css";
import Sysbtn from "../sysbtn/sysbtn";
import Hombtn from "../sysbtn/hombtn";
import { Full } from "../../containers";
import Link from "react-scroll/modules/components/Link";
const NavBar = () => {
  const scrollToElement = () => test.current.scrollIntoView();

  const [Open, setOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const menuToggleHandler = () => {
    setOpen((p) => !p);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Hombtn name="Zenon Klaus"></Hombtn>
      </div>
      <nav>
        <ul className="header__links">
          <div className={Open ? "menu-mobile" : "menu"}>
            <li className="header__link" >
              <Hombtn name="Główna"></Hombtn>
            </li>
    
            <li className="header__link">
              <Link to="about" smooth={true} duration={10}>
                O mnie
              </Link>
            </li>
            <li className="header__link">
              <Link to="galeria" smooth={true} duration={10}>
                Media
              </Link>
            </li>
            <li className="header__link">
              <Sysbtn />
            </li>
          </div>

          <div className="header__burger">
            {!Open ? (
              <BiMenu onClick={menuToggleHandler} className="burger " />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} className="burger" />
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
