import React from 'react';
import Square from './Square'

export default class Board extends React.Component {

	renderSquare = (value, color, tag, id) => (
		<Square 
			color={color}
			value={value}
			key={tag}
			id={id}
		/>
	)

	render() {
		var renderedSquares = [];
		var row = [];
		var board = this.props.board;
		for (let x=0; x<board.length; x++) {
			for (let y=0; y<board[x].length; y++) {
				row.push(this.renderSquare(board[x][y].value, board[x][y]['background-color'], (x*4+y), ('square' + x + y)))
			}
			renderedSquares.push([<div key={x + 'row'} className="board-row flexBox">{row}</div>]);
			row = [];
		}
		
		return (
			<div id="board-container" className="board-container">
				{renderedSquares}
			</div>
		)
	}

}