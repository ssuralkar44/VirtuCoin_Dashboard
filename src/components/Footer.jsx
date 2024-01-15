import React from "react";
import {
  LogoIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "../Icons/Icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <br />
      <br />
      <hr />
      <div className="footer-wrapper-container">
        <LogoIcon />
        <h3>VirtuCoin</h3>
      </div>
      <div className="footer-copyright">
        <p> &copy; All rights reserved to VirtuCoin Crypto Trading Company.</p>
        <div className="footer=icon">
          <span>
            <TwitterIcon /> <InstagramIcon /> <FacebookIcon />
          </span>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footer;
