const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  // port: process.env.DB_PORT,
  // host: "localhost",
  // user: "testUser",
  // password: "Pass@012",
  // database: "railway_database",
  // port: 3306,
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("DB Connected");
  } else {
    console.log("db " + connection.state + err.message);
  }
});

function disconnectDatabase() {
  connection.end(function (err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("Close the database connection.");
  });
}

exports.connection = connection;
