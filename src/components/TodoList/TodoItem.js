import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    // this.props.handleDelete(this.props.index)
    const { handleDelete, index } = this.props
    handleDelete(index)
  }
  render() {
    // 子组件要想和父组件进行通信，子组件要调用父组件传递过来的方法
    const { content } = this.props
    return (
      // <li onClick={this.handleDelete.bind(this)}>
      //   {this.props.content}
      // </li>
      <li onClick={this.handleDelete}>
        {content}
      </li>
    )
  }
}

export default TodoItem
