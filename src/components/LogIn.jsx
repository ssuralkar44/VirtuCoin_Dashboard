import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const LogIn = () => {

  const navigate = useNavigate();

  return (
    <div className="LogIn-container">
      <form>
        <div className="LogIn-wrapper-container">
          <h2>Log In Here</h2>
        </div>
        <label for="email">Email</label>
        <input
          type="email" id="email"
          placeholder="Enter Your Email Id"
          name="email"
          required
        ></input>
        <label for="password">Password</label>
        <input
          type="password" id="password"
          placeholder="Enter Your password"
          name="password"
          required
        ></input>
        <a href="Forgot password">Forgot password</a>
        <div className="button-container">
          <button type="submit" className="btn btn-success" onClick={() => navigate("/CryptoHome")}>Log In</button>
          <button className="btn btn-secondary"onClick={() => navigate("/SignUp")}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;