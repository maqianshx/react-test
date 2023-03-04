import React, { Component } from 'react'

// 此组件它是Route规则匹配成功后直接渲染的组件,它的this.props中有路由属性对象
class Detail extends Component {
  render() {
    // 接受动态路由参数 params  => 对象
    // console.log(this.props.match.params)

    // 接受search字符串 => 字符串
    // console.log(this.props.location.search)
    // const search = new URLSearchParams(this.props.location.search)
    // console.log(Object.fromEntries(search.entries()))

    // 给字符串类添加一个方法，这样在后续工作中就可以直接使用
    console.log(this.props.location.search, this.props.location.search.query())

    // 接受state数据 => 对象
    // console.log(this.props.location.state)

    return (
      <div>
        <h3>我是详情页面</h3>
      </div>
    )
  }
}

export default Detail
