import React from 'react';
import {
  ConfigProvider,
  Divider,
  DatePicker,
  Input,
  InputNumber,
} from '@klein-design/klein-react';

import DropDownBasicDemo from '../../dropdown/demos/basic';
import SelectBasicDemo from '../../select/demos/basic';
import ModalBasicDemo from '../../modal/demos/basic';
import TooltipBasicDemo from '../../tooltip/demos/basic';
import PopoverBasicDemo from '../../popover/demos/basic';
import MessageBasicDemo from '../../message/demos/basic';
import CascaderBasicDemo from '../../cascader/demos/basic';
import AutoCompleteBasicDemo from '../../auto-complete/demos/basic';

const configProps = {
  getPopupContainer: () => document.getElementById('popupContainer')!,
};

export default () => {
  return (
    <ConfigProvider {...configProps}>
      <div id="popupContainer">
        <ModalBasicDemo />
        <br />
        {/* <Divider /> */}
        <PopoverBasicDemo />
        <br />
        {/* <Divider /> */}
        <div>
          <Input />
        </div>
        <br />
        {/* <Divider /> */}
        <CascaderBasicDemo />
        <br />
        {/* <Divider /> */}
        <InputNumber />
      </div>
    </ConfigProvider>
  );
};
