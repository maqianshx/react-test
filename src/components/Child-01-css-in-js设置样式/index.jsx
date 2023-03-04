import React, { Component } from 'react'
import { ChildTitleStyle, Btn, SuccessBtn, Btn2 } from './style'

class Child extends Component {
  render() {
    return (
      <div>
        <div>我是一个标题</div>
        {/* 编译为一个div，并且它有样式为 css */}
        <ChildTitleStyle>
          哈哈哈
          <div className="title">我是一个标题</div>
          <div className="main">我是一个正文</div>
        </ChildTitleStyle>
        <hr />
        <Btn>我是一个按钮</Btn>
        <SuccessBtn>我是一个按钮</SuccessBtn>
        <hr />

        <Btn2 color="blue" height={30}>我是一个按钮</Btn2>
      </div>
    )
  }
}

export default Child
