const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

var app = express();
var port = 3000;

app.set('view engine', 'html');
app.use( '/' , express.static(path.join(__dirname ,'/html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/home.html'));
})

app.listen(port, () => {
  console.log('Server listening on localhost:%s', port);
})
