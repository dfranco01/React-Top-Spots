import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopSpots from './TopSpots';

const App = () => {
  const [topspots, setTopspots] = useState([]);

  //useEffect is a React hook that runs side effects in React components
  //using empty empty array as 2nd arg ensures effect runs once, when component first mounted
  useEffect(() => {
    axios
      //sending GET request to specified URL
      //data extracted from response object the passed in to setter function
      .get('https://ccc.helloworldbox.com/items/top_spots')
      .then(response => response.data.data)
      .then(data => setTopspots(data));
  }, []);

  return (
    <>
      {/*Tying it all together and displaying TopSpots data */}
      <div className='container'>
        <header>
          <h1 className='text-center'>San Diego Top Spots</h1>
          <p className='text-center'>A list of the top 30 places to see in San Diego, California</p>
        </header>
        <div>
            <div>
              <TopSpots spots={topspots}/>
            </div>
        </div>
      </div>

    </>
  );
};


export default App
