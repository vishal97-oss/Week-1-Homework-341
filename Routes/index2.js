const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
 
router.use('/contacts', require('./index'));
 
module.exports = router;
 