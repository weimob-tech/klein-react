import React from 'react';
import { Upload } from '@klein-design/klein-react';

const { Preset } = Upload;

export default () => {
  const [fileUrl, setFileUrl] = React.useState<string>(
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  );

  const preFileUrl = React.useRef<string>(fileUrl);
  
  const handleChange = (res: any) => {
    const { file } = res;
    console.log('res', res);
    if (file.status === 'error') {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file.originFileObj)
      fileReader.onload = () => {
        setFileUrl(fileReader.result);
      }
      return
    }
    if (file.status === 'done') {
      /* eslint-disable eqeqeq */
      if (file.response.errcode != 0) {
        return;
      }
      const { url } = file.response.data || {};
      setFileUrl(url);
    }
  };

  const handleReset = () => {
    setFileUrl(preFileUrl.current);
  };

  return (
    <Preset
      name="multipartFile"
      onChange={handleChange}
      onReset={handleReset}
      fileUrl={fileUrl}
      actionTips="下载模板"
      tips="在活动首页顶部展示，图片尺寸：750 * 420px"
      showReset
    />
  );
};
