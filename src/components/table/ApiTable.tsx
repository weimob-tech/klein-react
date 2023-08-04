import React from 'react'
import './index.less'

interface ApiTableProps {
  children?: React.ReactNode
}

const ApiTable: React.FC<ApiTableProps> = (props) => {
  const { children } = props

  return <table className='klein-apitable'>{children}</table>
}

export default ApiTable
