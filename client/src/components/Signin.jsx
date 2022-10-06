import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./signin.css";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/account");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="allform">
      <form className="form" onSubmit={handleSubmit}>
        <div className="card_log">
          <h1 className="main_text">Zaloguj się!</h1>
          <p className="second">logowanie do panelu administratora</p>
          <div className="input-container ic1">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              className="input"
            />
            <div className="cut cut-short"></div>

            <label for="email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2 ">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="input"
              id="password"
            />
            <div className="cut cut-short"></div>

            <label for="password" className="placeholder">
              Hasło
            </label>
          </div>

          <button className="submit ic2">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
