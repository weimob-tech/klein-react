import React, { useCallback, useMemo } from 'react'
import { Tooltip, Button, Switch, Checkbox } from '@klein-design/klein-react'
import VincentYu from '../../assets/images/resource/avatars/Vincent Yu.png'
import Plane17 from '../../assets/images/resource/avatars/Plane17.png'
import curse from '../../assets/images/resource/avatars/curse.png'
import yuanyuan from '../../assets/images/resource/avatars/yuanyuan.png'
import DaHua from '../../assets/images/resource/avatars/DaHua.png'
import JiaminXu from '../../assets/images/resource/avatars/Jiamin Xu.png'
import ZeroSun from '../../assets/images/resource/avatars/Zero Sun.png'
import yangTeacher from '../../assets/images/resource/avatars/yang teacher.png'
import sanmu from '../../assets/images/resource/avatars/sanmu.png'
import IgorXu from '../../assets/images/resource/avatars/Igor Xu.png'
import WiloDu from '../../assets/images/resource/avatars/WiloDu.png'
import qingxiao from '../../assets/images/resource/avatars/qingxiao.png'

import './index.less'
const avatarsConfig = {
  title: '贡献者',
  items: [
    {
      name: 'houyhea',
      url: 'https://github.com/houyhea',
      img: 'https://avatars.githubusercontent.com/u/3282296?v=4',
      openExternal: true,
    },
    {
      name: 'Edison Yang',
      url: 'https://github.com/ym87498510',
      img: 'https://avatars.githubusercontent.com/u/21041612?v=4',
      openExternal: true,
    },
    {
      name: 'TiamoJrZhang',
      url: 'https://github.com/TiamoJrZhang',
      img: 'https://avatars.githubusercontent.com/u/28380327?s=96&v=4',
      openExternal: true,
    },
    {
      name: 'JackFGreen',
      url: 'https://github.com/JackFGreen',
      img: 'https://avatars.githubusercontent.com/u/23187848?v=4',
      openExternal: true,
    },
    {
      name: 'luckyshen',
      url: 'https://github.com/luckyshen',
      img: 'https://avatars.githubusercontent.com/u/29427767?s=400&u=bfda4b3f4523d2ea4cea1e801151b448dbefdbb1&v=4',
      openExternal: true,
    },
    {
      name: 'Leivy',
      url: 'https://github.com/Leivy',
      img: 'https://avatars.githubusercontent.com/u/22959670?v=4',
      openExternal: true,
    },
    {
      name: 'ouzhenkun',
      url: 'https://github.com/ouzhenkun',
      img: 'https://avatars.githubusercontent.com/u/8369460?v=4',
      openExternal: true,
    },
    {
      name: 'Vincent Yu',
      url: 'https://dribbble.com/Vit-Yu/about',
      img: VincentYu,
      tip: 'UI设计师',
      openExternal: true,
    },
    {
      name: 'curse',
      url: '',
      img: curse,
      tip: 'UI设计师',
      openExternal: false,
    },
    {
      name: 'Plane17',
      url: '',
      img: Plane17,
      tip: 'UI设计师',
      openExternal: false,
    },
    {
      name: '沅沅',
      url: '',
      img: yuanyuan,
      tip: 'UI设计师',
      openExternal: false,
    },
    {
      name: '大花',
      url: 'https://www.behance.net/f9ba8142',
      img: DaHua,
      tip: 'UI设计师',
      openExternal: true,
    },
    {
      name: 'Jiamin Xu',
      url: 'https://www.behance.net/jiaminxu1',
      img: JiaminXu,
      tip: 'UI设计师',
      openExternal: true,
    },
    {
      name: 'Zero Sun',
      url: '',
      img: ZeroSun,
      tip: 'UI设计师',
      openExternal: false,
    },
    {
      name: '三木先生',
      url: '',
      img: sanmu,
      tip: 'UI设计师',
      openExternal: false,
    },
    {
      name: '羊老师',
      url: '',
      img: yangTeacher,
      tip: '交互设计师',
      openExternal: false,
    },
    {
      name: 'Igor Xu',
      url: '',
      img: IgorXu,
      tip: '交互设计师',
      openExternal: false,
    },
    {
      name: 'WiloDu',
      url: '',
      img: WiloDu,
      tip: '交互设计师',
      openExternal: false,
    },
    {
      name: '小青',
      url: '',
      img: qingxiao,
      tip: '交互设计师',
      openExternal: false,
    },
  ],
}
const Avatars: React.FC = (props) => {
  const go = (item: any) => {
    window.open(item.url, '_blank')
  }
  return (
    <section className='klein-avatars-wrapper'>
      <h3>{avatarsConfig.title}</h3>
      <div className='klein-avatars-box'>
        {avatarsConfig.items.map((item) => (
          <Tooltip title={item.tip ? `${item.name}/${item.tip}` : `${item.name}`}>
            <a className='klein-avatars-avatar-item' href={item.url ? item.url : 'javascript:void(0)'} target={item.openExternal ? '_blank' : undefined}>
              <img src={item.img} alt='' />
            </a>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

export default Avatars
