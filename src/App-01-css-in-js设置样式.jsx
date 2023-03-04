import React, { Component } from 'react'
import Child from './components/Child-01-css-in-js设置样式'

// es6字符串模块
/* let name = 'zhangsan'
let age = 20
function fn(...args) {
  console.log(args)
}
fn`a${name}cccccccccccccccccccccccccccc${age}cc` */

class App extends Component {
  render() {
    return (
      <>
        <Child />
      </>
    )
  }
}

export default App
