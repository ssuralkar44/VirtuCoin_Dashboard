import React from "react";
import Trending from "../components/Trending";
import Markets from "../components/Markets";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const CryptoHome = () => {
  return (
    <div className="crypto-home">
      <Trending />
      <Markets />
      <Footer />
    </div>
  );
};

export default CryptoHome;
