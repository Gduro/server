import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      navigate("/account");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Sign up to your account</h1>
        <p>
          Already have an account yet?
          <br />
          <Link to="/signin">Sign in.</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Adress</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="email"
          />
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
