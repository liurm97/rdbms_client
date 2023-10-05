const mysql2 = require("mysql2");

// Will need to work on Async Await & Promises
exports.checkTableExists = async (filename, database, sqlquery) => {
  let exists = 0;
  const [result] = await database.query(sqlquery);
  console.log(result);
  for (obj of result) {
    if (obj.Tables_in_test === filename) {
      exists = 1;
      break;
    }
  }
  return exists;
};

exports.createConnection = async (databaseName) =>
{
  const db = mysql2
  .createPool({
    host: "localhost",
    user: "root",
    password: "970603LLF",
    database: databaseName,
  }).promise();

  return db;
}
