import React from 'react';
import './Home.css';
import Search from '../components/Search';


function Home() {
  return (
    <div class="wrapper">
      <div class="sliding-background">
        <Search className='search-bar' />
      </div>
    </div>
    )
}

export default Home;