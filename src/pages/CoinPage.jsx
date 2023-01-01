import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import DOMPurify from 'dompurify'

import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import Context from '../context/Context';


const CoinPage = () => {
  const{coinData}= useContext(Context)

  const url = `https://api.coingecko.com/api/v3/coins/${coinData}?localization=false&sparkline=true`
  const [detail, setDetail] = useState(null);
  
  useEffect(() => {
    if(coinData){
      axios.get(url).then((response) => {
        setDetail(response.data)
      })
    }
    
  }, [coinData])
  // console.log(detail)

  return (
    <div className='rounded-div my-12 py-8'>
      <div className='flex py-8'>
        <img className='w-20 mr-8' src={detail?.image?.large} alt='/' />
        <div>
          <p className='text-3xl font-bold'>{detail?.name} price</p>
          <p>({detail?.symbol?.toUpperCase()} USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8 px-4'>
        <div>
          <div className='flex justify-between'>
            {detail?.market_data?.current_price ? (
              <p className='text-3xl font-bold'>${detail?.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={detail?.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {detail?.market_data?.market_cap ? (
                <p>${detail?.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Volume (24h)</p>
              {detail?.market_data?.market_cap ? (
                <p>${detail?.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>24h High</p>
              {detail?.market_data?.high_24h ? (
                <p>${detail?.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>24h Low</p>
              {detail?.market_data?.low_24h ? (
                <p>${detail?.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className='text-xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {detail?.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
              {detail?.hashing_algorithm ? <p>{detail?.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust Score</p>
              {detail?.tickers ? <p>{detail?.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (7d)</p>
              {detail?.market_data ? (
                <p>{detail?.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (14d)</p>
              {detail?.market_data ? (
                <p>
                  {detail?.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (30d)</p>
              {detail?.market_data ? (
                <p>
                  {detail?.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (60d)</p>
              {detail?.market_data ? (
                <p>
                  {detail?.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (1y)</p>
              {detail?.market_data ? (
                <p>{detail?.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-start gap-6 cursor-pointer p-4 text-accent'>
            <FaTwitter size={20} />
            <FaFacebook size={20} />
            <FaReddit size={20} />
            <FaGithub size={20} />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='py-4'>
        <p className='text-xl font-extrabold'>About {detail?.name}</p>
        <p className='px-2 md:px-2 font-semibold' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detail?.description ? detail?.description.en : ''), }} ></p>
      </div>
    </div>
  )
}

export default CoinPage