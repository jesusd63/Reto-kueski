const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const path = require('path');


app.use( express.static( path.resolve( __dirname, '../client/build')));

app.get('*', (req, res) => {
res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
});


//const db = mysql.createConnection('mysql://38ujgsf0r97gndmudf4l:pscale_pw_UicUXS5iPXzAru2uENv4PCMS5pRnFVan5orxdwtFWSh@aws.connect.psdb.cloud/kueski_data?ssl={"rejectUnauthorized":true}')//const db = mysql.createPool({
 //   host: "aws.connect.psdb.cloud",
  //  user: "t8g2qrxxtx91443y783u",
   // password: "pscale_pw_JDfcLwNm77TVEQEFc22fCqcaiPRPnvc7Z9KVmZ4GduH",
   // database: "kueski_data",


//});



app.get("/menu", (req, res) => {
    //const sqlGet = "SELECT * FROM users";
    //db.query(sqlGet, (err, result) => {
      //  res.send(result);
  //  });
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

//db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
 // if (err) throw err

//})