import React from 'react';

export default function Score(props){
	return (
		<span className="score col-md-12 col-sm-12 col-xs-12 col-lg-12">
			Score: {props.score}
		</span>
	)
}