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

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if Login and Signup icons should be displayed based on screen width
  const displayLoginIcon = screenWidth < 450 ? <LoginIcon /> : null;
  const displaySignupIcon = screenWidth < 450 ? <SignupIcon /> : null;

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
