// 此文件一定要在src目录下面
// 此文件它是脚手架在运行时去调用的文件，运行它是在nodejs环境，模块化commonjs
// 在此文件是设置网络请求代理，还需要安装一个代理插件
// 此文件一但被修改，则一定要重启项目
// npm i -D http-proxy-middleware
// 当前的项目在开发时运行的环境为nodejs的express环境
// const { createProxyMiddleware: proxy } = require('http-proxy-middleware')
const { createProxyMiddleware: http } = require('http-proxy-middleware')
const path = require('path')
const fs = require('fs')

// mock文件
// const filmMockFn = require('../mock/film')
// const userMockFn = require('../mock/user')

// 得到mock的绝对路径
const mockRootPath = path.resolve('./mock')
// 读取指定目录下面的文件
const files = fs.readdirSync(mockRootPath)

// 映射得到mock目录下面所有的文件模块
const mocks = files.map(file => {
  const fn = require(path.join(mockRootPath, file))
  return fn
})


// app它就是一个express中的Application对象
// 可以通过express来mock接口数据
module.exports = app => {

  // mock最好写在代理之前,路由规则从上向下执行，use它又是模糊匹配，所以写在上面可能会出现mock的接口访问不到。
  // app.get('/api/films', (req, res) => {
  //   res.send({
  //     code: 0,
  //     msg: 'ok',
  //     data: [
  //       { id: 1, name: 'aaa' },
  //       { id: 2, name: 'bbb' },
  //       { id: 3, name: 'ccc' },
  //     ]
  //   })
  // })

  // filmMockFn(app)
  // userMockFn(app)
  mocks.forEach(fn => fn(app))

  app.use('/api', http({
    target: 'https://api.iynn.cn/film',
    changeOrigin: true,
    pathRewrite: {
      // '^/api': ''
    }
  }))
}