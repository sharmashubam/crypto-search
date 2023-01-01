import React, { useContext } from 'react'

import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Context from '../context/Context'
const Coin = ({ coin }) => {

    const{setCoinData}= useContext(Context)
    return (
        <tr className='h-[80px] shadow-2xl rounded-xl fow-hidden' >
            <td><AiOutlineStar /></td>
            <td>{coin.market_cap_rank}</td>
            <td>
                <Link onClick={(e)=>{setCoinData(coin.id)}} to='/coin/coin-detail'  className='flex items-center'>
                    <img className='w-6 mr-2 rounded-full' src={coin.image}
                        alt={coin.id}
                    />
                    <p className='hidden  sm:table-cell'>{coin.name}</p>
                </Link>

            </td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td>
                {coin.price_change_percentage_24h > 0 ? (<p className='text-green-400'>{coin.price_change_percentage_24h.toFixed(2)}%</p>) :
                    (<p className='text-red-400'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}
            </td>
            <td className='w-[180px] hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
            <td className='w-[180px] hidden sm:table-cell' >${coin.market_cap.toLocaleString()}</td>

            <td >
                <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine color="teal" />
                </Sparklines>
            </td>
        </tr>

    )
}

export default Coin