const oracledb = require('oracledb');
const database = require('./database.js');

const REGISTER_SQL =
  "INSERT INTO SIA_FICHE(ID_FICHE, NUMERO, TITRE, DATE_RECEPTION, ID_ETAPE, DATE_CREATION)\n"+
  "VALUES (SIA_ID_FICHE.NEXTVAL, :numero, :titre, TO_DATE(:dateReception, 'DD/MM/YYYY'), 0, SYSDATE )";
  /*"RETURNING UTIL INTO :conId";*/

async function create(conn) {
  const conDesc = Object.assign({}, conn); 
  const result = await database.simpleDimExecute(INSERT_SQL, conDesc);
  //conDesc.conId = result.outBinds.conId[0];
  return conDesc;
}
