/**
 * title: 组合模式
 * desc: 允许不同组件组合。
 */
import React, { useState } from 'react';
import { Select, Input, Button, Icon, Grid } from '@klein-design/klein-react';
import './combination.less';

const { Option } = Select;
const { SearchLine } = Icon;
const { Group } = Input;

interface CityProp {
  Zhejiang: string[];
  Jiangsu: string[];
}
const provinceData: string[] = ['Zhejiang', 'Jiangsu'];
const cityData: CityProp = {
  Zhejiang: ['杭州', '宁波', '温州'],
  Jiangsu: ['南京', '苏州', '镇江'],
};
export default () => {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value: any) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value: any) => {
    setSecondCity(value);
  };

  return (
    <>
      <Group compact style={{ width: 350 }}>
        <Select defaultValue="1">
          <Option value="1">全部渠道</Option>
        </Select>
        <Input wSize='sm' placeholder="请输入" />
      </Group>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 350 }}
        onChange={handleProvinceChange}
      >
        {provinceData.map((province) => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select
        placeholder="请选择"
        style={{ width: 350 }}
        value={secondCity}
        onChange={onSecondCityChange}
      >
        {cities.map((city: any) => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};
