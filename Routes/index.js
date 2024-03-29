const routes = require('express').Router();
const lesson1 = require('../control/lesson1');
const contactController = require('../control/contacts');
const mongodb = require('../db/connect');



routes.get('/', lesson1.vishal); // get function is like any other function such as listen, post, put and delete
   // When we click on hompage it says hello 


routes.get('/Hayli', lesson1.hayli); // get function is like any other function such as listen, post, put and delete
   // When we click on hompage it says hello 

routes.get('/contacts', contactController.getAll);

routes.get('/contacts/:id', contactController.getSingle )

routes.post('/contacts', contactController.createContact)

routes.put('/contacts/:id', contactController.updateContact)

routes.use('/', require('./swagger'));
// routes.use('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.delete('/contacts/:id', contactController.deleteContact)

module.exports = routes;

//routes.get('/Hayli', lesson1.hayli); This part is ROUTES

