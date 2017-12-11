import React from 'react';

export default function ScoreAdded(props){
	return (
		<div className="modal fade" id="scoreAddedModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 className="modalText" id="myModalLabel">
		        	{props.submitted ? "Congrats, we've added your high score!" : "Sorry, you didn't score high enough to make the leaderboard. Try again!"}
		        </h4>
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
	)
}