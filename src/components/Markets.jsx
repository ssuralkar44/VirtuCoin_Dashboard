import useAxios from "../hooks/useAxios";
import Coin from "./Coin";

const Markets = () => {

  // Fetching market data for coins using the useAxios
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  console.log(response);
  return (
    <div className="Markets-container">
      <h2>Markets</h2>
      <div className="Markets-wrapper-container">
       {/* 
          If the response exists, map through each coin in the response
          and render the Coin component passing the coin data as props.
        */}
        {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
};

export default Markets;
