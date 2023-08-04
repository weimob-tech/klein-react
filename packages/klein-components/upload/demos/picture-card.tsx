import React from 'react';
import { Upload } from '@klein-design/klein-react';

export default () => {
  const [fileList, setFileList] = React.useState([]);

  const handleChange = (res: any) => {
    console.log();
    setFileList(res.fileList);
  };

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      name="multipartFile"
      onChange={handleChange}
      defaultFileList={[
        {
          uid: '-1',
          name: 'image1.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]}
      tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
     />
  );
};
