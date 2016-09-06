import * as types from './actionTypes';

export const markField = (row, col) => {
  return {
    type: types.MARK_FIELD,
    row,
    col
  }
}

export const AIMove = () => {
  return {
    type: types.AI_MOVE
  }
}

export const clearBoard = () => {
  return {
    type: types.CLEAR_BOARD
  }
}
