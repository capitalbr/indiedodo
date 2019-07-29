const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio_header: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  password_digest: {
    type: String,
    required: true,
    min: 6,
    max: 64
  }
});

module.exports = User = mongoose.model('users', UserSchema);
