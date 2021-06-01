import 'dotenv/config';
import cors from 'cors';
import express from 'express';
 
const app = express();
app.use(cors());
app.use(express.json());
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
  console.log("New Student Object: " + req.body)
  const madeStudent = req.body;
  const createdStudent =  Student.create({
    student_id: madeStudent.student_id,
    first_name: madeStudent.first_name,
    last_name: madeStudent.last_name,
    parent_first_name: madeStudent.parent_first_name,
    parent_last_name: madeStudent.parent_last_name,
    parent_contact_method: madeStudent.parent_contact_method,
    parent_contact_info: madeStudent.parent_contact_info,
    status: "SAFE",
    location: null
  });
  res.send("Student added")
});
app.post('/updatestudent/:studentId', async (req, res) => {
  const updatedInfo = req.body;
  const studentToUpdate = await Student.findOne({
    where: {
      student_id: req.params.studentId
    }
  });
  studentToUpdate.status = updatedInfo.status;
  studentToUpdate.location = updatedInfo.location;
  studentToUpdate.save();
  res.send("Student updated")
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);