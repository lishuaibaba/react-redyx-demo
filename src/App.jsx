import React, { Component } from 'react'
// 引入 容器组件
import Count from "./containers/Count"
// store 在这里传
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}></Count>
      </div>
    )
  }
}
