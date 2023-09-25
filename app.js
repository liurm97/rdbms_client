const express = require("express");
const bodyParser = require("body-parser");
const expressLayout = require("express-ejs-layouts");
const mysql2 = require("mysql2");
const app = express();
const errorHandler = require("./server/routes/errorHandler");

const port = 3000;

// Create connection to mysql database

let database = "test";

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "970603LLF",
  database: database,
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${database} database`);
});

global.db = db;
global.database = database;

// Manage public resources
// app.use(express.static("public"));

// Template Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Configure urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const homeRouter = require("./server/routes/homeRouter");
const tableRouter = require("./server/routes/tableRouter");
const loginRouter = require("./server/routes/databaseRouter");

// Home page - <a>tags to /tables & /databases
app.use("/", homeRouter);

// Show table page - functionalities
app.use("/table", tableRouter);
app.use(errorHandler);

// // create database page - functionalities
// app.use("/database", databaseRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
