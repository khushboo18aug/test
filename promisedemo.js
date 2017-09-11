var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/my_database');
const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function() {
  console.log("connected to mongodb");
  // we're connected!
});
var Schema = mongoose.Schema;
var COM = new Schema({
    email:String,
    company_name:String,
    company_address:String,
    company_location:String,
  });

var Company = mongoose.model('Company', COM);

app.post('/company', function(req,res) { 
  var b = new Company({
    email: req.body.email,
    company_name: req.body.name,
    company_address: req.body.address,
    company_location: req.body.location,
  });

  b.save(function(err, result) {
   if (err) throw err;
   else res.json(result).status(201);
  });
});
