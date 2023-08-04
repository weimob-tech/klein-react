import React from 'react';
import Upload from './upload';
import type { UploadProps } from './interface';

const Dragger = React.forwardRef<unknown, UploadProps>((props, ref) => {
  return <Upload ref={ref} listType="drag" {...props} />;
});

export default Dragger;
