var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(process.env.PORT || 4096, function () {
  console.log('4096 is Running.')
})

// just storing scores in memory for simplicity
var scores = [{name: 'Andy', score: 22092}, {name: 'Nick', score: 4596}, {name: 'Sam', score: 3296}, {name: 'Hyun', score: 960}, {name: 'Loser', score: 442}];

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('/high_scores', (req, res) => {
	res.send(scores);
})

app.post('/score', (req, res) => {
	var scores = addScore(req.body.score, req.body.name);
	res.send(scores);
})

function addScore(score, name){
	if (score > scores[scores.length - 1].score) {
		scores.pop();
		var added = false;
		for (var i=0; i<scores.length; i++) {
			if (score > scores[i].score) {
				scores = scores.slice(0,i).concat([{score: score, name: name}]).concat(scores.slice(i+1));
				added = true
			}
		}
		if (!added) {
			scores.push({score: score, name: name})
		}
		return {scores: scores, added: true}
	} else {
		return {scores: scores, added: false}
	}
}

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
