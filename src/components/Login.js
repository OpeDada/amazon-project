import React from "react";
import { auth } from '../firebase'
import { Link } from "react-router-dom";
import "../assets/stylesheets/Login.css";

function Login() {

  const [useremail, setUserEmail] = useState('')
  comst [userpassword, setUserPassword] = usestate('')

  const loginuser = event => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
  }
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
          <input type="email" placeholder="Email" />
          <h5>Password</h5>
          <input type="password" placeholder="Password" />
          <button onClick={loginuser} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>By signing in, you agree to Amazon's Terms and Conditions</p>
        <button className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
