import React from 'react'
import Divider from '../divider/divider';
import figma from '@/assets/images/resource/figma.png'
import sketch from '@/assets/images/resource/sketch.png'
import download from '@/assets/images/resource/download.png'
import DemoLayout from '../demo/DemoLayout'
import './DesignResource.less';

const sourceData = {
  'Klein Design': [{
    image: figma,
    title: 'Figma 设计资源',
    desc: '更新时间：2023-02-22'
  }, {
    image: sketch,
    title: 'Sketch 设计资源',
    desc: '更新时间：2023-02-22'
  }, {
    image: 'https://image-c.weimobwmc.com/sass-admin/c35aedd45a9941f6b46c8e839e27e075.png',
    title: '官方图标库',
    desc: '更新时间：2023-02-22'
  }],
  'Fonts': [{
    image: 'https://image-c.weimobwmc.com/sass-admin/1682de542bda47c692077be3b7274543.png',
    title: 'Klein 字体安装包',
    desc: '2 个样式',
    link: 'https://unpkg.com/@klein-design/klein-react@1.0.0/Klein Font.zip'
  }],
}

const DesignResource: React.FC = () => {

  const renderSourceItem = (item: any) => {
    return (
      <div className='klein-resource-item'>
        <div className='klein-resource-item-icon'>
          <img src={item.image} alt="loading" />
        </div>
        <div className='klein-resource-item-content'>
          <div className='klein-resource-item-title'>
            {item.title}
          </div>
          <div className='klein-resource-item-desc'>
            {item.desc}
          </div>
        </div>  
        <div className='klein-resource-item-download'>
          {
            item.link ? <a href={item.link} download={item.link} ><img src={download} alt="loading" /></a> : <img src={download} alt="loading" />
          }
        </div>
      </div>
    )
  }

  return (
    <>
      <Divider />
      {Object.keys(sourceData).map(key => {
        const data = sourceData[key as keyof typeof sourceData]
        return (
          <div>
            <div className='klein-resource-title'>{key}</div>
            <DemoLayout layout='2'>{data.map((item) => renderSourceItem(item))}</DemoLayout>
          </div>
        )
      })}
    </>
  )
}

export default DesignResource