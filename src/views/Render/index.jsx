import React, { Component } from 'react'

class Render extends Component {
  // 只会在挂载时执行，如果要是重复执行，表示是新的
  componentDidMount() {
    console.log('componentDidMount',this.props)
  }

  render() {
    // console.log('render',this.props)
    return (
      <div>
        <h3>渲染方式</h3>
      </div>
    )
  }
}

export default Render
