import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { getWinner, minimaxMove } from '../utils/minimax';

const ticTacToe = (state = initialState, action) => {
  switch (action.type) {
    case types.MARK_FIELD:
      let nextBoard = state.board.slice(0);
      nextBoard[action.row][action.col] = state.player;
      return Object.assign({}, state, {
        board: nextBoard,
        winner: getWinner(nextBoard),
        myMove: true
      });
    case types.CLEAR_BOARD:
      return Object.assign({}, state, {
        board: [[null,null,null],[null,null,null],[null,null,null]],
        winner: null,
        myMove: false
      })
    case types.AI_MOVE:
      nextBoard = state.board.slice(0);
      nextBoard = minimaxMove(nextBoard);
      return Object.assign({}, state, {
        board: nextBoard,
        myMove: false,
        winner: getWinner(nextBoard)
      })
    default:
      return state;
  }
}

export default ticTacToe;
