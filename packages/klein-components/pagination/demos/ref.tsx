/**
 * title: 传递Ref
 * desc: 通过传递Ref获取组件实例进行必要操作。
 */
import React, { useRef } from 'react';
import { Pagination, Button } from '@klein-design/klein-react';

export default () => {
  const ulRef = useRef();

  const test = () => {
    console.log(ulRef?.current);
  };

  return (
    <div>
      <Button onClick={test}>test</Button>
      <Pagination ref={ulRef} total={200} />
    </div>
  );
};
