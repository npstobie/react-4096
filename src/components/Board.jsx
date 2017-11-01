import React from 'react';
import Square from './Square'

export default class Board extends React.Component {

	renderSquare = (value, color) => (
		<Square 
			color={color}
			value={value}
		/>
	)

	render() {
		var renderedSquares = [];
		var row = [];
		var board = this.props.board;
		for (let x=0; x<board.length; x++) {
			for (let y=0; y<board[x].length; y++) {
				row.push(this.renderSquare(board[x][y]))
			}
			renderedSquares.push([<div className="board-row">{row}</div>]);
			row = [];
		}
		
		return (
			<div className="board">
				{renderedSquares}
			</div>
		)
	}

}