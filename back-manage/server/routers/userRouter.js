const {Router} = require('express');
const User = require('../model/User');
const JWT  = require('jsonwebtoken');
const config = require('../config');

const router = new Router();

// 注册
router.post('/register', async (req, res)=>{
  try {
    // 获取参数
    const {acount, password} = req.body;
    const result = await User.findOne({acount});
    if(result){
      res.json({
        code: -2,
        message: '该账号已存在'
      });
      return;
    }
    //注册
    const user = User({acount, password}).save();
    // 响应客户端
    res.json({
      code: 0,
      message: "ok",
    });
  } catch (error) {
    res.json({
      code: -1,
      message: "error",
    });
  }
})
// 登录
router.post('/login', async (req, res)=>{
  try {
    const {acount, password} = req.body;
    const result = await User.findOne({acount, password}, {password: false});
    if(result){
      // 登录成功用JWT保存用户登录状态
      // 1 生成token
      const token = JWT.sign(
        {
          acount: result.acount
        },
        config.token_key,
        { expiresIn: config.expiresIn }
      );
      // 2 保存token      
      res.json({
        code: 0,
        message: '登录成功',
        data: token
      });
    }else{
      res.json({
        code: -2,
        message: '登录失败'
      });  
    }
  } catch (error) {
    console.log(error);
    res.json({
      code: -1,
      message: 'error'
    }); 
  }
})

// 中间件，解析token
router.use(async (req,res,next)=>{
  try {
    // 获取请求携带的token
    const token = req.headers['authorization'].replace('Bearer ', '')
    // 解析token
    const result = JWT.verify(token, config.token_key);
    const userInfo = User.findOne({acount: result.acount}, {password: false});
    req.userInfo = userInfo;
    next();
    
  } catch (error) {
    res.json({
      code: -1,
      message: '请重新登录'
    })
  }
})

// 检查登录是否过期
router.get('/check_login', async (req, res)=>{
  res.json({
    code: 0,
    message: 'ok',
    data: null
  });
});

// 查询用户信息
router.get("/info", async (req, res) => {
  res.json({
    code: 0,
    message: "ok",
    data: req.userInfo,
  });
});

module.exports = router;