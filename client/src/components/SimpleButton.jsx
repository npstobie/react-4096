import React from 'react';

export default function SimpleButton(props){
	return (
    <button onClick={props.onClick} className="col-sm-12 col-xs-12 col-lg-8 col-lg-offset-2 btn btn-default simpleButton" disabled={props.disabled}>
      {props.buttonText}
    </button>
	)
}