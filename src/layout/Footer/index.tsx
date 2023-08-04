import React, { useMemo } from 'react'
import RcFooter, { FooterProps } from './footer'
import './index.less'

const Footer: React.FC<FooterProps> = (props) => {
  //   const { intl, location } = props;
  const getColumns = useMemo(() => {
    const getLink = (path: string) => {
      // const pathName = getLocalizedPathname(path, isZhCN, location.query);
      // const { pathname, query = {} } = pathName;
      // if ('direction' in query) {
      //   return `${pathname}?direction=rtl}`;
      // }
      // return pathname;
    }

    const col1 = {
      title: '设计',
      items: [
        // {
        //   title: '设计规范',
        //   url: 'https://charts.ant.design',
        //   openExternal: true,
        // },
        {
          title: '设计原则',
          url: '../design/design',
          openExternal: false,
        },
        {
          title: '设计资源',
          url: '../guide/resource',
          openExternal: false,
        },
      ],
    }

    const col2 = {
      title: '组件',
      items: [
        {
          title: '快速上手',
          url: '../guide/start',
          openExternal: false,
        },
        // {
        //   title: '更新日志',
        //   url: 'http://medium.com/ant-design/',
        //   openExternal: true,
        // },
      ],
    }

    // if (isZhCN) {
    //   col2.items.push({
    //     icon: <UsergroupAddOutlined />,
    //     title: <FormattedMessage id="app.footer.work_with_us" />,
    //     url: getLinkHash('/docs/resources', {
    //       zhCN: '加入我们',
    //       enUS: 'JoinUs',
    //     }),
    //     LinkComponent: Link,
    //   } as unknown as typeof col2['items'][number]);
    // }

    const col3 = {
      title: '生态产品',
      items: [
        {
          title: 'Klein Pro',
          url: '',
          openExternal: false,
        },
        {
          title: 'Orion Fonts',
          url: '',
          openExternal: false,
        },
        {
          title: 'Orio Market',
          url: '',
          openExternal: false,
        },
        {
          title: 'Klein Editor',
          url: '',
          openExternal: false,
        },
      ],
    }

    const col4 = {
      title: '关联项目',
      items: [
        {
          title: 'Titian Mobile',
          url: 'https://titian.weimob.com/',
          openExternal: true,
        },
      ],
    }
    return [col1, col2, col3, col4]
  }, [])

  return (
    <RcFooter
      columns={getColumns}
      bottom={
        <div className='weimobTag'>
          Copyright © 2013-2022 www.weimob.com All Rights Reserved 上海微盟企业发展有限公司版权所有
          沪ICP备14044897号-9
        </div>
      }
      {...props}
    />
  )
}

export default Footer
