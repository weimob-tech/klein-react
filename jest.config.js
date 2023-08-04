const path = require('path');

// const pkgList = readdirSync(join(__dirname, './packages')).filter((pkg) => pkg.charAt(0) !== '.');

// const moduleNameMapper = {};

// pkgList.forEach((shortName) => {
//   const name = `@ant-design/pro-${shortName}`;
//   moduleNameMapper[name] = join(__dirname, `./packages/${shortName}/src`);
// });

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/demos/**',
    '!src/**/style/**',
    '!src/components/**',
  ],
  moduleNameMapper: {
    klein: path.join(__dirname, './src'),
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/fixtures/', // 默认值
    '/src/components/', // 忽略rc组件tests
  ],
  testURL: 'http://localhost',
  verbose: true,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  setupFilesAfterEnv: ['./tests/setup.ts'],
};
