import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
        { path: '/', title: '首页' },
        { path: '/game', title: '游戏' },
        { path: '/todolist', title: 'Todo列表' },
        { path: '/blog', title: '博客' },
        { path: { pathname: '/404', search: '?name=homename', state: { mold: 'add' }, aa: 'ddd' }, title: '404' }
      ]
    }
  }
  render() {
    // jsx语法
    return (
      <div className="App">
        <ul>
          {
            this.state.routes.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        { this.props.children }
      </div>
    )
  }
}

export default App
