const req = require.context(
  './src',
  true,
  /^\.\/[^_][\w-]+\/style\/index\.(js|jsx|mjs|ts|tsx)?$/,
);
req.keys().forEach((mod) => {
  req(mod);
});
module.exports = require('./src/index');
