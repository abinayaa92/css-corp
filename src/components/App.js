import React, { Component } from 'react';
import Weather from './Weather';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Weather />
      </div>
    );
  }
}
