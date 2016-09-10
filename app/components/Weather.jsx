import React, { Component } from 'react';

import WeatherMessage from 'WeatherMessage';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  };

  handleSearch(location) {
    let that = this;

    this.setState({ isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({ isLoading: false });
      alert(errorMessage);
    });
  };

  render() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    };

    return (
      <div>
        <h1 className="text-center">Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    );
  }
};

export default Weather;
