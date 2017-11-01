import React from 'react';
import Board from './Board'
import Score from './Score'

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [
        Array(16).fill({value: 0, color: 'white'})
      ],
      score: 0
    }
  }
  
  render() {
    return (
      <div>
        <Board
          board={this.state.board}
        />
        <Score
          score={this.state.score}
        />
      </div>
    )
  }
}