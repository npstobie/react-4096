var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('html'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(process.env.PORT || 4096, function () {
  console.log('4096 is Running.')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + 'client', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
