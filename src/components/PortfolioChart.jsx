import React from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Bitcoin", "Ethereum", "Polygon", "Solana", "Doge", "Avalanche"],
  datasets: [
    {
      label: "CryptoCoins in %",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#FF8200",
        "#4666FF",
        "#663399",
        "#FF0090",
        "#D4AF37",
        "#FF2400",
      ],
      borderColor: [
        "#FF8200",
        "#4666FF",
        "#663399",
        "#FF0090",
        "#D4AF37",
        "#FF2400",
      ],
      borderWidth: 1,
    },
  ],
};

const PortfolioChart = () => {
  // Fetching the coin ID from the URL params
  const { id } = useParams();

  // Fetching market chart data for the specific coin
  const { response } = useAxios(
    `/coins/${id}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );

  // Loading state until the data is fetched
  if (!response) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-heading">
        <h3>Portfolio</h3>
        <div className="portfolio-paragraph">
          <p>Total Value</p>
          <input></input>
        </div>
      </div>
      <Pie options={options} data={data} className="portfolio-canvas" />
    </div>
  );
};

export default PortfolioChart;
