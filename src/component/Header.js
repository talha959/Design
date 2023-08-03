import React from 'react'
import './App.css';
const Header = () => {
  return (
    <div>
      <table className="main-table">
        <tr>
          <td>
            <img style={{paddingLeft:'50px' }} className="image" src="download (4).png" alt="logo" />
          </td>
          <td>
            <h3>Mobile Base</h3>
          </td>
          <td className="home">
            <b>Home</b>
          </td>
          <td className="buy">
            Buy Phones
          </td>
          <td className="compare">
            Compare Phones
          </td>
          <td style={{paddingLeft:'10px'}}>
          <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/add-shopping-cart.png" alt="add-shopping-cart"/>
          </td>
          <td style={{paddingLeft:'10px'}}>
          <img width="20" height="20" src="https://img.icons8.com/ios/20/search--v1.png" alt="search--v1"/>
          </td>
        </tr>
        <br/>
      </table>
    </div>
  )
}

export default Header
