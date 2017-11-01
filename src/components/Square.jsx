import React from 'react';

export default function Square(props){
	return (
		<div
			className="square"
			style={{color: props.color}}
		>
			{props.value}
		</div>
	)
}