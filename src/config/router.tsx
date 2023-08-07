import React from 'react'
import { RouteProps } from '@/utils/types'
import PraciteComp from '../pages/pracite'
import StartPage from '@/docs/start.md'
import ResourcePage from '@/docs/resource.md'
import QuestionPage from '@/docs/question.md'
import Variable from '@/docs/variable.md'
import Intro from '@/docs/intro.md'
import Design from '@/docs/design.md'
import Color from '@/docs/color.md'
import Font from '@/docs/font.md'
import Icon from '@/docs/icon.md'
import Layout from '@/docs/layout.md'
import _ from 'lodash'

const req = require.context('../../packages/klein-components', true, /^\.\/[^_][\w-]+\/index\.md?$/)
const BasicLayout = React.lazy(() => import('@/layout/BasicLayout'))

let result: any = []
req.keys().forEach((item: string) => {
  const mode = req(item)

  const lowPath = item.split('/')[1]
  const label = lowPath
    .split('-')
    .map((item) => _.capitalize(item))
    .join('')

  result.push({
    name: mode.frontmatter.title,
    componentLabel: label,
    path: lowPath,
    element: mode.default,
    group: mode.frontmatter.group,
  })
})
// const PraciteComp=require('../pages/case')
const Routes: RouteProps[] = [
  {
    name: '首页',
    path: '/',
    layout: true, // 勿动
    element: BasicLayout,
    routes: [
      {
        name: '开发指南',
        path: '/guide',
        bg: 'https://image-c.weimobwmc.com/sass-admin/ebd2955eccb64b55bb36207af727f477.png',
        routes: [
          {
            name: '快速上手',
            path: 'start',
            element: StartPage,
          },
          // {
          //   name: '最佳实践',
          //   componentLabel: 'case',
          //   path: 'pracite',
          //   element: PraciteComp,
          // },
          {
            name: '设计变量',
            path: 'variable',
            element: Variable,
          },
          {
            name: '常见问题',
            path: 'q&a',
            element: QuestionPage,
          },
          // {
          //   name: '更新日志',
          //   path: 'release',
          //   element: Release,
          // },
          {
            name: '设计资源',
            path: 'resource',
            element: ResourcePage,
          },
        ],
      },
      {
        name: '设计指南',
        path: '/design',
        bg: 'https://image-c.weimobwmc.com/sass-admin/ebd2955eccb64b55bb36207af727f477.png',
        routes: [
          // {
          //   name: 'Klein Design 简介',
          //   path: 'intro',
          //   element: Intro,
          // },
          {
            name: '设计原则',
            path: 'design',
            element: Design,
          },
          {
            name: '色彩',
            path: 'color',
            element: Color,
          },
          {
            name: '字体',
            path: 'font',
            element: Font,
          },
          // {
          //   name: '动效',
          //   path: 'animation',
          // },
          {
            name: '图标',
            path: 'icon',
            element: Icon,
          },
          {
            name: '布局',
            path: 'layout',
            element: Layout,
          },
        ],
      },
      {
        name: '组件',
        path: '/components',
        routes: result,
      },
    ],
  },
]

export default Routes

export { result }
