const express = require('express');
const router = new express.Router();
const register = require('../controllers/register.js');
const authentification = require('../controllers/authentification.js');
const formDIMA = require('../controllers/formDima.js');
// const FormRecherche = require('../controllers/formRecherche.js');


router.route('/api/register/')
  .post(register.post);
//.post(register.post)
//.put(register.put)
//.delete(register.delete);

router.route('/api/authentification/')
  .post(authentification.post);
//.post(register.post)
//.put(register.put)
//.delete(register.delete);

router.route('/api/formDIMA/')
  .post(formDIMA.post);
//.post(register.post)
//.put(register.put)
//.delete(register.delete);

// router.route('/api/formRecherche/')
//   .post(authentification.post);
// //.post(register.post)
// //.put(register.put)
// //.delete(register.delete);

module.exports = router;



