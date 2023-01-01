import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Footer from '../components/Footer'
import Trend from '../components/Trend'

const Home = (props) => {
  return (
    <div>
        <CoinSearch coins={props.coins}/>
        <Trend/>
    </div>
  )
}

export default Home