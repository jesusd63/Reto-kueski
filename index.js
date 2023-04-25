const express = require("express");
const app = express();
const port= process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));





app.get("/menu", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    });
});

app.get("/action/acceso/:user", (req, res) => {
  const userid=req.params.user;
  const sqlGet = "SELECT * FROM users WHERE USER_ID=?";
  db.query(sqlGet, [userid], (err, result) => {
      res.send(result);
      
      console.log(result);
  });
});

app.get("/action/op/:user", (req, res) => {
  const userid=req.params.user;
  const sqlGet = "UPDATE users SET IS_BLOCKED = 1 WHERE USER_ID=?";
  db.query(sqlGet, [userid], (err, result) => {
      res.send(result);

  });
});

app.get("/action/cancel/:user", (req, res) => {
  const userid=req.params.user;
  const sqlGet = "UPDATE users SET USER_NAME = NULL, USER_LAST_NAME=NULL, USER_SEC_LAST_NAME=NULL, BIRTH=NULL, NATIONALITY=NULL, STATE=NULL, RFC=NULL, GENDER=NULL, EMAIL=NULL, INFO_JSON=NULL, IS_CLIENT=NULL, DELETED_AT=current_date()  WHERE USER_ID=?;";
  const sqlDel= "DELETE FROM addresses WHERE USER_ID=?;"
  const sqlDel2= "DELETE FROM identifications WHERE USER_ID=?;"
  db.query(sqlGet, [userid], (err, result) => {
      res.send(result);

  });
  db.query(sqlDel, [userid], (err, result) => {
    res.send(result);

});
db.query(sqlDel2, [userid], (err, result) => {
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