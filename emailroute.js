const express = require('express')
const app = express();

app.get('/login',function(req,res){
  var eml = new RegExp('/^[A-Za-z0-9_.]{2,100}+@[A-Za-z0-9_.]{2,100}+\.[A-Za-z]{2,100}$/);
  if (eml.test(email)){
    return true;
  }else{
    console.log("incorrect email");
  }

  var passwd= new RegExp (/^[a-zA-Z0-9]{6,100}$/);
  if (passwd.test(password)){
    return true
  }else{
    console.log("incorrect password");
  }

});

  app.listen(3000,function() {
  console.log("app is listening on port 3000");
});