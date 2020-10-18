const {Router} = require('express');
const Goods = require('../model/Goods');

const router = new Router();

// 添加商品
router.post('/add-goods', async (req, res)=>{
  try {
    // 获取参数
    const {title, price, desc} = req.body;
    
    if(!title || !price || !desc){
      res.json({
        code: -1,
        message: "参数错误",
      });
      return;
    }
    //添加商品
    const goods = Goods({title, price, desc}).save();
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

// 查询商品
router.get("/get-goods", async (req, res) => {

  const result = await Goods.find();

  res.json(result);
});

module.exports = router;