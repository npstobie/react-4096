import React from 'react';

export default function StepBack(props){
	return (
    <button onClick={props.onClick} className="col-sm-12 col-xs-12 col-lg-8 col-lg-offset-2 btn btn-default stepback" disabled={props.disabled}>
      Reverse Move
    </button>
	)
}