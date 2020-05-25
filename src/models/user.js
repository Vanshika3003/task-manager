const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('age must be > 0');
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('invalid email');
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new error('invalid password');
      }
    },
  },
});
userSchema.statics.findByCredentials = async (email, password) => {
  const User = await user.findOne({ email });
  console.log('User...', User);
  if (!User) {
    throw new Error('unable to login');
  }
  console.log('PWD..User.PWD..', password, User.password);
  const isMatch = await bcrypt.compare(password, User.password);
  if (!isMatch) {
    throw new Error('unable to login');
  }
  return User;
};
userSchema.pre('save', async function (next) {
  const user = this;
  console.log('just before saving');
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const user = mongoose.model('user', userSchema);
module.exports = user;
