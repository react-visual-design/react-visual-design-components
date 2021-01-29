// more config: https://d.umijs.org/config,
import { defineConfig } from 'dumi'

export default defineConfig({
  title: '组件列表',
  favicon: 'https://en.gravatar.com/avatar/b7663bf27f4e2e54c5cec2fa12b8cfc0',
  logo: 'https://en.gravatar.com/avatar/b7663bf27f4e2e54c5cec2fa12b8cfc0',
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
