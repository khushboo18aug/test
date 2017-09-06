const express = require('express');
const app = express();

app.get(/.*fly$/, function(req,res) {
  res.send('hello world')
});

app.get(/.*fl$/, function(req,res) {
  res.send('hello world')
});

app.post('/123', function(req,res) {
 res.send('hey there 123')
});

app.put('/user',function(req,res){
res.send('put the request')
});

app.delete('/123',function(req,res) {
  res.send('delete data from here')
});

app.listen(3000,function() {
  console.log("app is listening on port 3000");
});