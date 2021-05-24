import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
 
const app = express();
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'salvus'
});
conn.connect();
app.use(cors());
 
app.get('/students', (req, res) => {
  const sql = `
    SELECT student.first_name, student.last_name, school.school_name
    FROM student
    INNER JOIN school
    ON student.school_id = school.school_id;
  `;
  /*Student.findAll({}).then(function(results){
      res.json(results);
    })*/
  conn.query(sql, function(err, rows, fields){
    if (err) return res.send(err);
    return res.send(rows);
  });
});
app.get('/students/:studentId', (req, res) => {
    const sql = `
    SELECT student.first_name, student.last_name, school.school_name
    FROM student
    INNER JOIN school
    ON student.school_id = school.school_id
    WHERE student.student_id = ${req.params.studentId};
  `;
  /*Student.findAll({
        where: {
          id: req.params.student_id
        }
      }).then(function(results){
        res.json(results);
      });*/
  conn.query(sql, function(err, rows, fields){
    if (err) return res.send(err);
    return res.send(rows);
  });
});

app.post('/students', (req, res) => {
  return res.send('Received a POST HTTP method');
});
 
app.put('/students', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
 
app.delete('/students', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
app.get("/api/all", function(req, res) {
  Model.findAll({}).then(function(results){
    res.json(results);
  })
});