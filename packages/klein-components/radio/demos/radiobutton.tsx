/**
 * title: 按钮样式
 * desc: 按钮样式的单选组合。
 */
import React from 'react';
import { Radio } from '@klein-design/klein-react';

export default () => {
  const onChange = (e: any) => {
    console.log('onChange', e); // eslint-disable-line no-console
  };
  return (
    <>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a">杭州</Radio.Button>
        <Radio.Button value="b">上海</Radio.Button>
        <Radio.Button value="c">北京</Radio.Button>
        <Radio.Button value="d">成都</Radio.Button>
      </Radio.Group>
      <Radio.Group
        onChange={onChange}
        defaultValue="a"
        style={{ display: 'block', marginTop: 16 }}
      >
        <Radio.Button value="a">杭州</Radio.Button>
        <Radio.Button value="b" disabled>
          上海
        </Radio.Button>
        <Radio.Button value="c">北京</Radio.Button>
        <Radio.Button value="d">成都</Radio.Button>
      </Radio.Group>
      <Radio.Group
        disabled
        onChange={onChange}
        defaultValue="a"
        style={{ display: 'block', marginTop: 16 }}
      >
        <Radio.Button value="a">选中失效项</Radio.Button>
        <Radio.Button value="b">未选失效项</Radio.Button>
      </Radio.Group>
      <Radio.Group
        disabled
        onChange={onChange}
        defaultValue="a"
        buttonStyle="solid"
        style={{ display: 'block', marginTop: 16 }}
      >
        <Radio.Button value="a">选中失效项</Radio.Button>
        <Radio.Button value="b">未选失效项</Radio.Button>
      </Radio.Group>
    </>
  );
};
