import React from 'react';
import '../App.css';

const Fourth = () => {
  return (
    <div className="container">
      <div className='main-body'>
        <div>
          <img className='main-tab'  width="100" height="150" src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a17-en/navigation/a17-427x600_Blcak.png.thumb.webp" alt="mobile2" />
        </div>
        <div>
          <h3 className="news" >Subscribe to our Newsletter</h3>
          <p className='update' >We will update you with the latest devices, and we'll also let you know about the best you should buy.</p>
          <input type="text" placeholder='Write E-mail Here' className='textbox'  />
          <button className="submit-button">Submit</button>
        </div>
        <div>
          <img className='oppo'  width="100" height="150" src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation/reno-series/reno3/4g/Reno3-Lisa4G-navigation-Black-v2.png.thumb.webp" alt="mobile2" />
        </div>
      </div>
    </div>
  )
}

export default Fourth;
