const oracledb = require('oracledb');
const database = require('./database.js');

const INSERT_REGISTER_SQL =
  "INSERT INTO TEST_AUTH_USERS(ID_USERS, EMAIL, USERNAME, PASSWORD, DATE_INSCRIPTION, BIO, ISADMIN)\n"+
  "VALUES (SEQ_TEST_AUTH_USERS.NEXTVAL, :email, :username, :password, SYSDATE, :bio, 0)";
  //"RETURNING EMAIL INTO :email";

  async function createRegister(conn) {
    const dataRegister = Object.assign({}, conn); 
    //dataRegister.conId = {
    //  dir: oracledb.BIND_OUT,
    //  type: oracledb.NUMBER
    //}
    //delete dataRegister.creationDate;
    //delete dataRegister.updateDate;
    const result = await database.simpleDimExecute(INSERT_REGISTER_SQL, dataRegister);
    //dataRegister.conId = result.outBinds.conId[0];
    return dataRegister;
  }
  
  module.exports.createRegister = createRegister;

//const SELECT_EMAIL_EXIST = `SELECT COUNT(*) AS cnt FROM TEST_AUTH_USERS`;
  const SELECT_EMAIL_EXIST = `SELECT ID_USERS, EMAIL, USERNAME, PASSWORD, DATE_INSCRIPTION, BIO, ISADMIN FROM TEST_AUTH_USERS`;

  async function find(checkEmail) {
    let query = SELECT_EMAIL_EXIST;
    const binds = {};
    if (checkEmail.conName) {
      binds.conName = checkEmail.conName;
      query += `\nWHERE EMAIL = :email`;
    }
    const result = await database.simpleDimExecute(query, binds);
    return result.rows;
  }

  module.exports.find = find;