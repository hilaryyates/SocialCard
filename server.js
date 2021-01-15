const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "sql5.freemysqlhosting.net",
  user: "sql5387256",
  password: "RXdIvNkxxg",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
