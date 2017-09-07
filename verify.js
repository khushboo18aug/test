const express = require('express');
const app = express();
var router= express.Router();
var secretKey = "goat";

router.post('/secret', function (req, res) {  
  var secret = req.body.secret;
  var user = {};
  user.authorised = secret === secretKey ? true : false;
  res.render('secret', user);
});

router.get('/secret/:key', function (req, res) {  
  var secret = req.params.key;
  var user = {};
  user.authorised = secret === secretKey ? true : false;
  res.render('secret', user);
});

router.get('/secret', function (req, res) {  
  var user = {
    authorised: false
  };
  res.render('secret', user);
});


app.listen(3000,function() {
  console.log("app is listening on port 3000");
});
