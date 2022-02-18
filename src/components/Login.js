import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "../assets/stylesheets/Login.css";

function Login() {
  const navigate = useNavigate();
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const logInUser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const signUpUser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form autoComplete="off">
          <h5>Email</h5>
          <input
            value={useremail}
            onChange={(event) => setUserEmail(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <h5>Password</h5>
          <input
            value={userpassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <button
            onClick={logInUser}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>By signing in, you agree to Amazon's Terms and Conditions</p>
        <button onClick={signUpUser} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
