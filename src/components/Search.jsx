import React from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
import { useState } from "react";
import { SearchIcon } from '../Icons/Icons';
import "bootstrap/dist/css/bootstrap.min.css";


const filterCoincurrencies = (coinsData, searchTerm) => {
    const coins = Array.isArray(coinsData) ? coinsData : [];
  
    return coins.filter((coin) => {
      // Ensure coin is defined and contains expected properties before accessing them
      if (coin && coin.name && coin.symbol) {
        return (
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return false; // Exclude undefined or improperly structured coin objects
    });
  };


const Search = () => {
    const { id } = useParams();   // Extracting the 'id' parameter from the URL using useParams
    // Fetching market data for coins using the useAxios
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );
  console.log(response);
    // Assuming the fetched cryptocurrency data is stored in state as 'cryptos'
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredCoins = filterCoincurrencies(response, searchTerm);

  
    return (
      <div className='search-container'>
      <div className='search-icon'>
      <SearchIcon/>
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
            {/* Display other relevant data */}
          </div>
        ))}
      </div>
    );
  };


export default Search
