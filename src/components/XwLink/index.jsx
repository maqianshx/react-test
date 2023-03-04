import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'

import { string } from 'prop-types'

class XwLink extends Component {
  render() {
    let { to, tag: Tag, children, history, activeClassName } = this.props

    return (
      <Route
        path={to}
        children={({ match }) => {
          return (
            <Tag
              className={match ? activeClassName : ''}
              onClick={() => {
                history.push(to)
              }}
            >
              {this.props.children}
            </Tag>
          )
        }}
      />
    )
  }
}

// props类型限制
XwLink.propTypes = {
  to: string.isRequired,
  tag: string,
  activeClassName: string
}

// 默认值
XwLink.defaultProps = {
  tag: 'a',
  children: '导航',
  activeClassName: 'active'
}

export default withRouter(XwLink)
