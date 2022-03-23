// Imports
const authentification = require('../databases/authentification.js');
const bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils');


async function post(req, res, next) {
  try {
    const checkEmail = {};
    checkEmail.email = req.body.email;
    const result = await authentification.find(checkEmail);
    console.log(result.rows.length);
    console.log(req.body.email);

    if (req.body.email) {
      if (result.rows.length === 0) {
          console.log("hihi");
        res.status(404).send('user not exist in DB').end();
        //trace.addTrace(req, 404);

      } else {
        const userFound = {

            userId : result.rows[0].ID_USERS,
            email : result.rows[0].EMAIL,
            password : result.rows[0].PASSWORD,
            username : result.rows[0].USERNAME,
            isAdmin : result.rows[0].ISADMIN

        }

        console.log("lets go");
        getDataForAuthentification(userFound, req, res, next);
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


function getDataForAuthentification(userFound, req, res, next) {  


    bcrypt.compare(req.body.password, userFound.password, function( errBycrypt, resBycrypt){
      if(resBycrypt){

        return res.status(200).json({
            'userId' : userFound.userId,
            'token' : jwtUtils.generateTokerForUser(userFound)
        });
    }else {
      
      return res.status(403).json({'error' : 'invalid password'}) 
        
    }
    });


}
