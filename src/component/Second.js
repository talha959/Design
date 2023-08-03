import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Second = () => {
  return (
    <div className="container">
      <div className="main-head">
        <b>
          <h1 className='head' >Buy the Best Phones</h1>
        </b>
        <h1 className='secondhead' >It's always difficult to decide which phone to buy, so we can make it easier for you.</h1>
        <div className='thirdhead'>
        <button className='button' ><Link to='/Findout'>Find out how</Link></button>
        <button className='explore' ><Link to='/Explore'>Explore us</Link></button>
        </div>
      </div>
      <div className="phone-container">
        <img className="phone" src="download.jpeg" alt="phone" />
      </div>
      <div className="list-container">
        <div className="list">
          <div>
            <img className='emoji' width="20" height="20" src="https://img.icons8.com/emoji/48/battery-emoji.png" alt="battery-emoji" />&nbsp; 4500mAH
          </div>
          <div>
            <img className='emoji' width="20" height="20" src="https://img.icons8.com/nolan/20/micro-sd.png" alt="micro-sd" />&nbsp; 128 GB
          </div>
          <div>
            <img className='emoji' width="16" height="16" src="https://img.icons8.com/color/16/smartphone-ram.png" alt="smartphone-ram" />&nbsp;&nbsp; SnapDragon
          </div>
          <div className='padding'>
            <img width="20" height="20" src="https://img.icons8.com/plasticine/20/ruler.png" alt="ruler" />&nbsp; 6.7''
          </div>
          <div className='padding'>
            48MP+50M+8MP
          </div>
          <div className='padding'>
            16 MP
          </div>
          <div className='padding'>
            8GB RAM
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second;
