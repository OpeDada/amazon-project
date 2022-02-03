import React from "react";
import "../assets/stylesheets/Login.css"

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign In</h1>
        <form autoComplete="off">
          <h5>Email</h5>
          <input type="email" placeholder="Email" />
          <h5>Password</h5>
          <input type="password" placeholder="Password" />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>By signing in, you agree to Amazon's Terms and Conditions</p>
      </div>
    </div>
  );
}

export default Login;
