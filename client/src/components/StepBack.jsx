import React from 'react';

export default function StepBack(props){
	return (
    <button onClick={props.onClick} className="col-md-12 col-sm-12 col-xs-12 col-lg-12 btn btn-default stepback" disabled={props.disabled}>
      Reverse Last Move
    </button>
	)
}