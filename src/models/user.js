const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }
  next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;
