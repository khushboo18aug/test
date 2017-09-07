const express = require('express');
const app = express();

// app.get('/example/b', function (req, res,next) {
//   console.log('the response will be sent by the next function ...')
//   next()
// },function (req, res) {
//     res.send('Hello from B!')
//   });


var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
app.listen(3000,function() {
  console.log("app is listening on port 3000");
});