import React from 'react';
import { Upload } from '@klein-design/klein-react';

export default () => {
  const [fileList, setFileList] = React.useState([
    {
      uid: '1',
      name: 'test.png',
      status: 'done',
      showMain: true,
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '2',
      name: 'test2.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '3',
      name: 'test3.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '4',
      name: 'test4.png',
      status: 'error',
      error: {
        errmsg: 'Server Error 500',
      },
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const handleChange = (res: any) => {
    const files = res.fileList?.filter(Boolean);
    const endFileList = files?.map((file: any) => {
      if (file.status === 'uploading') {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file.originFileObj)
        fileReader.onload = () => {
          file.url = fileReader.result;
        }
      } 
      if (file?.response?.data) {
        file.url = file.response.data.url;
      }
      if (file.response && file.response.errcode !== 0) {
        file.status = 'done';
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file.originFileObj)
        fileReader.onload = () => {
          file.url = fileReader.result;
        }
      }
      return file;
    });
    setFileList(endFileList);
  };

  return (
    <>
      <Upload
        listType="picture-card"
        name="multipartFile"
        onChange={handleChange}
        fileList={fileList}
        tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
        preview={false}
      />
    </>
  );
};
