const http = require("http");
const chalk = require("chalk");
const app = require("./app");
const config = require("./config");
const mongoose = require("mongoose");

// 连接数据库
mongoose.connect(
  `mongodb://${config.db_host}:${config.db_port}/${config.db_name}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (error) => {
    if (error) {
      console.log(chalk.red("数据库连接失败："));
      console.log(chalk.red(error));
    } else {
      // 创建并且启动服务
      const server = http.createServer(app);
      console.log(chalk.green('数据库连接成功'));
      server.on("error", (error) => {
        console.log(chalk.red("server error:"));
        console.log(chalk.red(error));
      });

      server.listen(config.server_port, () => {
        console.log(
          "服务启动成功:",
          chalk.green(`http://${config.server_host}:${config.server_port}`)
        );
      });
    }
  }
);
