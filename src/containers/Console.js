import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearBoard } from '../actions';

class Console extends Component {
  render() {
    const { winner, clearBoard, turn } = this.props;
    return (
      <div className="console">
        <span>
          {winner !== null ? <button onClick={() => clearBoard()} className="restart">Restart</button> : turn ? 'AI\'s Turn' : 'Your Turn'}
        </span>
        <span>{winner === 1 ? "AI Won!" : winner === 0 ? "You Won!" : winner === -1 ? "Tie!" : ""}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    winner: state.ticTacToe.winner,
    turn: state.ticTacToe.myMove
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearBoard: () => dispatch(clearBoard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);
