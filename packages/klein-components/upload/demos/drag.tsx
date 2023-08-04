import React from 'react';
import { Upload } from '@klein-design/klein-react';

const { Dragger } = Upload;

export default () => {

  const [fileList, setFileList] = React.useState([]);

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
      <Dragger
        fileList={fileList}
        listType="drag"
        name="multipartFile"
        onChange={handleChange}
      />
      <Dragger
        fileList={fileList}
        style={{ marginTop: 10 }}
        listType="drag"
        tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
        name="multipartFile"
        onChange={handleChange}
      />
    </>
  );
};
