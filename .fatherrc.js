export default {
  esm: { type: 'babel' },
  cjs: { type: 'babel' },
  lessInBabelMode: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
}
