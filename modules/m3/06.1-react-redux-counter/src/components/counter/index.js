'use strict'

import React, { PureComponent } from 'react'
import Counter from './counter'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }
  return state
}

const store = createStore(counter)

class CounterContainer extends PureComponent {
  constructor () {
    super()

    this.increment = () => {
      store.dispatch({ type: 'INCREMENT' })
    }

    this.decrement = () => {
      store.dispatch({ type: 'DECREMENT' })
    }
  }

  componentDidMount () {
    store.subscribe(() => this.forceUpdate())
  }

  render () {
    return (
      <Counter
        counter={store.getState()}
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
}

export default CounterContainer
