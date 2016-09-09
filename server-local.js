var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3004, function () {
  console.log('Express server is up on port 3004');
});
