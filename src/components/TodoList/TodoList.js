import React, { Component } from 'react'

import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        'learn react',
        'learn vue'
      ],
      inputValue: ''
    }
    this.headleInputChange = this.headleInputChange.bind(this)
    this.headleClick = this.headleClick.bind(this)
    this.headleDeleteItem = this.headleDeleteItem.bind(this)
  }

  headleClick1() {
    // 此处的this指向button本身
    this.state.list.push()
  }

  headleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  headleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  headleDeleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }

  render() {
    return (
      <div>
        <div>
        {/* <input value={this.state.inputValue} onChange={this.headleInputChange.bind(this)} /> */}
        <input value={this.state.inputValue} onChange={this.headleInputChange} />
        {/* 此处的this指向TodoList */}
        {/* <button onClick={this.headleClick1}>add</button> */}
        {/* 把当前的this绑定到button上 */}
        {/* <button onClick={this.headleClick.bind(this)}>add</button> */}
        <button onClick={this.headleClick}>add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            // return <li key={index} onClick={this.headleDeleteItem.bind(this)}>{item}</li>
            // 父组件向子组件通过属性的形式向子组件传递参数
            // 子组件通过props的方式接收父组件传递过来的参数
            // return <TodoItem index={index} content={item} key={index} handleDelete={this.headleDeleteItem.bind(this)} />
            return <TodoItem index={index} content={item} key={index} handleDelete={this.headleDeleteItem} />
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList
