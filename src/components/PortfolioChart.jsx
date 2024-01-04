import React from 'react';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Bitcoin', 'Ethereum', 'Polygon', 'Solana', 'Doge', 'Avalanche'],
    datasets: [
      {
        label: 'CryptoCoins in %',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#FF8200',
          '#4666FF',
          '#663399',
          '#FF0090',
          '#D4AF37',
          '#FF2400',
        ],
        borderColor: [
          '#FF8200',
          '#4666FF',
          '#663399',
          '#FF0090',
          '#D4AF37',
          '#FF2400',
        ],
        borderWidth: 3,
      },
    ],
  };

  

const PortfolioChart = () => {
 // Fetching the coin ID from the URL params
 const { id } = useParams();

 // Fetching market chart data for the specific coin
 const { response } = useAxios(
   `coins/bitcoin?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
 );

 // Loading state until the data is fetched
 if (!response) {
   return <div>Loading...</div>;
 }



 const options = {
   responsive: true,
 };


  return (
    <div className='portfolio-container'>
    <h3>Portfolio</h3>
      <Pie options={options} data={data} />;
    </div>
  )
}

export default PortfolioChart
