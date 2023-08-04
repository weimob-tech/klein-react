import Routes, { result } from './router'

// 分组排序
const menuGroupsOrder = [
  {
    name: '通用',
    bg: 'https://image-c.weimobwmc.com/sass-admin/940cf4767df7487f8f448e3fed2995d0.png',
  },
  {
    name: '布局',
    bg: 'https://image-c.weimobwmc.com/sass-admin/0fe776d43a854385ac066a7a8c26cb5a.png',
  },
  {
    name: '导航',
    bg: 'https://image-c.weimobwmc.com/sass-admin/82fba58d79b944daa520470e6e4cca85.png',
  },
  {
    name: '数据展示',
    bg: 'https://image-c.weimobwmc.com/sass-admin/8228f7ec3d5747208b267ac94e1c4fe1.png',
  },
  {
    name: '数据录入',
    bg: 'https://image-c.weimobwmc.com/sass-admin/821810b2cc194a8a9474f2fe5a90ea2f.png',
  },
  {
    name: '反馈',
    bg: 'https://image-c.weimobwmc.com/sass-admin/b1cdca0eb4f748518b4c2577c2bdda6f.png',
  },
]

const componentGroups: any = {
  其他: {
    name: '其他',
    bg: 'https://image-c.weimobwmc.com/sass-admin/940cf4767df7487f8f448e3fed2995d0.png',
    order: menuGroupsOrder.length + 1,
    routes: [],
  },
}

result.forEach((item: any) => {
  const { title } = item.group || {}

  if (title) {
    if (!componentGroups[title]) {
      const orderData = menuGroupsOrder.find((_) => _.name === title)
      let order = menuGroupsOrder.findIndex((_) => _.name === title)
      // 不在定义的分组里的放最后
      if (order === -1) order = menuGroupsOrder.length
      componentGroups[title] = { name: title, order, routes: [], bg: orderData?.bg }
    }
    componentGroups[title].routes.push(item)
  } else {
    componentGroups['其他'].routes.push(item)
  }
})

const componentMenus = Object.values(componentGroups).sort((a: any, b: any) => a.order - b.order)

const menus =
  Routes[0].routes?.map((o) => {
    if (o.name === '组件') {
      o.routes = componentMenus
    }
    return o
  }) || []

export default menus
