import React from 'react';
import { Upload } from '@klein-design/klein-react';

export default () => {
  return (
    <>
      <Upload
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        name="multipartFile"
        tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
        disabled
      />
      <Upload
        style={{ marginTop: 10 }}

        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        name="multipartFile"
        tips="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
        disabled
      />
    </>
  );
};
