
// const proxyUrl = process.env.VUE_APP_BASE_URL2 // 根据环境不同配置不同的域名
const proxyUrl = 'http://47.110.13.171:9003';

const HtmlWebpackPlugin = require("html-webpack-plugin");

const cdn = {
  externals: { // 将排除 import 引入的模块
    vue: 'vue',
    "element-ui": "ELEMENT",
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    iview: 'iview',
    less: 'less'
    // echarts: "echarts"
  },
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js',
    'https://unpkg.com/element-ui/lib/index.js',
    'https://unpkg.com/vue-router/dist/vue-router.js',
    'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js',
    'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
    'http://unpkg.com/view-design/dist/iview.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js'
  ],
  css: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css']
}

module.exports = {
  publicPath: './', // 输出的路径地址跟着 。/ （为任意路径，相对路径）
  outputDir: 'dist', // 输出的文件名
  assetsDir: 'assets', // 输出的静态文件统一放在这个文件夹下
  indexPath: 'index.html', // 输出的静态文件
  // filenameHashing: true, // 控制静态文件 hash
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '后台管理系统',
    }
  },
  lintOnSave: 'error',
  runtimeCompiler: false, // 默认false 为 true 可以在组件中使用 template
  transpileDependencies: [], // (兼容 IE11)babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  productionSourceMap: false, // 为true准确无误的告知什么地方错了
  // crossorigin: 'use-credentials', // 设置 使用CORS的方式加载
  // integrity: true, // <script> 标签上启用 Subresource Integrity (SRI)
  configureWebpack: {
    devtool: false, // 各个环境下能否看到源码
    // dev开发环境推荐：eval-cheap-module-source-map，inline-cheap-module-source-map
    // prod线上环境推荐：（none）不设置，nosources-source-map
    externals: false ? cdn.externals : '' // 忽略第三方依赖包
  }, // 可以写 webpack 的配置
  chainWebpack: (config) => {
    // config.plugin('html').use(HtmlWebpackPlugin).tap(args => {
    //   args.cdn = cdn
    //   // }
    //   return args
    // })
  }, // 链式 webpack 配置
  css: {
    // requireModuleExtension: false,
    // extract: true,
    sourceMap: false, // 准确无误告诉 css 样式在哪里
  },
  devServer: {
    open: true, // 启动项目自动弹出
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://49.234.96.50:8083',
        changeOrigin: true, // 为 true 此时url变为 http://49.234.96.50:8083/api/接口地址，需配合重写路径去除
        pathRewrite: { // 匹配到 /api的 重写
          '^/api': ''
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*' // 任何域都可访问
    }
  },
}