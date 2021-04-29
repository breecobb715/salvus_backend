app.get("/api/student/name", function(req, res) {
  debugger;
  Student.findOne({
    where: {
      student_id: req.params.student
    }
  }).then(function(results){
    res.json(results);
  });
});