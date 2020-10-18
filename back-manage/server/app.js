const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/pc/static', express.static(path.join(__dirname, './www')));


app.use('/pc/api/user', require('./routers/userRouter'))
app.use('/pc/api/goods', require('./routers/goods'))
app.use('/pc/api/orders', require('./routers/order'))

app.use('/pc', (req, res)=>{
  res.sendFile(path.join(__dirname, './www/index.html'));
});

module.exports = app;