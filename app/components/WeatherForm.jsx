import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onFormSubmit(event) {
    event.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  };

  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter city name" />
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
}

export default WeatherForm;
