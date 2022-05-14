const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ], 
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false,
  },
}) 

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}
  

module.exports = mongoose.model('User', UserSchema);
