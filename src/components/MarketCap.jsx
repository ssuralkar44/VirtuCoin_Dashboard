import useAxios from "../hooks/useAxios";
import MarketCoin from "./MarketCoin";

const MarketCap = () => {
  // Fetching market data for coins using the useAxios
  const { response } = useAxios(
    `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en`
  );
  console.log(response);
  return (
    <div className="marketcap-wrapper">
      <h4>CRYPTOCURRENCY BY MARKETCAP</h4>
      <div className="marketcap-wrapper-container">
        {/* 
          If the response exists, map through each coin in the response
          and render the Coin component passing the coin data as props.
        */}
        {response &&
          response.map((coin) => <MarketCoin key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
};

export default MarketCap;
