// 支持诸如vite等脚手架工具
// const RcPagination = require('./rc-pagination').default;
// const RcNotification = require('./rc-notification').default;
// const RcTooltip = require('./rc-tooltip').default;
// const RcSwitch = require('./rc-switch').default;
// const RcTabs = require('./rc-tabs').default;
// const RcCheckbox = require('./rc-checkbox').default;
// const RcUpload = require('./rc-upload').default;
//const RcDialog = require('./rc-dialog').default;
// const RcForm = require('./rc-field-form').default;
// const Menu = require('./rc-menu');
// const RcSelect = require('./rc-select');
// const RcInputNumber = require('./rc-input-number');
// const RcAnimation = require('./rc-css-animation');
// const RcPicker = require('./rc-picker');
// const Icons = require('./svg-components');
import Pagination from './rc-pagination';
import Notification from './rc-notification';
import Tooltip from './rc-tooltip';
import Switch from './rc-switch';
import Checkbox from './rc-checkbox';
import Upload from './rc-upload';
import Dialog from './rc-dialog';
import Form from './rc-field-form';
import Picker from './rc-picker';
import * as RcMenu from './rc-menu';
import * as Select from './rc-select';
import * as InputNumber from './rc-input-number';
import * as Animation from './rc-css-animation';
import * as SvgIcons from './svg-components';
import Drawer from './rc-drawer';

//之前所有的rc组件采用require引入，值为any
//这里需要将已有组件进行any定义，不然代码中会有ts报错
const RcPagination: any = Pagination;
const RcNotification: any = Notification;
const RcSwitch: any = Switch;
const RcTooltip: any = Tooltip;
const RcCheckbox: any = Checkbox;
const Menu: any = RcMenu;
const RcSelect: any = Select;
const RcInputNumber: any = InputNumber;
const RcAnimation: any = Animation;
const Icons: any = SvgIcons;
const RcUpload: any = Upload;
const RcDialog: any = Dialog;
const RcForm: any = Form;
const RcPicker: any = Picker;
const RcDrawer: any = Drawer;

export {
  RcPagination,
  RcNotification,
  RcSwitch,
  RcTooltip,
  RcCheckbox,
  Menu,
  RcSelect,
  RcInputNumber,
  RcAnimation,
  Icons,
  RcUpload,
  RcDialog,
  RcForm,
  RcPicker,
  RcDrawer,
};
