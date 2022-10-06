import React, { Component } from "react";
import "./about.css";
import avatar from "./avatar.jpg";
const About = () => {
  return (
    <>
      <div className="tag">
        <h1 className="about">O mnie</h1>
      </div>

      <div className="container_v" id="about">
        <div className="con">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="content">
            <div className="name">Zenon Klaus</div>
            <p>
              Zenon Klaus. Aktor, wokalista, trener wokalny. Absolwent Akademii
              Muzycznej w Łodzi na wydziale Sztuk Scenicznych, specjalność
              Musical. Od 2017 roku obecny na polskiej scenie muzycznej i
              dramatycznej. Laureat ogólnopolskich festiwali muzycznych i
              teatralnych. Ma za sobą ponad 150 godzin kursów metodycznych w
              zakresie nauki śpiewu i pedagogiki. Od 2019 roku pracuje jako
              trener wokalny prowadząc zajęcia indywidualne i warsztaty grupowe
              z osobami w każdym wieku.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
