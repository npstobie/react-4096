import React from 'react';
import Board from './Board'
import Score from './Score'

export default class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      boardHistory: [initialBoard],
      score: 0
    }
  }

  
  render() {
    return (
      <div>
        <Board
          board={this.state.boardHistory[this.state.boardHistory.length - 1]}
        />
        <Score
          score={this.state.score}
        />
      </div>
    )
  }
}

// creates the inital board and randomly places two 2s on the board
let initialBoard = [];
for (let x=0; x<4; x++) {
  initialBoard.push([]);
  for (let y=0; y<4; y++) {
    initialBoard[x].push({value: null, 'background-color': 'white'})
  }
}
initialBoard = addValueToBoard(initialBoard, true);
initialBoard = addValueToBoard(initialBoard, true);

function addValueToBoard(board, first) {
  let availableSquares = [];
  
  // finds all open squares to place new value on
  for (let x=0; x<board.length; x++) {
    for (let y=0; y<board[x].length; y++) {
      if (board[x][y].value === null) {
        availableSquares.push([x,y])
      }
    }
  }
  
  // generates a random index based on the length of the array holding available positions
  const randomIdx = Math.round(Math.random() * (availableSquares.length - 1));
  const position = availableSquares[randomIdx];
  // the new value will either be 2 or 4, 75% of the time it will be 2, 25% of the time it will be 4
  const twoOrFour = Math.round(Math.random() * 3);
  
  let newVal 
  // the first two values added to the empty board on game initialization must be 2
  if (first) {
    newVal = 2
  } else {
    newVal = twoOrFour === 3 ? 4 : 2;
  }
  
  board[position[0]][position[1]].value = newVal;
  return board;
}