import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// 当前此组件,它是Route规则匹配成功后,[直接]渲染出来的组件
// 此组件它会在this.props中携带3个路由对象
// history   用于编程式导航对象
// location  用于路由对象数据获取
// match     用于路由对象数据获取
class Home extends Component {
  goPage = () => {
    // console.log(this.props)
    // 页面跳转
    // this.props.history.push / replace(string | { path: string ,...})
    this.props.history.push('/about')
  }

  render() {
    return (
      <div>
        <h3>电影网站首页</h3>
        <button onClick={this.goPage}>about</button>
        <hr />
        <ul>
          <li>
            <Link to="/detail/1?name=aaa">详情页面1</Link>
          </li>
          <li>
            {/* 
            state隐式传递，只能写对象的方式才可以
            */}
            <Link
              to={{
                pathname: '/detail/2',
                search: 'name=bbb',
                state: { age: 11 }
              }}
            >
              详情页面2
            </Link>
          </li>
          <li
            onClick={() => {
              this.props.history.push({
                pathname: '/detail/3',
                search: 'name=ccc',
                state: { age: 12 }
              })
            }}
          >
            详情页面3
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
