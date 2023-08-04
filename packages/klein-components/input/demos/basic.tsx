/**
 * title: 基本用法
 * desc: 基本的输入框用法。
 */

import React from 'react'
import { Input, InputNumber } from '@klein-design/klein-react'
import DemoLayout from '@/components/demo/DemoLayout';

export default () => {
  // state
  const [inputValue, setInputValue] = React.useState('hello')
  const [inputValue1, setInputValue1] = React.useState(0)
  const [inputValue2, setInputValue2] = React.useState('')

  // handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  const handleChange2 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(evt.target.value)
  }
  /* eslint-disable */
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const reg = /^-?[0-9]*(\.[0-9]*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setInputValue1(value)
    }
  }

  // render
  return (
    <div style={{display: 'flex'}}>
      <DemoLayout layout='1' style={{ marginRight: '48px'}}>
        <Input wSize='m' placeholder='请输入内容'  />
        <Input wSize='m' disabled placeholder='disabled 状态' />
        <Input wSize='m' bordered={false} placeholder='无边框状态' />
        <InputNumber max={3} min={1} placeholder='请输入数字' />
      </DemoLayout>
      <DemoLayout layout='1'>
        <Input wSize='m' placeholder='请输入内容不能修改' value={inputValue} onChange={handleChange} />
        <Input wSize='m' placeholder='请输入可修改' value={inputValue2} onChange={handleChange2} />
        <div>
          <Input wSize='m' placeholder='请输入数字' value={inputValue1} onChange={handleChange1} />
          <div
            style={{
              fontSize: 12,
              color: '#9698a6',
              lineHeight: '20px',
              marginTop: 8,
            }}
          >
            已输入：{inputValue1}
          </div>
        </div>
      </DemoLayout>
    </div>
  )
}
