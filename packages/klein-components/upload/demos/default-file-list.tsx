import React from 'react';
import { Upload } from '@klein-design/klein-react';

export default () => {
  const handleChange = (res: any) => {
    console.log('res', res);
  };

  return (
    <>
      <Upload
        name="multipartFile"
        onChange={handleChange}
        defaultFileList={[
          {
            uid: '1',
            name: 'test.png',
            status: 'done',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/xxx.png',
          },
          {
            uid: '4',
            name: 'test.png',
            status: 'uploading',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/xxx.png',
          },
          {
            uid: '2',
            name: 'test2.png',
            status: 'done',
            url: 'http://www.baidu.com/yyy.png',
          },
          {
            uid: '3',
            name: 'test3.png',
            status: 'error',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/zzz.png',
          },
        ]}
      />
    </>
  );
};
