/**
 * title: 填底的按钮样式
 * desc: 实色填底的单选按钮样式。
 */
import React from 'react';
import { Radio } from '@klein-design/klein-react';

export default () => {
  return (
    <>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">杭州</Radio.Button>
        <Radio.Button value="b">上海</Radio.Button>
        <Radio.Button value="c">北京</Radio.Button>
        <Radio.Button value="d">成都</Radio.Button>
      </Radio.Group>
    </>
  );
};
