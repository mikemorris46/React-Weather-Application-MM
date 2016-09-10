import React, { Component } from 'react';

import WeatherMessage from 'WeatherMessage';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';

import ErrorModal from 'ErrorModal';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  };

  handleSearch(location) {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  };

  render() {
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    };

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal title="Search Failed" message={errorMessage}/>
        )
      }
    };

    return (
      <div>
        <h1 className="text-center">Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
};

export default Weather;
