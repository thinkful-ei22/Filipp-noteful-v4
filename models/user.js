'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
    delete ret.password;
  }
});

userSchema.methods.validatePassword = function (password) {
  return password === this.password;
};

module.exports = mongoose.model('User', userSchema);