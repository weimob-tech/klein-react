// 样式引入
const req = require.context(
  '../packages/klein-components',
  true,
  /^(.*)\/style\/index\.(js|jsx|mjs|ts|tsx)?$/,
);
req.keys().forEach((mod) => {
  req(mod);
});

