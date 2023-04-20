const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "API",
    password: "123456",
    database: "kueski_data",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/menu", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    });
});

app.get("/", (req, res) => {
    //const sqlInsert = 
    //    "INSERT INTO users (user_id, email, name, last_name, second_last_name, curp, rfc) VALUES (2, 'rafaelbelloni@gmail.com', 'Rafael', 'Belloni', 'Rocha', 'JDKS984304JDNEF01', 'JDKS984304342')";
    //db.query(sqlInsert,(error, result) => {
    //    console.log("error", error);
    //    console.log("result", result);
    //    res.send("hello world");
    //});
});

app.listen(3001, () => {
    console.log("Server listening on port 3001");
})

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})