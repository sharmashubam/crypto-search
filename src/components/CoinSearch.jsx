import React, { useState } from 'react'
import Coin from './Coin'

const CoinSearch = ({ coins }) => {
const[search,setSearch] =useState('')
  return (
    <div className='rounded-div my-4 '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form>
          <input onChange={(e)=>{setSearch(e.target.value)}}
           className='w-full bg-primary px-4 py-2 border border-input rounded-md shadow-xl'
           type='text' placeholder='search ...' />
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4 '>#</th>
            <th></th>
            <th className='text-left'>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden md:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins?.filter((value)=>{
            if(search==''){
            return(value);
            }
            if(
              value.name.toLowerCase().includes(search.toLowerCase())
            ){
              return value;
            }
          }).map(function (coin) {
            return (
              <Coin key={coin.id} coin={coin}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch