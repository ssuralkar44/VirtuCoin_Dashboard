import useAxios from "../hooks/useAxios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
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
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Registering necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  // Fetching the coin ID from the URL params
  const { id: defaultId } = useParams();
  const [id, setId] = useState(defaultId);
  const [chartType, setChartType] = useState("Select Chart");
  const [timeFrame, setTimeFrame] = useState("30");
  const [coinChartData, setCoinChartData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(defaultId);

  useEffect(() => {
    setId(selectedCurrency);
  }, [selectedCurrency]);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  // Fetching market chart data for the specific coin
  const { response } = useAxios(
    `/coins/${selectedCurrency}/market_chart?vs_currency=usd&days=${timeFrame}`
  );

  useEffect(() => {
    if (response) {
      const formattedData = response.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      setCoinChartData(formattedData);
    }
  }, [response, timeFrame, selectedCurrency]);

  if (!response) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
  };

  // Data for the Line chart
  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("DD MMM")),
    datasets: [
      {
        fill: true,
        label: selectedCurrency,
        data: coinChartData.map((value) => value.y),
        borderColor: "#138808",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const handleChartChange = (e) => {
    setChartType(e.target.value);
  };

  const handleTimeFrameChange = (days) => {
    setTimeFrame(days.toString()); // Convert days to string if necessary
    setSelectedCurrency(id);
  };

  const ChartComponent = chartType === "line" ? Line : Bar;

  // Rendering the Line chart using react-chartjs-2
  return (
    <div className="Chart-container">
      <div className="Dropdown-container">
        <div className="button-chart-container">
          <button onClick={() => handleTimeFrameChange(1)}>1D</button>
          <button onClick={() => handleTimeFrameChange(7)}>1W</button>
          <button onClick={() => handleTimeFrameChange(30)}>1M</button>
          <button onClick={() => handleTimeFrameChange(180)}>6M</button>
          <button onClick={() => handleTimeFrameChange(365)}>1Y</button>
        </div>
        <select
          name="currency"
          id="cryptoCoin"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="">Select a Cryptocurrency</option>
          <option value="bitcoin" id="bitcoin">
            Bitcoin
          </option>
          <option value="ethereum" id="ethereum">
            Ethereum
          </option>
          <option value="tether" id="tether">
            Tether
          </option>
          <option value="bnb" id="bnb">
            BNB
          </option>
          <option value="solana" id="solana">
            Solana
          </option>
          <option value="xrp" id="xrp">
            XRP
          </option>
          <option value="usdc" id="usdc">
            USDC
          </option>
          <option value="lido stacked ether" id="lido stacked ether">
            Lido Stacked Ether
          </option>
          <option value="cardano" id="cardano">
            Cardano
          </option>
          <option value="avalanche" id="avalanche">
            Avalanche
          </option>
          <option value="doge" id="doge">
            Dogecoin
          </option>
          <option value="polkadot" id="polkadot">
            Polkadot
          </option>
          <option value="tron" id="tron">
            TRON
          </option>
          <option value="chainlink" id="chainlink">
            Chainlink
          </option>
          <option value="ton" id="ton">
            Toncoin
          </option>
        </select>
        <select
          name="chart"
          id="chart"
          value={chartType}
          onChange={handleChartChange}
        >
          <option disabled>Select Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
        </select>
      </div>
      <div className="CoinChart-container">
        <ChartComponent
          options={options}
          data={data}
          className="coinchart-canvas"
        />
      </div>
    </div>
  );
};

export default HistoryChart;
