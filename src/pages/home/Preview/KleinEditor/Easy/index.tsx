import React from 'react'
import { Button, Input, Form } from '@klein-design/klein-react'
import KleinEditor from '@klein-design/klein-editor'
import { IDomEditor } from '@klein-design/klein-editor'
import '@/components/editor/klein-editor/dist/css/style.css'
import styles from './index.module.less'

const Easy: React.FC = () => {
  const [value, setValue] = React.useState<string>('')

  const editorRef = React.useRef<IDomEditor | null>(null)

  const handleCreated = (editor: IDomEditor) => {
    editorRef.current = editor
    editor.setHtml(value)
  }

  const handleChange = (value: string) => {
    setValue(value)
  }

  const handleInsert = (key: string) => {
    let content = ''
    switch (key) {
      case 'goods-0':
        content = '<span>商品</span>'
        break
      case 'goods-1':
        content = '<span>优惠套装</span>'
        break
      case 'rect-0':
        content = '<span>矩形素材</span>'
        break
      default:
        break
    }
  }

  const handleEvent = (editor: IDomEditor, params: any) => {
    const { menuKey, keys } = params
    switch (menuKey) {
      case 'insertMenu':
        handleInsert(keys)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.Easy}>
      <div className={styles.left}>
        <img
          src='https://image-c.weimobwmc.com/sass-admin/e530646c810d4f3a8fb6f040231d3b6a.png'
          alt=''
        />
      </div>

      <div className={styles.right}>
        <div className={styles.title}>📝 New Message</div>

        <Form layout='vertical' >
          <Form.Item label='Email' name='email'>
            <Input placeholder='Enter' />
          </Form.Item>

          <Form.Item label='Message' name='editor'>
            <KleinEditor
              placeholder='Write a text'
              style={{
                height: `calc(100 / 1010 * 100vh)`,
              }}
              onChange={handleChange}
              onCreated={handleCreated}
              onEvent={handleEvent}
              autoFocus={false}
              toolbarConfig={{
                toolbarKeys: [
                  'fontSize',
                  'bold',
                  'italic',
                  'lineHeight',
                  'marginTop',
                  'marginBottom',
                ],
              }}
            />
          </Form.Item>

          <Form.Item className={styles.btnWrap}>
            <Button className={styles.btn} type='primary' size='large'>
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Easy
