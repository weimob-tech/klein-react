import React from 'react';

import AlertMd from '../../../components/alert/index.md'
const req = require.context('../../../components', true,/^\.\/[^_][\w-]+\/index\.md?$/,);
// const { basename } = require("path");

const Alert = () => {
  return <><AlertMd /></>
}

export default Alert;
