import React, { Component } from "react";
import { Link } from "react-router-dom";
const Hombtn = (props) => {
  return (
    <>
      <Link to="/"> {props.name} </Link>
    </>
  );
};

export default Hombtn;
