// Imports
const register = require('../databases/register.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function post(req, res, next) {
  try {
    const checkEmail = {};
    console.log("hey yo " + req.body.email);
    checkEmail.email = req.body.email;
    const rows = await register.find(checkEmail);
    console.log(rows[0].CNT);
    if (req.body.email) {
      if (rows[0].CNT >= 1) {
        res.status(404).send('email déjà utilisé').end();
        //trace.addTrace(req, 404);

      } else {
        let dataRegister = getDataForRegister(req, res, next);
        //trace.addTrace(req, 200);
      }
    /*} else {
      res.status(200).json(rows);
      trace.addTrace(req, 200);
    }
    */
  }
  } catch (err) {
    //trace.addTrace(req, 999);
    next(err);
  }
}
 
module.exports.post = post;


function getDataForRegister(req, res, next) {  
  
    const dataRegister = {
      email : req.body.email,
      username : req.body.username,
      password : req.body.password,
      bio : req.body.bio
    };


    bcrypt.hash(dataRegister.password, 5, function( err, bcryptedPassword){
      dataRegister.password = bcryptedPassword ;
      register.createRegister(dataRegister);
      res.status(201).json(dataRegister);
/*    console.log(err);
      

      console.log(bcryptedPassword);
      console.log("testtttet " + dataRegister.password);
  */    
    });


  
  
    /*if(email == null || username == null || password == null) {
            return res.status(400).json({'error' : 'missing parameters'});
      }*/

//  return dataRegister;
}
