import React from 'react';

export default function SubmitScoreModal(props){
	return (
		<div className="modal fade" id="submitScore" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 className="modalText" id="myModalLabel">Submit Your Score</h4>
		      </div>
		    	{/*
			    	the code below is repetitve, the whole modal system can be refactored by dumbing down the components
			    	create a modal component that recieves the body and head as props
		    	*/}
		      <div className="modal-footer">
		        <form className="form-inline">
				      <div className="form-group modal-body modalText">
				        Your score: {props.score}
				      </div>
		          <div className="form-group">
		            <input id="name-input" className="form-control name-input" placeholder="Enter Name"></input>
		          </div>
		          <button type="button" className="btn btn-primary" onClick={props.submitScore} data-dismiss="modal">Submit</button>
		        </form>
		      </div>
		    </div>
		  </div>
		</div>
	)
}