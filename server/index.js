const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const path= require("path")
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


const db = mysql.createPool({
    host: "localhost",
    user: "kueski",
    password: "12345",
    database: "kueski_data",
});


app.use( express.static( path.resolve( __dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
    });

    
app.listen(3001, () => {
    console.log("Server listening on port 3001");
})

app.get("/menu", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    });
});

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})