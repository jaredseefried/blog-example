const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email address is required',
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  retypeEmail: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    min: [6, 'Too few eggs'],
  },

  retypePassword: {
    type: String,
    min: [6, 'Too few eggs'],
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const Signup = mongoose.model("Signup", SignupSchema);

module.exports = Signup;