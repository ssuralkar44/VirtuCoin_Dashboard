import React from 'react'

const ExchangeCoins = () => {
  return (
    <div className='exchange-container'>
    <div className='exchange-heading-container'>
    <h4>Exchange Coins</h4>
    <p>Enter Value</p>
    </div>
    <div className='buy-container'>
    
      <span>Buy</span>
      <select>
        <option value="bitcoin" id="bitcoin">Bitcoin</option>
        <option value="ethereum" id="ethereum">Ethereum</option>
        <option value="tether" id="tether">Tether</option>
        <option value="bnb" id="bnb">BNB</option>
        <option value="solana" id="solana">Solana</option>
        <option value="xrp" id="xrp">XRP</option>
        <option value="usdc" id="usdc">USDC</option>
        <option value="lido stacked ether" id="lido stacked ether">Lido Stacked Ether</option>
        <option value="cardano" id="cardano">Cardano</option>
        <option value="avalanche" id="avalanche">Avalanche</option>
        <option value="doge" id="doge">Dogecoin</option>
        <option value="polkadot" id="polkadot">Polkadot</option>
        <option value="tron" id="tron">TRON</option>
        <option value="chainlink" id="chainlink">Chainlink</option>
        <option value="ton" id="ton">Toncoin</option>
      </select>
      <input placeholder='Amount'></input>
    </div>
    <div className='sell-container'>
      <span>Sell</span>
      <select>
      <option value="bitcoin" id="bitcoin">Bitcoin</option>
        <option value="ethereum" id="ethereum">Ethereum</option>
        <option value="tether" id="tether">Tether</option>
        <option value="bnb" id="bnb">BNB</option>
        <option value="solana" id="solana">Solana</option>
        <option value="xrp" id="xrp">XRP</option>
        <option value="usdc" id="usdc">USDC</option>
        <option value="lido stacked ether" id="lido stacked ether">Lido Stacked Ether</option>
        <option value="cardano" id="cardano">Cardano</option>
        <option value="avalanche" id="avalanche">Avalanche</option>
        <option value="doge" id="doge">Dogecoin</option>
        <option value="polkadot" id="polkadot">Polkadot</option>
        <option value="tron" id="tron">TRON</option>
        <option value="chainlink" id="chainlink">Chainlink</option>
        <option value="ton" id="ton">Toncoin</option>
      </select>
      <input placeholder='Amount'></input>
    </div>
    <button className='exchange-button'>Exchange</button>
    </div>
  )
}

export default ExchangeCoins