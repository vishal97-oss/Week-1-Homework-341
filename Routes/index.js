const routes = require('express').Router();
const lesson1 = require('../control/lesson1')

routes.get('/', lesson1.vishal); // get function is like any other function such as listen, post, put and delete
   // When we click on hompage it says hello 


routes.get('/Hayli', lesson1.hayli); // get function is like any other function such as listen, post, put and delete
   // When we click on hompage it says hello 

module.exports = routes;