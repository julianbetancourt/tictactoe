import React, { Component } from 'react';

class ChooseSide extends Component {
  render() {
    return (
      <div className="choose-side">
        <h1>Choose your side</h1>
        <a href="#0" className="button">O</a>
        <a href="#0" className="button">X</a>
      </div>
    );
  }
}

export default ChooseSide;
