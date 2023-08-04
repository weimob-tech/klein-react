import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { Button, Form, Input, Radio, Select, Slider } from '@klein-design/klein-react'
import styles from './index.module.less'
import { Animate } from '@/components'

const COLORS = [
  {
    value: '#006aff',
    label: 'blue',
  },
  {
    value: '#ffa200',
    label: 'orange',
  },
  {
    value: '#00c261',
    label: 'green',
  },
]

const THEMES = [
  {
    value: 'light',
    bg: 'https://image-c.weimobwmc.com/sass-admin/58dbaa2ad8ef4e4081da994d53191d59.png',
  },
  {
    value: 'dark',
    bg: 'https://image-c.weimobwmc.com/sass-admin/2dfa865117f741caa2b02a91ad43a6db.png',
  },
]

const SIZES = [
  {
    value: 'large',
    label: '大',
  },
  {
    value: 'medium',
    label: '中',
  },
  {
    value: 'small',
    label: '小',
  },
]

type KleinDesignProps = React.HTMLAttributes<HTMLDivElement>

const KleinDesign: React.FC<KleinDesignProps> = (props) => {
  const [form] = Form.useForm()

  const [curColor, setCurColor] = useState(COLORS[0].label)
  const [curTheme, setCurTheme] = useState(THEMES[0].value)
  const [curSize, setCurSize] = useState(SIZES[1].value)
  const [curRadius, setCurRadius] = useState(2)

  const RIGHTS = [
    {
      title: '主色',
      children: (
        <div className={styles.color}>
          {COLORS.map((o) => (
            <div
              className={cx(styles.colorCont, curColor === o.label ? styles.active : null)}
              key={o.value}
              style={{ color: o.value }}
              onClick={() => setCurColor(o.label)}
            >
              <div className={styles.colorItem} />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: '主题',
      children: (
        <div className={styles.theme}>
          {THEMES.map((o) => (
            <div
              className={cx(
                styles.themeCont,
                styles[o.value],
                curTheme === o.value ? styles.activeTheme : null
              )}
              key={o.value}
              onClick={() => setCurTheme(o.value)}
            >
              <div className={styles.themeBg} style={{ backgroundImage: `url(${o.bg})` }} />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: '大小',
      children: (
        <Select style={{ width: 120 }} value={curSize} onChange={(v) => setCurSize(v)}>
          {SIZES.map((o) => (
            <Select.Option value={o.value} key={o.value}>
              {o.label}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: '圆角',
      children: <Slider max={20} value={curRadius} onChange={(v) => setCurRadius(v)} />,
    },
  ]

  return (
    <Animate animate={{
      delay: 0
    }} visible={true} className={cx(styles.KleinDesign, styles[curColor], styles[curTheme])} {...props}>
      <div className={styles.left}>
        <div className={cx(styles.cont, styles[curSize])}>
          <div className={styles.title}>Quick login settings</div>
          <div className={styles.desc}>Please configure it completely</div>

          <Form layout='vertical' form={form}>
            <Form.Item label='Email' name='email'>
              <Input
                placeholder='Please Enter'
                style={{
                  borderRadius: curRadius,
                }}
                size={curSize}
              />
            </Form.Item>

            <Form.Item
              label='Password failure'
              name='day'
              initialValue={1}
              className={styles.radioFormItem}
            >
              <Radio.Group>
                <Radio value={1}>30 days</Radio>
                <Radio value={2}>90 days</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item className={styles.btnsItem}>
              <div className={styles.btns}>
                <Button
                  onClick={() => {
                    form.resetFields()
                    setCurColor(COLORS[0].label)
                    setCurTheme(THEMES[0].value)
                    setCurSize(SIZES[1].value)
                    setCurRadius(2)
                  }}
                  size={curSize}
                  style={{
                    borderRadius: curRadius,
                  }}
                >
                  重置
                </Button>
                <Button
                  type='primary'
                  size={curSize}
                  style={{
                    borderRadius: curRadius,
                  }}
                >
                  确定
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className={styles.right}>
        {RIGHTS.map((o, i) => (
          <div key={i}>
            <div className={styles.title}>{o.title}</div>
            <div className={styles.cont}>{o.children}</div>
          </div>
        ))}
      </div>
    </Animate>
  )
}

export default KleinDesign
