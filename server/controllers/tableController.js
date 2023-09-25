const checkTableExists = require("../utils/helper").checkTableExists;

exports.renderTable = (req, res, next) => {
  res.render("table.ejs", { title: "Tables" });
};

exports.createTableForm = (req, res, next) => {
  const { tableName, columns } = req.body;
  const selectQuery = `SHOW TABLES;`;
  const tableExists = checkTableExists(tableName, db, selectQuery);
  console.log(`${tableName} - tableExists: ${tableExists}`);
  const createQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`;
  db.query(createQuery, (error, result) => {
    if (error) res.status(400).send(error);
    else res.send("Table created successfully");
  });
};

exports.createTableAPI = (req, res, next) => {
  const { tableName, columns } = req.query;
  console.log(tableName, columns);
  const sqlquery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`;
  db.query(sqlquery, (error, result) => {
    if (error) res.status(400).send(error);
    else res.send("Table created successfully");
  });
};
