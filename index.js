const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const { exec } = require("child_process");

var app = express();
var port = 3000;

app.set('view engine', 'html');
app.use( '/' , express.static(path.join(__dirname ,'/html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/home.html'));
})

app.post('/git-pull', (req, res) => {
  console.log('Pulling (probably)');
  console.log(req);
  exec('cd /home/ubuntu/Discord-Bot && git pull && sleep 5 && pm2 restart discord-bot', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.send("Hey");
})

app.listen(port, () => {
  console.log('Server listening on localhost:%s', port);
})
