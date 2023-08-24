# 开发指南

## 项目启动

克隆到本地开发:

```bash
$ git clone https://github.com/weimob-tech/klein-react.git
$ cd klein-react
$ npm install
$ npm run site
```

打开浏览器访问 http://127.0.0.1:3000

## 项目结构

```
├── config // webpack 配置
├── packages // monorepo 多包
│   ├── kit-doc // 文档站点脚手架
│   ├── klein-components // klein 组件库源码
│   │   ├── components // rc 目录，此组件库基于 rc-component 开发
│   ├── react-kit // react 脚手架
├── public // 静态资源
├── scripts // node 脚本
├── src // 文档站点源码
├── tests // 单元测试
```

## 提交代码

通过 [创建新的 pull request](https://github.com/weimob-tech/klein-react/pulls) 来提交代码。
