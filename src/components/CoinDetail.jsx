import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
  const { id } = useParams();   // Extracting the 'id' parameter from the URL using useParams

  // Fetching detailed information about the specific coin using useAxios
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  // If response is not available yet, display a loading message
  if (!response) {
    return <div>Loading...</div>;
  }

  // Displaying detailed information about the coin once response is available
  return (
    <div className="CoinDetail-container">
      
    </div>
  );
};

export default CoinDetail;