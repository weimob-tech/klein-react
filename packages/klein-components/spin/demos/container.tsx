/**
 * title: 容器
 * desc: 放入一个容器中。
 */
import React from 'react';
import { Spin } from '@klein-design/klein-react';
import styles from './demo.less';

export default () => {
  return (
    <div className={styles.cont}>
      <Spin />
    </div>
  );
};
