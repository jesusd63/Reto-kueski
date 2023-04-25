const express = require("express");
const app = express();
const port= process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection('mysql://we58tr2pc0gmpnhbpgiy:pscale_pw_vaoD1RIneQ16vQ6cBuQ482mb2VXIDIMOCdVo6WysQW3@aws.connect.psdb.cloud/kueski_data?ssl={"rejectUnauthorized":true}')

app.get("/menu", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    });
});

app.get("/", (req, res) => {
    //const sqlInsert = 
      //  "INSERT INTO users (user_id, email, name, last_name, second_last_name, curp, rfc) VALUES (2, 'rafaelbelloni@gmail.com', 'Rafael', 'Belloni', 'Rocha', 'JDKS984304JDNEF01', 'JDKS984304342')";
    //db.query(sqlInsert,(error, result) => {
       // console.log("error", error);
      // console.log("result", result);
     //   res.send("hello world");
    //});
});

app.listen(port, () => {
    console.log("Server listening on port",port);
})

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err
  
  console.log(rows[0]);

})