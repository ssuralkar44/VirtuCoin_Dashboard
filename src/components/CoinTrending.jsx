import {Link} from 'react-router-dom';

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className='CoinTrending-main-container'>
      <div className="CoinTrending-container">
        <div className="CoinTrending-wrapper-container">
          <span>{coin.score + 1}.</span>
          <img src={coin.small} alt={coin.name} />
          <p>{coin.name}</p>
          <small>({coin.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;