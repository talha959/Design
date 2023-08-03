// Explore.js
import React, { useEffect, useState } from 'react';
import './Compare.css'; // Import the CSS file

const Explore = () => {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/categories");
      const jsonData = await response.json();
      setFake(jsonData);
    };

    fakestore();
  }, []);

  return (
    <div className="Explore-container"> {/* Changed class name here */}
      {fake.map((value) => (
        <React.Fragment key={value.id}>
            <div className='box'>
          <p className="title">{value.title}</p>
          <p className="price">${value.price}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Explore;
