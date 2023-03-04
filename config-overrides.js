// 增量对于当前的react工程中的webpack进行配置
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const rewirePostcss = require('react-app-rewire-postcss')
const px2rem = require('postcss-px2rem')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        //关键:设置px2rem
        px2rem({
          // 基准 当前页面以375px 37.5px 10rem
          // px转换只对class样式，不能对于style中的单位进行转换
          remUnit: 37.5,
          exclude: /node-modules/
        })
      ]
    })
    return config
  }
)
