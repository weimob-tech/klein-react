const fs = require('fs');
const path = require('path');
const marked = require('marked');
const chalk = require('chalk');
const pak = require('../package.json');
const { parseTs } = require('./docgen');

const isPub = process.argv[2];
const root = process.cwd();
const target = `${root}/docs-cdn`;
const versionTarget = isPub ? `${target}/${pak.version}` : `${target}/preview`;
const srcPath = `${root}/src`;

const createMd = ({ target, compIndexMd, file }) => {
  fs.copyFileSync(compIndexMd, `${target}/${file}.md`);
};

const createHtml = ({ target, compIndexMd, file }) => {
  const baseHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${file}</title>
</head>
<body>
</body>
</html>`;
  const fileContent = fs.readFileSync(compIndexMd, {
    encoding: 'utf-8',
  });
  const html = marked(fileContent);
  const endHtml = baseHtml.replace(/(?<=\<(body)\>)[\s\S]*(?=\<\/\1\>)/, html);
  fs.writeFileSync(`${target}/${file}.html`, endHtml, {
    encoding: 'utf-8',
  });
};

const createJson = ({ target, file }) => {
  const fileArr = fs.readdirSync(`${srcPath}/${file}`);

  const handleCompProps = (name) => {
    if (~name.indexOf('|')) {
      let types = name.split('|');
      return types;
    }
    return [];
  };

  const getTestPladtformData = ({ keys, props }) => {
    const end = keys.reduce((target, key) => {
      const prop = props[key];
      const testPladtformObj = {
        name: prop.name,
        compProps: prop.type
          ? prop.type.name
            ? handleCompProps(prop.type.name)
            : []
          : [],
        type: prop.defaultValue ? prop.defaultValue.value : null,
        desc: prop.description,
      };
      target.push(testPladtformObj);
      return target;
    }, []);
    return end;
  };

  if (fileArr && fileArr.length) {
    fileArr.forEach((item) => {
      if (path.extname(item) == '.tsx') {
        const path = `${srcPath}/${file}/${item}`;
        const data = parseTs(path, getTestPladtformData);
        if (data) {
          fs.writeFileSync(`${target}/${file}.json`, JSON.stringify(data));
        }
      }
    });
  }
};

const programInit = () => {
  const files = fs.readdirSync(srcPath);
  if (files && files.length) {
    files.forEach((file) => {
      const compIndexMd = `${srcPath}/${file}/index.md`;
      if (fs.existsSync(compIndexMd)) {
        if (!fs.existsSync(target)) {
          fs.mkdirSync(target);
        }
        if (!fs.existsSync(versionTarget)) {
          fs.mkdirSync(versionTarget);
        }
        const params = {
          target: versionTarget,
          compIndexMd,
          file,
        };
        console.log(chalk.yellow(file + '相关文件生成中...'));
        try {
          createMd(params);
          createHtml(params);
          createJson(params);
          console.log(chalk.green(file + '相关文件输出成功...'));
        } catch (error) {
          console.log(chalk.red(file + '相关文件输出失败..' + error));
        }
      }
    });
  }
};

programInit();
