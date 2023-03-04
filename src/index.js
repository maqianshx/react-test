import React from 'react'
import ReactDOM from 'react-dom/client'

import './utils/initFn'

// 给rem设置html基准值
import 'lib-flexible'

// 引入路由模式,指定当前项目它所使用的前端路由模式是什么
// BrowserRouter 它就是history模式
// HashRouter hash模式
// 一般会起一个别名，这样在后续如果要更换路由模式的名称，可以只更新此处就可以
import { BrowserRouter as Router } from 'react-router-dom'

// 根组件
import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// StrictMode 它只在开发时有效，在打包后就没有效
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
