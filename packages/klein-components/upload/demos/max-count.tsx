import React from 'react';
import { Upload, Button } from '@klein-design/klein-react';

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
      {/* <Upload
        name="multipartFile"
        onChange={handleChange}
        maxCount={2}
      >
        <Button>maxCount: 2</Button>
      </Upload> */}
      <Upload
        style={{ marginTop: 10 }}
        name="multipartFile"
        fileList={files}
        onChange={handleChange}
        maxCount={1}
      >
        <Button>maxCount: 1</Button>
      </Upload>
    </>
  );
};
