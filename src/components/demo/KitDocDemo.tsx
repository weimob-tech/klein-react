import React, { Suspense, useEffect, useState } from 'react'
import { MarkdownContext } from '@/utils/context'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Icon, Tooltip, message } from '@klein-design/klein-react'
// import Basic from '../../../components/alert/demos/basic'
// const Basic =
// const comp = await import(`../../../${filename}`)
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import codeTheme from '../../codeTheme'
import './KitDocDemo.less'
import DemoLayout from './DemoLayout'
interface KitDocDemoProps {
  demo: {
    id: string
  }
  previewerProps: {
    layout?: string
    title?: string
  }
}

const KitDocDemo: React.FC<KitDocDemoProps> = (props) => {
  const {
    demo: { id },
  } = props
  const { demosMap, demos } = React.useContext(MarkdownContext)

  const codeString = demos.filter((_) => _.asset.id === id)[0]?.asset.dependencies['index.tsx']
    .value
  const [codeVisible, setCodeVisible] = useState(false)

  return (
    <>
      <section className='KitDocDemo'>
        <section className='KitDocDemo-comp'>
          <Suspense fallback=''>
            <DemoLayout layout={props.previewerProps.layout}>
              {React.createElement(demosMap[id])}
            </DemoLayout>
          </Suspense>
        </section>
        <section className='KitDocDemo-icon'>
          {/* <div className='KitDocDemo-icon-tag '>
            <i className='icon-share icon-item' />
          </div> */}
          <Tooltip title='复制'>
            <div className='KitDocDemo-icon-tag'>
              <CopyToClipboard
                text={codeString}
                onCopy={(code: string, result: boolean) => {
                  if (result) {
                    message.success('复制成功')
                  }
                }}
              >
                <i className='icon-copy icon-item' />
              </CopyToClipboard>
            </div>
          </Tooltip>
          {/* <Tooltip title="在 CodeSandbox 中打开">
            <div className='KitDocDemo-icon-tag'>
                <i className='icon-codesandbox icon-item' />
            </div>
          </Tooltip> */}
          <Tooltip title='展开代码'>
            <div
              onClick={(e) => setCodeVisible(!codeVisible)}
              className={`KitDocDemo-icon-tag ${codeVisible ? 'KitDocDemo-icon-tag-active' : ''}`}
            >
              <i className='icon-showcode icon-item' />
            </div>
          </Tooltip>
        </section>
        {codeVisible ? (
          <section className='KitDocDemo-code'>
            <SyntaxHighlighter language='javascript' style={codeTheme}>
              {codeString}
            </SyntaxHighlighter>
          </section>
        ) : null}
      </section>
    </>
  )
}

export default KitDocDemo
