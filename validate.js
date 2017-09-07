const express = require('express');
const validate = require('express-validation');
const http = require('http');
bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

app.post('/login', validate(validation.login), function(req, res){
  req.checkBody("email", "Enter a valid email address.");
});
 

app.use(function(err, req, res, next){
  res.status(400).json(err);
});
 
 http.createServer(app);
 var Joi = require('joi');
 
 module.exports = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
  }
};
app.listen(3000,function() {
  console.log("app is listening on port 3000");
});
