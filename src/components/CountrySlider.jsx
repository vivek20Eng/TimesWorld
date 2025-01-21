// src/components/CountrySlider.jsx
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CountrySlider = ({ countries }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {countries.map((country) => (
        <Carousel.Item key={country.name}>
          <img
            className="d-block w-100"
            src={country.flag}
            alt={country.name}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{country.name}</h3>
            <p>{country.region}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CountrySlider;