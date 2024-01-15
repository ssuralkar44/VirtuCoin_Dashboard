import CoinChart from "../components/CoinChart";
import ExchangeCoins from "../components/ExchangeCoins";
import MarketCap from "../components/MarketCap";
import PortfolioChart from "../components/PortfolioChart";
import Search from "../components/Search";

const CryptoDetail = () => {
  return (
    <div className="crypto-detail">
      <div className="sidebar-container">
        <MarketCap />
      </div>
      <div className="market-search-container">
        <Search />
        <div className="chart-markets-container">
          {/* Display CoinChart component for graphical representation */}
          <CoinChart />
          <div className="portfolio-exchange">
            <PortfolioChart />
            <ExchangeCoins />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CryptoDetail;
