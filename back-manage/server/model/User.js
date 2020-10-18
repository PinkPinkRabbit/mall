const mongoose = require('mongoose');

module.exports = mongoose.model('user', {
  acount: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  idAdmin: {
    type: Boolean,
    default: false
  }
})