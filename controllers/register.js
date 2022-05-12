// Imports
const register = require('../databases/register.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_REGEX = /[-_\w]+\\.\w+/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
//Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit. https://regexlib.com/Search.aspx?k=password&c=-1&m=-1&ps=20




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

  
  if(req.body.email == null || req.body.username == null || req.body.password == null) {
    return res.status(400).json({'error' : 'missing parameters'});
}

if(req.body.username.length >= 13 || req.body.username.length <= 4) {
    return res.status(400).json({'error' : 'wrong username (must be length 5 -12 characters'});
}

if(!EMAIL_REGEX.test(req.body.email)) {
    return res.status(400).json({'error' : 'email is not valid'});

}

if(!PASSWORD_REGEX.test(req.body.password)) {
    return res.status(400).json({'error' : 'password invalid (Password must be between 4 and 8 digits long and include at least one numeric digit.)'});

}

  
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
