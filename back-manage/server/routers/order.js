const {Router} = require('express');
const Order = require('../model/Order');
const User = require('../model/User');
const router = new Router();

// 添加订单
router.post('/add-order', async (req, res)=>{
  try {
    const result = await User.findOne({acount: 'lili'}, {password: false});
    
    //添加订单
    const goods = Order({user: result._id}).save();
    // 响应客户端
    res.json({
      code: 0,
      message: "ok",
    });
  } catch (error) {
    console.log('error............');
    res.json({
      code: -2,
      message: "error",
    });
  }
})

module.exports = router;