import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, title: '博客标题', summary: '博客摘要', content: '博客内容', create_time: '2019-12-12 12:12:12' },
        { id: 2, title: '博客标题', summary: '博客摘要', content: '博客内容', create_time: '2019-12-12 12:12:12' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>博客列表</h1>
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li id={item.id} key={item.id}>
                  <Link to={{ pathname: 'blog/detail', search: `?id=${item.id}`, state: { mold: item.id } }}>
                    <div>{item.title}</div>
                    <div>{item.summary}</div>
                    <div>{item.create_time}</div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default BlogList
