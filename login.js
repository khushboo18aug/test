const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/login',function(req,res) {
  var user_name =req.body.user
  var password = req.body.password

});


app.listen(3000,function() {
  console.log("app is listening on port 3000");
});