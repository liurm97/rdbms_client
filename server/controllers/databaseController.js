exports.renderDatabase = async (req, res, next) => {
  const sqlquery = `SHOW databases;`;
  try {
    const result = await db.query(sqlquery);
    console.log(result);
    res
      .status(200)
      .render("database.ejs", { title: "Database", databases: result });
  } catch (err) {
    console.log(err);
    // res.status(401).send("Database already exists. Please try again 😢");
    res.status(301).render("database.ejs");
  }
};

exports.createDatabase = async (req, res, next) => {
  console.log(req.body);
  database = req.body.databaseName;
  const sqlquery = `CREATE database IF NOT EXISTS ${database} ;`;
  try {
    const result = await db.query(sqlquery);
    res
      .status(200)
      .render("successDatabase.ejs", { title: "Succeeded!", db: database });
  } catch (err) {
    console.log(err);
    res.status(401).send("Database already exists. Please try again 😢");
  }
};

exports.deleteDatabase = async (req, res, next) => {
  const dbToDelete = req.body.databaseName;
  const sqlquery = `DROP database ${dbToDelete} ;`;
  try {
    const result = await db.query(sqlquery);
    res
      .status(200)
      .render("successDatabase.ejs", { title: "Succeeded!", db: database });
  } catch (err) {
    console.log(err);
    res.status(401).send("Database does not exist. Please try again 😢");
  }
};
