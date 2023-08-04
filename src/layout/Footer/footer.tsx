import React from 'react'
import cx from 'classnames'
import Column, { FooterColumn } from './column'
import './index.less'

export interface FooterProps {
  isHome?: boolean
  prefixCls?: string
  bottom?: React.ReactNode
  maxColumnsPerRow?: number
  columns?: FooterColumn[]
  theme?: 'dark' | 'light'
  className?: string
  style?: React.CSSProperties
  backgroundColor?: string
  columnLayout?: 'space-around' | 'space-between'
  containerStyle?: React.CSSProperties
}

const Footer: React.FC<FooterProps> = ({
  isHome = false,
  prefixCls = 'klein-footer',
  className,
  style,
  bottom,
  columns,
  maxColumnsPerRow,
  backgroundColor,
  columnLayout,
  theme = 'dark',
  containerStyle,
  ...restProps
}) => {
  const shouldWrap = typeof maxColumnsPerRow === 'number' && maxColumnsPerRow > 0
  return (
    <footer
      {...restProps}
      className={cx(`${prefixCls}-wrapper`, className)}
      style={{
        ...style,
        backgroundColor,
      }}
    >
      <section className={`${prefixCls}-container`} style={containerStyle}>
        {columns && columns.length > 0 && (
          <>
            <section
              className={`${prefixCls}-columns`}
              style={{
                justifyContent: columnLayout,
                flexWrap: shouldWrap ? 'wrap' : undefined,
              }}
            >
              {columns.map(
                (
                  { title, icon, style: columnStyle, className: columnClassName, items = [] },
                  i
                ) => {
                  const styleObject = { ...columnStyle } as React.CSSProperties
                  if (shouldWrap) {
                    styleObject.flex = `0 0 ${100 / (maxColumnsPerRow! + 1) + 0.1}%`
                  }
                  return (
                    <Column
                      key={i}
                      prefixCls={prefixCls}
                      title={title}
                      icon={icon}
                      items={items}
                      style={styleObject}
                      className={columnClassName}
                    />
                  )
                }
              )}
            </section>

            {isHome ? (
              <div className={`${prefixCls}-group`}>
                <img
                  className={`${prefixCls}-group-img`}
                  src='https://image-c.weimobwmc.com/sass-admin/c271081c4c2a4bb9b62722a63cdd4b75.png'
                  alt=''
                />
                <div className={`${prefixCls}-group-title`}>联系我们</div>
                <div className={`${prefixCls}-group-desc`}>
                  扫码进入 Klein Design 企业微信用户群
                </div>
              </div>
            ) : null}
          </>
        )}
      </section>
      {bottom && (
        <section className={`${prefixCls}-bottom`} style={containerStyle}>
          <div className={`${prefixCls}-bottom-container`}>{bottom}</div>
        </section>
      )}
    </footer>
  )
}

export default Footer
