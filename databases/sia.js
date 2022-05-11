const oracledb = require('oracledb');
const database = require('./database.js');

const SELECT_SQL = 
`SELECT NUMERO, TITRE, TO_CHAR(DATE_RECEPTION, 'DD/MM/YYYY') AS DATE_RECEPTION, ID_ETAPE, TO_CHAR(DATE_RECEPTION, 'DD/MM/YYYY') AS DATE_CREATION, ID_FICHE FROM SIA_FICHE ORDER BY ID_FICHE DESC`;

async function find(context) {
  let query = SELECT_SQL;
  const binds = {};
  if (context.conName) {
    binds.conName = context.conName;
    query += `\nWHERE NUMERO = :numero`;
  }
  const result = await database.simpleDimExecute(query, binds);
  return result.rows;
}

module.exports.find = find;

const INSERT_SQL =
  "INSERT INTO SIA_FICHE(ID_FICHE, NUMERO, TITRE, DATE_RECEPTION, ID_ETAPE, DATE_CREATION)\n"+
  "VALUES (SIA_ID_FICHE.NEXTVAL, :numero, :titre, TO_DATE(:dateReception, 'DD/MM/YYYY'), 0, SYSDATE )";
  /*"RETURNING UTIL INTO :conId";*/

async function create(conn) {
  const conDesc = Object.assign({}, conn); 
  const result = await database.simpleDimExecute(INSERT_SQL, conDesc);
  //conDesc.conId = result.outBinds.conId[0];
  return conDesc;
}

module.exports.create = create;

/*const UPDATE_SQL =
 "UPDATE KIM_RESA\n" +
 "  SET EQUIPE = :equipe\n" +
 "WHERE UTIL = :util";

async function update(conn) {
  const conDesc = Object.assign({}, conn);
  delete conDesc.creationDate;
  delete conDesc.updateDate;
  const result = await database.simpleExecute(UPDATE_SQL, conDesc);
  if (result.rowsAffected && result.rowsAffected === 1) {
    return conDesc;
  } else {
    return null;
  }
}

module.exports.update = update;*/

const DELETE_SQL =
 'DELETE FROM SIA_FICHE WHERE NUMERO = :numero';

async function del(util) {
  const connDesc = {
    numero: numero
  };
  const result = await database.simpleDimExecute(DELETE_SQL, connDesc);
  return result.rowsAffected === 1;
}

module.exports.delete = del;