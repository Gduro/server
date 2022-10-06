import React, { Component } from "react";
import "./contact.css";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { RiFacebookCircleLine, RiYoutubeLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="tag__3" id="galeria">
        <h1 className="">Kontakt</h1>
      </div>

      <div className="contain4">
        <div className="con1 t cona">
          <a href="https://www.instagram.com/zenonklaus/?igshid=YmMyMTA2M2Y=">
            <BsInstagram className="cona w"></BsInstagram>
          </a>
        </div>
        <div className="con2 t cona">
          <a href="mailto:zenon.klaus.art@gmail.com">
            <FiMail className="cona w"></FiMail>
          </a>
        </div>
        <div className="con3 t cona">
          <a
            href=" https://www.facebook.com/zenon.klaus
"
          >
            <RiFacebookCircleLine className="cona w"></RiFacebookCircleLine>
          </a>
        </div>
        <div className="con4 t cona">
          <a href="https://www.youtube.com/channel/UCxveLmbJglH70XoEiQPeFGg">
            <RiYoutubeLine className="cona w"></RiYoutubeLine>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
