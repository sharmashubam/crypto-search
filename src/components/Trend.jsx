import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Context from '../context/Context'
import { Link } from 'react-router-dom'

const Trend = () => {
  const url = 'https://api.coingecko.com/api/v3/search/trending'
  const [trending, setTrending] = useState([]);
  const { coinData,setCoinData } = useContext(Context)
  useEffect(() => {
    axios.get(url).then(function (response) {
      setTrending(response.data.coins)
    })
  }, [coinData])

  return (
    <div className='rounded-div my-12 py-8 text-primary'>
      <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {trending.map((items) => (
          <Link onClick={(e)=>{setCoinData(items.item.id)}} to='/coin/coin-detail'  key={items.item.id} className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-500'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex'>
                <img
                  className='mr-4 rounded-2xl'
                  src={items.item.small}
                  alt='/'
                />
                <div>
                  <p className='font-bold'>{items.item.name}</p>
                  <p>{items.item.symbol}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-4 mr-2'
                  src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                  alt='/'
                />
                <p>{items.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Trend