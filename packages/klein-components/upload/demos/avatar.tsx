import React from 'react';
import { Upload, message } from '@klein-design/klein-react';

export default () => {
  const [fileUrl, setCurFileUrl] = React.useState<string | null | ArrayBuffer>();

  const handleChange = (res: any) => {
    const { file } = res;
    console.log('res', res);
    if (file.status === 'error') {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file.originFileObj)
      fileReader.onload = () => {
        setCurFileUrl(fileReader.result);
      }
      return
    }
    if (file.status === 'done') {
      /* eslint-disable eqeqeq */
      if (file.response.errcode != 0) {
        message.error('上传失败');
        return;
      }
      const { url } = file.response.data || {};
      setCurFileUrl(url);
      message.success('上传成功');
    }
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <>
      <Upload
        listType="picture-card"
        action="#"
        name="multipartFile"
        showUploadList={false}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
      >
        {fileUrl && (
          <img width="80" height="80" src={fileUrl as string} alt="loading..." />
        )}
      </Upload>
    </>
  );
};
