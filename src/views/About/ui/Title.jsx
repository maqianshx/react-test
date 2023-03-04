import React, { Component } from 'react'

class Title extends Component {
  goPage = () => {
    // console.log('title', this.props)
    if (confirm('你确要去home页面吗')) {
      this.props.history.push('/home')
    }
  }

  render() {
    return <h3 onClick={this.goPage}>Home页面的标题</h3>
  }
}

export default Title
