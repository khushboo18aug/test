const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/my_database');
const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function() {
  console.log("connected to mongodb");
  // we're connected!
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  phone_num: Number,
  address: String,
  age: Number,
});

const companySchema = new Schema({
    mail:String,
    company_name:String,
    company_address:String,
    company_location:String,
  });

var Company = mongoose.model('Company', companySchema);
const User = mongoose.model('User', userSchema);

app.post('/user', (req,res)=> { 
  const a = new User({
   email: req.body.email,
   name: req.body.name,
   password: req.body.password,
   phone_num: req.body.num,
   address: req.body.address,
   age: req.body.age,
  });

  a.save((err, result)=> {
   if (err) throw err;
   else res.json(result).status(201);
  });
});

app.post('/company', function(req,res) { 
  var b = new Company({
    mail: req.body.mail,
    company_name: req.body.name,
    company_address: req.body.address,
    company_location: req.body.location,
  });

  b.save(function(err, result) {
   if (err) throw err;
   else res.json(result).status(201);
  });
});


app.listen(3000,() =>{
  console.log("app is listening on port 3000");

});

app.get('/user/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(result => Company.findById(result.company))
    .then((companyDetails)=> {
      res.json(companyDetails);
    })
    .catch((ex)=> {
      console.log(ex);
   });
  // User.findById(req.params.userId, function(err, result) {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     console.log('found user');
  //     Company.findById(result.comany, function(err, result) {
  //       res.sendStatus(404).json(result);
  //     })
  //   }
  // });
});  

app.put('/user/:userId',(req,res) => {
 User.update(req.params.userId, { $set: {name: req.body.name}}, (err,result)=> {
   if (err) res.sendStatus(500).send(err);
     else {
      
      res.status(202);
      res.json(result);
      console.log("entry is updated");
    }
  });
});

app.delete('/user/:userId', (req,res)=> {
  User.deleteOne(req.params.userId, (err)=> {
    if (!err) {
      res.status(204).send('No Content');
    } else {
      res.status(500);
    }
  });
});