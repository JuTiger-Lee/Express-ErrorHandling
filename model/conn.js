const mysql = require("mysql");
const { local, dev, prod } = require("../config/db");
const MakeRes = require("../utils/MakeRes");

function getConnType() {
  let connDBType = {};

  // server type에 맞게 db 연결
  if (process.env.NODE_ENV === "prod") {
    connDBType = prod;
  } else if (process.env.NODE_ENV === "dev") {
    connDBType = dev;
  } else {
    connDBType = local;
  }

  return connDBType;
}

function connDB() {
  const connDBType = getConnType();
  const conn = mysql.createConnection(connDBType);

  conn.connect();

  return conn;
}

/**
 *
 * @param {Object} conn
 */
function closeConnDB(conn) {
  conn.end();
}

/**
 *
 * @param {String} sql
 * @param {Array} params
 * @returns {Object}
 */
async function query(sql, params) {
  const makRes = new MakeRes();
  const conn = connDB();

  const startTransaction = () => {
    return new Promise((res, rej) => {
      conn.beginTransaction((err) => {
        if (err) rej(err);
        else res();
      });
    });
  };

  const getQueryData = () => {
    return new Promise((res, rej) => {
      conn.query(sql, params, (err, rows) => {
        if (err) rej(err);
        else res(rows);
      });
    });
  };

  try {
    await startTransaction();
    const queryData = await getQueryData(conn, sql, params);
    conn.commit();

    return {
      // expandability...
      data: queryData,
    };
  } catch (err) {
    conn.rollback();

    makRes.init(500, 666, "query Error");
    throw makRes.makeErrorResponse(err, "DB Query Error");
  } finally {
    closeConnDB(conn);
  }
}

// TODO...
function poolQuery() {}

module.exports = {
  query,
  poolQuery,
};
