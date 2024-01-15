import React from "react";
import { Link } from "react-router-dom";
import { CurrencyFormat } from "../CurrencyFormat/CurrencyFormat";
import { TrendingDown, TrendingUp } from "../Icons/Icons";

const MarketCoin = ({ coin }) => {
  console.log(coin);
  return (
    // Link to the coin detail page using React Router
    <Link to={`/coin/${coin.id}`} className="marketcoin-container">
      <div className="coin-image-container">
        <div className="coin-image-wrapper">
          <img src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
        </div>
        <div className="mktcap-container">
          <p>Market Cap</p>
          {/* Show market cap of the coin using currency format function */}
          <span>{CurrencyFormat(coin.market_cap)}</span>
        </div>
        <div className="price-change-container">
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown /> //Here by using TrendingDown & TrendingUP icons shows the movement of the coin
          ) : (
            <TrendingUp /> //when coin get appreciate it shows TendingUp icon else TrendingDown icon
          )}
          <span> {coin.price_change_percentage_24h}%</span>
        </div>
      </div>
    </Link>
  );
};

export default MarketCoin;
