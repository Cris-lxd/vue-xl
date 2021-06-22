

module.exports = {
  publicPath: './', // 输出的路径地址跟着
  outputDir: 'lxl_dist', // 输出的文件名
  assetsDir: 'assets', // 输出的静态文件统一放在这个文件夹下
  indexPath: 'index.html', // 输出的静态文件
  // filenameHashing: true, // 控制静态文件 hash
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '刘铁柱',

    }
  },
  lintOnSave: 'error',
  runtimeCompiler: false, // 默认false 为 true 可以在组件中使用 template
  transpileDependencies: [], // babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  productionSourceMap: false, // 为true准确无误的告知什么地方错了
  // crossorigin: 'use-credentials', // 设置 使用CORS的方式加载
  // integrity: true, // <script> 标签上启用 Subresource Integrity (SRI)
  configureWebpack: {}, // 可以写 webpack 的配置
  chainWebpack: (() => {}), // 链式 webpack 配置
  css: {
    // requireModuleExtension: false,
    // extract: true,
    sourceMap: true, // 准确无误告诉 css 样式在哪里
  },
  devServer: {
    open: 'http://localhost:8080', // 启动项目自动弹出
    proxy: 'http://localhost:8083', // 代理
  }
}