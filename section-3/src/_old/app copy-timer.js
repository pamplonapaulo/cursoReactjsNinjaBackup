'use strict'

import React, { Component } from 'react'
import Timer from './timer.js'

class App extends Component {
  constructor () {
    console.log('constructor');
    super()
    this.state = {
      showTimer: true
    }
  }

  render () {
    return (
      <div>
        {this.state.showTimer && <Timer />}

        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>show / hide time</button>
      </div>
    )
  }
}

export default App
