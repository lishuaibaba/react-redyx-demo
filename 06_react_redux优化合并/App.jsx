import React, { Component } from 'react'
// 引入 容器组件
import Count from "./containers/Count"

export default class App extends Component {
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}
