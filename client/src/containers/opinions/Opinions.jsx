import React from "react";
import "./opinions.css";
const Opinions = () => {

  return (
    <>
      <div className="tag__2" id="galeria">
        <h1 className="">Galeria</h1>
      </div>

      <div className="container_v2">
        <div className="blocks">
          <a href="/portfolio">
            <div className="p1">
              <a href="/portfolio">PORTFOLIO</a>
            </div>
          </a>
          <a href="/stage">
            <div className="p2">
              <a href="/stage">ON STAGE</a>
            </div>
          </a>
          <a href="/coaching">
            <div className="p3">
              <a href="/coaching">VOCAL COACHING</a>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Opinions;
