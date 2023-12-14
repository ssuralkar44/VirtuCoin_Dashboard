import React from 'react';
import Trending from '../components/Trending';
import Markets from '../components/Markets';


const CryptoHome = () => {
  return (
    <div className='crypto-home'>
     <Trending/>
     <Markets/>
    </div>
  )
}

export default CryptoHome
