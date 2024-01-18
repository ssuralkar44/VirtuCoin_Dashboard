import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogoIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "../Icons/Icons";
import "bootstrap/dist/css/bootstrap.min.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const LogIn = () => {
  // Accessing the navigate function from useNavigate
  const navigate = useNavigate();

  const{ email, setEmail}= useState("");
  const{ password, setPassword}= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {

      navigate("/Coin");
    } else{
        alert("Invalid Email or Password");
      }
  };

  return (
    <div className="LogIn-container">
      <form onSubmit={handleSubmit}>
        <div className="LogIn-wrapper-container">
          <h2>Log In Here</h2>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email Id"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your password"
          name="password"
          value= {password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <a href="Forgot password">Forgot password</a>
        <div className="button-container">
          {/* when the user clicks on the "Log In" button it will redirect to the "Coin" Page */}
          <button
            type="submit"
            className="btn btn-success"
          >
            Log In
          </button>

          {/* when the user clicks on the "Sign Up" button it will redirect to the SignUp Page */}
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/SignUp")}
          >
            Sign Up
          </button>
        </div>
        <hr/>  
        <div className="login-footer-wrapper">
        <LogoIcon />
        <h3>VirtuCoin</h3>
      </div>
      <div className="login-footer-copyright">
        <p> &copy; All rights reserved to VirtuCoin Crypto Trading Company.</p>
          <span>
            <TwitterIcon /> <InstagramIcon /> <FacebookIcon />
          </span>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
