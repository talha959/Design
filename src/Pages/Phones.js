// Phones.js
import React, { useEffect, useState } from 'react';
import './Compare.css'; // Import the CSS file

const Phones = () => {
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
    <div className="compare-container"> {/* Changed class name here */}
      {fake.map((value) => (
        <React.Fragment key={value.id}>
            <div className='box'>
          <p className="title">{value.name}</p>
          {/* <p className="price">{value.image}</p> */}
          <img src={value.image} alt='images'/>
          created At<p>{value.creationAt}</p>
          updated At<p>{value.updatedAt}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Phones;
