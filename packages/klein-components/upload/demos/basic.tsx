/**
 * title: 基础示例
 * description: 用户点击按钮弹出文件选择框。
 */
import React from 'react';
import { Upload, message } from '@klein-design/klein-react';

export default () => {

  const [files, setFiles] = React.useState([])
  
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
    setFiles(endFileList);
  };

  return (
    <>
      <Upload
        fileList={files}
        name="multipartFile"
        onChange={handleChange}
        tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
      />
    </>
  );
};
