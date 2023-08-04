/**
 * title: 各种大小
 * desc: 小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载
 */
import React from 'react';
import { Spin } from '@klein-design/klein-react';
import styles from './demo.less';

export default () => {
  return (
    <div className={styles.dir}>
      <div className={styles.size}>
        <Spin size="small" />
      </div>
      <div className={styles.size}>
        <Spin />
      </div>
      <div className={styles.size}>
        <Spin size="large" />
      </div>
    </div>
  );
};
