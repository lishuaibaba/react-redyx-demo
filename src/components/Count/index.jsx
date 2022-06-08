import React, { Component } from 'react'

export default class Count extends Component {


  increment = () => {
    let value = Number(this.selectNumber.value);
    this.props.addCount(value * 1);
  }
  decrement = () => {
    let value = Number(this.selectNumber.value);
    this.props.removeCount(value * 1);
  }
  incrementIfOdd = () => {
    let value = Number(this.selectNumber.value);
    if (this.props.count % 2 != 0) this.props.addCount(value * 1)
  }
  incrementAsync = () => {
    let value = Number(this.selectNumber.value);
    this.props.addAsyncCount(value * 1);
  }

  render() {
    return (
      <div>
        <h1>当前求和为 : {this.props.count} </h1>
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
