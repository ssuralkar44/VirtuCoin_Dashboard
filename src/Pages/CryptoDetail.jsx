import CoinChart from "../components/CoinChart";
import CoinDetail from "../components/CoinDetail";
import Footer from "../components/Footer";
import PortfolioChart from "../components/PortfolioChart";
import Search from "../components/Search";

const CryptoDetail = () => {
  return (
    <div className="crypto-detail">
      <Search />
      {/* Display CoinChart component for graphical representation */}
      <CoinChart />
      <PortfolioChart/>
      {/* Display CoinDetail component for detailed cryptocurrency information */}
      <CoinDetail />
      <Footer/>
    </div>
  );
};

export default CryptoDetail;
