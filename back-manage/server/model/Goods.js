const mongoose = require('mongoose');

module.exports = mongoose.model('goods', {
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: 'https://yanxuan-item.nosdn.127.net/21419839ca11c831c37557977be19e68.png?type=webp&quality=95&thumbnail=245x245&imageView'
  }
  
})