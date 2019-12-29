import React, { Component } from 'react'

class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '博客标题',
      summary: '博客摘要',
      content: '博客内容',
      create_time: '2019-12-12 12:12:12'
    }
  }
  render() {
    const { title, summary, content, create_time } = this.state
    console.log(this.props)
    return (
      <div>
        <h1>{ title }</h1>
        <div>{ create_time }</div>
        <div>{ summary }</div>
        <div>{ content }</div>
      </div>
    )
  }
}

export default BlogDetail
