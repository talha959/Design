// Compare.js
import React, { useEffect, useState } from 'react';
import './Compare.css'; // Import the CSS file

const Compare = () => {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const jsonData = await response.json();
      setFake(jsonData);
    };

    fakestore();
  }, []);

  return (
    <div className="compare-container"> {/* Changed class name here */}
      {fake.map((value) => (
        <React.Fragment key={value.id}>
            <div className='box'>
        <img src={value.images} alt='logo'/>
          <p className="title">{value.title}</p>
          <p className="price">${value.price}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Compare;
