const express = require('express');
const router = new express.Router();
const register = require('../controllers/register.js');


router.route('/api/register/') 
  .post(dimco.post);
  //.post(dimco.post)
  //.put(dimco.put)
  //.delete(dimco.delete);

module.exports = router;

