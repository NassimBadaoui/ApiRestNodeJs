const authentificationbis = require('../databases/authentificationbis.js');
var jwtUtils = require('../utils/jwt.utils');



 async function get(req, res, next) {
  try {
    const context = getUserProfile(req, res);
    const rows = await authentificationbis.get(context);
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
        
      } else {
        res.status(404).send('Utilisateur inconnu').end();
        
      }
    
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;


function getUserProfile(req, res) {
  var headerAuth = req.headers['authorization'];
  var userIdd = jwtUtils.getUserId(headerAuth);

  if(userIdd < 0) {
    return res.status(400).json({'error' : 'wrong token'});
  }

  const context = {
    userId: userIdd,
  };
  console.log("hey yo");
  console.log(userIdd);
  console.log(context);
  console.log("hey yo");
  return context;
}
