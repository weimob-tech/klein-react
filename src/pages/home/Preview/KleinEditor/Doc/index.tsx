import React from 'react'
import KleinEditor from '@klein-design/klein-editor'
import { IDomEditor } from '@klein-design/klein-editor'
import '@/components/editor/klein-editor/dist/css/style.css'
import styles from './index.module.less'

const Doc: React.FC = () => {
  const [value, setValue] = React.useState<string>(
    '<p style="line-height: 1.75; margin: 0px 0px 8px; font-size: 20px; font-weight: normal; color: rgb(33, 33, 33);"><span><span><strong style="font-weight: 600;">👋 Hello～ </strong></span></span><span style="background-color: rgb(255, 251, 143);"><span><strong style="font-weight: 600;">Welcome To Klein Design!</strong></span></span></p>'
  )

  const handleCreated = (editor: IDomEditor) => {
    editor.setHtml(value)
  }
  const handleChange = (value: string) => {
    setValue(value)
  }

  return (
    <div className={styles.Doc}>
      <KleinEditor
        style={{ height: '100%' }}
        h5Mode={true}
        onCreated={handleCreated}
        onChange={handleChange}
        autoFocus={false}
      />
    </div>
  )
}

export default Doc
