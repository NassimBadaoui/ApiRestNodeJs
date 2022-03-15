const express = require('express');
const router = new express.Router();
const register = require('../controllers/register.js');


router.route('/api/register/') 
  .post(register.post);
  //.post(register.post)
  //.put(register.put)
  //.delete(register.delete);

module.exports = router;



