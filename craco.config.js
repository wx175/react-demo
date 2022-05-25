// yarn add -D @craco/craco 安装自定义配置包

const path = require('path')

module.exports = {
  // 配置webpack
  webpack: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}