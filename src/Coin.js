import React from 'react'
import './Coin.css'

const Coin = ({rank, name, image, symbol, price, volume, priceChange, marketcap, lastUpdated}) => {
  return (
    <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            {/* <p>{rank}</p> */}
            <img src={image} alt='crypto' />
            <h1> {name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">Rp{price.toLocaleString()}</p>  
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
            {/* <p className="coin-marketcap">
              M Cap: ${marketcap.toLocaleString()}
            </p> */}
            {/* <p className="coin-volume">Rp{volume.toLocaleString()}</p> */}
            <p className="coin-update">
              Last Update: {lastUpdated}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Coin