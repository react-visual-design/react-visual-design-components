// more config: https://d.umijs.org/config,
import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'dumi-demo',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  hash: true,
  publicPath: '/react-visual-design-components/',
  base: '/react-visual-design-components/',
  themeConfig: {
    hd: {
      rules: [], // 禁用高清方案
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
      'antd-mobile',
    ],
  ],
})
