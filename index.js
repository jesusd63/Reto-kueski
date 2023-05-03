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

app.get("/action/rect/:user/:nom/:lname/:slname/:birth/:nac/:est/:gen/:num/:email", (req, res) => {
  const userid=req.params.user;
  const name=req.params.nom;
  const lname=req.params.lname;
  const slname=req.params.slname;
  const birth=req.params.birth;
  const nat=req.params.nac;
  const estado=req.params.est;
  const genero=req.params.gen;
  const cell=req.params.num;
  const email=req.params.email;

  const sqlRect = "UPDATE kueski_data.users SET USER_NAME = '"+name+"', USER_LAST_NAME='"+lname+"', USER_SEC_LAST_NAME='"+slname+"', BIRTH='"+birth+"', NATIONALITY='"+nat+"', STATE='"+estado+"', GENDER="+genero+", PHONE="+cell+", EMAIL='"+email+"', UPDATED_AT=current_date() WHERE USER_ID="+userid+";";
  const sqlRect2= "insert into kueski_data.arco (USER_ID, ACTION_TYPE, ARCO_DATE) values ("+userid+", 'R', current_date());";

  db.query(sqlRect, [userid,name, lname, slname, birth, nat, estado, genero, cell, email], (err, result) => {
    res.send(result);

  });
  db.query(sqlRect2, [userid,name, lname, slname, birth, nat, estado, genero, cell, email], (err, result) => {
    res.send(result);

  });
});

app.get("/menu/arco", (req, res) => {
  const sqlGet = "SELECT * FROM arco";
  db.query(sqlGet, (err, result) => {
      res.send(result);
      console.log(result);
  });
});

app.get("/action/acceso/:user", (req, res) => {
  const userid=req.params.user;
  const sqlGet = "select users.USER_ID, users.USER_NAME, users.USER_LAST_NAME, users.USER_SEC_LAST_NAME, users.BIRTH, users.NATIONALITY, users.STATE, ECONOMIC_ACTIVITY, users.CURP, users.RFC, users.GENDER, users.PHONE, users.EMAIL, users.INFO_JSON, addresses.COUNTRY, addresses.STATE AS AD_STATE, addresses.CITY, addresses.NBHOOD, addresses.ZIP_CODE, addresses.STREET, addresses.EXT_NUM from users left join addresses on users.USER_ID=addresses.USER_ID having users.USER_ID=? order by users.USER_ID limit 1;";
  db.query(sqlGet, [userid], (err, result) => { 
      res.send(result);
    
      console.log(result);
  });
});

app.post("/action/op/:user/:comment", (req, res) => {
  const userid=req.params.user;
  const com= req.params.comment;
  const sqlUp = "UPDATE users SET IS_BLOCKED = 1 WHERE USER_ID="+userid+";";
  //const sqlUp2 = "insert into kueski_data.arco (USER_ID, ACTION_TYPE, ARCO_DATE, arco.COMMENT) values ("+userid+", 'O', current_date(),'"+com+"');";
  //db.query(sqlUp2, [userid], (err, result) => {
  //  res.send(result);
  //});

  db.query(sqlUp, [userid], (err, result) => {
      res.send(result);

  });
});

app.post("/action/cancel/:user/:comment", (req, res) => {
  const userid=req.params.user;
  const comment=req.params.comment;
  const sqlGet = "UPDATE users SET USER_NAME = NULL, USER_LAST_NAME=NULL, USER_SEC_LAST_NAME=NULL, BIRTH=NULL, NATIONALITY=NULL, STATE=NULL, RFC=NULL, GENDER=NULL, EMAIL=NULL, INFO_JSON=NULL, IS_CLIENT=NULL, DELETED_AT=current_date()  WHERE USER_ID="+userid+";";
  const sqlDel= "DELETE FROM addresses WHERE USER_ID="+userid+";";
  const sqlDel2= "DELETE FROM identifications WHERE USER_ID="+userid+";";


  //const sqlDel3 = "insert into kueski_data.arco (USER_ID, ACTION_TYPE, ARCO_DATE,arco.COMMENT) values ("+userid+", 'C', current_date(),'"+comment+"');";
  //db.query(sqlDel3, [userid,comment], (err, result) => {
  //  res.send(result);
  //});

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