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
  console.log(req.params)
  Student.findAll({
      where: {
          student_id: req.params.studentId
        }
      }).then(function(results){
        res.json(results);
  });
});

app.post('/newstudent', (req, res) => {
  console.log("New Student Object: " + req.params)
  const createdStudent =  Student.create({
    student_id: req.params.student_id,
    first_name: req.params.first_name,
    last_name: req.params.last_name,
    parent_first_name: req.params.parent_first_name,
    parent_last_name: req.params.parent_last_name,
    parent_contact_method: req.params.parent_contact_method,
    parent_contact_info: req.params.parent_contact_info,
    status: "SAFE",
    location: null
  });
  console.log(createdStudent);
});
app.post('/updatestudent', (req, res) => {
  const createdStudent =  Student.create({
    student_id: req.params.student_id,
    first_name: req.params.first_name,
    last_name: req.params.last_name,
    parent_first_name: req.params.parent_first_name,
    parent_last_name: req.params.parent_last_name,
    parent_contact_method: req.params.parent_contact_method,
    parent_contact_info: req.params.parent_contact_info,
    status: "SAFE",
    location: null
  });
  console.log(createdStudent);
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);