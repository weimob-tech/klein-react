var fs = require('fs/promises');
var path = require('path');
const ENCODING = 'utf8';
const ignoreRule = /^\..*$/;
const targetDir = path.relative(process.cwd(), 'src');
const curComp = process.argv[2] || 'components';
console.log('${targetDir}/${curComp}...', `${targetDir}/${curComp}`);
async function modifyFile(pathUrl, value = '// @ts-nocheck') {
  let data = await fs.readFile(pathUrl, ENCODING);
  if (data.indexOf(value) == -1) {
    await fs.writeFile(pathUrl, `${value}\n${data}`, ENCODING);
  }
}

let allFiles = [];
async function getAllFilePathFrom(dirPath, layer = 1, rule = ignoreRule) {
  let dir = await fs.readdir(dirPath, ENCODING);
  // console.log('layer', layer)
  let restDir = [];
  for (i = 0; i < dir.length; i++) {
    const item = dir[i];
    if (rule.test(item) || (layer === 1 && item.indexOf('rc-') == -1)) {
      console.log(item);
      continue;
    }
    const path = `${dirPath}/${item}`;
    let tat = await fs.lstat(path);
    if (tat.isFile()) {
      path.indexOf('.less') == -1 && allFiles.push(path);
    } else {
      restDir.push(path);
    }
  }
  // console.log('restDir', restDir)
  for (let j = 0; j < restDir.length; ) {
    await getAllFilePathFrom(restDir[j], layer + 1);
    j++;
  }
}
async function main() {
  await getAllFilePathFrom(`${targetDir}/${curComp}`);
  console.log(allFiles);
  allFiles.forEach((item) => {
    modifyFile(item);
  });
}
main();
