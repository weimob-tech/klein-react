import React from 'react'

type DemoTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: {
    title: string
    children: any
  }[]
}

const DemoTabs: React.FC<DemoTabsProps> = (props) => {
  const {children} = props
  const tabs = JSON.parse(props.tabs)

  return (
    <div>
      {tabs.map((o, i) => (
        <div key={i}>
          <div>{o.title}</div>
          <div>{o.children}</div>
        </div>
      ))}

      {children}
    </div>
  )
}

export default DemoTabs
