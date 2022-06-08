import React, { Component } from 'react'

import store from "../../redux/store"
import { creatIncrementAction, creatDecrementAction } from "../../redux/count_action"

export default class Count extends Component {


  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }

  increment = () => {
    let value = Number(this.selectNumber.value);

    store.dispatch(creatIncrementAction(value))
  }
  decrement = () => {
    let value = Number(this.selectNumber.value);

    store.dispatch(creatDecrementAction(value))
  }
  incrementIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      let value = Number(this.selectNumber.value);
      store.dispatch(creatIncrementAction(value))
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      let value = Number(this.selectNumber.value);
      store.dispatch(creatIncrementAction(value))
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为 {store.getState()} </h1>
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
