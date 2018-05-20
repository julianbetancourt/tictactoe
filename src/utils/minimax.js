/*
  This is a Minimax Algorithm Implementation
  written by Vivek Panyam,
  original source and explanation can be found at
  https://blog.vivekpanyam.com/how-to-build-an-ai-that-wins-the-basics-of-minimax-search/
*/


let numNodes = 0;

export function getWinner(board) {

    // Check if someone won
    let vals = [true, false];
    var allNotNull = true;
    for (var k = 0; k < vals.length; k++) {
        var value = vals[k];

        // Check rows, columns, and diagonals
        var diagonalComplete1 = true;
        var diagonalComplete2 = true;
        for (var i = 0; i < 3; i++) {
            if (board[i][i] !== value) {
                diagonalComplete1 = false;
            }
            if (board[2 - i][i] !== value) {
                diagonalComplete2 = false;
            }
            var rowComplete = true;
            var colComplete = true;
            for (var j = 0; j < 3; j++) {
                if (board[i][j] !== value) {
                    rowComplete = false;
                }
                if (board[j][i] !== value) {
                    colComplete = false;
                }
                if (board[i][j] == null) {
                    allNotNull = false;
                }
            }
            if (rowComplete || colComplete) {
                return value ? 1 : 0;
            }
        }
        if (diagonalComplete1 || diagonalComplete2) {
            return value ? 1 : 0;
        }
    }
    if (allNotNull) {
        return -1;
    }
    return null;
}

export const recurseMinimax = (board, player) => {
  numNodes++;
  let winner = getWinner(board);
  if (winner != null) {
    switch (winner) {
      case 1:
        return [1, board];
      case 0:
        return [-1, board];
      case -1:
        return [0, board];
      default:
        return;
    }
  } else {
    let nextVal = null;
    let nextBoard = null;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[i][j] == null) {
          board[i][j] = player;
          let value = recurseMinimax(board, !player)[0];
          if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
            nextBoard = board.map(arr => {
              return arr.slice();
            });
            nextVal = value;
          }
          board[i][j] = null;
        }
      }
    }
    return [nextVal, nextBoard];
  }
}

export function minimaxMove(board) {
  numNodes = 0;
  return recurseMinimax(board, true)[1];
}
