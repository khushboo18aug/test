const express = require('express');
const validate = require('express-validation');
const http = require('http');
bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

// app.post('/login', validate(validation.login), function(req, res){
//   req.checkBody("email", "Enter a valid email address.");
// });
 

// app.use(function(err, req, res, next){
//   res.status(400).json(err);
// });
 
//  http.createServer(app);
//  var Joi = require('joi');
 
//  module.exports = {
//   body: {
//     email: Joi.string().email().required(),
//     password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
//   }
// };
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
 
app.post('/user', [
  check('username')
    // Every validator method in the validator lib is available as a
    // method in the check() APIs.
    // You can customize per validator messages with .withMessage()
    .isEmail().withMessage('must be an email')
 
    // ...or throw your own errors using validators created with .custom()
    .custom(value => {
      return findUserByEmail(value).then(user => {
        throw new Error('this email is already in use');
      })
    }),
 
  // General error messages can be given as a 2nd argument in the check APIs
  check('password', 'passwords must be at least 5 chars long and contain one number')
    .isLength({ min: 5 })
    .matches(/\d/),
 
  // No special validation required? Just check if data exists:
  check('addresses.*.street').exists(),
 
  // Wildcards * are accepted!
  check('addresses.*.postalCode').isPostalCode(),
], (req, res, next) => {
  // Get the validation result whenever you want
  const errors = validationResult(req).throw();
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: err.mapped() });
  }
 
  // matchedData returns only the subset of data validated by the middleware
  const user = matchedData(req);
  createUser(user).then(user => res.json(user));
});
app.listen(3000,function() {
  console.log("app is listening on port 3000");
});
