// // express webserver    
// var express = require("express");
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var port = process.env.PORT || 3000;

const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Vishal Hayli");
});

const port = 3000;
const port1 = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});