const express = require('express');
const app = express;
const port =process.env.PORT||3001;
const mongoose = require('mongoose'); 
const Task = require('./api/models/todoListModel');
//const Userid = require('./api/models/userModel'),
jsonwebtoken = require("jsonwebtoken");
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use expressJWT();
var routes = require('./api/routes/todoListRoutes');
 routes(app);

 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function() {
  console.log("connected to mongodb");
  // we're connected!
});


app.use(function(res,req,next) {
  if(req.headers && req.headers.authorization && req.headers.authorization.split('')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split()[1],'RESTFULAPIs',function(error,decode) {
      if (err) { req.user == undefined;
        req.user = decode;
        next();
      }        
      else { 
        req.user==undefined;
        next();
      }
    });                                       
  };
});

app.listen(3000,function() {
  console.log("app is listening on port 3000");
});

