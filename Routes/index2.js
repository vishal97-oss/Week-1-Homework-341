const express = require('express');
const router = express.Router();
 
router.use('/contacts', require('./index'));
 
module.exports = router;
 