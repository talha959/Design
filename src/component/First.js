// First.js
import React from 'react';
import '../App.css';
import { FaCartShopping } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="main-container">
      <div className="logo">
        <img className="image" src="download (4).png" alt="logo" />
        <h3>Mobile Base</h3>
      </div>
      <div className="nav-links">
        <div className="home">
          <b>
            <Link to="/">Home</Link>
          </b>
        </div>
        <div className="buy">
          <Link to="/Compare">Compare</Link>
        </div>
        <div className="compare">
          <Link to="/Phones">Phones</Link>
        </div>
        <div className="icons">
          <FaCartShopping />
        </div>
        <div className="icons">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default First;
