const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const bcrypt = require(bcrypt);
const jwt = require('jsonwebtoken');
const User = mongoose.model('Userid');

const UserSchema = new Schema({
  fullName: {
   type: String,
   required: true,
   trim: true
  },

  email: String,
  password: String,

  created: {
   type : Date,
   default: Date.now   
  }
});

UserSchema.methods.comparepassword = (password)=> {
  return bcrypt.compareSync(password,this.has_password);
}

mongoose.model('Userid',UserSchema);