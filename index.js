const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

var app = express();
var port = 3000;

/*
const httpsOptions = {
  cert: fs.readFileSync('./ssl/alkalineskate_com.crt'),
  ca: fs.readFileSync('./ssl/alkalineskate_com.ca-bundle'),
  key: fs.readFileSync('./ssl/alkaline_com.key')
}

const httpsServer = https.createServer(httpsOptions, app);
*/

app.set('view engine', 'html');
app.use( '/' , express.static(path.join(__dirname ,'/html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/home.html'));
})
/*
httpsServer.listen(port, '127.0.0.1');
*/

app.listen(port, () => {
  console.log('Server listening on localhost:%s', port);
})
