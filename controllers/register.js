const register = require('../databases/register.js');

 async function get(req, res, next) {
  try {
    const context = {};
    context.conName = req.query.nom;
    const rows = await sia.find(context);
    if (req.params.nom) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
        trace.addTrace(req, 200);
      } else {
        res.status(404).send('ConnexionInconnue').end();
        trace.addTrace(req, 404);
      }
    } else {
      res.status(200).json(rows);
      trace.addTrace(req, 200);
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;

function getConnectionFromRec(req) {
  const conDesc = {
    numero: req.body.numero,
    titre: req.body.titre,
    dateReception: req.body.dateReception,
  };

  return conDesc;
}


async function post(req, res, next) {

  console.log('je suis dans le post');

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      trace.addTrace(req, 400);
    }

    console.log(req.body);
    let conDesc = getConnectionFromRec(req);
    console.log(conDesc);
  try{  
    conDesc = await sia.create(conDesc);
    res.status(201).json(conDesc);
    trace.addTrace(req, 201);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
