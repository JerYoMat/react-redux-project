import React from 'react';
import './Home.css';
import Search from '../components/Search';
import { ReactComponent as StockTrend } from '../images/test.svg'



function Home() {
    return (
    <React.Fragment>
      <div className='wrapper'>
        <StockTrend className='stock-trend'/>
      </div>
      <Search className='search-bar'/>
    </React.Fragment>
    )
}

export default Home;