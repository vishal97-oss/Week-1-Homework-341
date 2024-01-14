// // express webserver    
// var express = require("express");
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var port = process.env.PORT || 3000;

const express = require('express'); // package import by demanding express which is in the node module
const app = express(); // creating the app which has all functionality of express package

app.use('/', require('./Routes'));

// const lesson1 = require('./control/lesson1')

// app.get('/', lesson1.vishal); // get function is like any other function such as listen, post, put and delete
//    // When we click on hompage it says hello 


// app.get('/Hayli', lesson1.hayli); // get function is like any other function such as listen, post, put and delete
//    // When we click on hompage it says hello 


const port = 3000;
const port1 = 3000;

app.listen(process.env.PORT || port, () => { // Listening on PORT (PORT is for render because it has enviroment variable called PORT and port (3000) is for Web
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});