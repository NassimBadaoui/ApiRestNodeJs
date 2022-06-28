const database = require('./database.js');

const SELECT_SQL = 
`SELECT ID_USERS, EMAIL, USERNAME, ISADMIN, BIO FROM TEST_AUTH_USERS`;


 async function get(context) {
  let query = SELECT_SQL;
  const binds = {};
  if (context.userId) {
    binds.userId = context.userId;
    query += `\nWHERE ID_USERS = :userId`;
  }
  const result = await database.simpleDimExecute(query, binds);
  return result.rows;
}
 
module.exports.get = get;
