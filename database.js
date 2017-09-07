var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/my_database');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongodb");
  // we're connected!
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  phone_num: Number,
  address: String,

});

var User = mongoose.model('User', userSchema);

app.post('/request', function(req,res) { 
  var a = new User({
   email: req.body.email,
   name: req.body.name,
   password: req.body.password,
   phone_num: req.body.num,
   address: req.body.address,
  });

  a.save(function(err) {
   if (err) throw err;
   else console.log('save user');
  });
});

app.listen(3000,function() {
  console.log("app is listening on port 3000");
});
