const path = require('path');
const compressing = require('compressing');
const chalk = require('chalk');
const fs = require('fs');

function init() {
  const fileUrl = path.resolve(process.cwd(), '');
  const url = `${fileUrl}/docs-dist`;
  const targetNameZip = `${url}.zip`;
  fs.stat(targetNameZip, function (exists) {
    // console.log(exists );
    if (!exists) {
      // 如果存在就删除
      fs.unlinkSync(targetNameZip);
    }
    console.log(chalk.yellow(` 开启文件压缩中.......🐸`));
    try {
      compressing.zip
        .compressDir(url, targetNameZip)
        .then(() => {
          console.log(chalk.green(` 文件压缩成功...... ✌️✌️✌️`));
        })
        .catch((err) => {
          console.log(chalk.red('文件压缩报错 😣😣'));
        });
    } catch (e) {
      console.log(chalk.red('文件压缩报错 😣😣'));
    }
  });
}
init();
