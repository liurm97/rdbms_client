const mysql2 = require("mysql2");

const checkTableExists = require("../utils/helper").checkTableExists;
const createConnection = require("../utils/helper").createConnection;

exports.renderTable = (req, res, next) => {
  res.render("table.ejs", { title: "Tables" });
};

exports.createTableForm = async (req, res, next) => {
  const { databaseName, tableName, columns } = req.body;
  const db = await createConnection(databaseName);
  
  console.log(`databasename: ${databaseName}, tableName: ${tableName}, columns: ${columns}`);

  const selectQuery = `SHOW TABLES;`;
  const tableExists = await checkTableExists(tableName, db, selectQuery);
  
  console.log(tableExists);
  try {
    if (tableExists === 0) {
      const createQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`;
      await db.query(createQuery);
      res.status(200).send(`${tableName} has been Created Successfully`);
    } else
      res
        .status(400)
        .send("Table name is already present. Please try again 😆");
  } catch (err) {
    // incorrect column value
    console.log(err);
    return res
      .status(401)
      .send("Something is wrong on the value passed in. Please try again 😢");
  }
};

exports.createTableAPI = async (req, res, next) => {
  const { tableName, columns } = req.query;
  const sqlquery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`;
  try {
    const result = await db.query(sqlquery);
    res.status(200).send(`Successful: ${result}`);
  } catch (error) {
    res.status(400).send(error.message);
  }

  res.status;
};
