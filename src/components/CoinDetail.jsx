import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!response) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CoinDetail-container">
      <img src={response.image.small} alt={response.name} />
      <h1>{response.name}</h1>
      <p>{response.description.en}</p>
    </div>
  );
};

export default CoinDetail;