import { getProjectPath, resolve } from './utils';

export default {
  index: getProjectPath('./src/index'),
  build: getProjectPath('./build'),
  appSrc: getProjectPath('./src'),
  appHtml: getProjectPath('./public/index.html'),
  // antdSrc: getProjectPath(resolve('antd'), '../..', 'es'),
  antdSrc: getProjectPath('./node_modules/antd/es'),
  kleinSrc: getProjectPath('./node_modules/@wemo-ui/klein/es'),
  portalSrc: getProjectPath('./node_modules/rc-util/es/Portal.js'),
  notifiySrc: getProjectPath(
    './node_modules/rc-notification/es/Notification.js',
  ),
};
