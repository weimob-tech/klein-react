/**
 * 默认自动自动解析ts interface并且生成md文件api文档
 * 1. 不写注释默认不转换;
 * 2. 书写@link="React.ReactElement|()=>React.ReactElement"则直接解析‘@link’后的内容;
 * 3. 书写@link="[ButtonProps](/components/button)"则直接解析为a标签并且点击ButtonProps后跳转。
 */
const fs = require('fs');
const util = require('util');
const path = require('path');
const { parseTs } = require('../../scripts/docgen');
const ignoreConfig = require(path.join(process.cwd(), '.apiIgnorerc.js'));
const readFile = util.promisify(fs.readFile);

class ApiGenerator {
  constructor(options) {
    this.opts = options;
    this.startTime = Date.now();
    this.prevTimestamps = new Map();
    this.getIgnoreFilesReg();
  }

  getIgnoreFilesReg() {
    if (ignoreConfig.ignoreFiles && ignoreConfig.ignoreFiles.length) {
      let ignoreFilesRegArr = [];
      ignoreConfig.ignoreFiles.forEach((item) => {
        let reg;
        if (typeof item === 'object') {
          reg = `(src[\\/|\\\\]${item.name}[\\/|\\\\](${item.files.join(
            '|',
          )})\\.tsx)`;
        } else {
          reg = `(src[\\/|\\\\]${item}[\\/|\\\\])`;
        }
        ignoreFilesRegArr.push(reg);
      });
      this.ignoreFilesReg = new RegExp(ignoreFilesRegArr.join('|'));
    }
  }

  handlePropType(type) {
    let end;
    if (type && type.name) {
      end = type.name;
      if (end.indexOf('|')) {
        let types = end.split(' |');
        types = types.map((t) => {
          return '`' + t + '`';
        });
        end = types.join('\\|');
      }
    }
    return type && type.name ? end : '';
  }

  camel2Dash(_str) {
    if (_str.indexOf('-') == -1) {
      return `${_str[0].toUpperCase() + _str.substr(1)}_API`;
    }
    _str = _str.replace(/(?<=\-)\w{1}/, ($1) => {
      return $1.toUpperCase();
    });
    _str = _str[0].toUpperCase() + _str.substr(1);
    return _str.replace(/\-/g, `\\.`);
  }

  handleDefaultVal = (_defaultVal) => {
    //去除换行符
    _defaultVal = _defaultVal.replace(/\n/g, '');
    return _defaultVal;
  };

  async updateMd({ keys, props, path }) {
    let string = `

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
`;
    const reg = new RegExp(`${this.compName}.tsx`);
    const staticCompEeg = this.camel2Dash(this.compName);
    // md文件末尾的### (注意有空格)请勿删除
    const endCommda = /#{3}\s+$/;
    // 匹配需要替换的内容
    const contentReg = new RegExp(
      `(?<=\\#{2,3}\\s(${staticCompEeg}))[\\s\\S]*?(?=(\\#{2,3}\s*))`,
    );
    let mdPath = path.replace(reg, 'index.md');
    if (!fs.existsSync(mdPath)) return;
    let mdFileContent;
    try {
      mdFileContent = await readFile(mdPath, 'utf-8');
    } catch (err) {
      throw err;
    }
    // 组合模式类型的组件，如Button.Group，新建文件后需要在md文件创建对应的api文档
    if (!new RegExp(`${staticCompEeg}`).test(mdFileContent)) {
      const compApiName = staticCompEeg.replace('\\', '');
      mdFileContent = mdFileContent.replace(endCommda, `### ${compApiName}`);
      console.log(`自动创建${this.compName}组件api文档...`);
    }
    // 没有###则自动创建一个
    if (!endCommda.test(mdFileContent)) {
      console.log('自动创建###...');
      mdFileContent = `${mdFileContent}

### 
`;
    }
    // 超链接类型 @linkType @link
    function linkTypeFilter(prop) {
      const desc = prop.description;
      const descriptionReg = /@link.*/g;
      if (/@link/g.test(desc)) {
        return `${desc.replace(descriptionReg, '')} | ${getTypeContent()}`;
      }
      return `${desc} | ${this.handlePropType(prop.type)} `;

      function getTypeContent() {
        const linkReg = /(?<=@link=").+(?=")/g;
        const linkArr = desc.match(linkReg);
        const link = linkArr && linkArr[0];
        return link && link.replace(/\|/, '  \\|  ');
      }
    }
    keys.forEach((key) => {
      const prop = props[key];
      // 包含注释的属性才会添加到API文档中
      if (prop && prop.description) {
        string += `| ${prop.name}      | ${linkTypeFilter.call(this, prop)} | ${
          prop.defaultValue
            ? this.handleDefaultVal(prop.defaultValue.value) || '-'
            : '-'
        }      |\n`;
      }
    });
    string = `${string}

`;
    mdFileContent = mdFileContent.replace(contentReg, string);
    fs.writeFile(mdPath, mdFileContent, (err) => {
      if (err) throw err;
      console.log('md文件更新成功');
    });
  }

  getFileContent(path) {
    parseTs(path, this.updateMd.bind(this));
  }

  handleIsIgnoreFile(filePath) {
    if (!this.ignoreFilesReg) return false;
    return this.ignoreFilesReg.test(filePath);
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      // const changeFiles = watching.watchFileSystem.watcher.mtimes;
      const changedFiles = Array.from(compilation.fileTimestamps.keys()).filter(
        (watchfile) => {
          return (
            (this.prevTimestamps.get(watchfile) || this.startTime) <
            (compilation.fileTimestamps.get(watchfile) || Infinity)
          );
        },
      );
      changedFiles.forEach((key) => {
        // 当src文件夹下的组件代码改变时
        const reg = /src(?![\/|\\]components[\/|\\])[\/|\\].+[\/|\\](?!index\.tsx).+\.tsx/;
        if (key && reg.test(key)) {
          if (!this.handleIsIgnoreFile(key)) {
            this.compName = /(?<=src[\/|\\].+[\/|\\]).+?(?=\.tsx)/.exec(key)[0];
            this.getFileContent(key);
          }
        }
      });

      this.prevTimestamps = compilation.fileTimestamps;
      callback();
    });
  }
}

export default ApiGenerator;
