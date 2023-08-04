import React from 'react'
import './index.less'

const LAYOUTS = [
  {},
  {
    title: '内容展示/非通栏',
    desc: '固定宽度350',
  },
  {
    title: '单个内容展示/通栏',
    desc: '宽度100%',
  },
  {
    title: '多个内容展示/通栏',
    desc: '宽度100%，上下间距20px',
  },
  {
    title: '多个内容展示/非通栏',
    desc: '固定宽度350，上下间距20px',
  },
  {
    title: '多内容-平铺排列',
    desc: '元素不定宽，上下左右间距20px',
  },
]

type DemoLayoutProps = {
  /**
   * 对应设计稿的布局规范
   * @example
   * 默认=width:100%;flex-direction:column;gap:20px;
   * '1'=width:350px;
   * '2'=flex-direction:row;可嵌套使用，当作Grid布局
   */
  layout?: '1' | '2'
} & React.HTMLAttributes<HTMLDivElement>

const DemoLayout: React.FC<DemoLayoutProps> = (props) => {
  const { layout = 0, style, children } = props

  return <div className={`KitDocDemo-layout KitDocDemo-layout-${layout}`} style={style}>{children}</div>
}

export default DemoLayout
