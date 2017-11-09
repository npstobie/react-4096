import React from 'react';
import Board from './Board'
import Score from './Score'
import StepBack from './StepBack'
import GameOverModal from './GameOverModal'
import _ from 'lodash';
import Hammer from 'hammerjs';
// import $ from 'jquery'
// bootstrap requires jquery globally, was causing a webpack error importing it as seen above
declare var $: $;

export default class Game extends React.Component {

  constructor() {
    super();

    this.state = {
      boardHistory: [initialBoard],
      score: [0]
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  startNewGame() {
    this.setState({
      boardHistory: this.state.boardHistory.slice(0,1),
      score: this.state.score.slice(0,1)
    })
  }

  handleStepback() {
    this.setState({
      boardHistory: this.state.boardHistory.slice(0, this.state.boardHistory.length - 1),
      score: this.state.score.slice(0, this.state.score.length - 1)
    })
  }

  handleKeyPress(event) {
    let board = this.state.boardHistory[this.state.boardHistory.length - 1].slice();
    let points = 0;
    let newBoard = createBoard();

    switch (event.key) {
      
      case 'ArrowDown':

        for (let y = 0; y<4; y++) {
          let boardVals = [];
          for (let x = 3; x>=0; x--) {
            if (board[x][y].value !== null) {
              boardVals.push(board[x][y].value);
            }
          }

          let newVals = [];
          for (let i=0; i<boardVals.length; i++) {
            if (boardVals[i] === boardVals[i+1]) {
              newVals.push(boardVals[i]*2)
              points += boardVals[i]*2;
              i+=1;
            } else {
              newVals.push(boardVals[i]);
            }
          }

          for (let x = 3; x>=0; x--) {
            let newVal = newVals.shift();
            if (newVal) {
              newBoard[x][y].value = newVal;
              newBoard[x][y]['background-color'] = colorScheme[newVal.toString()]
            }
          }
        }

        break

      case 'ArrowUp':

        for (let y = 0; y<4; y++) {
          let boardVals = [];
          for (let x = 0; x<4; x++) {
            if (board[x][y].value !== null) {
              boardVals.push(board[x][y].value);
            }
          }

          let newVals = [];
          for (let i=0; i<boardVals.length; i++) {
            if (boardVals[i] === boardVals[i+1]) {
              newVals.push(boardVals[i]*2)
              points += boardVals[i]*2;
              i+=1;
            } else {
              newVals.push(boardVals[i]);
            }
          }

          for (let x = 0; x<4; x++) {
            let newVal = newVals.shift();
            if (newVal) {
              newBoard[x][y].value = newVal;
              newBoard[x][y]['background-color'] = colorScheme[newVal.toString()]
            }
          }
        }

        break

      case 'ArrowLeft':

        for (let x = 0; x < 4; x++) {
          let boardVals = [];
          for (let y = 0; y<4; y++) {
            if (board[x][y].value !== null) {
              boardVals.push(board[x][y].value);
            }
          }

          let newVals = [];
          for (let i=0; i<boardVals.length; i++) {
            if (boardVals[i] === boardVals[i+1]) {
              newVals.push(boardVals[i]*2)
              points += boardVals[i]*2;
              i+=1;
            } else {
              newVals.push(boardVals[i]);
            }
          }

          for (let y = 0; y<4; y++) {
            let newVal = newVals.shift();
            if (newVal) {
              newBoard[x][y].value = newVal;
              newBoard[x][y]['background-color'] = colorScheme[newVal.toString()]
            }
          }
        }

        break

      case 'ArrowRight':

        for (let x = 0; x<4; x++) {
          let boardVals = [];
          for (let y = 3; y>=0; y--) {
            if (board[x][y].value !== null) {
              boardVals.push(board[x][y].value);
            }
          }

          let newVals = [];
          for (let i=0; i<boardVals.length; i++) {
            if (boardVals[i] === boardVals[i+1]) {
              newVals.push(boardVals[i]*2)
              points += boardVals[i]*2;
              i+=1;
            } else {
              newVals.push(boardVals[i]);
            }
          }

          for (let y = 3; y>=0; y--) {
            let newVal = newVals.shift();
            if (newVal) {
              newBoard[x][y].value = newVal;
              newBoard[x][y]['background-color'] = colorScheme[newVal.toString()]
            }
          }
        }

        break

      default:
        return
    }
      
    if (_.isEqual(newBoard, board)) {
      return
    }

    addValueToBoard(newBoard);

    if (isGameOver(newBoard)) {
      $('#myModal').modal('show');
    }
    
    this.setState({
      boardHistory: this.state.boardHistory.concat([newBoard]),
      score: this.state.score.concat(this.state.score[this.state.score.length - 1] + points)
    })
  }
  
  componentDidMount() {
    var self = this;

    var myElement = document.body
    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    // listen to events...
    mc.on("swipeup", function(ev) {
      self.handleKeyPress({key: 'ArrowUp'})
    });

    mc.on("swipeleft", function(ev) {
      self.handleKeyPress({key: 'ArrowLeft'})
    });

    mc.on("swiperight", function(ev) {
      debugger
      self.handleKeyPress({key: 'ArrowRight'})
    });


    mc.on("swipedown", function(ev) {
      self.handleKeyPress({key: 'ArrowDown'})
    });

    // var board = document.getElementById('board-container');

    // board.addEventListener('touchmove', function(e) {
    //   e.preventDefault();
    // }, false);
  }

  componentWillUnmount() {
    // removes swipe event listeners when component unmounts
    Hammer(document.body).off('swipeleft swiperight swipeup swipedown');
  }

  render() {
    // listens for keypresses on the keyboard and calls the handleKeyPress function
    document.onkeydown = this.handleKeyPress;

    return (
      <div ref="game">
        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-0 title">4096</div>
        <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12 board">
          <Board
            board={this.state.boardHistory[this.state.boardHistory.length - 1]}
          />
        </div>
        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-12">
          <Score
            score={this.state.score[this.state.score.length - 1]}
          />
          <StepBack
            onClick={() => this.handleStepback()}
            disabled={this.state.boardHistory.length === 1}
          />
          <GameOverModal
            onStepBackClick={() => this.handleStepback()}
            onNewGameClick={() => this.startNewGame()}
            score={this.state.score[this.state.score.length - 1]}
          /> 
        </div>
      </div>
    )
  }
}

// creates the inital board and randomly places two 2s on the board
function createBoard() {
  let emptyBoard = [];
  for (let x=0; x<4; x++) {
    emptyBoard.push([]);
    for (let y=0; y<4; y++) {
      emptyBoard[x].push({value: null, 'background-color': '#FFFDE7'})
    }
  }
  return emptyBoard;
}

const colorScheme = {
  'null': '#FFFDE7',
  '2': '#FFF59D',
  '4': '#FFCC80',
  '8': '#D4E157',
  '16': '#66BB6A',
  '32': '#26A69A',
  '64': '#FF7043',
  '128': '#29B6F6',
  '256': '#5C6BC0',
  '512': '#26C6DA',
  '1024': '#AB47BC',
  '2048': '#EC407A',
  '8192': '#FF5722'
}

let initialBoard = createBoard();
initialBoard = addValueToBoard(initialBoard, true);
initialBoard = addValueToBoard(initialBoard, true);

function isGameOver(board) {
  for (var x=0; x<board.length; x++) {
    for (var y=0; y<board.length; y++) {
      if (board[x][y].value === null) {
        return false
      }
      if (x+1 < board.length){
        if (board[x][y].value === board[x+1][y].value){
          return false
        }
      }
      if (y+1 < board.length) {
        if (board[x][y].value === board[x][y+1].value) {
          return false
        }
      }
    }
  }
  return true
}

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
  board[position[0]][position[1]]['background-color'] = colorScheme[newVal.toString()];
  return board;
}