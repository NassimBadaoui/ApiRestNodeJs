const res = require('express/lib/response');
const oracledb = require('oracledb');
const database = require('./database.js');

const INSERT_REGISTER_SQL =
  "INSERT INTO TEST_AUTH_USERS(ID_USERS, EMAIL, USERNAME, PASSWORD, DATE_INSCRIPTION, BIO, ISADMIN)\n"+
  "VALUES (SEQ_TEST_AUTH_USERS.NEXTVAL, :email, :username, :password, SYSDATE, :bio, 0)";
  //"RETURNING EMAIL INTO :email";


const INSERT_SIA_AUTHENTIFICATION =
  "INSERT INTO SIA_AUTHENTIFICATION(ID_SIA_AUTHENTIFICATION, IDENTIFIANTS, MOTDEPASSE, NOM, PRENOM, EMAIL, PROFIL, DATE_INSCRIPTION)\n"+
  "VALUES (SEQ_SIA_AUTHENTIFICATION.NEXTVAL, :username, :password, :lastname, :firstname, :email, 0, SYSDATE)";
  //"RETURNING EMAIL INTO :email";

  async function createRegister(conn) {
    const dataRegister = Object.assign({}, conn); 
    //dataRegister.conId = {
    //  dir: oracledb.BIND_OUT,
    //  type: oracledb.NUMBER
    //}
    //delete dataRegister.creationDate;
    //delete dataRegister.updateDate;
    console.log("test" + dataRegister.password);
    const result = await database.simpleDimExecute(INSERT_SIA_AUTHENTIFICATION, dataRegister);
    //dataRegister.conId = result.outBinds.conId[0];
    return dataRegister;
  }
  
  module.exports.createRegister = createRegister;

const SELECT_EMAIL_EXIST = `SELECT COUNT(*) AS cnt FROM TEST_AUTH_USERS`;
//  const SELECT_EMAIL_EXIST = `SELECT ID_USERS, EMAIL, USERNAME, PASSWORD, DATE_INSCRIPTION, BIO, ISADMIN FROM TEST_AUTH_USERS`;

const SELECT_EMAIL_EXIST_SIA_AUTHENTIFICATION = `SELECT COUNT(*) AS cnt FROM SIA_AUTHENTIFICATION`;
//  const SELECT_EMAIL_EXIST = `SELECT ID_USERS, EMAIL, USERNAME, PASSWORD, DATE_INSCRIPTION, BIO, ISADMIN FROM TEST_AUTH_USERS`;

  async function find(checkEmail) {
    let query = SELECT_EMAIL_EXIST_SIA_AUTHENTIFICATION;
    const binds = {};
    console.log(checkEmail);
    if (checkEmail.email) {
      binds.email = checkEmail.email;
      query += `\nWHERE EMAIL = :email`;
    }
    const result = await database.simpleDimExecute(query, binds);
    console.log(result);
    console.log(result.rows[0].CNT);
    return result.rows;
  }

  module.exports.find = find;