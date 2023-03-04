import React, { Component } from 'react'
// 定义路由规则
// 什么规则匹配成功后，要渲染对应的组件
// Route定义路由规则和对应匹配的组件
// Switch 只匹配一次
// Link, NavLink 声明式导航,编译为html标签为a标签
// NavLink它会有激活样式,当前url地址和to路径一致时,则为激活
// 默认的激活样式名称为 activeClassName='active' 可以去修改activeClassName='自定义名称'
// 用NavLink组件来实现点击高亮
// Redirect 重定向
// withRouter 高阶组件，增强当前绑定组件，让它不是路由匹配组件有路由对象
import { Route, Switch, Link, NavLink, Redirect, withRouter } from 'react-router-dom'

// 引入路由匹配渲染的组件
import Home from '@/views/Home'
import About from './views/About'
import Detail from './views/Detail'
import Admin from './views/Admin'
import Render from './views/Render'
import Login from './views/Login'

import XwLink from './components/XwLink'

import './style.scss'

class App extends Component {
  state = {
    num: 100
  }

  render() {
    console.log('app', this.props)

    return (
      <>
        <button
          onClick={() => {
            this.setState(state => ({
              num: state.num + 1
            }))
          }}
        >
          ++{this.state.num}++
        </button>
        <XwLink to="/home" tag="h3">
          去首页
        </XwLink>
        <div className='title'>我是一个标题App</div>
        {/* <div>
          <Link to="/home">首页</Link> --
          <Link to="/about">关于</Link>
        </div> */}
        {/* <div>
          <NavLink exact activeClassName="aaa" to="/home">
            首页
          </NavLink>{' '}
          --
          <NavLink activeClassName="aaa" to="/about">
            关于
          </NavLink>
        </div>
        <hr /> */}
        {/* 它默认为模糊匹配，可以设置严格匹配exact */}
        {/* 它默认匹配规则为从上向下匹配，匹配成功后，会继续向下匹配直到没有规则可以去匹配为止 */}
        {/* exact严格匹配 */}
        {/* <Route exact path="/home" component={Home} /> */}
        {/* 如果你用了Switch组件,在你没有手动去指定严格匹配时,建议把精确写在上层 */}
        <Switch>
          {/* <Route path="/home/about" component={About} /> */}
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          {/* 
            定义动态路由参数 /:名称
            可以定义多个 /:名称/:名称 
            动态路由参数方式，一定要先定义好路由规则，才能使用
          */}
          <Route exact path="/detail/:id" component={Detail} />
          {/* 
            定义一个父路由 
            如果它是一个有子路由父路由，则一定不能设置为严格匹配规则 exact
          */}
          <Route path="/admin" component={Admin} />

          {/* 
            component 渲染方式         
            ### 类  --  使用较多
            1.它会自动把路由对象映射到渲染的组件中的props上
            2.此方案来不能进行2次验证，如用户登录后才能访问，它就不可以去写判断
            3.如果当前容器中有数据改变，它对应渲染的组件不能销毁再创建
          */}
          {/* <Route path="/r" component={Render} /> */}
          {/* 
            ### 回调函数
            1.路由匹配渲染的组件不会自动把路由对象映射到props属性上，需要你手动绑定
            2.此方案可以在回调函数中来进行2次验证，来决定最终是否渲染组件，如只有登录才能访问
            3.如果当前容器中有数据改变，它会对于路由渲染的组件进行销毁并重新创建，性能较低
          */}
          {/* <Route
            path="/r"
            component={route => {
              if (true) {
                return <Render {...route} />
              }
              // return <div>没有登录</div>
              return <Redirect to="/login" />
            }}
          /> */}

          {/* 
            render渲染 -- 2次验证，写法
            它有components类的性能，而有component回调函数方式的2次验证
          */}
          {/* <Route
            path="/r"
            render={route => {
              if (true) {
                return <Render {...route} />
              }
              // return <div>没有登录</div>
              return <Redirect to="/login" />
            }}
          /> */}

          <Route path="/login" component={Login} />
        </Switch>

        {/* ### children */}
        <Route
          path="/r"
          // 属性中的值，元素,它不会自动把路由对象数据映射到this.props属性中
          // 此方案它会去匹配path路径
          // children={<Render />}
          // 回调函数 -- 不要写在Switch里面，它的显示与否和path匹配无关
          // 一般用它来，做一按钮和路由地址的高亮
          // 如果url地址和path匹配，则route.match它是一个对象，否则为null
          children={route => {
            console.log(route.match)
            // return <Render {...route} />
            return <div style={{ color: route.match ? 'red' : 'black' }}>首页</div>
          }}
        />
      </>
    )
  }
}

export default withRouter(App)
