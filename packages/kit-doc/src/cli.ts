import cac from 'cac';
import init from './init';

const cli = cac('kit-doc');

// cli
// .command('init', '初始化组件库模板项目')
// .option('--name [name]', '项目系统名称', {
//   default: '',
// })
// .action((options) => {
//   // initTmpl(options);
// });

cli
  .command('[root]')
  .alias('start')
  .option('--html', '[boolean | object] 是否输出html文件', {
    default: false,
  })
  .option('--kraken', '[boolean] 是否以微前端的方式启动本地服务', {
    default: true,
  })
  // 暂时不支持cssModule
  // .option('--cssModule', '[boolean] 是否开启cssModule', {
  //   default: true,
  // })

  .action((root: string, options: any) => {
    init('start', options);
  });

cli
  .command('[root]')
  .alias('build')
  .option('--html', '[boolean | object] 是否输出html文件', {
    default: false,
  })
  .option('--kraken', '[boolean] 是否以微前端的方式启动本地服务', {
    default: true,
  })
  // 暂时不支持cssModule
  // .option('--cssModule', '[boolean] 是否开启cssModule', {
  //   default: true,
  // })
  .action((root: string, options: any) => {
    init('build', options);
  });

cli.version(require('../package.json').version);
cli.help();
cli.parse();
