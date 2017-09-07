const express = require('express');
const app = express();

app.get('/profile/:name', function(req,res) {
  res.send(req.params)
});
app.listen(3000,function() {
  console.log("app is listening on port 3000");
});