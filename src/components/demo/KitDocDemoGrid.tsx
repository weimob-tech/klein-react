import React, { Suspense } from 'react';
import { MarkdownContext } from '@/utils/context';
// import Basic from '../../../components/alert/demos/basic'
// const Basic = 
// const comp = await import(`../../../${filename}`)


interface KitDocDemoProps {
  demo: {
    id: string
  }
}

const KitDocDemoGrid: React.FC<KitDocDemoProps> = (props) => {


  return <div>KitDocDemoGrid</div>
}

export default KitDocDemoGrid