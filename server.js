var express = require('express');
var cors = require('cors');

// Create our app
var app = express();

app.use(cors());
app.use(express.static('public'));

app.listen(9000, function () {
  console.log('Express server is up on port 9000');
});
