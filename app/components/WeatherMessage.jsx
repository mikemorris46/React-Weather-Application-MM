import React, { Component } from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>The temperature in {location} is {temp} °C</h3>
    </div>
  );
};

export default WeatherMessage;
