/**
 * title: 基本用法
 * desc: 页面中的非浮层元素，不会自动消失。
 */

import React from 'react'
import { Alert } from '@klein-design/klein-react'

export default () => (
  <>
    <Alert message='成功的提示文案' />
    <Alert message='消息提示的文案' type='success' />
    <Alert message='系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！' type='warning' />
    <Alert message='系统错误，请稍后重试。' type='error' />
  </>
)
