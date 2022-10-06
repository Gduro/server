import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const  { user }  = UserAuth();
  console.log("user -> "+ user);
  if (!user) {
    return <Navigate to="/signin" />;
  }
  // return console.log(user)
  return children;
};

export default ProtectedRoute;
