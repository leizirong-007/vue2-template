const path = require("path")
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "views": "@/views",
        "components": "@/components",
        "assets": "@/assets"
      }
    }
  },
  publicPath: "./",
  //  构建时的输出目录
  outputDir: "dist",
  //  放置静态资源的目录
  assetsDir: "static",
  //  html 的输出路径
  indexPath: "index.html",
  //文件名哈希
  filenameHashing: true,
  lintOnSave: true,
  //  是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  devServer: {
    // proxy: 'http://localhost:3000',
    proxy: {
      '/api': {  //此行表示凡是开头是/api开头的请求都走代理   
        target: 'http://localhost:3000',  // 后台接口域名
        ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': ''//重写标识路径为空，解决代理请求是前缀不存在的问题
        }
      }
    }
  }
}
