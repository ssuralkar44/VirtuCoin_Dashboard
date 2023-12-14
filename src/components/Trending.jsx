import Skeleton from "react-loading-skeleton";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

const Trending = () => {
    const {response} = useAxios('search/trending');
    console.log(response);
  return (
    <div className='Trending-wrapper-container'>
      <h2>Trending</h2>
      <div className="Trending-container">

      {/* In this coin Trending section showed top 7 trending coins by Map method and also used react hooks useAxios */}
      {response && response.coins.map(coin => <CoinTrending key = {'coin.item.coin_id'} coin= {coin.item}/> )} <Skeleton count ={7}/>
      </div>
    </div>
  )
}

export default Trending