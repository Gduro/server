import React, { Component } from "react";
import "./opinions.css";
import { useRef } from "react";
import Link from "react-scroll/modules/components/Link";
import { PortfolioGall } from "..";
const Opinions = () => {
  const test = useRef(null);

  return (
    <>
      <div className="tag__2" id="galeria">
        <h1 className="">Galeria</h1>
      </div>

      <div className="container_v2">
        <div className="blocks">
          <div className="p1">
              <a href="/portfolio">PORTFOLIO</a>
          </div>
          <div className="p2">
            <a href="/stage">ON STAGE</a>
          </div>
          <div className="p3">
            <a href="coaching">VOCAL COACHING</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opinions;
