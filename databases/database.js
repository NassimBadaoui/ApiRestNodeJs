const oracledb = require('oracledb');
const dimdb = require('oracledb');
const herissondb = require('oracledb');
const dbConfig = require('../config/database.js');

async function initialize() {
  if ( process.platform === "win32" ) {
    oracledb.initOracleClient({libDir: 'D:/ORACLE_DEV/instantclient_19_8'});
  }
  await dimdb.createPool(dbConfig.dimPool);
  await herissondb.createPool(dbConfig.herissonPool);
}

module.exports.initialize = initialize;

async function close() {
    await dimdb.getPool().close();
    await herissondb.getPool().close();
  }
  
module.exports.close = close;
  
function simpleDimExecute(statement, binds = [], opts = {}) {
  return simpleExecute(dimdb, statement, binds, opts)
}

function simpleHerissonExecute(statement, binds = [], opts = {}) {
  return simpleExecute(herissondb, statement, binds, opts)
}

function simpleExecute(db, statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
      opts.outFormat = db.OBJECT;
      opts.autoCommit = true;
      let conn;
      try {
        conn = await db.getConnection();
        const result = await conn.execute(statement, binds, opts);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        closeStatement(conn);
      }
    });
}

async function closeStatement(conn) {
  if (conn) { 
    try {
      await conn.close();
    } catch (err) {
      console.log(err);
    }
  }
}
  
module.exports.simpleDimExecute = simpleDimExecute;
module.exports.simpleHerissonExecute = simpleHerissonExecute;
