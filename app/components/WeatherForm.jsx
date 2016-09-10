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
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <div>
            <input type="search" ref="location" placeholder="Search Weather by city" />
          </div>
          <div>
            <button className="hollow button expanded">
              Get Weather
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default WeatherForm;
