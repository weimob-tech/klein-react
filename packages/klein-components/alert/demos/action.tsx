/**
 * title: 用户自定义操作按钮
 * desc: 通过设置`action`属性来添加`Alert`的操作按钮。
 */

import React from 'react';
import { Alert, Button } from '@klein-design/klein-react';
// import styles from './action.less';

export default () => (
  <>
    <Alert
      // className={styles.actionAlert}
      message="恭喜！您的店铺认证已通过！"
      type="success"
      showIcon
      action={
        <Button size="medium" ghost success>
          重新认证
        </Button>
      }
    />
    <Alert
      // className={styles.actionAlert}
      message="您的店铺认证未通过"
      type="error"
      showIcon
      action={
        <Button size="small" ghost danger>
          修改资质
        </Button>
      }
    />
    <Alert
      // className={styles.actionAlert}
      message="正确的提示"
      description="恭喜！您的店铺认证已通过！"
      type="success"
      style={{ alignItems: 'center' }}
      action={
        <>
          <Button size="medium" ghost success>
            重新认证
          </Button>
          <Button
            danger
            size="medium"
            ghost
            style={{ marginTop: 5, display: 'block' }}
          >
            修改资质
          </Button>
        </>
      }
    />
  </>
);
