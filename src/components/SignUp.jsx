import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="SignUp-container">
      <form>
        <div className="SignUp-wrapper-container">
          <h3>Create Your Account Here</h3>
        </div>
        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Enter Your Email Id"
          name="email"
          required
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Enter Your password"
          name="password"
          required
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Confirm Your password"
          name="password"
          required
        ></input>
        <div className="button-container">
         {/* Button for signing up */}
          <button className="btn btn-success"> Sign Up</button>
          
          {/* when the user clicks on the "Already have Account" button it will redirect to the SignUp Page */}
          <button className="btn btn-secondary" onClick={()=>navigate("/LogIn")}>Already have account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;