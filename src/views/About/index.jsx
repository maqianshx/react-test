import React, { Component } from 'react'
import Title from './ui/Title'

class About extends Component {
  render() {
    // console.log('about', this.props)
    return (
      <div>
        <div>我是关于页面</div>
        <hr />
        {/* 子组件不是Route直接匹配渲染的,它但的父组件有,可以props向下传 */}
        {/* 按需要导入,更好的方案 */}
        {/* <Title history={this.props.history} /> */}
        {/* 代码书写上更好的方案 */}
        <Title {...this.props} />
      </div>
    )
  }
}

export default About
