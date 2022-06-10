import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count: 0
  }

  increment = () => {
    let newCount = Number(this.selectNumber.value) + Number(this.state.count);
    this.setState({
      count: newCount
    })
  }
  decrement = () => {
    let newCount = Number(this.state.count) - Number(this.selectNumber.value);
    this.setState({
      count: newCount
    })
  }
  incrementIfOdd = () => {
    if (this.state.count % 2 != 0) {
      this.setState({
        count: this.state.count + Number(this.selectNumber.value)
      })
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + Number(this.selectNumber.value)
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为 {this.state.count} </h1>
        <select onChange={this.selestChange} ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        &nbsp;
        <button onClick={this.increment}>+</button>
        &nbsp;
        <button onClick={this.decrement}>-</button>
        &nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
