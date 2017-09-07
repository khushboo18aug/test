const express = require('express');
const bodyParser = require('body-parser');
const { body,check, param, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const user = {
  email: 'khushboo@gmail.com',
  password: '123456',
};

app.post('/login', [
  body('emailId').isEmail().withMessage('Not a valid email'),
  body('passcode').isLength({ min: 5 }).matches(/\d/)
  
], function(req, res, next) {
    const errors = validationResult(req);
    const user = matchedData(req);
    if (!errors.isEmpty()) {
     return res.status(422).json({ errors: errors.mapped() });
    }

    next();
  }, function(req,res) {
      console.log(req.body.emailId);
      console.log(req.body.passcode);
      if (user.email == req.body.emailId && req.body.passcode == user.password) {
        console.log("user is valid"); 
      }else {
        console.log("user is invalid");       
      }
    });

app.listen(3000,function() {
  console.log("app is listening on port 3000");
});