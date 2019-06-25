import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <h1>欢迎来到首页</h1>
        <ul>
          <li><Link to="/game">跳转到game</Link></li>
          <li><Link to="/todolist">跳转到todolist</Link></li>
          <li><Link to={{ pathname: '/404', search: '?name=homename', state: { mold: 'add' }, aa: 'ddd' }}>跳转到404</Link></li>
        </ul>
      </Fragment>
    )
  }
}

export default Dashboard
