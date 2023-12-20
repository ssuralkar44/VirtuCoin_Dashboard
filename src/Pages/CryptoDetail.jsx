
import CoinChart from '../components/CoinChart';
import CoinDetail from '../components/CoinDetail';


const CryptoDetail = () => {
  return (
    <div className='crypto-detail'>
     {/* Display CoinChart component for graphical representation */}
      <CoinChart/>
      {/* Display CoinDetail component for detailed cryptocurrency information */}
      <CoinDetail/>
    </div>
  )
}

export default CryptoDetail
