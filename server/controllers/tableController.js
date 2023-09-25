const checkTableExists = require("../utils/helper").checkTableExists;

exports.renderTable = (req, res, next) => {
  res.render("table.ejs", { title: "Tables" });
};

exports.createTableForm = async (req, res, next) => {
  const { tableName, columns } = req.body;
  const selectQuery = `SHOW TABLES;`;
  const tableExists = await checkTableExists(tableName, db, selectQuery);
  console.log(`${tableName} - tableExists: ${tableExists}`);

  if (tableExists === 0) {
    const createQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns});`;
    await db.query(createQuery);
    res.status(200).send(`${tableName} has been Created Successfully`);
  } else
    res.status(400).send("Table name is already present. Please try again 😆");
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
