import { Menu } from '@klein-design/klein-react'
import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import menus from '../../config/menus'
import './index.less'

const { SubMenu } = Menu
export interface LogoProps {
  isZhCN?: boolean
  location?: any
}

const LeftSide: React.FC<LogoProps> = ({ isZhCN }) => {
  const [openKeys, setOpenKeys] = React.useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys)
  }
  const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    setSelectedKeys(selectedKeys)
  }

  const location = useLocation()
  const { pathname } = location

  React.useEffect(() => {
    const selKey =
      '/' +
      pathname
        .split('/')
        .filter((o) => !!o)
        .join('/')
    setSelectedKeys([selKey])
    setOpenKeys(['/components', '/guide', '/design'])
  }, [pathname])

  return (
    <Menu
      mode='inline'
      className='layout-sidebar-menu'
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
      style={{ width: 248 }}
    >
      {menus.map((item) => (
        <SubMenu key={item.path} title={item.name}>
          {item.routes.map((subItem) => {
            const subItemPath = item.path + '/' + subItem.path

            return subItem.routes ? (
              <Menu.ItemGroup key={item.path + subItem.name} title={subItem.name}>
                {subItem.routes.map((groupItem) => {
                  const groupItemPath = item.path + '/' + groupItem.path
                  const itemName = (groupItem.name as string)?.split(' - ')
                  return (
                    <Menu.Item key={groupItemPath}>
                      <Link to={groupItemPath}>
                        {itemName?.[0]} {itemName?.[1]}
                      </Link>
                    </Menu.Item>
                  )
                })}
              </Menu.ItemGroup>
            ) : (
              <Menu.Item key={subItemPath}>
                <Link to={subItemPath}>{subItem.name}</Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      ))}
    </Menu>
  )
}

export default LeftSide
