// Will need to work on Async Await & Promises
exports.checkTableExists = async (filename, database, sqlquery) => {
  let exists = 0;
  const [result] = await database.query(sqlquery);
  for (obj of result) {
    if (obj.Tables_in_test === filename) {
      exists = 1;
      break;
    }
  }
  return exists;
};

// exports.checkDatabaseExists = async (filename, database, sqlquery) => {
//   let exists = 0;
//   const [result] = await database.query(sqlquery);
//   for (obj of result) {
//     if (obj.Tables_in_test === filename) {
//       exists = 1;
//       break;
//     }
//   }
//   return exists;
// };
