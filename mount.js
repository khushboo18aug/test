
const express = require('express');
const app = express();

app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.listen(3000,function() {
  console.log("app is listening on port 3000");
});
