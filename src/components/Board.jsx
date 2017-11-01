import React from 'react';
import Square from './Square'

export default class Board extends React.Component {

	renderSquare = (value, color, id) => (
		<Square 
			color={color}
			value={value}
			key={id}
		/>
	)

	render() {
		var renderedSquares = [];
		var row = [];
		var board = this.props.board;
		for (let x=0; x<board.length; x++) {
			for (let y=0; y<board[x].length; y++) {
				row.push(this.renderSquare(board[x][y].value, board[x][y].color, (x*4+y)))
			}
			renderedSquares.push([<div key={x + 'row'} className="board-row">{row}</div>]);
			row = [];
		}
		
		return (
			<div className="board">
				{renderedSquares}
			</div>
		)
	}

}