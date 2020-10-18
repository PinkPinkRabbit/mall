const mongoose = require('mongoose');

module.exports = mongoose.model('orders', {
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user'
  },
  time: {
    type: String,    
  }
  
})