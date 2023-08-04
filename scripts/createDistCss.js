const fs = require('fs');
const path = require('path');
const packageJson = require(path.join(process.cwd(), 'package.json'));
const arrTemp = packageJson.name.split('/');
const packageName = arrTemp.length > 1 ? arrTemp[1] : arrTemp[0];
function finalizeCompile() {
  if (fs.existsSync(path.join(process.cwd(), './lib'))) {
    const componentsPath = path.join(process.cwd(), 'src');
    let componentsLessContent = '';
    fs.readdir(componentsPath, (err, files) => {
      if (err) throw new Error(err);
      files.forEach((file) => {
        if (
          fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))
        ) {
          componentsLessContent += `@import "../${path.join(
            file,
            'style',
            'index.less',
          )}";\n`.replace(/\\/g, '/');
        }
      });
      fs.writeFileSync(
        path.join(process.cwd(), 'lib', 'style', 'components.less'),
        componentsLessContent,
      );
    });
  }
}

function finalizeDist() {
  if (fs.existsSync(path.join(process.cwd(), './dist'))) {
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', `${packageName}.less`),
      '@import "../lib/style/index.less";\n@import "../lib/style/components.less";',
    );
    console.log(`Built a entry less file to dist/${packageName}.less`);
  }
}

function finalizeCss() {
  if (fs.existsSync(path.join(process.cwd(), './dist'))) {
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'css.js'),
      `import "./${packageName}.less";`,
    );
    console.log('Built a entry js file to dist/css.js');
  }
}

finalizeCompile();
finalizeDist();
finalizeCss();
