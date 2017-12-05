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
		      <div className="modal-footer">
		        <form className="form-inline">
				      <div className="form-group modal-body modalText">
				        Your score: {props.score}
				      </div>
		          <div class="form-group">
		            <input class="form-control name-input" placeholder="Enter Name" value={props.value} onChange={props.nameChange}></input>
		          </div>
		          <button type="submit" class="btn btn-primary" onClick={props.submitScore}>Submit</button>
		        </form>

		      </div>
		    </div>
		  </div>
		</div>
	)
}