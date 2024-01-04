import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";


const LogIn = () => {

   // Accessing the navigate function from useNavigate
  const navigate = useNavigate();

  return (
    <div className="LogIn-container">
      <form>
        <div className="LogIn-wrapper-container">
          <h2>Log In Here</h2>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email" id="email"
          placeholder="Enter Your Email Id"
          name="email"
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password" id="password"
          placeholder="Enter Your password"
          name="password"
          required
        ></input>
        <a href="Forgot password">Forgot password</a>
        <div className="button-container">

        {/* when the user clicks on the "Already have Account" button it will redirect to the LogIn Page */}
          <button type="submit" className="btn btn-success" onClick={() => navigate("/CoinChart")}>Log In</button>
          
          {/* when the user clicks on the "Already have Account" button it will redirect to the SignUp Page */}
          <button className="btn btn-secondary"onClick={() => navigate("/SignUp")}>Sign Up</button>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default LogIn;