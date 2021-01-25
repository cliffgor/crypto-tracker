import './App.css';

import React, { useEffect, useState } from 'react'

import Coin from './Coin';
import axios from 'axios'

function App() {
  const [coins, setCoins] = useState([])
  const [ search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      
    }).catch(error => alert('You have an error' + error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // Function to filter the actual coins
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <h1>Crypto Tracker App</h1>
       <div className='coin-search'>
         <h1 className='coin-text'>Search currency</h1>
         <form>
           <input type='text' placeholder='Search'
           className='coin-input' onChange={handleChange}/>
         </form>
       </div>
       {filteredCoins.map(coin => {
         return (
           <Coin key={coin.id} name={coin.name} 
           image={coin.image} symbol={coin.symbol} 
           volume={coin.market_cap}
           price={coin.current_price} />
         )
       })}
    </div>


  );
}

export default App;
