import React from 'react';

export default function Square(props){
	return (
		<div className="underSquare square">
			<div className="square" style={{'backgroundColor': props.color}} id={props.id}>
				{props.value}
			</div>
		</div>
	)
}