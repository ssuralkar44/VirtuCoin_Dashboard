import { useState, useEffect } from "react";
import { LoginIcon, SignupIcon, LogoIcon } from "../Icons/Icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth state on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

   
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // display LoginIcon and SignupIcon when the screen size of devices goes below 650px
  const displayLoginIcon = screenWidth < 650 ? <LoginIcon /> : null;
  const displaySignupIcon = screenWidth < 650 ? <SignupIcon /> : null;

  return (
    <div className="NavBar-container">
      <div className="NavBar-wrapper-container">
        <h1 onClick={() => navigate("/")}>
          <div className="LogoIcon-container">
            <LogoIcon />
          </div>
          <span>V</span>irtu<span>C</span>oin
        </h1>
      </div>
      <div className="button-container">
        {displayLoginIcon || (
          <button
            type="button"
            className="btn btn-login"
            onClick={() => navigate("/LogIn")}
          >
            Log In
          </button>
        )}

        <div onClick={() => navigate("/SignUp")}>
          {displaySignupIcon || (
            <button type="button" className="btn btn-outline-signup btn-lg">
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
