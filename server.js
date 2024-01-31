// // express webserver    
// var express = require("express");
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var port = process.env.PORT || 3000;

const express = require('express'); // package import by demanding express which is in the node module
const app = express(); // creating the app which has all functionality of express package

const mongodb = require('./db/connect');




// const lesson1 = require('./control/lesson1')




const port = 3000;

// app.listen(process.env.PORT || port, () => { // Listening on PORT (PORT is for render because it has enviroment variable called PORT and port (3000) is for Web
//   console.log('Web Server is listening at port ' + (process.env.PORT || port));
// });


// const express = require('express');
// const mongodb = require('./db/connect');

// const port2 = process.env.PORT || 8080;
// const app2 = express();
const bodyParser = require('body-parser');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/', require('./Routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port);
    console.log(`Connected to DB and listening on ${port}`);
  }
  //const port2 = 8080;
});