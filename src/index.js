import 'dotenv/config';
import cors from 'cors';
import express from 'express';
 
const app = express();
app.use(cors());
const { Model } = require("sequelize");
var Student = require("../models/student.js");
app.get('/students', (req, res) => {
  Student.findAll({}).then(function(results){
    res.json(results);
  })
});
app.get('/students/:studentId', (req, res) => {
  Student.findAll({
      where: {
          id: req.params.student_id
        }
      }).then(function(results){
        res.json(results);
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