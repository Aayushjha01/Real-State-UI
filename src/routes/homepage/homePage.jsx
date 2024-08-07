import React from 'react';
import './homepage.scss';
import SearchBar from '../../components/searchBar/SearchBar';

const HomePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">

            
        <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!

          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <h6>Years of Experience</h6>
            </div>
            <div className="box">
              <h2>200</h2>
              <h6>Award Gained</h6>
            </div>
            <div className="box">
              <h2>2000+</h2>
              <h6>Property Ready</h6>
            </div>
          </div>
        </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}
export default HomePage