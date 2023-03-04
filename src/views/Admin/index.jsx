import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import './style.scss'

import User from '../User'
import Welcome from '../Welcome'

class Admin extends Component {
  render() {
    // 可以通过props得以父路由path地址，然后动态来设置
    const parentRoute = this.props.match.path

    return (
      <div className="admin-box">
        <ul>
          <li>
            <Link to={`${parentRoute}/index`}>后台首页</Link>
          </li>
          <li>
            <Link to={`${parentRoute}/user`}>用户管理</Link>
          </li>
        </ul>
        <div>
          <Switch>
            {/* 它需要写上父路由地址 */}
            <Route path={`${parentRoute}/user`} component={User} />
            <Route path={`${parentRoute}/index`} component={Welcome} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Admin
