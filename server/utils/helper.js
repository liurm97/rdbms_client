exports.checkTableExists = async (filename, database, sqlquery) => {
  let exists = 0;
  database.query(sqlquery, async (err, result) => {
    console.log(result);
    await result.forEach((obj) => {
      if (obj.Tables_in_test === filename) {
        exists = 1;
        console.log(exists);
        return exists;
      }
    });
  });
};
