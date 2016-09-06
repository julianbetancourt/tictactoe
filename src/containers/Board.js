import React, { Component } from 'react';
import Field from '../components/Field';
import { connect } from 'react-redux';
import { markField, AIMove } from '../actions';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleFieldClick = this.handleFieldClick.bind(this);
  }
  handleFieldClick(e) {
    const row = e.target.id.slice(0,1);
    const col = e.target.id.slice(2);
    this.props.markField(row, col);

    let AIID = setTimeout(() => {
      this.props.AIMove();
      clearTimeout(AIID);
    }, 300);
  }
  render() {
    const { board } = this.props;
    return (
      <div className="board">
        {
          board.map((row, i1) => {
            return row.map((field, i2) => {
              return <Field onClick={this.handleFieldClick} field={field} key={i1+i2} id={`${i1}_${i2}`}/>
            })
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.ticTacToe.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markField: (row, col) => dispatch(markField(row, col)),
    AIMove: () => dispatch(AIMove())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
