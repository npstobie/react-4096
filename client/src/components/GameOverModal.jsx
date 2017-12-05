import React from 'react';

export default function GameOverModal(props){
	return (
		<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 className="modalText" id="myModalLabel">Game Over!</h4>
		      </div>
		      <div className="modal-body modalText">
		        Your score: {props.score}
		      </div>
		      <div className="modal-footer">
		        <button onClick={props.onStepBackClick} type="button" className="btn btn-default modalText modalBtns col-md-3 col-xs-12" data-dismiss="modal">Reverse Move</button>
		        <button onClick={props.onNewGameClick} type="button" className="btn btn-default modalText modalBtns col-md-3 col-xs-12"  data-dismiss="modal">Start Over</button>
		        <button onClick={props.onSubmitScoreClick} type="button" className="btn btn-default modalText modalBtns col-md-3 col-xs-12"  data-dismiss="modal">Submit Score</button>
		      </div>
		    </div>
		  </div>
		</div>
	)
}