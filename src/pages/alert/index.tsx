import React from 'react';

import AlertMd from '../../../components/alert/index.md'
const req = require.context('../../../components', true,/^\.\/[^_][\w-]+\/index\.md?$/,);
// const { basename } = require("path");

const Alert = () => {
  // let result:any[] = []
  // req.keys().forEach((item:string)=>{
  //   const moduleName = item
  //   const mode= req(item)
  //   result.push(mode.default)
  // })
  // // return result.map(item=>{
  // //   const Item =item
  // //   return <Item/>
  // // })
  
  return <><AlertMd /></>
}

export default Alert;
