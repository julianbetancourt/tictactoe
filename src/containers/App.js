import React, { Component } from 'react';
import Board from './Board';
import Console from './Console';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Board />
        <Console />
      </div>
    );
  }
}

export default App;
