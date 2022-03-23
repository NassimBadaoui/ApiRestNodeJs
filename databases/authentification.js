const oracledb = require('oracledb');
const database = require('./database.js');

const SELECT_EMAIL_EXIST = `SELECT ID_USERS, USERNAME, EMAIL, PASSWORD, ISADMIN FROM TEST_AUTH_USERS`;
//  const SELECT_EMAIL_EXIST = `SELECT ID_USERS, EMAIL, USERNAME, PASSWORD, DATE_INSCRIPTION, BIO, ISADMIN FROM TEST_AUTH_USERS`;

  async function find(checkEmail) {
    let query = SELECT_EMAIL_EXIST;
    const binds = {};
    if (checkEmail.email) {
      binds.email = checkEmail.email;
      query += `\nWHERE EMAIL = :email`;
    }
    const result = await database.simpleDimExecute(query, binds);
    return result;
  }

  module.exports.find = find;