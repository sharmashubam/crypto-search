import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/Theme';
import Home from './pages/Home';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Account from './pages/Account'
import axios from 'axios'
import { useEffect, useState } from 'react';
import CoinPage from './pages/CoinPage';
import Context from './context/Context';
import Footer from './components/Footer';

import { Helmet } from "react-helmet";

function App() {
  const [coins, setCoins] = useState([]);
  const [coinData, setCoinData] = useState(null);
  const { pathname } = useLocation();

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true'
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  }, [url])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <ThemeProvider>

      <Helmet>
        <title>CryptoSearch</title>
        <meta name="description" content="Crypto coins information and search" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Context.Provider value={{ coinData, setCoinData }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home coins={coins} />} />

          <Route path='/signin' element={<Signin />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/account' element={<Account />} />
          <Route path='/coin/coin-detail' element={<CoinPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
