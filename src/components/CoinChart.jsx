import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  // Registering necessary components with Chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );


const HistoryChart = () => {
    // Fetching the coin ID from the URL params
    const {id} = useParams();

     // Fetching market chart data for the specific coin
    const{response} = useAxios(`/coins/${id}/market_chart?vs_currency=usd&days=30`)
    
// Loading state until the data is fetched
if (!response) {
    return <div>Loading...</div>
}

 // Mapping the fetched data for use in the chart
const coinChartData = response.prices.map(value => ({ x: value[0],
    y: value[1].toFixed(2)}))

const options = {
    responsive : true
}

  // Data for the Line chart
const data = {
  labels: coinChartData.map(value => moment(value.x).format("DD MMM")),
  datasets: [ 
    {
      fill : true,
      label : id,
      data: coinChartData.map(value=>value.y),
      borderColor: 'green',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
}

// Rendering the Line chart using react-chartjs-2
  return (
    <div className='CoinChart-container'>
      <Line options={options} data={data}/>
    </div>
  )
}

export default HistoryChart