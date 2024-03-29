import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import { SearchIcon } from "../Icons/Icons";
import "bootstrap/dist/css/bootstrap.min.css";

const filterCurrencies = (coinsData, searchTerm) => {
  const coins = Array.isArray(coinsData) ? coinsData : [];

  return coins.filter((coin) => {
    const coinName = coin.name?.toLowerCase();
    const coinSymbol = coin.symbol?.toLowerCase();
    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    return coinName.includes(lowerCasedSearchTerm) || coinSymbol.includes(lowerCasedSearchTerm);
  });
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();
  const { response, error, loading } = useAxios(
    `/coins/${id}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
  );

  // Check for loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {"Coin does not exist"}</div>;
  }

  
  if (!response) {
    return <div>No data found.</div>;
  }

  console.log(response);

  const filteredCoins = filterCurrencies(response, searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    
      <div className="currency-container">
      <select name="currency" id="currency">
        <option value={id}>USD</option>
        <option value={id}>INR</option>
      </select>

      <div className="search-container">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search Cryptocurrency"
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Display filtered cryptocurrencies */}
        {filteredCoins.map((coin) => (
          <div key={coin.id}>
            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
