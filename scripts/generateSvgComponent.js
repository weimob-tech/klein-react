const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const chalk = require('chalk');
const svgr = require('@svgr/core').default;
const svgTemplate = require('./svgTemplate/index.js');

const compsPath = path.join(process.cwd(), './packages/klein-components/components');
const svgsPath = compsPath + '/svg';
const svgCompPath = compsPath + '/svg-components';
// const svgFileDirectories = fs.readdirSync(svgsPath, { encoding: 'utf-8' })

// const renameSvg = () => {
//   svgFileDirectories.forEach((dir) => {
//     const basefilePath = svgsPath + '/' + dir
//     const svgFiles = fs.readdirSync(basefilePath, { encoding: 'utf-8' })
//     svgFiles.forEach((file) => {
//       if (file) {
//         const humpDir = dir.substring(0).toUpperCase() + dir.substring(1, dir.length)
//         const oldName = basefilePath  + '/' + file
//         const newName = basefilePath  + '/' + file + humpDir
//         console.log(fs.renameSync(oldName, newName))
//       }
//     })
//   })
// }

const changeFirstWord = (name, toUpperCase) => {
  const firstWord = toUpperCase
    ? name.substring(0, 1).toUpperCase()
    : name.substring(0, 1).toLowerCase();
  return firstWord + name.substring(1, name.length);
};

const handleJsCode = (code, name) => {
  if (code) {
    const reg = /(<svg[\s\S]*>[\s\S]*<\/svg>)/;
    const classString =
      '${iconPrefix} ${iconPrefix}-' + changeFirstWord(name, false);

    code = code.replace(/\{\.{3}props\}/, '');
    code = code.replace(reg, ($1) => {
      return (
        '<span className={' +
        'cx(`' +
        classString +
        '`, className)' +
        '} ref={ref} {...reset} >' +
        $1 +
        '</span>'
      );
    });
  }
  return code;
};

const generateSvgComponent = () => {
  const files = fs.readdirSync(svgsPath, { encoding: 'utf-8' });
  if (fs.existsSync(svgCompPath)) {
    rimraf.sync(svgCompPath);
  }
  if (files && files.length) {
    files.forEach((path) => {
      let curFiles = fs.readdirSync(svgsPath + '/' + path, {
        encoding: 'utf-8',
      });
      curFiles.forEach((file) => {
        if (file) {
          const svgComponentName = changeFirstWord(
            file.replace(/\.svg/, ''),
            true,
          );
          const svgCode = fs.readFileSync(svgsPath + '/' + path + '/' + file, {
            encoding: 'utf-8',
          });
          svgr(
            svgCode,
            {
              icon: true,
              plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
              typescript: true,
              replaceAttrValues: {
                '#595959': 'currentColor',
                '#262626': 'currentColor',
                '#000000': 'currentColor',
                '#000': 'currentColor',
                '#1F2026': 'currentColor',
                '#333333': 'currentColor',
                '#1E2226': 'currentColor',
              },
              template: svgTemplate,
            },
            { componentName: svgComponentName },
          ).then(
            (jsCode) => {
              const svgComponentPath = `${svgCompPath}/${svgComponentName}.tsx`;
              const svgIndexPath = `${svgCompPath}/index.tsx`;
              let indexContent = '';
              let curIndexContent = `
export { default as ${svgComponentName} } from './${svgComponentName}'`;
              try {
                if (!fs.existsSync(svgCompPath)) {
                  fs.mkdirSync(svgCompPath);
                }
                if (fs.existsSync(svgIndexPath)) {
                  indexContent = fs.readFileSync(svgIndexPath, {
                    encoding: 'utf-8',
                  });
                }
                //生成index文件
                fs.writeFileSync(svgIndexPath, indexContent + curIndexContent, {
                  encoding: 'utf-8',
                });
                //创建icon文件
                if (!fs.existsSync(svgComponentPath)) {
                  fs.writeFileSync(
                    svgComponentPath,
                    handleJsCode(jsCode, svgComponentName),
                    {
                      encoding: 'utf-8',
                    },
                  );
                }
                console.log(chalk.green(`${svgComponentName}组件文件输出成功`));
              } catch (error) {
                console.log(
                  chalk.red(`${svgComponentName}组件文件输出失败：` + error),
                );
              }
            },
            (error) => {
              console.log(chalk.red('svg转换失败：' + error));
            },
          );
        }
      });
    });
  }
};

generateSvgComponent();
