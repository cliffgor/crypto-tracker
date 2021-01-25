import './App.css';

import React, { useEffect, useState } from 'react'

import axios from 'axios'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      
    }).catch(error => alert('You have an error' + error))
  }, [])

  return (
    <div className="coin-app">
      <h1>Crypto Tracker App</h1>
       <div className='coin-search'>
         <h1 className='coin-text'>Search currency</h1>
         <form>
           <input type='text' placeholder='Search'
           className='coin-input'/>
         </form>
       </div>
       
    </div>


  );
}

export default App;
