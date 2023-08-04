import React from 'react';
import { MarkdownContext } from '@/utils/context'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import codeTheme from '../../codeTheme'
import './SourceCode.less';

interface SourceCodeProps {
  children: React.ReactNode
}

const SourceCode: React.FC<SourceCodeProps> = (props) => {

  const {
    children
  } = props

  const childRef = React.useRef<any>(null)

  const [isTableChild, setIsTableChild] = React.useState<boolean>(false)

  React.useEffect(() => {
    const tableDoms = document.querySelectorAll('.klein-apitable')
    if (!childRef.current) return
    if (Array.from(tableDoms).some(dom => dom?.contains(childRef.current))) {
      setIsTableChild(true)
    }
  }, [])
  
  return (
    <>{!isTableChild ? (
        <div ref={childRef} className='klein-source-code'>
          <SyntaxHighlighter language='javascript' style={codeTheme}>
            {children}
          </SyntaxHighlighter>
        </div>
      )
      :
      <td className='klein-apitable-source-code' align="left" ref={childRef}>
        <span>{children}</span>
      </td>
    }</>
  )
}

export default SourceCode