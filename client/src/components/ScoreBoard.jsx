import React from 'react';

export default function ScoreBoard(props){
	return (
		<div>
			{/*
				seems kinda funky including the button and modal in same component, look into refatoring later
			*/}
			<button onClick={props.viewHighScores} className="col-sm-12 col-xs-12 col-lg-8 col-lg-offset-2 btn btn-primary btn-sm">View High Scores</button>
			<div className="modal fade" id="scoreBoardModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modalText" id="myModalLabel">High Scores</h4>
			      </div>
			      <div className="modal-body modalText">
			        <table className="scoreboard">
			          <tr>
			            <th>Name</th>
			            <th>Score</th> 
			          </tr>
			        	  {props.scores.map((score) =>
			        	  	<tr>
			        		  	<td>{score.name}</td>
			        		  	<td>{score.score}</td>
			        	  	</tr>
			        	  )}
			        </table>
			      </div>
			    </div>
			  </div>
			</div>  
		</div>
	)
}