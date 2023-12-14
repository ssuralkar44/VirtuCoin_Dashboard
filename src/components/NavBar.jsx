import { LoginIcon, LogoIcon, SignupIcon } from "../Icons/Icons";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const navigate = useNavigate();
  const screenWidth = window.innerWidth;

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
        {(displayLoginIcon) || (
          <button
            type="button"
            className="btn btn-login"
            onClick={() => navigate("/LogIn")}
          >
            Log In
          </button>
        )}
        
        <div onClick={() => navigate("/SignUp")}>
          {(displaySignupIcon) || (
            <button
              type="button"
              className="btn btn-outline-signup btn-lg"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
