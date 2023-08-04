import React, { useState } from 'react';
import { AutoComplete } from '@klein-design/klein-react';

const { Option } = AutoComplete;

export default () => {
  const [result, setResult] = useState<string[]>([]);
  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(
        (domain) => `${value}@${domain}`,
      );
    }
    setResult(res);
  };
  return (
    <AutoComplete
      style={{ width: 232 }}
      onSearch={handleSearch}
      placeholder="请输入内容"
    >
      {result.map((email: string) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};
