import React, { Component } from 'react'

class App extends Component {
  render() {
    // jsx语法
    return <div>{ this.props.children }</div>
  }
}

export default App
