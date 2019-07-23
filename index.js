const express = require('express');
const path = require('path');
const fs = require('fs');

var app = express();
var port = 8080;

app.set('view engine', 'html');
app.use( '/' , express.static(path.join(__dirname ,'..' ,'public')));


app.get('/test', function(req, res, next) {
    var html = fs.readFileSync('./html/home.html', 'utf8')
    // res.render('test', { html: html })
    res.send(html);
})

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/home.html'));
  // res.send("Hello");
})

app.listen(port, () => {
  console.log('Server listening on localhost:%s', port);
})
