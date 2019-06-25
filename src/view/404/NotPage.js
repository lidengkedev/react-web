import React, { Component, Fragment } from 'react'

class NotPage extends Component {
  constructor(props) {
    super(props)

    // 数据响应(绑定)
    this.state = {}
  }

  // 静态资源
  static getDerviedStateFromProps() {}

  // 挂载
  componentDidMount() {
    console.log(this.props)
  }

  shouldComponentUpdate() {}

  getSnapshotBeforeUpdate() {}

  // 更新
  componentDidUpdate() {}

  // 卸载
  componentWillUnmount() {}

  componentDidCatch() {}
  
  render() {
    return (
      <Fragment>
        <h1>404 找不到当前页面 ！</h1>
        <p>router.search: { this.props.location.search }</p>
        <p>router.pathname: { this.props.location.pathname }</p>
        <p>state: { this.props.location.state.mold }</p>
        <button onClick={() => this.props.history.goBack()}>返回上一页</button>
      </Fragment>
    )
  }
}

export default NotPage
