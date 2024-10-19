// HomePage.jsx
import React from 'react';
import "./homePage.scss";
import SearchBar from '../components/navbar/searchbar/SearchBar';

const HomePage = () => {
  const statistics = [
    {
      number: "16+",
      label: "Years of Experience"
    },
    {
      number: "200",
      label: "Award Gained"
    },
    {
      number: "2000",
      label: "Property Ready"
    }
  ];

  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque hic 
            mollitia quam, earum dolor repudiandae dolorum nesciunt, perspiciatis 
            quisquam fugiat.
          </p>
          <SearchBar />
          <div className="statistics">
            {statistics.map((stat, index) => (
              <div className="stat-box" key={index}>
                <h2 className="stat-number">{stat.number}</h2>
                <h3 className="stat-label">{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Real Estate Property" />
      </div>
    </div>
  );
}

export default HomePage;