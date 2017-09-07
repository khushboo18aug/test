const express = require('express');
const app = express();

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })

  .post(function (req, res) {
    res.send('Add a book')
  })

  .put(function (req, res) {
    var a = 10;
    var b = 11;
    var c = a+b;
    res.json({
     result: c
    });
  })

app.listen(3000,function() {
  console.log("app is listening on port 3000");
});